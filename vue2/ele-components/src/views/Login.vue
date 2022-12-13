<template>
  <div class="login">
    <div class='account'>
      <accountLogin 
        :ruleForm="ruleForm" 
        :rules="rules"
        @submit="submit"
        @errHandle="errHandle"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          { min: 2, max: 6, message: '用户名在2 - 6位', trigger: 'blur'},
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 6, max: 15, message: '密码在6 - 15位', trigger: 'blur'},
        ],
      },
    }
  },
  watch: {},
  computed: {},
  mounted() {},
  methods: {
    submit() {
      this.$message.success('提交成功')
    },

    errHandle() {
      this.$message.error('请检查输入项')
    },
  },
};
</script>
<style lang="scss" scoped>
.login {
  margin: 30px;
}
.account {
  width: 500px;
}
</style>