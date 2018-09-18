export default [
  {
    path: "/pmUion/pmUionHome",
    name: "pmUionHome",
    component: () =>
      import ('../views/pmUion/pmUionHome.vue'),
    redirect: '/pmUion/pmUionHomeSub',
    children: [
      {
        path: "/pmUion/pmUionHomeSub",
        name: "gaStep0",
        component: () =>
          import ('../views/pmUion/pmUionCommon/pmUionHomeSub.vue')
      }
    ]
  },
  //省妇联
  {
    path: "/pmUion/CJRZSFn",
    name: "CJRZSFn",
    component: () =>
      import ('../views/pmUion/CJRZSFn.vue'),
    children: [
      {
        path: "/pmUion/CJStep0",
        name: "CJStep0",
        component: () =>
          import ('../views/pmUion/pmUionCommon/CJStep0.vue')
      },
      {
        path: "/pmUion/CJStep1",
        name: "CJStep1",
        component: () =>
          import ('../views/pmUion/pmUionCommon/CJStep1.vue')
      },
      {
        path: "/pmUion/CJStep2",
        name: "CJStep2",
        component: () =>
          import ('../views/pmUion/pmUionCommon/CJStep2.vue')
      }
    ]
  },
  //残疾人证信息变更 @
  {
    path: "/pmUion/CJRZSChangeFn",
    name: "CJRZSChangeFn",
    component: () =>
      import ('../views/pmUion/CJRZSChangeFn.vue'),
    redirect: '/pmUion/infoChange/window',
    children: [
      {
        path: "/pmUion/infoChange/window",
        name: "CJRZSChangeStep0",
        component: () =>
          import ('../views/pmUion/pmUionCommon/infoChange/window')
      },
      {
        path: "/pmUion/infoChange/sub",
        name: "CJRZSChangeStep1",
        component: () =>
          import ('../views/pmUion/pmUionCommon/infoChange/sub')
      },
      {
        path: "/passport/infoChange/finish",
        name: "CJRZSChangeStep1",
        component: () =>
          import ('../views/pmUion/pmUionCommon/infoChange/finish')
      }
    ]
  },
  //残疾人证申请办理
  {
    path: "/pmUion/CJRZBBFn",
    name: "CJRZBBFn",
    component: () =>
      import ('../views/pmUion/CJRZBBFn.vue'),
    children: [
      {
        path: "/pmUion/apply/CJRZBBTips",
        name: "CJRZBBTips",
        component: () =>
          import ('../views/pmUion/pmComponents/pmbox')
      },
      {
        path: "/pmUion/apply/informationSubmission",
        name: "informationSubmission",
        component: () =>
          import ('../views/pmUion/pmUionCommon/apply/informationSubmission.vue')

      },
      {
        path: "/pmUion/apply/finish",
        name: "applyfinish",
        component: () =>
          import ('../views/pmUion/pmUionCommon/apply/finish.vue')
      },
    ]
  },
  //残疾人证补办
  {
    path: "/pmUion/CJRapply",
    name: "CJRZBBFn",
    component: () =>
      import ('../views/pmUion/CJRapply.vue'),
    redirect: '/pmUion/reapply/window',
    children: [
      {
        path: "/pmUion/reapply/window",
        name: "CJRZBBTips",
        component: () =>
          import ('../views/pmUion/pmUionCommon/reapply/window.vue')
      },
      {
        path: "/pmUion/reapply/sub",
        name: "informationSubmission",
        component: () =>
          import ('../views/pmUion/pmUionCommon/reapply/sub.vue')

      },
      {
        path: "/pmUion/reapply/finish",
        name: "applyfinish",
        component: () =>
          import ('../views/pmUion/pmUionCommon/reapply/finish.vue')

      },


    ]
  },
  //南粤扶残助学
  {
    path: '/pmUion/supportAidStudy',
    name: 'supportAidStudy',
    component: () =>
      import ('../views/pmUion/supportAidStudy.vue'),
    redirect: '/pmUion/poverty/supAidTips',
    children: [
      {
        path: "/pmUion/poverty/supAidTips",
        name: "supwindow",
        component: () =>
          import ('../views/pmUion/pmUionCommon/poverty/window.vue')
      }, {
        path: "/pmUion/poverty/supAidCardCheck",
        name: "supsub",
        component: () =>
          import ('../views/pmUion/pmUionCommon/poverty/sub.vue')
      }, {
        path: '/pmUion/poverty/supAidFinished',
        name: "supfinish",
        component: () =>
          import ('../views/pmUion/pmUionCommon/poverty/finish.vue')
      }]
  },
  //残疾人证注销*
  {
    path: '/pmUion/lisenceCancellation',
    name: 'supportAidStudy',
    component: () =>
      import ('../views/pmUion/lisenceCancellation.vue'),
    redirect: "/pmUion/logoff/window",
    children: [{
      path: "/pmUion/logoff/window",
      name: "lsCancelTips",
      component: () =>
        import ('../views/pmUion/pmUionCommon/logoff/window')
    }, {
      path: '/pmUion/logoff/sub',
      name: "lsCancelSubmission",
      component: () =>
        import ('../views/pmUion/pmUionCommon/logoff/sub')
    }, {
      path: '/pmUion/logoff/finish',
      name: "lsCancelFinished",
      component: () =>
        import ('../views/pmUion/pmUionCommon/logoff/finish')
    }]
  }
]
