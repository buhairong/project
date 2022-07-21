<template>
  <div class="wrapper">
    <img src="http://www.dell-lee.com/imgs/vue3/user.png" alt="">
    <div class="wrapper__input">
      <input type="text" placeholder="请输入手机号">
    </div>
    <div class="wrapper__input">
      <input type="password" placeholder="请输入密码">
    </div>
    <div class="wrapper__input">
      <input type="password" placeholder="确认密码">
    </div>
    <div class="register-button" @click="handleLogin">注册</div>
    <div class="register-link" @click="handleLogin">已有账号去登录</div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Register',
  setup () {
    const router = useRouter()

    const handleLogin = () => {
      router.push({ name: 'Login' })
    }

    return {
      handleLogin
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
  .register-button {
    background: #0091ff;
    border-radius: .04rem;
    color: #fff;
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    font-size: .16rem;
    text-align: center;
  }
  .register-link {
    font-size: .14rem;
    color: $notice-fontcolor;
    text-align: center;
  }
}
</style>
