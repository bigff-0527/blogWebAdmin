import {request} from "./request";

export function getBlogList(pageNum,pageSize) {
  return request({
    url: '/blogList',
    params: {
      pageNum,
      pageSize
    }
  })
}

export function searchBlog(title,typeId,recommend) {
  return request({
    url: "/search",
    params: {
      title,
      typeId,
      recommend
    }
  })

}