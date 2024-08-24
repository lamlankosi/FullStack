import { createStore } from 'vuex'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import axios from 'axios'
import router from '@/router'

const APIUrl = 'https://fullstack-b2wd.onrender.com/'

export default createStore({
  state: {
    products: [],
    product: null,
    users: null,
    user: null,
    categories: null,
  },
  mutations: {
    setProducts(state, value) {
      state.products = value;
      // Extract categories and update state
      const categories = [...new Set(value.map(product => product.Category))];
      state.categories = categories;
    },
    setProduct(state, value) {
      state.product = value
    },
    addProduct(state, product) {
      state.products.push(product)
    },
    updateProduct(state, updatedProduct) {
      const index = state.products.findIndex(p => p.prodID === updatedProduct.prodID)
      if (index !== -1) {
        state.products[index] = updatedProduct
      }
    },
    deleteProduct(state, productId) {
      state.products = state.products.filter(p => p.prodID !== productId)
    },
    setUsers(state, value) {
      state.users = value
    },
    setUser(state, value) {
      state.user = value
    },
    
  },
  actions: {
    // Fetch all products
    async fetchProducts({ commit }) {
      try {
        const { data } = await axios.get(`${APIUrl}products`);
        if (data && data.results) {
          commit('setProducts', data.results);
          // No need for separate fetchCategories action
        } else {
          toast.error('Failed to fetch products', {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          });
        }
      } catch (e) {
        toast.error(`Error: ${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        });
      }
    },

    // Fetch a single product by ID
    async fetchProduct({ commit }, id) {
      try {
        const { results } = await (await axios.get(`${APIUrl}products/${id}`)).data
        
        if (results) {
          commit('setProduct', results[0])
        } else {
          toast.error('Failed to fetch product', {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (e) {
        toast.error(`Error: ${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    },

    // Add a new product
    async addProduct({ commit }, payload) {
      try {
        const { data } = await axios.post(`${APIUrl}product/add`, payload)
        if (data && data.product) {
          commit('addProduct', data.product) // assuming the response contains the new product
          toast.success('Product added successfully', {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (e) {
        toast.error(`Error: ${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    },

    // Update an existing product
    async updateProduct({ commit }, payload) {
      try {
        const { data } = await axios.patch(`${APIUrl}product/${payload.prodID}`, payload)
        if (data && data.product) {
          commit('updateProduct', data.product) // assuming the response contains the updated product
          toast.success('Product updated successfully', {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (e) {
        toast.error(`Error: ${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    },

    // Delete a product
    async deleteProduct({ commit }, id) {
      try {
        const { data } = await axios.delete(`${APIUrl}product/${id}`)
        if (data && data.msg) {
          commit('deleteProduct', id)
          toast.success('Product deleted successfully', {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (e) {
        toast.error(`Error: ${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    },
    async fetchUsers(context) {
      try {
        const { results, msg } = await (await axios.get(`${APIUrl}users`)).data
        if (results) {
          context.commit('setUsers', results)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    },
    async fetchUser(context, id) {
      try {
        const { result, msg } = await (await axios.get(`${APIUrl}user/${id}`)).data
        if (result) {
          context.commit('setUser', result)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    },
    async register(context, payload) {
      try {
        const { msg, err, token } = await (await axios.post(`${APIUrl}user/register`, payload)).data
        if (token) {
          context.dispatch('fetchUsers')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
          router.push({ name: 'login' })
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    },
    async updateUser(context, payload) {
      try {
        const { msg, err } = await (await axios.patch(`${APIUrl}user/${payload.userID}`, payload)).data
        if (msg) {
          context.dispatch('fetchUsers')
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    },
    async deleteUser(context, id) {
      try {
        const { msg, err } = await (await axios.delete(`${APIUrl}user/${id}`)).data
        if (msg) {
          context.dispatch('fetchUsers')
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    },
  },
  modules: {}
})
