import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export const useCommonCartEffect = (shopId) => {
  const store = useStore()
  const productList = store.state.cartList

  const changeCartInfo = (shopId, productId, product, num, shopName) => {
    store.commit('changeCartInfo', { shopId, productId, product, num, shopName })
  }

  const count = computed(() => {
    const cartList = productList[shopId]?.productList
    let total = 0
    for (const i in cartList) {
      const product = cartList[i]
      if (product.check) {
        total += cartList[i].count
      }
    }

    return total
  })

  const price = computed(() => {
    const cartList = productList[shopId]?.productList
    let total = 0
    for (const i in cartList) {
      const product = cartList[i]
      if (product.check) {
        total += product.price * product.count
      }
    }

    return total.toFixed(2)
  })

  const shopCartList = computed(() => {
    return productList[shopId]?.productList || []
  })

  const shopName = computed(() => {
    return productList[shopId]?.shopName || ''
  })

  const isAllChecked = computed(() => {
    const cartList = productList[shopId]?.productList
    let allChecked = true
    for (const i in cartList) {
      const product = cartList[i]
      if (product.count && !product.check) {
        allChecked = false
        break
      }
    }
    return allChecked
  })

  const changeCartItemCheck = (product) => {
    product.check = !product.check
  }

  const clearCart = (shopId) => {
    store.commit('clearCart', { shopId })
  }

  const setCartItemCheck = (shopId, isAllChecked) => {
    store.commit('setCartItemCheck', { shopId, isAllChecked })
  }

  const showCart = ref(false)

  const handleShowCartChange = () => {
    showCart.value = !showCart.value
  }

  return {
    shopName,
    productList,
    count,
    price,
    shopCartList,
    changeCartInfo,
    changeCartItemCheck,
    clearCart,
    isAllChecked,
    setCartItemCheck,
    showCart,
    handleShowCartChange
  }
}
