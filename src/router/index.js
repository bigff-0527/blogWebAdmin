import Vue from 'vue'
import Router from 'vue-router'

import Admin from "views/admin/Admin";
import Index from "views/admin/index/Index";
import Classify from "views/admin/classify/Classify";
import Tag from "views/admin/tag/Tag";
import Blogs from "views/admin/blogs/Blogs";
import BlogInput from "views/admin/blogs/BlogInput";
import Login from "views/admin/Login";



Vue.use(Router)
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const router = new Router({
  routes: [
    {
      path: '',
      redirect: '/login'
    },
    {
      path: '/admin',
      component: Admin,
      meta: {
        title: '后台',
        requireAuth: true
      },
      children: [
        {
          path: '',
          component: Index,
        },
        {
          path: 'blogs',
          component: Blogs
        },
        {
          path: 'blogInput',
          component: BlogInput
        },
        {
          path: 'classify',
          component: Classify
        },

        {
          path: 'tag',
          component: Tag
        },
      ],

    },
    {
      path: '/login',
      component: Login
    },
  ],
  mode: 'history'
})

export  default  router
