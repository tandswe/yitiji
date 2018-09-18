
import {defaultAxios,fetch} from '@/api/axios'

export default {
    state:{
        detail:"",
    },
    mutations:{
       GET_JT_DATA(state, res){
         state.detail = res
         //console.log(res)
       }
    },
    actions:{
       getjt({ commit }, palyload){
           fetch("https://www.easy-mock.com/mock/5b97bc01a7e9571f105d3ddd/ytj/jdcsearch").then(
               req=>{
                commit("GET_JT_DATA",req.result_set)
                //console.log(req.result_set)
               }
           )
       
       }

    },
    getters:{
        getDetail: state => state.detail
    }
}