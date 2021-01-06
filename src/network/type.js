import {request} from "./request";

export function getTypePageList(pageNum,pageSize) {
  return request({
    url: '/typePageList',
    params: {
      pageNum,
      pageSize
    }
  })
}
export function getTypeList() {
  return request({
    url: '/typeList',
  })
}

export function checkName(name) {
  return request({
    url: '/checkType',
    params: {
      name
    }
  })
}

export function insertType(type) {
  return request({
    url: '/insertType',
    method: 'post',
    data: JSON.stringify(type)
  })
}

export function deleteType(id) {
  return request({
    url: '/deleteType',
    params:{
      id
    }
  })
}

export function updateType(type) {
  return request({
    url: '/updateType',
    method: 'post',
    data: JSON.stringify(type)
  })
}

export function findType(id) {
  return request({
    url: '/findType',
    params:{
      id
    }
  })
}