<template>
  <div class="wrapper">
    <img src="http://www.dell-lee.com/imgs/vue3/user.png" alt="">
    <div class="wrapper__input">
      <input type="text" placeholder="请输入手机号" v-model.trim="loginForm.username">
    </div>
    <div class="wrapper__input">
      <input type="password" placeholder="请输入密码" v-model.trim="loginForm.password">
    </div>
    <div class="login-button" @click="handleLogin">登录</div>
    <div class="login-link" @click="handleRegister">立即注册</div>
  </div>
  <Toast v-if="toastData.showToast" :toastMsg="toastData.toastMessage" />
</template>

<script>
import { useRouter } from 'vue-router'
import { post } from '@/utils/request'
import { reactive } from 'vue'
import Toast, { useToastEffect } from '@/components/Toast.vue'

const userLoginEffect = (showToast) => {
  const loginForm = reactive({
    username: '',
    password: ''
  })
  const router = useRouter()

  const handleLogin = async () => {
    try {
      const result = await post('/api/user/login', {
        username: loginForm.username,
        password: loginForm.password
      })

      console.log(result)

      if (result?.errno === 0) {
        localStorage.isLogin = true
        router.push({ name: 'Home' })
      } else {
        console.log('请求失败')
        showToast('请求失败1')
      }
    } catch (e) {
      console.log('请求失败', e)
      showToast('请求失败2')
    }
  }

  return {
    loginForm,
    handleLogin
  }
}

const useRegisterEffect = () => {
  const router = useRouter()

  const handleRegister = () => {
    router.push({ name: 'Register' })
  }

  return {
    handleRegister
  }
}

export default {
  name: 'Login',
  components: {
    Toast
  },
  setup () {
    const { toastData, showToast } = useToastEffect()
    const { loginForm, handleLogin } = userLoginEffect(showToast)
    const { handleRegister } = useRegisterEffect()

    return {
      loginForm,
      handleLogin,
      handleRegister,
      toastData,
      showToast
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/viriables.scss';

.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  img {
    width: .66rem;
    height: .66rem;
    display: block;
    margin: 0 auto .4rem auto;
  }
  &__input {
    background: #f9f9f9;
    border: .01rem solid rgba(0, 0, 0, .1);
    border-radius: .06rem;
    height: .48rem;
    margin: 0 .4rem .16rem .4rem;
    padding: 0 .16rem;
    input {
      width: 100%;
      border: none;
      outline: none;
      line-height: .48rem;
      background: none;
      font-size: .16rem;
      color: $notice-fontcolor;
      &::placeholder {
        color: $notice-fontcolor;
      }
    }
  }
  .login-button {
    background: #0091ff;
    border-radius: .04rem;
    color: #fff;
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    font-size: .16rem;
    text-align: center;
  }
  .login-link {
    font-size: .14rem;
    color: $notice-fontcolor;
    text-align: center;
  }
}
</style>
