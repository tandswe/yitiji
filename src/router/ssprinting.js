

const sspage = () =>import ('../views/ssprinting/sspage')
//选择城市页
const sscity = () =>import ('../views/ssprinting/sscity')

//医保信息三页
const ins1 = () =>import ('../views/ssprinting/miprint/ins1')
const ins2 = () =>import ('../views/ssprinting/miprint/ins2')
const ins3 = () =>import ('../views/ssprinting/miprint/ins3')
// 社保清单打印
export default [{
  path: "/ssprinting/psetp",
  name: "/ssprinting/fapsetp",
  component:()=>
  import ('../views/ssprinting/psetp.vue'),
  redirect: '/ssprinting/print/print1',
  children: [
    {
      path: "/ssprinting/print/print1",
      name: "print1",
      component:()=>
      import ('../views//ssprinting/print/print1.vue')
    },
  {
    path: "/ssprinting/print/print2",
    name: "print2",
    component:()=>
    import ('../views/ssprinting/print/print2.vue')
  },
  {
    path: "/ssprinting/print/print3",
    name: "print3",
    component:()=>
    import ('../views/ssprinting/print/print3.vue')
   }
  ]
},
//医保信息打印
{
    path: "/ssprinting/miprint",
    name: "/famiprint",
    component:()=>
    import ('../views/ssprinting/miprint'),
    redirect: '/ssprinting/miprint/miprint1',
    children: [
      {
        path: "/ssprinting/miprint/miprint1",
        name: "mipprint1",
        component:()=>
        import ('../views/ssprinting/miprint/miprint1.vue')
      },
    {
      path: "/ssprinting/miprint/miprint2",
      name: "miprint2",
      component:()=>
      import ('../views/ssprinting/miprint/miprint2.vue')
    },
    {
      path: "/ssprinting/miprint/miprint3",
      name: "miprint3",
      component:()=>
      import ('../views/ssprinting/miprint/miprint3.vue')
     },
     {
      path: "/ssprinting/miprint/miprint4",
      name: "miprint4",
      component:()=>
      import ('../views/ssprinting/miprint/miprint4.vue')
      }
    ]  
  },
// 社保卡金融账户余额查询
  {
    path: "/ssprinting/balance",
    name: "/balance",
    component:()=>
    import ('../views/ssprinting/balance'),
    redirect: '/ssprinting/balancecore/b1',
    children: [
      {
        path: "/ssprinting/balancecore/b1",
        name: "b1",
        component:()=>
        import ('../views/ssprinting/balancecore/b1.vue')
      },
    {
      path: "/ssprinting/balancecore/b2",
      name: "b2",
      component:()=>
      import ('../views/ssprinting/balancecore/b2.vue')
    },
    {
      path: "/ssprinting/balancecore/b3",
      name: "b3",
      component:()=>
      import ('../views/ssprinting/balancecore/b3.vue')
     }
    ]  
  },

  //社会保险参保证明打印
  {
    path: "/ssprinting/Proofof",
    name: "/faProofof",
    component:()=>
    import ('../views/ssprinting/Proofof'),
    redirect: '/ssprinting/Proofof/pr1',
    children: [
      {
        path: "/ssprinting/Proofof/pr1",
        name: "pr1",
        component:()=>
        import ('../views/ssprinting/Proofof/pr1.vue')
      },
    {
      path: "/ssprinting/Proofof/pr2",
      name: "pr2",
      component:()=>
      import ('../views/ssprinting/Proofof/pr2.vue')
    },
    {
      path: "/ssprinting/Proofof/pr3",
      name: "pr3",
      component:()=>
      import ('../views/ssprinting/Proofof/pr3.vue')
     },
     {
      path: "/ssprinting/Proofof/pr4",
      name: "pr4",
      component:()=>
      import ('../views/ssprinting/Proofof/pr4.vue')
      }
    ]  
  },

  //社保个人基本资料查询

  {
    path: "/ssprinting/basicquery",
    name: "/balance",
    component:()=>
    import ('../views/ssprinting/basicquery'),
    redirect: '/ssprinting/basicquery/bq1',
    children: [
      {
        path: "/ssprinting/basicquery/bq1",
        name: "bq1",
        component:()=>
        import ('../views/ssprinting/basicquery/bq1.vue')
      },
    {
      path: "/ssprinting/basicquery/bq2",
      name: "bq2",
      component:()=>
      import ('../views/ssprinting/basicquery/bq2.vue')
    },
    {
      path: "/ssprinting/basicquery/bq3",
      name: "bq3",
      component:()=>
      import ('../views/ssprinting/basicquery/bq3.vue')
     }
    ]  
  },
  // 社保待遇发放信息查询

  {
    path: "/ssprinting/grant",
    name: "/grant",
    component:()=>
    import ('../views/ssprinting/grant'),
    redirect: '/ssprinting/grant/g1',
    children: [
      {
        path: "/ssprinting/grant/g1",
        name: "g1",
        component:()=>
        import ('../views/ssprinting/grant/g1.vue')
      },
    {
      path: "/ssprinting/grant/g2",
      name: "g2",
      component:()=>
      import ('../views/ssprinting/grant/g2.vue')
    },
    {
      path: "/ssprinting/grant/g3",
      name: "g3",
      component:()=>
      import ('../views/ssprinting/grant/g3.vue')
     }
    ]  
  },
  //基本养老金领取资格认证（生存认证）
  {
    path: "/ssprinting/survival",
    name: "/fasurviva",
    component:()=>
    import ('../views/ssprinting/survival'),
    redirect: '/ssprinting/surviva/pr1',
    children: [
      {
        path: "/survival/su1",
        name: "pr1",
        component:()=>
        import ('../views/ssprinting/survival/su1.vue')
      },
    {
      path: "/survival/su2",
      name: "pr2",
      component:()=>
      import ('../views/ssprinting/survival/su2.vue')
    },
    {
      path: "/survival/su3",
      name: "pr3",
      component:()=>
      import ('../views/ssprinting/survival/su3.vue')
     },
     {
      path: "/survival/su4",
      name: "pr4",
      component:()=>
      import ('../views/ssprinting/survival/su4.vue')
      }
    ]  
  },

{
  path: '/sspage',
  name: '人社打印选择页',
  component: sspage
},
{
  path: '/sscity',
  name: '城市印选择页',
  component: sscity
},
{
    path: '/ins1',
    name: '医保信息1',
    component: ins1
  },
  {
    path: '/ins2',
    name: '医保信息2',
    component: ins2
  },
  {
    path: '/ins3',
    name: '医保信息3',
    component: ins3
  },
  {
    path: "/ssprinting/basicOldAge",
    name: "基本养老金领取资格认证（生存认证）",
    component:()=>
    import ('../views/ssprinting/basicOldAge'),
    redirect: '/ssprinting/basicOldAge/bo1',
    children: [
      {
        path: "/ssprinting/basicOldAge/bo1",
        name: "g1",
        component:()=>
        import ('../views/ssprinting/basicOldAge/bo1.vue')
      },
    {
      path: "/ssprinting/basicOldAge/bo2",
      name: "g2",
      component:()=>
      import ('../views/ssprinting/basicOldAge/bo2.vue')
    },
    {
      path: "/ssprinting/basicOldAge/bo3",
      name: "g3",
      component:()=>
      import ('../views/ssprinting/basicOldAge/bo3.vue')
     },
     {
      path: "/ssprinting/basicOldAge/bo4",
      name: "g4",
      component:()=>
      import ('../views/ssprinting/basicOldAge/bo4.vue')
     }
    ]  
  }
]