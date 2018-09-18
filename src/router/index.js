import Vue from 'vue'
import Router from 'vue-router'
import Residence from './residence.js'
import socialSecurity from './socialsecurity.js'
import hospital from './hospital.js'
import passport from './passport.js'
import crimeTestify from './crimeTestify.js'
import pmUion from './pmUion.js'
import entryDndexit from './entryDndexit.js'
import household from './household.js'
import education from './education.js'
import jiaotong from './jiaotong.js'
import entryLogin from './entryLogin.js'
import weatherProof from './weatherProof.js'
import ssprinting from './ssprinting.js'
import peoplePass from './peoplePass.js'
import taxation from './taxation.js'
import judicial from './judicial.js'
import publicSecurity from './publicSecurity.js'
import housing from './housing.js'
import gonganzy from './gonganzy.js'
import moveSelect from './moveSelect.js'
import search from './search.js'

Vue.use(Router)

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
export default new Router({
  mode: 'hash',
  routes: [
    {// 首页
      path: '/',
      name: 'home',
      component: () =>
        import ('../views/Home.vue'),
    },
    { // 关于
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    ...Residence, //居住证
    ...socialSecurity, //社保
    ...hospital, //定点医院
    ...passport, //入境
    ...entryDndexit,
    ...pmUion,//残联
    ...crimeTestify,
    ...education,//教育
    ...jiaotong, //交通法
    ...household,//户政
    ...ssprinting, //人社打印
    ...peoplePass, //民证业务
    ...taxation,//税务
    ...judicial,//司法
    ...weatherProof,//天气
    ...entryLogin,
    ...publicSecurity,//治安局
    ...housing, //住建
    ...gonganzy, //公安总页
    ...moveSelect, //首页点击更多
    ...search, //搜索页
    {
      path: '*',
      redirect:'/'
    }
  ]
})