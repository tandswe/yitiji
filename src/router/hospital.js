export default [{
      path: "/hospital/hospitalFn",
      name: "hospitalFn",
      component:()=>
      import ('../views/hospital/hospitalFn.vue'),
      redirect: '/hospital/hospitalSearch',
  		children: [
	    {
	      path: "/hospital/hospitalSearch",
	      name: "hospitalSearch",
	      component:()=>
	    	import ('../views/hospital/hospitalCommon/hospitalSearch.vue')
		    }]
    }
]
