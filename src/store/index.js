import Vue from "vue"
import { createStore } from 'vuex'

const store = createStore({
    state:{
        backendUrl:"http://127.0.0.1:8000"
    },
    mutations:{},
    actions:{},
    modules:{},
    getters:{
        getServerUrl:state=>{
            return state.backendUrl
        }
    }
});

export default store;