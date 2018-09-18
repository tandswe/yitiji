export default [{
    path: "/household",
    name: "household",
    component:()=>
    import ('../views/household/household.vue')},
    //身份证有效期换领
    {
        path: "/household/idcardvalidity",
        name: "idcardvalidity",  
        component:()=>
        import ('../views/household/idcardvalidity.vue'),
        redirect: '/idcardvalidityCommon/datacollection',
        children: [
          //数据采集
      {
        path: "/idcardvalidityCommon/datacollection",
        name: "datacollection",
        component:()=>
          import ('../views/household/idcardvalidityCommon/datacollection')
      },
          //数据采集2
          {
            path: "/idcardvalidityCommon/datacollection2",
            name: "datacollection2",
            component:()=>
              import ('../views/household/idcardvalidityCommon/datacollection2')
          },
           //数据采集3
           {
            path: "/idcardvalidityCommon/datacollection3",
            name: "datacollection3",
            component:()=>
              import ('../views/household/idcardvalidityCommon/datacollection3')
          },
          //数据采集4
          {
            path: "/idcardvalidityCommon/datacollection4",
            name: "datacollection4",
            component:()=>
              import ('../views/household/idcardvalidityCommon/datacollection4')
          },
      //资料提交
      {
        path: "/idcardvalidityCommon/material",
        name: "material",
        component:()=>
          import ('../views/household/idcardvalidityCommon/material')
      },
      //资料提交1
      {
        path: "/idcardvalidityCommon/material1",
        name: "material1",
        component:()=>
          import ('../views/household/idcardvalidityCommon/material1')
      },
            //资料提交2
            {
              path: "/idcardvalidityCommon/material2",
              name: "material2",
              component:()=>
                import ('../views/household/idcardvalidityCommon/material2')
            },
      //费用缴纳
      
      {
        path: "/idcardvalidityCommon/expense",
        name: "expense",
        component:()=>
          import ('../views/household/idcardvalidityCommon/expense')
      },
      //费用缴纳2
      {
        path: "/idcardvalidityCommon/expense2",
        name: "expense",
        component:()=>
          import ('../views/household/idcardvalidityCommon/expense2')
      },
       //费用缴纳
      {
        path: "/idcardvalidityCommon/expense3",
        name: "expense",
        component:()=>
          import ('../views/household/idcardvalidityCommon/expense3')
      },
       //费用缴纳4
       {
        path: "/idcardvalidityCommon/expense4",
        name: "expense",
        component:()=>
          import ('../views/household/idcardvalidityCommon/expense4')
      },
      {
        path: "/idcardvalidityCommon/submit",
        name: "submit",//完成
        component:()=>
          import ('../views/household/idcardvalidityCommon/submit')
      }]
  },{
    path: '/policeCertificate',
    name: '无犯罪证明窗口',
    component:()=>
        import ('../views/household/policeCertificate.vue'),
        redirect: '/policeCertificate/policeCertificateWindow',
        children:[
          {
            path:'/policeCertificate/policeCertificateWindow',
            component:()=>
          import ('../views/household/policeCertificateCommon/policeCertificateWindow')
          },
          {
            path:'/policeCertificate/policeCertificateData',
            component:()=>
          import ('../views/household/policeCertificateCommon/policeCertificateData')
          },
          {
            path:'/policeCertificate/policeCertificateSucceed',
            component:()=>
          import ('../views/household/policeCertificateCommon/policeCertificateSucceed')
          }
        ]
  }
]
