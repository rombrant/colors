export default {
    namespaced: true,
    state: {
      curProducts: [],
      cards:[],
      detailProduct:[]
    },
    mutations: {
      ADD_CARD: (state, card) => {
        state.cards.push(card);
      },
      ADD_CURPRODUCT: (state, newProduct) => {
        state.curProducts.push(newProduct);
      },
      ADD_DETAILCARD: (state, newDeatailCard) => {
        state.detailProduct = newDeatailCard;
      },
      EDIT_SKILL: (state, editedSkill) => {
        state.skills = state.skills.map(skill =>
          skill.id === editedSkill.id ? editedSkill : skill
        );
      }
    },
    actions: {
          addProductCompare({ commit }, newProductCompare) {
              commit("ADD_CURPRODUCT", newProductCompare);
          },
          addNewCard({ commit }, newCard) {
            commit("ADD_CARD", newCard);
        },
          addNewDetail({ commit }, newDetailCard) {
            commit("ADD_DETAILCARD", newDetailCard);
        }
      }
  };