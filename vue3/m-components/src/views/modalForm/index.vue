<template>
    <el-button type="primary" @click="open">open</el-button>
    <modal-form 
        v-model:visible="visible"
        title="编辑用户"
        width="50%"
        :options="options"
    >
        <template #uploadArea>
            <el-button type="primary">Click to upload</el-button>
        </template>
        <template #uploadTip>
            <div style="color:#ccc;font-size:12px;">
                jpg/png files with a size less than 500KB.
            </div>
        </template>
        <template #footer="{form}">
            <el-button @click="cancel(form)">Cancel</el-button>
            <el-button type="primary" @click="confirm(form)">Confirm</el-button>
        </template>
    </modal-form>
</template>

<script lang="ts" setup>
import { FormInstance } from 'element-plus';
import { ref } from 'vue'
import { FormOptions } from '../../components/form/types/types';

const options:FormOptions[] = [
    {
        type: 'input',
        value: '',
        label: '用户名',
        prop: 'username',
        placeholder: '请输入用户名',
        rules: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 2, max: 6, message: '用户名在2~6位之间', trigger: 'blur'},
        ],
        attrs: {
            clearable: true,
        }
    },
    {
        type: 'input',
        value: '',
        label: '密码',
        prop: 'password',
        placeholder: '请输入密码',
        rules: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 6, max: 15, message: '密码在6~15位之间', trigger: 'blur'},
        ],
        attrs: {
            showPassword: true,
            clearable: true,
        }
    },
    {
        type: 'select',
        value: '',
        placeholder: '请选择职位',
        prop: 'role',
        label: '职位',
        rules: [
            {required: true, message: '请选择职位', trigger: 'change'},
        ],
        children: [
            {
                type: 'option',
                value: '1',
                label: '经理'
            },
            {
                type: 'option',
                value: '2',
                label: '主管'
            },
            {
                type: 'option',
                value: '3',
                label: '员工'
            },
        ],
        attrs: {
            clearable: true,
            style: {
                width: '100%'
            }
        }
    },
    {
        type: 'checkbox-group',
        value: [],
        prop: 'like',
        label: '爱好',
        children: [
            {
                type: 'checkbox',
                value: '1',
                label: '足球'
            },
            {
                type: 'checkbox',
                value: '2',
                label: '篮球'
            },
            {
                type: 'checkbox',
                value: '3',
                label: '羽毛球'
            },
        ],
    },
    {
        type: 'radio-group',
        value: '',
        prop: 'gender',
        label: '性别',
        children: [
            {
                type: 'radio',
                value: '1',
                label: '男'
            },
            {
                type: 'radio',
                value: '2',
                label: '女'
            },
        ],
    },
    {
        type: 'upload',
        label: '上传',
        value: '',
        prop: 'pic',
        uploadAttrs: {
            action: 'https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15',
            multiple: true,
            limit: 3,
        },
        rules: [
            {required: true, message: '请上传', trigger: 'blur'},
        ],
    },
    {
        type: 'editor',
        value: '123',
        prop: 'desc',
        label: '描述',
        placeholder: '请输入描述',
        rules: [
            {required: true, message: '请输入描述', trigger: 'blur'},
        ],
    },
]
const visible = ref<boolean>(false)

const open = () => {
    visible.value = true
}

const cancel = (form: FormInstance) => {

}

const confirm = (form: any) => {
    const validate = form.validate()
    const model = form.getFormData()
    validate(valid => {
        console.log(valid)
        if (valid) {

        }
    })
}
</script>

<style lang="scss" scoped>

</style>
