
const hindex = () =>import ('../views/housing/hindex')
//选择事项页
export default [{
    //住建-住房公积金缴存信息查询
    path: "/query",
    name: "paquery",
    component:()=>
    import ('../views/housing/quey'),
    redirect: '/query/qu1',
        children: [
      {
        path: "/query/qu1",
        name: "qu1",
        component:()=>
          import ('../views/housing/query/qu1.vue')
      },{
        path: "/query/qu2",
        name: "qu2",
        component:()=>
          import ('../views/housing/query/qu2.vue')
      }]
    },
    {
          //住建-住房公积金缴存明细
        path: "/hand",
        name: "fahand",
        component:()=>
        import ('../views/housing/hand'),
        redirect: '/hand/ha1',
        children: [
          {
            path: "/hand/ha1",
            name: "ha1",
            component:()=>
            import ('../views/housing/hand/ha1.vue')
          },
        {
          path: "/hand/ha2",
          name: "ha2",
          component:()=>
          import ('../views/housing/hand/ha2.vue')
        },
        {
          path: "/hand/ha3",
          name: "ha3",
          component:()=>
          import ('../views//housing/hand/ha3.vue')
         }       
        ]  
      },
      //住房公积金证明打印
      { 
      path: "/houprint",
      name: "pahouprint",
      component:()=>
      import ('../views/housing/houprint'),
      redirect: '/houprint/hp1',
          children: [
        {
          path: "/houprint/hp1",
          name: "hp1",
          component:()=>
            import ('../views/housing/houprint/hp1.vue')
        },{
          path: "/houprint/hp2",
          name: "hp2",
          component:()=>
            import ('../views/housing/houprint/hp2.vue')
        },
        {
          path: "/houprint/hp3",
          name: "hp3",
          component:()=>
            import ('../views/housing/houprint/hp3.vue')
        }]
      },
      {
        //住建-住房公积金缴存信息查询
        path: "/inform",
        name: "painform",
        component:()=>
        import ('../views/housing/infonrm'),
        redirect: '/inform/in1',
            children: [
          {
            path: "/inform/in1",
            name: "in1",
            component:()=>
              import ('../views/housing/inform/in1.vue')
          },{
            path: "/inform/in2",
            name: "qu2",
            component:()=>
              import ('../views/housing/inform/in2.vue')
          }]
        },
      {
        path: '/hindex',
        name: '选择事项页',
        component: hindex
      }
]
