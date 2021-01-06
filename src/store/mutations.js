const mutations = {
  SET_TOKEN : (state,token) => {
    state.token = token
    localStorage.setItem("token",token)
  },
  SET_USERINFO : (state,userInfo) => {
    state.userInfo = userInfo
    sessionStorage.setItem("userInfo",JSON.stringify(userInfo))
  },
  REMOVE_INFO : (state) => {
    state.token = ''
    state.userInfo = {}
    localStorage.setItem("token",'')
    sessionStorage.setItem("userInfo",{})
  },
  SET_EDITBLOGBYID : (state,blogId) => {
    state.blogId = blogId
  },
  REMOVE_BLOGID : (state) => {
    state.blogId = null
  }
}
export default mutations