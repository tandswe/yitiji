const judicial = () =>import ('../views/judicial/judicial')
export default [
    {
        path: '/judicial',
        name: '司法选择页',
        component: judicial
      },
//法律文书查询  
    {
  path: "/enquiry/enquiry",
  name: "/jiaotong/faenquiry",
  component:()=>
  import ('../views/judicial/enquiry'),
  redirect: '/enquiry/enquiry/equiry1',
  children: [
    {
      path: "/enquiry/enquiry/equiry1",
      name: "equiry1",
      component:()=>
      import ('../views/judicial/enquiry/equiry1.vue')
    },
  {
    path: "/enquiry/enquiry/equiry2",
    name: "equiry2",
    component:()=>
    import ('../views/judicial/enquiry/equiry2.vue')
  },
  {
    path: "/enquiry/enquiry/equiry3",
    name: "equiry3",
    component:()=>
    import ('../views/judicial/enquiry/equiry3.vue')
   }
  ]
},
//法律援助
{
  path: "/judicial/assistance",
  name: "/assistance",
  component:()=>
  import ('../views/judicial/assistance.vue'),
  redirect: '/judicial/assistance/assis1',
  children: [
    {
      path: "/judicial/assistance/assis1",
      name: "assis1",
      component:()=>
      import ('../views/judicial/assistance/assis1.vue')
    },
  {
    path: "/judicial/assistance/assis2",
    name: "assis2",
    component:()=>
    import ('../views/judicial/assistance/assis2.vue')
  },
  {
    path: "/judicial/assistance/assis3",
    name: "assis3",
    component:()=>
    import ('../views/judicial/assistance/assis3.vue')
   }
  ]  
},
   //律师有偿服务
    {
      path: "/judicial/paidservice",
      name: "/paidservice",
      component:()=>
      import ('../views/judicial/paidservice'),
      redirect: '/paidservice/pas1',
      children: [
        {
          path: "/paidservice/pas1",
          name: "equiry1",
          component:()=>
          import ('../views/judicial/paidservice/pas1.vue')
        },
      {
        path: "/paidservice/pas2",
        name: "equiry2",
        component:()=>
        import ('../views/judicial/paidservice/pas2.vue')
      },
      {
        path: "/paidservice/pas3",
        name: "equiry3",
        component:()=>
        import ('../views/judicial/paidservice/pas3.vue')
       },
       {
        path: "/paidservice/pas4",
        name: "pas4",
        component:()=>
        import ('../views/judicial/paidservice/pas4.vue')
       }
      ]  
    }
]