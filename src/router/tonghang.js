export default [{
    path: "/tonghangyewu/zongye",
    name: "zongye",
    component:()=>
    import ('../views/tonghangyewu/zongye.vue'),
    redirect: '/tonghangyewu/buzhou/tong',
        children: [
      {
        path: "/tonghangyewu/buzhou/tong",
        name: "tong",
        component:()=>
          import ('../views/tonghangyewu/buzhou/tong.vue')
        },
        {
        path: "/tonghangyewu/buzhou/caiji",
        name: "caiji",
        component:()=>
          import ('../views/tonghangyewu/buzhou/caiji.vue')
         },
         {
        path: "/tonghangyewu/ziliao",
        name: "ziliao",
        component:()=>
          import ('../views/tonghangyewu/buzhou/ziliao.vue')
          },
          {
        path: "/tonghangyewu/jiaona",
        name: "jiaona",
        component:()=>
             import ('../views/tonghangyewu/buzhou/jiaona.vue')
            }, {
        path: "/tonghangyewu/wancheng",
        name: "wancheng",
        component:()=>
             import ('../views/tonghangyewu/buzhou/wancheng.vue')
            }   
      ]
  }
]