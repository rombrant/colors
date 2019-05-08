export default {
    namespaced: true,
    state: {
      curProducts: []
    },
    mutations: {
      SET_SKILLS: (state, skills) => {
        state.skills = skills;
      },
      ADD_CURPRODUCT: (state, newProduct) => {
        state.curProducts.push(newProduct);
      },
      REMOVE_CURPRODUCT: (state) => {
        state.curProducts = state.curProducts.pop();
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
          }
      }
  };