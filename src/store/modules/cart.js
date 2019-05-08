import { parse } from "path";

export default {
    namespaced: true,
    state: {
      cartProducts: [],
      value: []
    },
    mutations: {
      ADD_CARTPRODUCT: (state, newProduct) => {
        state.cartProducts.push(newProduct);
      },
      REMOVE_CURPRODUCT: (state) => {
        state.curProducts = state.curProducts.pop();
      },
      INCREASE_VALUE: (state, value) => {
        state.value.push(value);
      }
    },
    actions: {
          addProductCart({ commit }, newProductCart) {
              commit("ADD_CARTPRODUCT", newProductCart);
              const value = parseFloat(newProductCart.price);
              commit("INCREASE_VALUE", value);
          }
      }
  };