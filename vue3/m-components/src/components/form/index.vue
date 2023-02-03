<template>
    <el-form
        ref="form"
        :model="model"
        :rules="rules"
        :validate-on-rule-change="false"
        v-bind="$attrs"
    >
        <template v-for="(item, index) in options" :key="index">
            <el-form-item
                v-if="item.children && item.children.length"
                :label="item.label"
                :prop="item.prop"
            >
                <component 
                    :is="`el-${item.type}`"
                    v-model="model[item.prop!]"
                    :placeholder="item.placeholder"
                    v-bind="item.attrs"
                >
                    <component 
                        v-for="(item1, index1) in item.children"
                        :key="index1"
                        :is="`el-${item1.type}`"
                        :label="item1.label"
                        :value="item1.value"
                        v-bind="item.attrs"
                    >  
                    </component>
                </component>
            </el-form-item>
            <el-form-item
                v-else
                :label="item.label"
                :prop="item.prop"
            >
                <el-upload 
                    v-if="item.type === 'upload'"
                    v-bind="item.uploadAttrs"
                    :on-preview="onPreview"
                    :on-remove="onRemove"
                    :on-success="onSuccess"
                    :on-error="onError"
                    :on-progress="onProgress"
                    :on-change="onChange"
                    :on-exceed="onExceed"
                    :before-upload="beforeUpload"
                    :before-remove="beforeRemove"
                    :http-request="httpRequest"
                >
                    <slot name="uploadArea"></slot>
                    <slot name="uploadTip"></slot>
                </el-upload>
                <div v-else-if="item.type === 'editor'" id="editor"></div>
                <component 
                    v-else
                    :is="`el-${item.type}`"
                    v-model="model[item.prop!]"
                    :placeholder="item.placeholder"
                    v-bind="item.attrs"
                ></component>
            </el-form-item>
        </template>
        <el-form-item>
            <slot name="action" :form="form" :model="model"></slot>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import { PropType, ref, onMounted, nextTick } from 'vue'
import { FormOptions, FormInstance } from './types/types'
import cloneDeep from 'lodash/cloneDeep'
import E from 'wangeditor'

const props = defineProps({
    options: {
        type: Array as PropType<FormOptions[]>,
        required: true
    },
    httpRequest: {
        type: Function,
    }
})


const emits = defineEmits(['on-preview', 'on-remove', 'on-success', 'on-error', 'on-progress', 'on-change', 'on-exceed', 'before-upload', 'before-remove'])

const model = ref<any>({})
const rules = ref<any>({})
const form = ref<FormInstance>()
const edit = ref()

const initForm = () => {
    props.options.forEach((item: FormOptions) => {
        model.value[item.prop!] = item.value
        rules.value[item.prop!] = item.rules
        if (item.type === 'editor') {
            nextTick(() => {
                const editor = new E('#editor')
                editor.config.placeholder = item.placeholder || '请输入'
                editor.create()
                editor.txt.html(item.value)
                editor.config.onchange = (newHtml: string) => {
                    model.value[item.prop!] = newHtml
                }
                edit.value = editor
            })
        }
    })
}

const onPreview = (file: File) => {
    emits('on-preview', file)
}

const onRemove = (file: File, fileList: FileList) => {
    emits('on-remove', {file, fileList})
}

const onSuccess = (response: any, file: File, fileList: FileList) => {
    const uploadItem = props.options.find(item => item.type === 'upload')!
    model.value[uploadItem.prop!] = {response, file, fileList}
    emits('on-success', {response, file, fileList})
}

const onError = (err: any, file: File, fileList: FileList) => {
    emits('on-error', {err, file, fileList})
}

const onProgress = (event: any, file: File, fileList: FileList) => {
    emits('on-progress', {event, file, fileList})
}

const onChange = (file: File, fileList: FileList) => {
    emits('on-change', {file, fileList})
}

const onExceed = (files: File[], uploadFiles: FileList) => {
    emits('on-exceed', {files, uploadFiles})
}

const beforeUpload = (file: File) => {
    emits('before-upload', file)
}

const beforeRemove = (file: File, fileList: FileList) => {
    emits('before-remove', {file, fileList})
}

const validate = () => {
    return form.value!.validate
}

const resetFields = () => {
    form.value!.resetFields()
    const editorItem = props.options.find(item => item.type === 'editor')
    if (editorItem) {
        edit.value.txt.html(editorItem.value)
    }
}

const getFormData = () => {
    return model.value
}

defineExpose({
    resetFields,
    validate,
    getFormData
})

onMounted(() => {
    initForm()
})
</script>

<style lang="scss" scoped>

</style>