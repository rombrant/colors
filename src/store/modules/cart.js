import { parse } from "path";

export default {
    namespaced: true,
    state: {
      cartProducts: [],
      value: [],
      favorProducts: []
    },
    mutations: {
      ADD_CARTPRODUCT: (state, newCartProduct) => {
        state.cartProducts.push(newCartProduct);
      },
      ADD_FAVORPRODUCT: (state, newFavorProduct) => {
        state.favorProducts.push(newFavorProduct);
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
              const value = parseInt(newProductCart.price.replace(".",""));
              commit("INCREASE_VALUE", value);
          },
          addProductFavor({ commit }, newFavorProduct) {
            commit("ADD_FAVORPRODUCT", newFavorProduct);
        }
      }
  };