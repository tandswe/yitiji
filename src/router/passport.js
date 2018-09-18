export default [{
  path: '/passport/passportApplication',
  name: 'passportApplication',
  component: () =>
    import ('../views/passport/passportApplication.vue'),
  redirect: '/passport/gaStep0',
  children: [
    {
      path: '/passport/gaStep0',
      name: 'gaStep0',
      component: () =>
        import ('../views/passport/passportCommon/gaStep0.vue')
    },
    {
      path: '/passport/gaStep1',
      name: 'gaStep1',
      component: () =>
        import ('../views/passport/passportCommon/gaStep1.vue')
    },
    {
      path: '/passport/gaStep2',
      name: 'gaStep2',
      component: () =>
        import ('../views/passport/passportCommon/gaStep2.vue'),
      children: [
        {
          path: 'pay-type-choose',
          name: 'payTypeChoose',
          component: () => import('../views/pay/PayTypeChoose')
        },
        {
          path: 'weixin-pay',
          name: 'weixinPay',
          component: () => import('../views/pay/WeixinPay')
        },
        {
          path: 'ali-pay',
          name: 'aliPay',
          component: () => import('../views/pay/AliPay')
        },
        {
          path: 'band-pay',
          name: 'bandPay',
          component: () => import('../views/pay/BandPay')
        },
      ]
    },
    {
      path: '/passport/gaStep3',
      name: 'gaStep3',
      component: () =>
        import ('../views/passport/passportCommon/gaStep3.vue')
    }
  ]
}]
