export const state = () => ({
  products: [],
})

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  }
}

export const actions = {
  async getProducts({commit}) {
    const path = 'http://127.0.0.1:8000/api/categories/'
    const products = await this.$axios.$get(path)
    commit('SET_PRODUCTS', products)
  }
}
