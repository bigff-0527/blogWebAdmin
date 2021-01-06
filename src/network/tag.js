import {request} from "./request";


export function getTagPageList(pageNum,pageSize) {
  return request({
    url: '/tagPageList',
    params: {
      pageNum,
      pageSize
    }
  })
}

export function getTagList() {
  return request({
    url: '/tagList',
  })
}

export function checkName(name) {
  return request({
    url: '/checkTag',
    params: {
      name
    }
  })
}

export function insertTag(tag) {
  return request({
    url: '/insertTag',
    method: 'post',
    data: JSON.stringify(tag)
  })
}

export function deleteTag(id) {
  return request({
    url: '/deleteTag',
    params:{
      id
    }
  })
}

export function updateTag(tag) {
  return request({
    url: '/updateTag',
    method: 'post',
    data: JSON.stringify(tag)
  })
}

export function findTag(id) {
  return request({
    url: '/findTag',
    params:{
      id
    }
  })
}