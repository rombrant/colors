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
      REMOVE_SKILL: (state, deletedSkillId) => {
        state.skills = state.skills.filter(skill => skill.id !== deletedSkillId);
      },
      EDIT_SKILL: (state, editedSkill) => {
        state.skills = state.skills.map(skill =>
          skill.id === editedSkill.id ? editedSkill : skill
        );
      }
    },
    actions: {
      
      }
  };