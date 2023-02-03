<template>
    <m-form 
        ref="form"
        :options="options" 
        label-width="100px"
        @on-preview="handlePreview"
        @on-remove="handleRemove"
        @before-remove="beforeRemove"
        @on-exceed="handleExceed"
    >
        <template #uploadArea>
            <el-button type="primary">Click to upload</el-button>
        </template>
        <template #uploadTip>
            <div style="color:#ccc;font-size:12px;">
                jpg/png files with a size less than 500KB.
            </div>
        </template>
        <template #action="scope">
            <el-button type="primary" @click="submitForm(scope)">
                Create
            </el-button>
            <el-button @click="resetForm">Reset</el-button>
        </template>
    </m-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessageBox, ElMessage, FormInstance } from 'element-plus';
import { FormOptions } from '../../components/form/types/types'

interface Scope {
    form: FormInstance,
    model: any,
}

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

const form = ref()

const handleRemove = (val: any) => {
  console.log(val)
}

const handlePreview = (uploadFile: any) => {
  console.log(uploadFile)
}

const beforeRemove = (val: any) => {
    return ElMessageBox.confirm(
        `Cancel the transfert of ${val.file.name} ?`
    ).then(
        () => true,
        () => false
    )
}

const handleExceed = (val: any) => {
  ElMessage.warning(
    `The limit is 3, you selected ${val.files.length} files this time, add up to ${
        val.files.length + val.uploadFiles.length
    } totally`
  )
}

const submitForm = (scope: Scope) => {
    console.log('scope', scope.model)
    scope.form.validate((valid) => {
        if (valid) {
            
        }
    })
}

const resetForm = () => {
    form.value.resetFields()
}
</script>

<style lang="scss" scoped>

</style>
