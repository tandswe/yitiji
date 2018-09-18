//社保打印
const socialsecurity = () =>import ('../views/socialsecurity/socailprint/socialsecurity')
const step1 = () =>import ('../views/socialsecurity/socailprint/socialsecurityStep/businessChoice')
const step2 = () =>import ('../views/socialsecurity/socailprint/socialsecurityStep/socialsecurityLogin')
const step3 = () =>import ('../views/socialsecurity/socailprint/socialsecurityStep/socialsecurityPrint')
const step4 = () =>import ('../views/socialsecurity/socailprint/socialsecurityStep/step4')

//endowment 养老保险
const endowment = () =>import ('../views/socialsecurity/endowment/endowment')
const enStep1 = () =>import ('../views/socialsecurity/endowment/enStep/enInfo.vue')
const enStep2 = () =>import ('../views/socialsecurity/endowment/enStep/enScan.vue')
const enStep3 = () =>import ('../views/socialsecurity/endowment/enStep/enShoot.vue')
const enStep4 = () =>import ('../views/socialsecurity/endowment/enStep/enFinish.vue')

//社保打印的其他页面--社保医疗保险查询
const designatedHospitals = () =>import ('../views/socialsecurity/designatedhospitals/designatedHospitals')
const designstipSearch = () =>import ('../views/socialsecurity/designatedhospitals/designstip/designstipSearch')
export default [
  //社保打印
  {
  path: '/socialsecurity',
  name: 'residenceApplication',
  component: socialsecurity,
  redirect: '/socialsecurity/businessChoice',
  children: [
    {
      path: '/socialsecurity/businessChoice',
      name: 'step1',
      component: step1,
    },{
      path: '/socialsecurity/socialsecurityLogin',
      name: 'step2',
      component: step2,
    },
    {
      path: '/socialsecurity/socialsecurityPrint',
      name: 'step3',
      component: step3,
    },
    {
      path: '/socialsecurity/step4',
      name: 'step4',
      component: step4,
    }
  ]
},
//endowment 养老保险
{
    path: '/endowment',
    name: 'endowment',
    component: endowment,
    redirect: '/endowment/enInfo',
    children: [
      {
        path: '/endowment/enInfo',
        name: 'enInfo',
        component:enStep1,
      },{
        path: '/endowment/enScan',
        name: 'enScan',
        component: enStep2,
      },
      {
        path: '/endowment/enShoot',
        name: 'enShoot',
        component: enStep3,
      },
      {
        path: '/endowment/enFinish',
        name: 'enFinish',
        component: enStep4,
      }
    ]
},
//社保医疗保险查询 --- 暂时放在这里
{
  path: '/designatedHospitals',
  name: 'designatedhospitals',
  component: designatedHospitals,
  redirect: '/designatedHospitals/designstipSearch',
    children: [
      {
        path: '/designatedHospitals/designstipSearch',
        name: 'designstipSearch',
        component:designstipSearch,
      }]

},





]