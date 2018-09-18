const peoplePassSafeguard = ()=>import('../views/peoplePass/peoplePassSafeguard')
const safeguardEntrance = ()=>import('../views/peoplePass/safeguardEntrance')
const safeguardLogin = ()=>import('../views/peoplePass/peopleCommon/safeguardLogin')
const safeguardScan = ()=>import('../views/peoplePass/peopleCommon/safeguardScan')
const safeguardAccredit = ()=>import('../views/peoplePass/peopleCommon/safeguardAccredit')
const safeguardContact = ()=>import('../views/peoplePass/peopleCommon/safeguardContact')
// 高龄津贴
const advancedEntrance = ()=>import('../views/peoplePass/advancedEntrance')
const advanceLogin = ()=>import('../views/peoplePass/peopleCommon/advanceLogin')
const advancedScan = ()=>import('../views/peoplePass/peopleCommon/advancedScan')
const advancedAllowance = ()=>import('../views/peoplePass/peopleCommon/advancedAllowance')
const advancedOpen = ()=>import('../views/peoplePass/peopleCommon/advancedOpen')
const advancedContact = ()=>import('../views/peoplePass/peopleCommon/advancedContact')
// 老人社保
const socialEntrance = ()=>import('../views/peoplePass/socialEntrance')
const socialLogin = ()=>import('../views/peoplePass/peopleCommon/socialLogin')
const socialScan = ()=>import('../views/peoplePass/peopleCommon/socialScan')
const socialAccredit = ()=>import('../views/peoplePass/peopleCommon/socialAccredit')
const socialContact = ()=>import('../views/peoplePass/peopleCommon/socialContact')
export default[
    {
        path: '/safeguardEntrance',
        name: '最低保障',
        component: safeguardEntrance,
        redirect: '/safeguardEntrance/safeguardLogin',
        children:[
            {
                path:'/safeguardEntrance/safeguardLogin',
                name: '最低保障身份证登陆',
                component: safeguardLogin
            },
            {
                path:'/safeguardEntrance/safeguardScan',
                name: '最低保障户口本扫描',
                component: safeguardScan
            },
            {
                path:'/safeguardEntrance/safeguardAccredit',
                name: '最低保障经济授权',
                component: safeguardAccredit
            },
            {
                path:'/safeguardEntrance/safeguardContact',
                name: '最低保障联系方式',
                component: safeguardContact
            }
        ]
    },{
        path:'/peoplePassSafeguard',
        name: 'safeguardPassPage',
        component: peoplePassSafeguard
    },
    {
        path: '/advancedEntrance',
        name: '高龄津贴',
        component: advancedEntrance,
        redirect: '/advancedEntrance/advanceLogin',
        children:[
            {
                path:'/advancedEntrance/advanceLogin',
                name: '高龄津贴身份证登陆',
                component: advanceLogin
            },
            {
                path:'/advancedEntrance/advancedScan',
                name: '高龄津贴户口本扫描',
                component: advancedScan
            },
            {
                path:'/advancedEntrance/advancedAllowance',
                name: '高龄津贴津贴',
                component: advancedAllowance
            },
            {
                path:'/advancedEntrance/advancedOpen',
                name: '高龄津贴开户',
                component: advancedOpen
            },
            {
                path:'/advancedEntrance/advancedContact',
                name: '高龄津贴联系方式',
                component: advancedContact
            }
        ]
    },
    {
        path: '/socialEntrance',
        name: '老人社保',
        component: socialEntrance,
        redirect: '/socialEntrance/socialLogin',
        children:[
            {
                path:'/socialEntrance/socialLogin',
                name: '老人社保身份证登陆',
                component: socialLogin
            },
            {
                path:'/socialEntrance/socialScan',
                name: '老人社保户口本扫描',
                component: socialScan
            },
            {
                path:'/socialEntrance/socialAccredit',
                name: '老人社保经济授权',
                component: socialAccredit
            },
            {
                path:'/socialEntrance/socialContact',
                name: '老人社保联系方式',
                component: socialContact
            }
        ]
    },

    //特困人员供养申请家庭经济状况核对查询服务
    {
        path: "/peoplePass/exceptional",//跳转页
        name: "exceptional",
        component:()=>
        import ('../views/peoplePass/exceptional'), 
        redirect:'/education/exceptional/window', 
        children:[
            {
              path:'/education/exceptional/window',
              name:'excewindow',
              component:()=>import ('../views/peoplePass/exceptional/window')
            },
            {
                path:'/education/exceptional/sub',
                name:'excesub',
                component:()=>import ('../views/peoplePass/exceptional/sub')
              },
              {
                path:'/education/exceptional/connent',
                name:'exceconnent',
                component:()=>import ('../views/peoplePass/exceptional/connent')
              },
              {
                path:'/education/exceptional/finish',
                name:'excefinish',
                component:()=>import ('../views/peoplePass/exceptional/finish')
              },
      
          ]    
      },
       //困难残疾人生活补贴
      {
        path: "/peoplePass/exceptional",//跳转页
        name: "exceptional",
        component:()=>
        import ('../views/peoplePass/exceptional'), 
        redirect:'/education/exceptional/window', 
        children:[
            {
              path:'/education/exceptional/window',
              name:'excewindow',
              component:()=>import ('../views/peoplePass/exceptional/window')
            },
            {
                path:'/education/exceptional/sub',
                name:'excesub',
                component:()=>import ('../views/peoplePass/exceptional/sub')
              },
              {
                path:'/education/exceptional/connent',
                name:'exceconnent',
                component:()=>import ('../views/peoplePass/exceptional/connent')
              },
              {
                path:'/education/exceptional/finish',
                name:'excefinish',
                component:()=>import ('../views/peoplePass/exceptional/finish')
              },
      
          ]    
      },
       //重度残疾人护理
       {
        path: "/peoplePass/severdisability",//跳转页
        name: "severdisability",
        component:()=>
        import ('../views/peoplePass/severdisability'), 
        redirect:'/education/peopleCommon/severLogin', 
        children:[
            {
              path:'/education/peopleCommon/severLogin',
              name:'exceseverLogin',
              component:()=>import ('../views/peoplePass/peopleCommon/severLogin')
            },
            {
                path:'/education/peopleCommon/severID',
                name:'exceseverID',
                component:()=>import ('../views/peoplePass/peopleCommon/severID')
              },
              {
                path:'/education/peopleCommon/severMaterials',
                name:'exceseverMaterials',
                component:()=>import ('../views/peoplePass/peopleCommon/severMaterials')
              },
              {
                path:'/education/peopleCommon/severRegkstered',
                name:'exceseverRegkstered',
                component:()=>import ('../views/peoplePass/peopleCommon/severRegkstered')
              },
              {
                path:'/education/peopleCommon/severSub',
                name:'exceseverSub',
                component:()=>import ('../views/peoplePass/peopleCommon/severSub')
              },
      
          ]    
      }

]