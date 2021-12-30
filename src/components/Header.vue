<template>

  <v-card>
    <v-tabs
      dark
      background-color="teal darken-3"
      show-arrows
      grow
      v-model= "active_tab"
    >
      <v-tabs-slider color="teal lighten-3"></v-tabs-slider>

      <v-tab
        v-for="i in data.results.length"
        :key="i"
        :href="'#tab-' + i"
        @click="getindex(i)"
      >
        Q{{i}}
      </v-tab>
    </v-tabs>
  </v-card>
  
</template>

<script>
import {store} from '../store'
import {mapState, mapMutations} from 'vuex'
export default {
   name : 'Header',
   store,
   data(){
     return{
          active_tab:[]
     }
   },
   computed:
   mapState([
     'counter',
     'data'
   ]),
   ...mapMutations([
     'increase',
     'decrease'
   ]),

   watch:{
     counter:{
       handler(){
          this.active_tab = "tab-" + (this.counter+1)
       },
      
        
     }
   },
   methods:
     {
      getindex(i){
       if (i+1 <this.counter){
           this.$store.commit('decrease', {amount:this.counter - i+1})
       }
       else if(i+1 >this.counter)
          this.$store.commit('increase', {amount :i-1 - this.counter})
     }
   }
      
}
</script>