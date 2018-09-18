const entryLoginPage = ()=>import('../views/entryLogin/entryLoginPage')
const entryLogin = ()=>import('../views/entryLogin/entryLoginCommon/entryLogin')
const entryAttch = ()=>import('../views/entryLogin/entryLoginCommon/entryAttch')
const entryPrint = ()=>import('../views/entryLogin/entryLoginCommon/entryPrint')
const entrySucceed = ()=>import('../views/entryLogin/entryLoginCommon/entrySucceed')
export default[
    {
        path: '/entryLoginPage',
        name: '通行证登陆',
        component: entryLoginPage,
        redirect: '/entryLogin',
        children:[
            {
                path:'/entryLogin',
                name: '港澳登陆',
                component: entryLogin
            },
            {
                path:'/entryAttch',
                name: '港澳注册',
                component: entryAttch
            },
            {
                path:'/entryPrint',
                name: '港澳打印',
                component: entryPrint
            },
            {
                path:'/entrySucceed',
                name: '港澳成功',
                component: entrySucceed
            }
        ]
    }
]