//团队签注
const entryDndexit = ()=>import('../views/entryDndexit/entryDndexit')
const entryDndexitLogin = () =>import ('../views/entryDndexit/entryDndexitCommon/entryDndexitLogin')
const entryDndexitSubmit = () =>import ('../views/entryDndexit/entryDndexitCommon/entryDndexitSubmit')
const entryDndexitExpenses = () =>import ('../views/entryDndexit/entryDndexitCommon/entryDndexitExpenses')
const entryDndexitChip = () =>import ('../views/entryDndexit/entryDndexitCommon/entryDndexitChip')
const entryDndexitFinish = () =>import ('../views/entryDndexit/entryDndexitCommon/entryDndexitFinish')
const entyDndexitPageCenter = () =>import ('../views/entryDndexit/entryDndexitCommon/entyDndexitPageCenter')
const entyDndexitPage = () =>import ('../views/entryDndexit/entyDndexitPage')

//个人签注
const entryindividual = ()=>import('../views/entryDndexit/entryindividual')
const entryIndividualLogin = () =>import ('../views/entryDndexit/entryIndividualCommon/entryIndividualLogin')
const entryIndividualSubmit = () =>import ('../views/entryDndexit/entryIndividualCommon/entryIndividualSubmit')
const entryIndividualExpenses = () =>import ('../views/entryDndexit/entryIndividualCommon/entryIndividualExpenses')
const entryIndividualChip = () =>import ('../views/entryDndexit/entryIndividualCommon/entryIndividualChip')
const entryIndividualFinish = () =>import ('../views/entryDndexit/entryIndividualCommon/entryIndividualFinish')

//台湾团队
const TWDndexit = ()=>import('../views/entryDndexit/TWDndexit')
const TWDndexitLogin = () =>import ('../views/entryDndexit/TWDndexitCommon/TWDndexitLogin')
const TWDndexitSubmit = () =>import ('../views/entryDndexit/TWDndexitCommon/TWDndexitSubmit')
const TWDndexitExpenses = () =>import ('../views/entryDndexit/TWDndexitCommon/TWDndexitExpenses')
const TWDndexitChip = () =>import ('../views/entryDndexit/TWDndexitCommon/TWDndexitChip')
const TWDndexitFinish = () =>import ('../views/entryDndexit/TWDndexitCommon/TWDndexitFinish')
//台湾个人
const TWIndividual = ()=>import('../views/entryDndexit/TWIndividual')
const TWIndividualLogin = () =>import ('../views/entryDndexit/TWIndividualCommon/TWIndividualLogin')
const TWIndividualSubmit = () =>import ('../views/entryDndexit/TWIndividualCommon/TWIndividualSubmit')
const TWIndividualExpenses = () =>import ('../views/entryDndexit/TWIndividualCommon/TWIndividualExpenses')
const TWIndividualChip = () =>import ('../views/entryDndexit/TWIndividualCommon/TWIndividualChip')
const TWIndividualFinish = () =>import ('../views/entryDndexit/TWIndividualCommon/TWIndividualFinish')
export default [
  {
    path: '/entyDndexitPage/entryDndexit',
    name: '港澳通行证团队游签注',
    component: entryDndexit,
    redirect: '/entyDndexitPage/entryDndexitLogin',
    children: [
      {
        path: '/entyDndexitPage/entryDndexitLogin',
        name: '港澳通行证团队登陆',
        component: entryDndexitLogin,
      },{
        path: '/entyDndexitPage/entryDndexitSubmit',
        name: '港澳通行证团队资料提交',
        component: entryDndexitSubmit,
      },
      {
        path: '/entyDndexitPage/entryDndexitExpenses',
        name: '港澳通行证团队费用交纳',
        component: entryDndexitExpenses,
      },
      {
        path: '/entyDndexitPage/entryDndexitChip',
        name: '芯片擦写',
        component: entryDndexitChip,
      },
      {
        path: '/entyDndexitPage/entryDndexitFinish',
        name: '港澳通行证团队完成',
        component: entryDndexitFinish,
      }
    ]
  },
  {
    path: '/entyDndexitPage/entryindividual',
    name: '港澳通行证个人游签注',
    component: entryindividual,
    redirect: '/entyDndexitPage/entryIndividualLogin',
    children: [
      {
        path: '/entyDndexitPage/entryIndividualLogin',
        name: '港澳通行证个人游登陆',
        component: entryIndividualLogin,
      },{
        path: '/entyDndexitPage/entryIndividualSubmit',
        name: '港澳通行证个人游资料提交',
        component: entryIndividualSubmit,
      },
      {
        path: '/entyDndexitPage/entryIndividualExpenses',
        name: '港澳通行证个人游费用交纳',
        component: entryIndividualExpenses,
      },
      {
        path: '/entyDndexitPage/entryIndividualChip',
        name: '港澳通行证个人游芯片擦写',
        component: entryIndividualChip,
      },
      {
        path: '/entyDndexitPage/entryIndividualFinish',
        name: '港澳通行证个人游完成',
        component: entryIndividualFinish,
      }
    ]
  },
{
  path: '/entyDndexitPage',
  name: '出入境展示页',
  component: entyDndexitPage,
  redirect: '/entyDndexitPageCenter',
  children:[
    {
      path: '/entyDndexitPageCenter',
      name: '出入境内容页',
      component: entyDndexitPageCenter
    }
  ]
},
//港澳通行证签注查询业务
{
  path:'/macaoPermit/macaoPermitHome',
  name:"macaoPermitHome",
  component:()=>import('../views/entryDndexit/macaoPermit/macaoPermitHome.vue'),
  redirect:'/macaoPermit/macaoPermitLogin',
  children:[
    {
      path:'/macaoPermit/macaoPermitLogin',
      name:'macaoPermitLogin',
      component:()=>import('../views/entryDndexit/macaoPermit/macaoPermitLogin.vue')
    },
    {
      path:'/macaoPermit/macaoPermitQuery',
      name:'macaoPermitQuery',
      component:()=>import('../views/entryDndexit/macaoPermit/macaoPermitQuery.vue')
    },
    {
      path:'/macaoPermit/macaoPermitPrint',
      name:'macaoPermitPrint',
      component:()=>import('../views/entryDndexit/macaoPermit/macaoPermitPrint.vue')
    },
    {
      path:'/macaoPermit/macaoPermitFinish',
      name:'macaoPermitFinish',
      component:()=>import('../views/entryDndexit/macaoPermit/macaoPermitFinish.vue')
    }
  ]
},
{
  path: '/entyDndexitPage/TWDndexit',
  name: '台湾通行证团队游签注',
  component: TWDndexit,
  redirect: '/entyDndexitPage/TWDndexitLogin',
  children: [
    {
      path: '/entyDndexitPage/TWDndexitLogin',
      name: '台湾通行证团队登陆',
      component: TWDndexitLogin,
    },{
      path: '/entyDndexitPage/TWDndexitSubmit',
      name: '台湾通行证团队资料提交',
      component: TWDndexitSubmit,
    },
    {
      path: '/entyDndexitPage/TWDndexitExpenses',
      name: '台湾通行证团队费用交纳',
      component: TWDndexitExpenses,
    },
    {
      path: '/entyDndexitPage/TWDndexitChip',
      name: '台湾通行证团队芯片擦写',
      component: TWDndexitChip,
    },
    {
      path: '/entyDndexitPage/TWDndexitFinish',
      name: '台湾通行证团队完成',
      component: TWDndexitFinish,
    }
  ]
},
{
  path: '/entyDndexitPage/TWIndividual',
  name: '台湾通行证个人游签注',
  component: TWIndividual,
  redirect: '/entyDndexitPage/TWIndividualLogin',
  children: [
    {
      path: '/entyDndexitPage/TWIndividualLogin',
      name: '台湾通行证个人游登陆',
      component: TWIndividualLogin,
    },{
      path: '/entyDndexitPage/TWIndividualSubmit',
      name: '台湾通行证个人游资料提交',
      component: TWIndividualSubmit,
    },
    {
      path: '/entyDndexitPage/TWIndividualExpenses',
      name: '台湾通行证个人游费用交纳',
      component: TWIndividualExpenses,
    },
    {
      path: '/entyDndexitPage/TWIndividualChip',
      name: '台湾通行证个人游芯片擦写',
      component: TWIndividualChip,
    },
    {
      path: '/entyDndexitPage/TWIndividualFinish',
      name: '台湾通行证个人游完成',
      component: TWIndividualFinish,
    }
  ]
},
//台湾通行证签注查询业务
{
path:'/TWPermit/TWPermitHome',
name:"TWPermitHome",
component:()=>import('../views/entryDndexit/TWPermit/TWPermitHome.vue'),
redirect:'/TWPermit/TWPermitLogin',
children:[
  {
    path:'/TWPermit/TWPermitLogin',
    name:'TWPermitLogin',
    component:()=>import('../views/entryDndexit/TWPermit/TWPermitLogin.vue')
  },
  {
    path:'/TWPermit/TWPermitQuery',
    name:'TWPermitQuery',
    component:()=>import('../views/entryDndexit/TWPermit/TWPermitQuery.vue')
  },
  {
    path:'/TWPermit/TWPermitPrint',
    name:'TWPermitPrint',
    component:()=>import('../views/entryDndexit/TWPermit/TWPermitPrint.vue')
  },
  {
    path:'/TWPermit/TWPermitFinish',
    name:'TWPermitFinish',
    component:()=>import('../views/entryDndexit/TWPermit/TWPermitFinish.vue')
  }
]
}

]