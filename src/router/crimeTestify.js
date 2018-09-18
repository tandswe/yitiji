export default [{
      path: "/crimeTestifyFn",
      name: "crimeTestifyFn",
      component:()=>
      import ('../views/crimeTestify/crimeTestifyFn.vue'),
      redirect: '/crimeTestify/crimeTStep0',
  		children: [
	    {
	      path: "/crimeTestify/crimeTStep0",
	      name: "crimeTStep0",
	      component:()=>
	    	import ('../views/crimeTestify/crimeTCommon/crimeTStep0.vue')
		  },
		  {
	      path: "/crimeTestify/crimeTStep1",
	      name: "crimeTStep1",
	      component:()=>
	    	import ('../views/crimeTestify/crimeTCommon/crimeTStep1.vue')
		   },
		   {
	      path: "/crimeTestify/crimeTStep2",
	      name: "crimeTStep2",
	      component:()=>
	    	import ('../views/crimeTestify/crimeTCommon/crimeTStep2.vue')
		    }
	    ]
    }
]