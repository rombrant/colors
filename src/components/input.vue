<template lang="pug">
    label.input(
            v-if="fieldType === 'input'" 
            :class="[{'input_labeled' : !!title, 'no-side-paddings' : noSidePaddings}, iconClass, {'error' : !!errorText}]"
          )
      .input__title(v-if="title") {{title}} 
      input(
          :placeholder="placeholder"
          v-bind="$attrs"
          :value="value" 
          @input="$emit('input', $event.target.value)"
        ).input__elem.field__elem
      .input__error-tooltip
        errors-tooltip(
          :errorText="errorText"
        )
</template>

<script>
export default {
    inheritAttrs: false,
  props: {
    placeholder: String,
    title: String,
    errorText: {
      type: String,
      default: ""
    },
    noSidePaddings: Boolean,
    fieldType: {
      type: String,
      default: "input"
    },
    value: String | Number,
    icon: {
      type: String,
      default: "",
      validator: value => ["", "user", "key"].includes(value)
    }
  },
  computed: {
    iconClass() {
      const iconName = this.icon;
      return iconName.length ? ` input_iconed input_icon-${iconName}` : "";
    }
  },
  components: {
    errorsTooltip: () => import("components/errors-tooltip.vue")
  }
};
</script>
<style lang="postcss">
input {
    border: none;
}
.input__error-tooltip {
  display: none;
  position: absolute;
  top: 100%;
  left: 30%;
  transform: translateX(-20%);
  z-index: 100;
}
.input {
  display: block;
  position: relative;
  &.no-side-paddings {
    .input__elem {
      padding-right: 0;
      padding-left: 0;
    }
  }
  &_labeled {
    .input__elem {
      padding: 15px 0 18px;
    }
  }
  &_iconed {
    
    .input__elem {
      padding-left: 45px;
      background: left center / auto 29px no-repeat;
      font-size: 18px;
      font-weight: bold;
      padding-top: 17px;
      padding-bottom: 17px;
    }
  }  
}
.error {
  .field__elem {
    border-color: rgb(255, 0, 0);
  }
  .input__error-tooltip {
    display: block;
  }
}
.textarea {
  position: relative;
}
.input__title {
  color: rgba(65, 76, 99, 0.5);
  font-weight: 600;
  opacity: 0.5;
}
.textarea__elem {
  height: 150px;
  padding: 20px;
  border: 1px solid rgba($text-color, 0.2);
  resize: none;
  font-weight: 600;
  margin-top: 10px;
  width: 100%;
}
.input__elem {
  width: 100%;
  padding: 5px 1rem;
  border: none;
  border-bottom: 1px solid #1f232d;
  &::placeholder {
    color: rgba(55, 62, 66, 0.25);
  }
}
.contacts {
  & .input__elem {
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,.2);
    padding: 8px 10px;
  }
  & .input__title {
    font-weight: 700;
    color: #1f232d;
    opacity: .9;
  }
}
</style>
