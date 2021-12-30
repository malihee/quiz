<template>
  <v-app>

    <Header />
    <QuizMain @child_to_parent = 'datagetter'/>
    
  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import QuizMain from './components/QuizMain.vue';
import {store} from './store'

export default {
  name: 'App',
  store,
  components: {
    Header,
    QuizMain,
  },

  data: () => ({
    data :null
  }),
   created(){
        this.$store.dispatch('fetchAction')
    //     // while (this.data==null){
    //     //    var x=1
    //     //    x+=x
        // }
    },
  methods:{
    datagetter(val){
      this.data= val
      console.log(val)
    },
  }
};
</script>
