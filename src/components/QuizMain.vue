<template>
    <div >
        <QuizItem  :cor_ans = correctAnwers :items="data.results[counter]" class = 'boxitem'/>
        <div class="button">
            <v-btn  @click = "previous()" style="margin-left:60px;"> prev </v-btn>
            <v-btn  @click = "next()" style="margin-right:60px;"> next </v-btn>
        </div>
        <!-- <v-btn  v-show="!show" v-if="data!= null"  @click = "dataToparent(), show=true">start</v-btn> -->
    </div>
</template>

<script>
import QuizItem from './QuizItem.vue'
import {store} from '../store'
import {mapState} from 'vuex'

export default {
    name : 'QuizMain',
    store,
   data(){
        return{
            correctAnwers:0,
            // total: this.$store.state.data.results.length
        }
   },
    components:{
        QuizItem,
    },
   
    computed:mapState([
        'counter',
        'data'
    ]),

    methods:{
        previous(){

            if (this.counter == 0){
                alert('it is the first question')
            }
            else{
                this.$store.commit('decrease', {amount:1})
            }
            
        },
        next(){
             if (this.counter == 9){
                alert('it is the last question')
            }
            else{
                this.$store.commit('increase', {amount:1})

            }  
        },
      

    },
}
</script>
<style scoped>

.button{
    display: flex;
    justify-content: space-between;

}
.boxitem{
    margin-top: 50px;
}
</style>
