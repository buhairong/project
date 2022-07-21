import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue')
  },
  {
    path: '/shop/:id',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/shop/Shop.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/Login.vue'),
    beforeEnter (to, from, next) {
      const isLogin = localStorage.isLogin
      if (isLogin) {
        next({ name: 'Home' })
      }

      next()
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "login" */ '../views/register/Register.vue'),
    beforeEnter (to, from, next) {
      const isLogin = localStorage.isLogin
      if (isLogin) {
        next({ name: 'Home' })
      }

      next()
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/cart/Cart.vue')
  },
  {
    path: '/order/:id',
    name: 'Order',
    component: () => import(/* webpackChunkName: "order" */ '../views/order/Order.vue')
  },
  {
    path: '/order-list',
    name: 'OrderList',
    component: () => import(/* webpackChunkName: "order-list" */ '../views/order-list/OrderList.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '../views/search/Search.vue')
  },
  {
    path: '/search-list',
    name: 'SearchList',
    component: () => import(/* webpackChunkName: "search-list" */ '../views/search-list/SearchList.vue')
  },
  {
    path: '/address',
    name: 'Address',
    component: () => import(/* webpackChunkName: "address" */ '../views/address/Address.vue')
  },
  {
    path: '/address-edit',
    name: 'AddressEdit',
    component: () => import(/* webpackChunkName: "address-edit" */ '../views/address/AddressEdit.vue')
  },
  {
    path: '/address-select',
    name: 'AddressSelect',
    component: () => import(/* webpackChunkName: "address-select" */ '../views/address/AddressSelect.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.isLogin
  if (isLogin || to.name === 'Login' || to.name === 'Register') {
    next()
  } else {
    next({ name: 'Login' })
  }
})

export default router
