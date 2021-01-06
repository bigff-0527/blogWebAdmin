import {request} from "./request";

export function login(loginDto) {
  return request({
    url: '/login',
    method: 'post',
    data: JSON.stringify(loginDto)
  })
  
}