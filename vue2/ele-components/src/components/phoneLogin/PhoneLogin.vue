<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
    <el-form-item prop="phone">
        <el-input placeholder="请输入手机号" v-model="ruleForm.phone">
            <i slot="prefix" class="el-icon-phone"></i>
        </el-input>
    </el-form-item>
    <el-form-item prop="code">
        <el-row :gutter="18">
            <el-col :span="18">
                <el-input placeholder="请输入验证码" v-model="ruleForm.code">
                    <i slot="prefix" class="el-icon-tickets"></i>
                </el-input>
            </el-col>
            <el-col :span="6">
                <el-button @click="sendCode" :disabled="disabled">{{btnText}}</el-button>
            </el-col>
        </el-row>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" style="width:100%;" @click="login">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
    props: {
        ruleForm: {
            type: Object,
            required: true,
        },
        countDown: {
            type: Number,
            default: 60
        },
    },

    data() {
        let checkPhone = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('手机号不能为空'))
            } else {
                let reg = /^1[3|4|5|7|8]\d{9}$/
                if (reg.test(value)) {
                    callback()
                } else {
                    return callback(new Error('请输入正确的手机号'))
                }
            }
        }
        return {
            rules: {
                phone: [
                    {validator: checkPhone, trigger: 'change'}
                ],
                code: [
                    {required: true, message: '验证码不能为空', trigger: 'blur'},
                ]
            },
            disabled: false,
            btnText: '发送验证码',
            time: 0,
        }
    },

    mounted() {
        this.time = this.countDown
    },

    methods: {
        sendCode() {
            this.$refs.ruleForm.validateField('phone', err => {
                if(err) {
                    this.$message.error(err)
                } else {
                    this.disabled = true
                    let timer = setInterval(() => {
                        this.time--
                        this.btnText = `${this.time}s后重新发送`
                        if (this.time === 0) {
                            this.disabled = false
                            this.btnText = '重新发送'
                            this.time = this.countDown
                            clearInterval(timer)
                        }
                    }, 1000)
                    this.$emit('send')
                }
            })
        },

        login() {
            this.$refs.ruleForm.validate(valid => {
                if (valid) {
                    this.$emit('submit')
                } else {
                    this.$emit('errHandle')
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
</style>