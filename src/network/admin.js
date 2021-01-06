import {request} from "./request"


const qs = require('qs')






export function deleteBlog(id) {
  return request({
    url: '/delete',
    params: {
      id
    }
  })
}

export function findBlogById(id) {
  return request({
    url: '/findBlogById',
    params: {
      id
    }
  })
}

export function saveBlog(blog) {
  return request({
    url: '/Save',
    method: 'post',
    data_type:"json",
    data:JSON.stringify(blog)

  })
}
