<template>
  <tag-item>
    <div>
      <el-table
              :data="tagList.list.filter(data => !search || data.tagName.toLowerCase().includes(search.toLowerCase()))"
              style="width: 100%">
        <el-table-column
                label="Id"
                prop="tagId">
        </el-table-column>
        <el-table-column
                label="Name"
                prop="tagName">
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
                    @click="editTag(tagList.list[scope.$index].tagId)">Edit</el-button>
            <el-button
                    size="mini"
                    type="danger"
                    @click="deleteTag(tagList.list[scope.$index].tagId)">Delete</el-button>
          </template>

        </el-table-column>
      </el-table>
      <el-pagination
              style="margin: 15px auto"
              hide-on-single-page
              @current-change="handleCurrentChange"
              :current-page="tagList.pageNum"
              :page-size="tagList.pageSize"
              layout="prev, pager, next"
              :total="total">
      </el-pagination>
      <el-button style="float: right;margin: 0px 10px"  type="primary" @click="insertTag()">insert</el-button>

      <el-dialog title="标签" :visible="dialogFormVisible">
        <el-input type="hidden" v-model="tag.tagId"></el-input>
        <el-form :model="tag">
          <el-form-item :label="tag.tagId ? '修改' : '新增'" >
            <el-input v-model="tag.tagName" autocomplete="off"></el-input>
            <span>{{tip}}</span>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button :disabled="checkFlag" @click="postTag" type="primary" >确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </tag-item>
</template>

<script>
  import TagItem from "./tagItem/TagItem";
  import Operation from "components/common/operation/Operation";
  import {
    getTagPageList,
    deleteTag,
    insertTag,
    checkName,
    updateTag,
    findTag
  } from "network/tag";

  export default {
    name: "tag",
    inject: ['reload'],
    data(){
      return {
        tagList : {
          pageNum : 1,
          pageSize : 8,
          list: []
        },
        checkFlag: true,
        tip : '',
        tag: {
          tagId: null,
          tagName: '',
        },
        dialogFormVisible: false,
        total: 8,
        search: ''
      }
    },
    components: {
      TagItem,
      Operation,
    },
    computed: {
      newTagName() {
        return this.tag.tagName;
      }
    },
    methods: {
      handleCurrentChange(currentPage){
        this.getTagPageList(currentPage)
      },
      getTagPageList(pageNum){
        const pageSize = this.tagList.pageSize
        getTagPageList(pageNum,pageSize).then( res => {
          this.total = res.data.data.pages * 8
          this.tagList.list = res.data.data.list
        })
      },
      postTag(){
        if (this.tag.tagId === null){
          insertTag(this.tag).then( res => {
            if (res.data.code === 200){
              this.$message.success("添加成功")
              this.reload()
              this.dialogFormVisible = false
            }
          })
        }else{
          updateTag(this.tag).then( res => {
            if (res.data.code === 200 ){
              this.$message.success("修改成功")
              this.reload()
            }else{
              this.$message.error("修改失败")
            }
          })
        }
      },
      deleteTag(id){
        deleteTag(id).then( res => {
          if (res.data.code === 200 ){
            this.$message.success("删除成功")
            this.dialogFormVisible = false
            this.reload()
          }else{
            this.$message.error("删除失败")
          }
        })
      },
      editTag(id){
        this.dialogFormVisible = true

        findTag(id).then( res => {
          console.log(res);
          this.tag = res.data.data
          this.tip=''
        })
      },
      insertTag(){
        this.dialogFormVisible = true
        this.tag = {
          tagId: null,
          tagName: '',
        }
      },
      //校验是否存在
      checkName(name){
        checkName(name).then( res => {
          if (res.data.code === 200 ){
            this.tip = '可用'
            this.checkFlag = false
          }else{
            this.tip = '不可用，已存在'
            this.checkFlag = true
          }
        })
      }

    },
    watch: {
      newTagName(val) {
        if (val == ''){
          this.tip = val
        }else{
          this.checkName(val)
          this.tip = '正在校验';
        }
      }
    },


    created() {
      this.getTagPageList( this.tagList.pageNum)

    },

  }
</script>

<style scoped>

</style>
