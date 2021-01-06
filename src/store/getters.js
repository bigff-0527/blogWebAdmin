const getters = {
  getToken : state => {
    return state.token
  },
  getUserInfo : state => {
    return state.userInfo
  },
  getBlogId : state => {
    return state.blogId
  }

}
export default getters