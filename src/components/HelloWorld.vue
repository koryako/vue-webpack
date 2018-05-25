<template>
  <div class="hello" :id="message">
     
     <list v-for="item in lists" v-bind:item="item" v-bind:key="item.id"></list>
    <h1>{{ msg }}</h1>
    <h2 v-bind:title="message">{{message}}</h2>
    <listex post-title="fdfdfdfdf"></listex>
    <listex  v-bind:postTitle="message" ></listex>
    <listex v-for="list in lists" v-bind:key="list.id" v-bind:postTitle="list.text" v-bind:post="list"></listex>
  
    <ul v-if="seen">
      <li v-for="item in lists" v-bind:key="item.id">
        <a
          href="item.link"
          target="_blank"
        >
          {{item.text}}
        </a>
      </li>
   
    </ul>
    <h2 v-on:click="reverseMessage">Ecosystem</h2>
    <!--<dinput v-model="message"></dinput>-->
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
    
    </ul>


    
  </div>
</template>

<script>
//import list from '@/components/list'
//import listex from '@/components/listex'
//import dinput from '@/components/dinput'


export default {
  name: 'HelloWorld',
  components: {
        //listex,
       //dinput,
       //Vueinput
      //VueFlagList
    },
  data () {
    return {
      postFontSize:1,
      msg: 'Welcome to Your Vue.js App',
      message:" 你好！",
      seen:true,
      lists:[
         {text:'awesome-vue',link:'https://vuejs.org'},
        {text:'Core Docs',link:'https://github.com/vuejs/awesome-vue'},
        
      ]
    }
  },
  methods:{
   
    getCode(code) {
        console.log(code)
    },
      
        reverseMessage:function(){
        this.message="fdfd"
    }

    
    

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
