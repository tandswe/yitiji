// 申领=请补领
const residenceApplication = () =>import ('../views/residence/residenceApplication')
const residenceBusiness = () =>import ('../views/residence/residenceApplicationCommon/residenceBusiness')
const residenceData = () =>import ('../views/residence/residenceApplicationCommon/residenceData')
const residenceFlie = () =>import ('../views/residence/residenceApplicationCommon/residenceFlie')
const residenceSubmit = () =>import ('../views/residence/residenceApplicationCommon/residenceSubmit')
// 申报居住证
const residenceProposer = () =>import ('../views/residence/residenceProposer')
const residenceAudit = () =>import ('../views/residence/residenceProposerCommon/residenceAudit')
const residenceMaterial = () =>import ('../views/residence/residenceProposerCommon/residenceMaterial')
const residenceQualification = () =>import ('../views/residence/residenceProposerCommon/residenceQualification')
const residenceUploading = () =>import ('../views/residence/residenceProposerCommon/residenceUploading')
// 申领居住证
const residenceApply = ()=>import('../views/residence/residenceApply')
const residenceApplyAudit = () =>import ('../views/residence/residenceApplyCommon/residenceApplyAudit')
const residenceApplyMaterial = () =>import ('../views/residence/residenceApplyCommon/residenceApplyMaterial')
const residenceApplyQualification = () =>import ('../views/residence/residenceApplyCommon/residenceApplyQualification')
const residenceApplyUploading = () =>import ('../views/residence/residenceApplyCommon/residenceApplyUploading')
const residenceApplyCondition = () =>import ('../views/residence/residenceApplyCommon/residenceApplyCondition')

//补领居住证
const residenceReplace = ()=>import('../views/residence/residenceReplace')
const residenceCheck = () =>import ('../views/residence/residenceReplaceCommon/residenceCheck')
const residenceMaterials = () =>import ('../views/residence/residenceReplaceCommon/residenceMaterials')
const residenceUpload = () =>import ('../views/residence/residenceReplaceCommon/residenceUpload')
const residenceAudits = () =>import ('../views/residence/residenceReplaceCommon/residenceAudits')
// 签注居住证


export default [{
  path: '/residenceApplication',
  name: '居住证申请补领',
  component: residenceApplication,
  redirect: '/residenceBusiness',
  children: [
    {
      path: '/residenceBusiness',
      name: '居住证申请补领业务',
      component: residenceBusiness,
    },{
      path: '/residenceData',
      name: '居住证申请补领资料',
      component: residenceData,
    },
    {
      path: '/residenceFlie',
      name: '居住证申请补领文件',
      component: residenceFlie,
    },
    {
      path: '/residenceSubmit',
      name: '居住证申请补领提交',
      component: residenceSubmit,
    }
  ]
},
{
  path: '/residenceProposer',
  name: '申报居住证',
  component: residenceProposer,
  redirect: '/residenceAudit',
  children:[
    {
      path: '/residenceAudit',
      name: '申报居住证资格',
      component: residenceAudit,
    },
    {
      path: '/residenceMaterial',
      name: '申报居住证资料',
      component: residenceMaterial,
    },
    {
      path: '/residenceQualification',
      name: '申报居住证上传文件',
      component: residenceQualification,
    },
    {
      path: '/residenceUploading',
      name: '申报居住证提交审核',
      component: residenceUploading,
    },
  ]
},
{
  path: '/residenceApply',
  name: '申领居住证',
  component: residenceApply,
  redirect: '/residenceApplyAudit',
  children:[
    {
      path: '/residenceApplyAudit',
      name: '申领居住证资格',
      component: residenceApplyAudit,
    },
    {
      path: '/residenceApplyMaterial',
      name: '申领居住证资料',
      component: residenceApplyMaterial,
    },
    {
      path: '/residenceApplyQualification',
      name: '申领居住上传文件',
      component: residenceApplyQualification,
    },
    {
      path: '/residenceApplyUploading',
      name: '申领居住提交审核',
      component: residenceApplyUploading,
    },
    {
      path: '/residenceApplyCondition',
      name: '申领居住证件条件',
      component: residenceApplyCondition
    }
  ]
},
{
  path: '/residenceReplace',
  name: '补领居住',
  component: residenceReplace,
  redirect: '/residenceReplace/residenceCheck',
  children:[
    {
      path: '/residenceReplace/residenceCheck',
      name: '补领居住证资格',
      component: residenceCheck,
    },
    {
      path: '/residenceReplace/residenceMaterials',
      name: '补领居住证资料',
      component: residenceMaterials,
    },
    {
      path: '/residenceReplace/residenceUpload',
      name: '补领居住上传文件',
      component: residenceUpload,
    },
    {
      path: '/residenceReplace/residenceAudits',
      name: '补领居住提交审核',
      component: residenceAudits,
    },
  
  ]
},
{
  path: '/endorsementres',
  name: '签注居住证',
  component:()=>import ('../views/residence/endorsementres'),
  redirect: '/endorsementres/residenceApplyAudit',
  children:[
    {
      path: '/endorsementres/residenceApplyAudit',
      name: '选择办理方式',
      component:()=>import ('../views/residence/endorsementres/residenceApplyAudit'),
    },
    {
      path: '/endorsementres/residenceApplyMaterial',
      name: '身份证录入',
      component:()=>import ('../views/residence/endorsementres/residenceApplyMaterial'),
    },
    {
      path: '/endorsementres/residenceApplyQualification',
      name: '面部特征识别',
      component:()=>import ('../views/residence/endorsementres/residenceApplyQualification'),
    },
    {
      path: '/endorsementres/residenceApplyUploading',
      name: '材料录入',
      component:()=>import ('../views/residence/endorsementres/residenceApplyUploading'),
    },{
      path:'/endorsementres/residenceEndorsement',
      name:'签注',
      component:()=>import('../views/residence/endorsementres/residenceEndorsement')
    }
  ]
},
]