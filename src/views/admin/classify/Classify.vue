<template>
  <classify-item>
    <div>
    <el-table
            :data="typeList.list.filter(data => !search || data.typeName.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%">
      <el-table-column
              label="Id"
              prop="typeId">
      </el-table-column>
      <el-table-column
              label="Name"
              prop="typeName">
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
                  @click="editType(typeList.list[scope.$index].typeId)">Edit</el-button>
          <el-button
                  size="mini"
                  type="danger"
                  @click="deleteType(typeList.list[scope.$index].typeId)">Delete</el-button>
        </template>

      </el-table-column>
    </el-table>
    <el-pagination
            style="margin: 15px auto"
            hide-on-single-page
            @current-change="handleCurrentChange"
            :current-page="typeList.pageNum"
            :page-size="typeList.pageSize"
            layout="prev, pager, next"
            :total="total">
    </el-pagination>
      <el-button style="float: right;margin: 0px 10px"  type="primary" @click="insertType()">insert</el-button>


    <el-dialog style="width: 70%;margin: 0 auto" title="分类" :visible="dialogFormVisible">
      <el-input type="hidden" v-model="type.typeId"></el-input>
      <el-form :model="type">
        <el-form-item :label="type.typeId ? '修改' : '新增'" >
          <el-input v-model="type.typeName" autocomplete="off"></el-input>
          <span>{{tip}}</span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button :disabled="checkFlag" @click="postType" type="primary" >确 定</el-button>
      </div>
    </el-dialog>
    </div>
  </classify-item>
</template>

<script>
  import ClassifyItem from "./classifyItem/ClassifyItem";



  import {
    getTypePageList,
    deleteType,
    updateType,
    insertType,
    findType,
    checkName
  } from "network/type";

  export default {
    name: "classify",
    inject: ['reload'],
    data(){
      return {
        typeList : {
          pageNum : 1,
          pageSize : 10,
          list: []
        },
        inputFlag: false,
        checkFlag: true,
        tip : '',
        type: {
          typeId: null,
          typeName: '',
        },
        dialogFormVisible: false,
        search: '',
        total: 10,
      }
    },
    components: {
      ClassifyItem,
    },
    computed: {
      newTypeName() {
        return this.type.typeName;
      }
    },
    methods: {
      // handleSizeChange: function (size) {
      //   this.pagesize = size;
      //   console.info(size)
      // },
      handleCurrentChange: function(currentPage){
        this.getTypePageList(currentPage)
      },

      getTypePageList(pageNum){
        const pageSize = this.typeList.pageSize
        getTypePageList(pageNum,pageSize).then( res => {
          this.total = res.data.data.pages * 10
          console.log(this.total);
          this.upFlag = res.data.data.hasPreviousPage
          this.nextFlag = res.data.data.hasNextPage
            this.typeList.list = res.data.data.list
        })
      },
      postType(){
        if (this.type.typeId === null){
          insertType(this.type).then( res => {
            if (res.data.code === 200){
              this.$message.success("添加成功")
              this.reload()
              this.dialogFormVisible = false
            }
          })
        }else{
          updateType(this.type).then( res => {
            if (res.data.code === 200 ){
              this.$message.success("修改成功")
              this.reload()
            }else{
              this.$message.error("修改失败")
            }
          })
        }
      },
      deleteType(id){
        deleteType(id).then( res => {
          if (res.data.code === 200 ){
            this.$message.success("删除成功")
            this.dialogFormVisible = false
            this.reload()
          }else{
            this.$message.error("删除失败")
          }
        })
      },
      editType(id){
        this.dialogFormVisible = true
        findType(id).then( res => {
          console.log(res);
          this.type = res.data.data
          this.tip=''
        })
      },
      insertType(){
        this.dialogFormVisible = true
        this.type = {
          typeId: null,
          typeName: '',
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
      newTypeName(val) {
        if (val == ''){
          this.tip = val
        }else{
          this.checkName(val)
          this.tip = '正在校验';
        }
      }
    },


    created() {
      this.getTypePageList(this.typeList.pageNum)

    },

  }
</script>

<style scoped>

</style>
