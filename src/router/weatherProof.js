const weatherProofPage = ()=>import('../views/weatherProof/weatherProofPage')
const weatherEntrance = ()=>import('../views/weatherProof/weatherProofCommon/weatherEntrance')
const weatherData = ()=>import('../views/weatherProof/weatherProofCommon/weatherData')
const weatherSucceed = ()=>import('../views/weatherProof/weatherProofCommon/weatherSucceed')
const weatherWindow = ()=>import('../views/weatherProof/weatherProofCommon/weatherWindow')
export default[
    {
        path: '/weatherEntrance',
        name: '打印气象',
        component: weatherEntrance,
        redirect: '/weatherEntrance/weatherWindow',
        children:[
            {
                path:'/weatherEntrance/weatherWindow',
                name: '事项窗口',
                component: weatherWindow
            },
            {
                path:'/weatherEntrance/weatherData',
                name: '资料提交',
                component: weatherData
            },
            {
                path:'/weatherEntrance/weatherSucceed',
                name: '完成',
                component: weatherSucceed
            }
        ]
    },{
        path:'/weatherProofPage',
        name: 'weatherProofPage',
        component: weatherProofPage
    }
]