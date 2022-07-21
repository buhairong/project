import { createStore } from 'vuex'

const setLocalStorage = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}

const getLocalStorage = () => {
  if (localStorage.cartList) {
    return JSON.parse(localStorage.cartList)
  }
  return {}
}

export default createStore({
  state: {
    cartList: getLocalStorage()
    // shopId: {
    //    shopName: '沃尔玛',
    //    productList: {
    //      productId: {
    //        imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
    //        name: '番茄 250g / 份',
    //        oldPrice: 39.6,
    //        price: 33.6,
    //        sales: 10,
    //        id: '1',
    //        count: 0
    //      },
    //      2: {}
    //    }
    // },
    // 2: {}
  },
  getters: {
  },
  mutations: {
    changeCartInfo (state, { shopId, productId, product, num, shopName }) {
      let shopInfo = state.cartList[shopId]
      if (!shopInfo) {
        shopInfo = {
          shopName,
          productList: {}
        }
      }

      let productInfo = shopInfo.productList[productId]
      if (!productInfo) {
        productInfo = product
        productInfo.count = 0
      }
      productInfo.count += num
      if (productInfo.count <= 0) {
        productInfo.count = 0
      } else {
        productInfo.check = true
      }
      shopInfo.productList[productId] = productInfo
      state.cartList[shopId] = shopInfo
      setLocalStorage(state)
    },

    clearCart (state, { shopId }) {
      state.cartList[shopId].productList = {}
      setLocalStorage(state)
    },

    setCartItemCheck (state, { shopId, isAllChecked }) {
      const cartList = state.cartList[shopId].productList
      for (const i in cartList) {
        const product = cartList[i]
        if (product.count) {
          product.check = isAllChecked
        }
      }
      state.cartList[shopId].productList = cartList
      setLocalStorage(state)
    }
  },
  actions: {
  },
  modules: {
  }
})
