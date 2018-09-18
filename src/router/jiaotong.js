const selectPage = () => import ('../views/jiaotongfa/selectPage')
const jiaotongCenter = () => import ('../views/jiaotongfa/jiaotongCenter')

export default [{
  path: '/jiaotongfa/choice',
  name: '驾驶人交通违法查询和处理',
  component: () =>
    import ('../views/jiaotongfa/choice.vue'),
  redirect: '/jiaotongfa/jiaotong/c1',
  children: [
    {
      path: '/jiaotongfa/jiaotong/c1',
      name: 'c1',
      component: () =>
        import ('../views/jiaotongfa/jiaotong/c1.vue')
    },
    {
      path: '/jiaotongfa/jiaotong/c2',
      name: 'c2',
      component: () =>
        import ('../views/jiaotongfa/jiaotong/c2.vue')
    },
    {
      path: '/jiaotongfa/jiaotong/c3',
      name: 'c3',
      component: () =>
        import ('../views/jiaotongfa/jiaotong/c3.vue')
    },
    {
      path: '/jiaotongfa/jiaotong/c4',
      name: 'c4',
      component: () =>
        import ('../views/jiaotongfa/jiaotong/c4.vue')
    }
  ]
},
  {
    path: '/selectPage',
    name: '交通选择页',
    component: selectPage,
    redirect: '/jiaotongCenter',
    children: [
      {
        path: '/jiaotongCenter',
        name: '交通内容页',
        component: jiaotongCenter
      }
    ]
  },

  {
    path: '/jiaotongfa/payment',
    name: '/jiaotong/fapayment',
    component: () =>
      import ('../views/jiaotongfa/payment'),
    redirect: '/jiaotongfa/payment/pay1',
    children: [
      {
        path: '/jiaotongfa/payment/pay1',
        name: 'pay1',
        component: () =>
          import ('../views/jiaotongfa/payment/pay1.vue')
      },
      {
        path: '/jiaotongfa/payment/pay2',
        name: 'pay2',
        component: () =>
          import ('../views/jiaotongfa/payment/pay2.vue')
      },
      {
        path: '/jiaotongfa/payment/pay3',
        name: 'pay3',
        component: () =>
          import ('../views/jiaotongfa/payment/pay3.vue')
      },
      {
        path: '/jiaotongfa/payment/pay4',
        name: 'pay4',
        component: () =>
          import ('../views/jiaotongfa/payment/pay4.vue')
      }
    ]
  },
  {
    path: '/jiaotongfa/motorPeriod',
    name: '机动车驾驶证转入换证',
    component: () =>
      import ('../views/jiaotongfa/motorPeriod'),
    redirect: '/jiaotongfa/motorCommon/periodCheck',
    children: [
      {
        path: '/jiaotongfa/motorCommon/periodCheck',
        name: '机动车驾驶证转入换证检查',
        component: () =>
          import ('../views/jiaotongfa/motorCommon/periodCheck.vue')
      },
      {
        path: '/jiaotongfa/motorCommon/periodSub',
        name: '机动车驾驶证转入换证提交',
        component: () =>
          import ('../views/jiaotongfa/motorCommon/periodSub.vue')
      },
      {
        path: '/jiaotongfa/motorCommon/periodFees',
        name: '机动车驾驶证转入换证缴费',
        component: () =>
          import ('../views/jiaotongfa/motorCommon/periodFees.vue')
      },
      {
        path: '/jiaotongfa/motorCommon/periodSucceed',
        name: '机动车驾驶证转入换证完成',
        component: () =>
          import ('../views/jiaotongfa/motorCommon/periodSucceed.vue')
      }
    ]
  },
  {
    path: '/jiaotongfa/driverInquire',
    name: '驾驶人交通违法查询',
    component: () =>
      import ('../views/jiaotongfa/driverInquire'),
    redirect: '/jiaotongfa/driverInquireCommon/InquireLogin',
    children: [
      {
        path: '/jiaotongfa/driverInquireCommon/InquireLogin',
        name: '驾驶人查询检查',
        component: () =>
          import ('../views/jiaotongfa/driverInquireCommon/InquireLogin.vue')
      },
      {
        path: '/jiaotongfa/driverInquireCommon/InquireCheck',
        name: '驾驶人查询列表查询',
        component: () =>
          import ('../views/jiaotongfa/driverInquireCommon/InquireCheck.vue')
      }
    ]
  },
  {
    path: '/jiaotongfa/deductMarks',
    name: '驾驶人扣分查询',
    component: () =>
      import ('../views/jiaotongfa/deductMarks'),
    redirect: '/jiaotongfa/deductMarksCommon/marksLogin',
    children: [
      {
        path: '/jiaotongfa/deductMarksCommon/marksLogin',
        name: '驾驶人扣分查询检查',
        component: () =>
          import ('../views/jiaotongfa/deductMarksCommon/marksLogin.vue')
      },
      {
        path: '/jiaotongfa/deductMarksCommon/marksCheack',
        name: '驾驶人扣分查询列表查询',
        component: () =>
          import ('../views/jiaotongfa/deductMarksCommon/marksCheack.vue')
      }
    ]
  },
  {
    path: '/jiaotongfa/carCheck',
    name: '机动车交通违法查询和处理',
    component: () =>
      import ('../views/jiaotongfa/carCheck'),
    redirect: '/jiaotongfa/carCheckCommon/carCheck',
    children: [
      {
        path: '/jiaotongfa/carCheckCommon/carCheck',
        name: '机动车交通违法查询和处理检查',
        component: () =>
          import ('../views/jiaotongfa/carCheckCommon/carCheck.vue')
      },
      {
        path: '/jiaotongfa/carCheckCommon/carSub',
        name: '机动车交通违法查询和处理提交',
        component: () =>
          import ('../views/jiaotongfa/carCheckCommon/carSub.vue')
      },
      {
        path: '/jiaotongfa/carCheckCommon/carFees',
        name: '机动车交通违法查询和处理缴费',
        component: () =>
          import ('../views/jiaotongfa/carCheckCommon/carFees.vue')
      },
      {
        path: '/jiaotongfa/carCheckCommon/carSucceed',
        name: '机动车交通违法查询和处理完成',
        component: () =>
          import ('../views/jiaotongfa/carCheckCommon/carSucceed.vue')
      }
    ]
  },
  {
    path: '/jiaotongfa/driverReplace',
    name: '机动车驾驶证遗失补办',
    component: () =>
      import ('../views/jiaotongfa/driverReplace'),
    redirect: '/jiaotongfa/driverReplaceCommon/replaceCheck',
    children: [
      {
        path: '/jiaotongfa/driverReplaceCommon/replaceCheck',
        name: '机动车驾驶证遗失补办检查',
        component: () =>
          import ('../views/jiaotongfa/driverReplaceCommon/replaceCheck.vue')
      },
      {
        path: '/jiaotongfa/driverReplaceCommon/replaceSub',
        name: '机动车驾驶证遗失补办提交',
        component: () =>
          import ('../views/jiaotongfa/driverReplaceCommon/replaceSub.vue')
      },
      {
        path: '/jiaotongfa/driverReplaceCommon/replaceFees',
        name: '机动车驾驶证遗失补办缴费',
        component: () =>
          import ('../views/jiaotongfa/driverReplaceCommon/replaceFees.vue')
      },
      {
        path: '/jiaotongfa/driverReplaceCommon/replaceSucceed',
        name: '机动车驾驶证遗失补办完成',
        component: () =>
          import ('../views/jiaotongfa/driverReplaceCommon/replaceSucceed.vue')
      }
    ]
  },
  {
    path: '/jiaotongfa/periodValidty',
    name: '机动车驾驶证有效期满换证',
    component: () =>
      import ('../views/jiaotongfa/periodValidty'),
    redirect: '/jiaotongfa/validtyCommon/validtyCheck',
    children: [
      {
        path: '/jiaotongfa/validtyCommon/validtyCheck',
        name: '机动车驾驶证有效期满换证检查',
        component: () =>
          import ('../views/jiaotongfa/validtyCommon/validtyCheck.vue')
      },
      {
        path: '/jiaotongfa/validtyCommon/validtySub',
        name: '机动车驾驶证有效期满换证提交',
        component: () =>
          import ('../views/jiaotongfa/validtyCommon/validtySub.vue')
      },
      {
        path: '/jiaotongfa/validtyCommon/validtyFees',
        name: '机动车驾驶证有效期满换证缴费',
        component: () =>
          import ('../views/jiaotongfa/validtyCommon/validtyFees.vue')
      },
      {
        path: '/jiaotongfa/validtyCommon/validtySucceed',
        name: '机动车驾驶证有效期满换证完成',
        component: () =>
          import ('../views/jiaotongfa/validtyCommon/validtySucceed.vue')
      }
    ]
  },
  {
    path: '/jiaotongfa/renewalAge',
    name: '机动车驾驶证达到规定年龄换证',
    component: () =>
      import ('../views/jiaotongfa/renewalAge'),
    redirect: '/jiaotongfa/renewalAgeCommon/renewalAgeWindow',
    children: [
      {
        path: '/jiaotongfa/renewalAgeCommon/renewalAgeWindow',
        name: '机动车驾驶证达到规定年龄换证事项窗口',
        component: () =>
          import ('../views/jiaotongfa/renewalAgeCommon/renewalAgeWindow.vue')
      },
      {
        path: '/jiaotongfa/renewalAgeCommon/renewalAgeSub',
        name: '机动车驾驶证达到规定年龄换证提交',
        component: () =>
          import ('../views/jiaotongfa/renewalAgeCommon/renewalAgeSub.vue')
      },
      {
        path: '/jiaotongfa/renewalAgeCommon/renewalAgeFees',
        name: '机动车驾驶证达到规定年龄换证缴费',
        component: () =>
          import ('../views/jiaotongfa/renewalAgeCommon/renewalAgeFees.vue')
      },
      {
        path: '/jiaotongfa/renewalAgeCommon/renewalAgeSucceed',
        name: '机动车驾驶证达到规定年龄换证完成',
        component: () =>
          import ('../views/jiaotongfa/renewalAgeCommon/renewalAgeSucceed.vue')
      }
    ]
  },
//自愿降低准驾车型换证 
  {
    path: '/jiaotongfa/renewalReduce',
    name: '自愿降低准驾车型换证',
    component: () =>
      import ('../views/jiaotongfa/renewalReduce'),
    redirect: '/jiaotongfa/renewalReduceCommon/renewalReduceWindow',
    children: [
      {
        path: '/jiaotongfa/renewalReduceCommon/renewalReduceWindow',
        name: '事项窗口',
        component: () =>
          import ('../views/jiaotongfa/renewalReduceCommon/renewalReduceWindow.vue')
      },
      {
        path: '/jiaotongfa/renewalReduceCommon/renewalReduceSub',
        name: '提交',
        component: () =>
          import ('../views/jiaotongfa/renewalReduceCommon/renewalReduceSub.vue')
      },
      {
        path: '/jiaotongfa/renewalReduceCommon/renewalReduceFees',
        name: '缴费',
        component: () =>
          import ('../views/jiaotongfa/renewalReduceCommon/renewalReduceFees.vue')
      },
      {
        path: '/jiaotongfa/renewalReduceCommon/renewalReduceSucceed',
        name: '完成',
        component: () =>
          import ('../views/jiaotongfa/renewalReduceCommon/renewalReduceSucceed.vue')
      }
    ]
  },
  {
    path: '/jiaotongfa/driverInspect',
    name: '自愿降低准驾车型换证',
    component: () =>
      import ('../views/jiaotongfa/driverInspect'),
    redirect: '/jiaotongfa/driverInspectCommon/driverCheck',
    children: [
      {
        path: '/jiaotongfa/driverInspectCommon/driverCheck',
        name: '事项窗口',
        component: () =>
          import ('../views/jiaotongfa/driverInspectCommon/driverCheck.vue')
      },
      {
        path: '/jiaotongfa/driverInspectCommon/driverSub',
        name: '提交',
        component: () =>
          import ('../views/jiaotongfa/driverInspectCommon/driverSub.vue')
      },
      {
        path: '/jiaotongfa/driverInspectCommon/driverFees',
        name: '缴费',
        component: () =>
          import ('../views/jiaotongfa/driverInspectCommon/driverFees.vue')
      },
      {
        path: '/jiaotongfa/driverInspectCommon/driverSucceed',
        name: '完成',
        component: () =>
          import ('../views/jiaotongfa/driverInspectCommon/driverSucceed.vue')
      }
    ]
  },
]