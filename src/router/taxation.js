//税务
export default[
    //税务主页 列表选择
    {
      path:'/taxation',
      name:'taxation',
      component:()=>import('../views/taxation/taxation.vue')
    },
    //个人清单打印
    {
        path:'/taxation/individualtaxList',
        name:'individualtaxList',
        component:()=>import('../views/taxation/individualtaxList/listHome.vue'),
        redirect:'/taxation/individualtaxList/listIdcard',
        children:[
            {   //身份认证
                path:'/taxation/individualtaxList/listIdcard',
                name:'taxlistIdcard',
                component:()=>import('../views/taxation/individualtaxList/listIdcard.vue')
            },
            {   //查询清单
                path:'/taxation/individualtaxList/listQuery',
                name:'taxlistQuery',
                component:()=>import('../views/taxation/individualtaxList/listQuery.vue')
            },
            {  //打印
                path:'/taxation/individualtaxList/listPrint',
                name:'taxlistPrint',
                component:()=>import('../views/taxation/individualtaxList/listPrint.vue')
            },
            {   //完成
                path:'/taxation/individualtaxList/listFinish',
                name:'taxlistFinish',
                component:()=>import('../views/taxation/individualtaxList/listFinish.vue')
            },
           
        ]
    },
    //个税完税证明打印
    {
        path:'/taxation/individualtaxProve',
        name:'individualtaxProve',
        component:()=>import('../views/taxation/individualtaxProve/proveHome.vue'),
        redirect:'/taxation/individualtaxProve/proveIdcard',
        children:[
            {   //身份认证
                path:'/taxation/individualtaxProve/proveIdcard',
                name:'proveIdcard',
                component:()=>import('../views/taxation/individualtaxProve/proveIdcard.vue')
            },
            {   //选择时间
                path:'/taxation/individualtaxProve/proveDate',
                name:'proveDate',
                component:()=>import('../views/taxation/individualtaxProve/proveDate.vue')
            },
            {  //选择开具范围
                path:'/taxation/individualtaxProve/proveRange',
                name:'proveRange',
                component:()=>import('../views/taxation/individualtaxProve/proveRange.vue')
            },
            {   //打印
                path:'/taxation/individualtaxProve/provePrint',
                name:'provePrint',
                component:()=>import('../views/taxation/individualtaxProve/provePrint.vue')
            },
            {   //完成
                path:'/taxation/individualtaxProve/proveFinish',
                name:'proveFinish',
                component:()=>import('../views/taxation/individualtaxProve/proveFinish.vue')
            }
           
        ]
    },
    //个人其他税费证明打印
    {
        path:'/taxation/individualtaxOther',
        name:'individualtaxOther',
        component:()=>import('../views/taxation/individualtaxOther/taxotherHome.vue'),
        redirect:'/taxation/individualtaxOther/taxotherIdcard',
        children:[
            {   //身份认证
                path:'/taxation/individualtaxOther/taxotherIdcard',
                name:'taxotherIdcard',
                component:()=>import('../views/taxation/individualtaxOther/taxotherIdcard.vue')
            },
            {   //选择时间
                path:'/taxation/individualtaxOther/taxotherTime',
                name:'taxotherTime',
                component:()=>import('../views/taxation/individualtaxOther/taxotherTime.vue')
            },
            {  //选择开具范围
                path:'/taxation/individualtaxOther/taxotherRange',
                name:'taxotherRange',
                component:()=>import('../views/taxation/individualtaxOther/taxotherRange.vue')
            },
            {   //打印
                path:'/taxation/individualtaxOther/taxotherPrint',
                name:'taxotherPrint',
                component:()=>import('../views/taxation/individualtaxOther/taxotherPrint.vue')
            },
            {   //完成
                path:'/taxation/individualtaxOther/taxotherFinish',
                name:'taxotherFinish',
                component:()=>import('../views/taxation/individualtaxOther/taxotherFinish.vue')
            }
           
        ]
    },
    //车船税交纳
    {
        path:'/taxation/boatcartTax',
        name:'boatcartTax',
        component:()=>import('../views/taxation/boatcartTax/boatcarHome.vue'),
        redirect:'/taxation/boatcartTax/boatcarBusiness',
        children:[
            {   //缴纳选择
                path:'/taxation/boatcartTax/boatcarBusiness',
                name:'boatcarBusiness',
                component:()=>import('../views/taxation/boatcartTax/boatcarBusiness.vue')
            },
            {   //身份认证
                path:'/taxation/boatcartTax/boatcarIdcard',
                name:'boatcarIdcard',
                component:()=>import('../views/taxation/boatcartTax/boatcarIdcard.vue')
            },
            {   //选择交纳车船
                path:'/taxation/boatcartTax/boatcarChoose',
                name:'boatcarChoose',
                component:()=>import('../views/taxation/boatcartTax/boatcarChoose.vue')
            },
            {  //确认交纳金额
                path:'/taxation/boatcartTax/boatcarSum',
                name:'boatcarSum',
                component:()=>import('../views/taxation/boatcartTax/boatcarSum.vue')
            },
            {   //打印
                path:'/taxation/boatcartTax/boatcarPrint',
                name:'boatcarPrint',
                component:()=>import('../views/taxation/boatcartTax/boatcarPrint.vue')
            },
            {   //完成
                path:'/taxation/boatcartTax/boatcarFinish',
                name:'boatcarFinish',
                component:()=>import('../views/taxation/boatcartTax/boatcarFinish.vue')
            }
           
        ]
    },
   

]