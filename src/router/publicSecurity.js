export default [
  {
    path:"/publicSecurityPage",
    name: "治安局",
    component:()=>import('../views/publicSecurity/publicSecurityPage.vue')
  },
  {
    path: "/publicSecurity/huosehold",
    name: "户籍证明",
    component:()=>
    import ('../views/publicSecurity/huosehold.vue'),
    redirect: '/huosehold/householdWindow',
        children: [
      {
        path: "/huosehold/householdWindow",
        name: "户籍证明窗口",
        component:()=>
          import ('../views/publicSecurity/huoseholdCommon/householdWindow.vue')
        },
        {
        path: "/huosehold/householdSubmit",
        name: "户籍证明提交",
        component:()=>
          import ('../views/publicSecurity/huoseholdCommon/householdSubmit.vue')
         },
         {
        path: "/huosehold/householdSucceed",
        name: "户籍证明完成",
        component:()=>
          import ('../views/publicSecurity/huoseholdCommon/householdSucceed.vue')
          }   
      ]
  },{
    path: "/publicSecurity/AccountCancellation",
    name: "户籍销毁",
    component:()=>import ('../views/publicSecurity/AccountCancellation.vue'),
    redirect: '/AccountCancellation/accountWindow',
    children:[
      {
        path: "/AccountCancellation/accountWindow",
        name: "户籍销毁窗口",
        component:()=>
          import ('../views/publicSecurity/accountCommon/accountWindow.vue')
      },
      {
      path: "/AccountCancellation/accountSubmit",
      name: "户籍销毁提交",
      component:()=>
        import ('../views/publicSecurity/accountCommon/accountSubmit.vue')
       },
       {
      path: "/AccountCancellation/accountSucceed",
      name: "户籍销毁完成",
      component:()=>
        import ('../views/publicSecurity/accountCommon/accountSucceed.vue')
        }
    ]
  },
  { //公民身份号码变更更正证明
    path: "/publicSecurity/cardid",
    name: "身份号码变更更正证明",
    component:()=>import ('../views/publicSecurity/cardid'),
    redirect: '/publicSecurity/ca1',
    children:[
      {
        path: "/publicSecurity/ca1",
        name: "事项窗口",
        component:()=>
          import ('../views/publicSecurity/cardID/ca1.vue')
      },
      {
      path: "/publicSecurity/ca2",
      name: "资料提交",
      component:()=>
        import ('../views/publicSecurity/cardID/ca2.vue')
       },
       {
      path: "/publicSecurity/ca3",
      name: "完成",
      component:()=>
        import ('../views/publicSecurity/cardID/ca3.vue')
        }
    ]
  },
  { //户口登记项目变更更正证明业务
    path: "/publicSecurity/certificateid",
    name: "身份号码变更更正证明",
    component:()=>import ('../views/publicSecurity/certificateid'),
    redirect: '/publicSecurity/fica1',
    children:[
      {
        path: "/publicSecurity/fica1",
        name: "事项窗口",
        component:()=>
          import ('../views/publicSecurity/certificateID/fica1.vue')
      },
      {
      path: "/publicSecurity/fica2",
      name: "资料提交",
      component:()=>
        import ('../views/publicSecurity/certificateID/fica2.vue')
       },
       {
      path: "/publicSecurity/fica3",
      name: "完成",
      component:()=>
        import ('../views/publicSecurity/certificateID/fica3.vue')
        }
    ]
  },
  { //亲属关系证明业务
    path: "/publicSecurity/relationship",
    name: "亲属关系证明业务",
    component:()=>import ('../views/publicSecurity/relationship'),
    redirect: '/publicSecurity/pl1',
    children:[
      {
        path: "/publicSecurity/pl1",
        name: "选择办理方式",
        component:()=>
          import ('../views/publicSecurity/relationship/pl1.vue')
      },
      {
      path: "/publicSecurity/pl2",
      name: "身份证录入",
      component:()=>
        import ('../views/publicSecurity/relationship/pl2.vue')
       },
       {
        path: "/publicSecurity/pl3",
        name: "户口本录入",
        component:()=>
          import ('../views/publicSecurity/relationship/pl3.vue')
         },
         {
          path: "/publicSecurity/pl4",
          name: "材料录入",
          component:()=>
            import ('../views/publicSecurity/relationship/pl4.vue')
           },
          {
          path: "/publicSecurity/pl5",
          name: "完成",
          component:()=>
            import ('../views/publicSecurity/relationship/pl5.vue')
            }
        ]
  }
]