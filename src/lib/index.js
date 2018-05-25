import dinput from './dinput.vue'

const vuedinput = {
  install: function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component('vuedinput', dinput)
  }
}

export default vuedinput

