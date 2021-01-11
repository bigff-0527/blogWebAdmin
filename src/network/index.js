import {request} from "./request";

export function getBlogAllTag() {
  return request({
    url: 'getBlogAllTag'
  })
}
export function getBlogAllType() {
  return request({
    url: 'getBlogAllType'
  })
}

export function getAllViews() {
  return request({
    url: 'getAllViews'
  })
}

export function getAllComments() {
  return request({
    url: 'getAllComments'
  })
}