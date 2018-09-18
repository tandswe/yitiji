export default [{
    path: "/education",//教育主页
    name: "education",
    component:()=>
    import ('../views/education/education.vue'),  
  },
  {
    path: "/education/scoreInquiry",//高考成绩查询
    name: "scoreInquiry",
    component:()=>
    import ('../views/education/scoreInquiry/scoreInquiry.vue'),      
  },
  // {
  //   path: "/education/inquiryTime",//选择时间
  //   name: "inquiryTime",
  //   component:()=>
  //   import ('../views/education/scoreInquiry/inquiryTime.vue'),      
  // },
  {
    path: "/education/scoreHome/education/scoreHome",//跳转页
    name: "scoreHome",
    component:()=>
    import ('../views/education/scoreInquiry/scoreHome.vue'), 
    redirect:'/education/scoreInquiry/scoreIdScan', 
    children:[
        {
          path:'/education/scoreInquiry/scoreIdScan',//身份证扫描
          name:'scoreIdScan',
          component:()=>import ('../views/education/scoreInquiry/scoreIdScan.vue')
        },
        {
          path:'/education/scoreInquiry/admissionTicket',//输入准考证号
          name:'admissionTicket',
          component:()=>import ('../views/education/scoreInquiry/admissionTicket.vue')
        },
        {
          path:'/education/scoreInquiry/scoreQuery',//查询成绩
          name:'scoreQuery',
          component:()=>import ('../views/education/scoreInquiry/scoreQuery.vue')
        },
        {
          path:'/education/scoreInquiry/scoreFinish',//完成
          name:'scoreFinish',
          component:()=>import ('../views/education/scoreInquiry/scoreFinish.vue')
        },
      ]    
  },
  {
    path: "/education/educationTypeHome",//跳转页
    name: "educationTypeHome",
    component:()=>
    import ('../views/education/educationType/educationTypeHome.vue'), 
    redirect:'/education/educationType/educationType', 
    children:[
        {
          path:'/education/educationType/educationType',//选择学历类型
          name:'educationType',
          component:()=>import ('../views/education/educationType/educationType.vue')
        },
        {
          path:'/education/educationType/authentication',//身份认证
          name:'authentication',
          component:()=>import ('../views/education/educationType/authentication')
        },
        {
          path:'/education/educationType/educationCertification',//学历认证绑定
          name:'educationCertification',
          component:()=>import ('../views/education/educationType/educationCertification.vue')
        },
        {
          path:'/education/educationType/educationPrint',//打印
          name:'educationPrint',
          component:()=>import ('../views/education/educationType/educationPrint.vue')
        },
        {
          path:'/education/educationType/educationFinish',//完成
          name:'educationFinish',
          component:()=>import ('../views/education/educationType/educationFinish.vue')
        }
      ]    
  }
]