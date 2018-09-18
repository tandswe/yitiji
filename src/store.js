import Vue from "vue";
import Vuex from "vuex";
import home from './store/home'
import selcetPage from './store/modules/selcetPage'
import residence from './store/modules/residence'
import jiaotong from './store/modules/jiaotong'
Vue.use(Vuex);

export default new Vuex.Store({
  // state: {
  // 	headTabIndex:0,
  // 	isSelfJump:false
  // },
  // mutations: {},
  // actions: {}
  modules:{
    home,
    selcetPage,
    residence,
    jiaotong
  }
});
