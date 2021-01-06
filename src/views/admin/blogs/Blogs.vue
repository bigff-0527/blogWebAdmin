<template>
  <div>
    <el-table
            :data="blogList.list.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%">
      <el-table-column
              label="Id"
              prop="id">
      </el-table-column>
      <el-table-column
              label="Type"
              prop="type.typeName">
      </el-table-column>
      <el-table-column
              sortable
              label="createTime"
              prop="create_time">
      </el-table-column>
      <el-table-column
              align="right">
        <template slot="header" slot-scope="scope">
          <el-input
                  v-model="search"
                  size="mini"
                  placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button
                  size="mini"
                  @click="edit(blogList.list[scope.$index].id)">Edit</el-button>
          <el-button
                  size="mini"
                  type="danger"
                  @click="deleteBlog(blogList.list[scope.$index].id)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
            style="margin: 15px auto"
            hide-on-single-page
            @current-change="handleCurrentChange"
            :current-page="blogList.pageNum"
            :page-size="blogList.pageSize"
            layout="prev, pager, next"
            :total="total">
    </el-pagination>
  </div>
</template>

<script>
  import Operation from "components/common/operation/Operation";
  import BlogItem from "./blogItem/BlogItem";
  import {deleteBlog} from "network/admin";
  import {searchBlog} from "network/blogs"


  import {
    getBlogList,
          } from "network/blogs";

  export default {
    name: "blogs",
    inject: ['reload'],
    data() {
      return  {
        blogList: {
          pageNum: 1,
          pageSize: 8,
          list: [],
        },
        total:8,
        search: ''

      }
    },
    components: {
      Operation,
      BlogItem
    },
    methods: {

      handleCurrentChange(currentPage){
        this.getBlogList(currentPage)
      },
      deleteBlog(id){
        deleteBlog(id).then( res =>{
          if (res.data.code === 200){
            this.$message.success("删除成功",{duration: 3 * 1000 })
            this.reload()
          }else{
            this.$message.error("删除失败",{duration: 3 * 1000 })
          }
        })
      },
      searchBlog(title,typeId,recommend){
        searchBlog(title,typeId,recommend).then(res => {
          console.log(res);
          this.blogList.list = res.data.data
        })
      },
      edit(id){
        this.$store.commit("SET_EDITBLOGBYID",id)
        this.$router.push("/admin/blogInput")
      },
      getBlogList(pageNum){
        const pageSize = this.blogList.pageSize
        getBlogList(pageNum,pageSize).then(res => {
          this.blogList.list = res.data.data.list
        })
      },
    },
    created() {
      this.getBlogList(this.blogList.pageNum)
    }
  }
</script>

<style scoped>

</style>
