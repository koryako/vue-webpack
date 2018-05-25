/* eslint-disable */
<template>
     <li>User {{ $route.params.id }}</li>
</template>


<script>

export default {
  name: 'list',
  props:['item'],
   data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message:" 你好！",
    
    }
  },
  mounted() {
      this.handleMounted();
  },
  beforeRouteUpdate (to, from, next) {
        
  }

}
</script>