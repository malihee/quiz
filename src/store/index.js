import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
    state:{
        counter:0,
        data : null,
        correctans : 0,
        submited:[]
    },
    mutations:{
        fetchdata(state){
          
            fetch("https://opentdb.com/api.php?amount=10&type=multiple")
            .then(res=> res.json())
            .then (data=> {
                state.data = data
                // console.log(data)
            })
        },

        increase(state, payload){
            state.counter += payload.amount
        },
        decrease(state, payload){
            state.counter -= payload.amount
        },
    },
    actions:{
       fetchAction({commit}){
           setTimeout(() => {
               commit('fetchdata')
           }, );
       }
    },

    getters:{
        counter(state){
            return state.counter
        }
    }
})