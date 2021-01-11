import router from "./router";

router.beforeEach( (to,from,next) => {
  console.log(to.path+"------"+from.path);
  if (to.matched.some(record => record.meta.requireAuth)){
    const token = localStorage.getItem("token")
    if(token){
      if (to.path !== '/login'){
        next()
      }
    }else{
      next( {
        path: '/login'
      })
    }
  }else{
    next()
  }
}  )