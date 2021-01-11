import {request} from "./request";

export function getBlogList(searchDto) {
  return request({
    url: '/blogList',
    method: 'post',
    data:JSON.stringify(searchDto)
  })
}

export function updateBlog(blog) {
  return request({
    url: '/updateBlog',
    method: 'post',
    data: JSON.stringify(blog)
  })
}

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
