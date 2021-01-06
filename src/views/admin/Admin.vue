<template>
    <el-container :style="{height:vdaH}" style="width: 80%;margin-top: 50px">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <el-aside width="22%" >
      <admin-tab-bar ref="boy02">
      </admin-tab-bar>
      </el-aside>
      <el-main>
        <router-view v-if="isRouterAlive"
                     :id="blogId"
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
      // getBlogList(pageSize){
      //   const pageNum = this.blogList.pageNum + 1
      //   getBlogList(pageNum,pageSize).then(res => {
      //     console.log(res.data)
      //   })
      // },

      editBlog(id){
        this.blogId=id
        this.$router.push("/admin/blogInput")
      },
      insertClick(id){
        this.blogId=id
        this.$router.push("/admin/blogInput")
      },

    },
    mounted() {
      // message()
    },
    created() {

      let h = document.documentElement.clientHeight || document.body.clientHeight;
      this.vdaH = h - 130 + 'px';

    },
  }
</script>

<style scoped>

</style>
