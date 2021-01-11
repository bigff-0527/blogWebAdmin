<template>
  <div>
    <search @onSubmit="onSubmit"
            :typeList="typeList"
            :tagList="tagList"
    ></search>
    <el-table
            :data="blogList"
            style="width: 100%">
      <el-table-column
              label="Id"
              prop="id">
      </el-table-column>
      <el-table-column
              label="title"
              prop="title">
      </el-table-column>
      <el-table-column
              label="Type"
              prop="type.typeName">
      </el-table-column>
      <el-table-column
              label="Flag"
              prop="flag">
      </el-table-column>
      <el-table-column
              sortable
              label="CreateTime"
              prop="create_time">
      </el-table-column>
      <el-table-column>

      </el-table-column>
      <el-table-column
              align="right">
        <template slot="header" slot-scope="scope">
          <el-button type="primary">新增</el-button>
        </template>
        <template slot-scope="scope">
          <el-button
                  size="mini"
                  @click="edit(blogList[scope.$index].id)">Edit</el-button>
          <el-button
                  size="mini"
                  type="danger"
                  @click="deleteBlog(blogList[scope.$index].id)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
            style="margin: 15px auto"
            hide-on-single-page
            @current-change="handleCurrentChange"
            :current-page="searchDto.pageNum"
            :page-size="searchDto.pageSize"
            layout="prev, pager, next"
            :total="total">
    </el-pagination>
  </div>
</template>

<script>
  import Operation from "components/common/operation/Operation";
  import BlogItem from "./blogItem/BlogItem";
  import Search from "components/common/search/Search";

  import {deleteBlog,getBlogList} from "network/blogs"
  import {getTagList} from "network/tag";
  import {getTypeList} from "network/type";

  export default {
    name: "blogs",
    inject: ['reload'],
    data() {
      return  {
        blogList: [],
        typeList: [],
        tagList: [],
        total:10,
        searchDto: {
          title: null,
          typeId: null,
          tagId: null,
          dateStart: null,
          dateEnd: null,
          pageNum: 1,
          pageSize: 10
        },

      }
    },
    components: {
      Operation,
      BlogItem,
      Search
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
      onSubmit(Dto) {
        this.searchDto = Dto
        console.log(this.searchDto);
        getBlogList(this.searchDto).then(res => {

          this.total = res.data.data.total
          console.log(this.total);
          this.blogList = res.data.data.list
        })
      },
      edit(id){
        this.$store.commit("SET_EDITBLOGBYID",id)
        this.$router.push("/admin/blogInput")
      },
      getBlogList(currentPage) {
        console.log(currentPage);
        this.searchDto.pageNum = currentPage
        getBlogList(this.searchDto).then(res => {
          console.log(res.data);
          this.total = res.data.data.total
          this.blogList = res.data.data.list
        })
      },
      getTagList(){
        getTagList().then( res => {
            this.tagList = res.data.data
        })
      },
      getTypeList() {
        getTypeList().then(res => {
          this.typeList = res.data.data
        })
      },
    },
    created() {
      this.getBlogList(this.searchDto.pageNum)
      this.getTypeList()
      this.getTagList()
    }
  }
</script>

<style scoped>

</style>
