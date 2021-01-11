<template>
    <el-container  style="width: 100%;">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <el-aside width="20%" style="padding:20px 0">
      <admin-tab-bar ref="boy02">
      </admin-tab-bar>
      </el-aside>
      <el-main style="width: 100%">
        <router-view v-show="isRouterAlive"
        ></router-view>
      </el-main>
    </el-container>
</template>

<script>
  import AdminTabBar from "components/content/mainTabBar/AdminTabBar";

  import {
    deleteBlog,
    findBlogById,
    getBlogList,
  } from "network/admin";

  export default {
    name: "Admin",
    components: {
      AdminTabBar,
    },
    data() {
      return  {
        blogList: {
          pageNum: 0,
          pageSize: 0,
          list: [],
        },
        blogInput:null,
        blogId:0,
        isRouterAlive: true
      }
    },
    provide () {
      return {
        reload : this.reload
      }
    },
    methods: {
      reload(){
        this.isRouterAlive = false
        this.$nextTick( () => {
          this.isRouterAlive = true
        })
      },
    },
    mounted() {
    },
    created() {

      let h = document.documentElement.clientHeight || document.body.clientHeight;
      this.vdaH = h - 100 + 'px';

    },
  }
</script>

<style scoped>

</style>
