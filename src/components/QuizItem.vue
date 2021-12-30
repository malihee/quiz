<template>
<div>
<div class='divline'>
    <div> {{correctans}}/ 10 </div>
    <div> <v-btn @click ="submit" > submit  </v-btn></div>
</div>
   
  
  <v-card
    class="mx-auto"
    max-width="500"
  >
   <h4>
        {{items.question}}
    </h4>
    <v-list shaped>
      <v-list-item-group>
        <v-list-item
          :disabled="submited.includes(counter) ? true : false"
          v-for="(item, i) in answers"
          :key="i"
          @click="returnitem(item)"
          :class= "getclass(item)"
          
        >
          <v-list-item-content>
            <v-list-item-title v-text="item"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
      

</div>
</template>

<script>
import {store} from '../store'
import{mapState} from 'vuex'
export default {
  
  name: 'QuizItem',
  store,
  data(){
    return this.initialstate()
    // return{
    //   answers:null,
    //   clickeditem:null,
    //   true_answered_flag:null,
    // }
  },
  props:{
      items: Object,
      cor_ans : Number,
  },
  mounted(){
    // this.concatSuffle()
    // console.log(this.items)
  },
  watch: {
    items: {
      // the callback will be called immediately after the start of the observation
      immediate: true, 
      handler () {
        this.reset()  
        console.log(this.clickeditem)
        this.concatSuffle()
        }
  }
},
  computed:mapState([
    'correctans',
    'counter',
    'submited'
  ]
  ),

  methods:{ 
    initialstate(){
      return{
        answers:null,
        clickeditem:null,
        true_answered_flag:null,
      }
    },

    reset() {
      return Object.assign(this.$data, this.initialstate());
        // Object.assign(this.$data, this.$options.data);
    },

    concatSuffle(){
      // this.reset()
      var ans = this.items.incorrect_answers.concat(this.items.correct_answer)
      this.answers = this.shuffle(ans)
      
    },
    shuffle(array){
       var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
       while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
  
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    },
    submit(){
      if (this.clickeditem!= null){
        if(this.clickeditem === this.items.correct_answer ){
          this.true_answered_flag = true
          this.$store.state.correctans ++
          // this.cor_ans++
        }
        else{
          this.true_answered_flag=false
        }
        console.log(this.true_answered_flag)
        this.$store.state.submited.push( this.$store.state.counter)
        
      }

      else{
        alert('choose one')
      }
      console.log( 'hhhhhh'+this.$store.state.submited.includes( this.$store.state.counter));
    },
    returnitem(i){
      this.clickeditem = i
      
      console.log(this.clickeditem)
    },
    getclass(item){
      return{
        'trueClass' : (this.true_answered_flag == true && this.items.correct_answer == item)|| 
                      (this.true_answered_flag == false&& this.items.correct_answer == item) ,
        'falseClass': this.true_answered_flag == false && this.clickeditem == item
      }
      
    },
    

  },
 
}
</script>

<style scoped>
.divline{
    height: 40px;
    width: 100%;
    background-color: rgb(235, 215, 101);
    margin-bottom: 20px;
    padding-left: 100px;
    display: flex;
    justify-content: space-between;
    padding-right: 100px;
}
.trueClass{
  background-color: aquamarine;
}
.falseClass{
  background-color: lightcoral;
}
</style>