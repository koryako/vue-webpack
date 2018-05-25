<template>
<div>
     <li>User {{ $route.params.id }}</li>
     <li>{{msg}}{{postTitle}}</li>
     <div v-html="post.link"></div>
     
     </div>
</template>


<script>

import list from '@/components/list'

export default  {
  name:"listex",
  extends:list,//继承list组件
  props:['item','postTitle','post'],
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' },
    ]
  },
  beforeRouteUpdate (to, from, next) {
        
  },
  methods: {
    handleMounted() {
      console.log('mounted');
    }
  }

}
</script>