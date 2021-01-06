<template>
  <el-row style="width:100%">
    <el-col :span="20" >
      <el-form ref="form" :model="blogInput" >
        <el-form-item >
          <div style="margin-top: 15px;">
            <el-input placeholder="请输入标题" v-model="blogInput.title" class="input-with-select">

              <el-select   style="width: 100px" v-model.lazy="blogInput.flag" slot="prepend" placeholder="请选择">
                <el-option label="原创" value="1"></el-option>
                <el-option label="转载" value="2"></el-option>
                <el-option label="翻译" value="3"></el-option>
              </el-select>
            </el-input>
          </div>
        </el-form-item>
        <el-form-item>
              <el-select v-model="blogInput.type_id" placeholder="分类">
                <el-option
                  v-for="item in typeList"
                  :key="item.typeId"
                  :label="item.typeName"
                  :value="item.typeId"
                >
                </el-option>
              </el-select>
        </el-form-item>
        <el-form-item>
              <el-select value-key="tagId" v-model="blogInput.tags" multiple placeholder="标签">
                <el-option
                  v-for="item in tagList"
                  :key="item.tagId"
                  :label="item.tagName" :value="item"
                >
                </el-option>
              </el-select>
        </el-form-item>
        <el-form-item>
          <el-input v-model="blogInput.first_picture" placeholder="首图"></el-input>
        </el-form-item>
        <el-form-item>
          <mavon-editor v-model="blogInput.content"/>
        </el-form-item>
        <el-form-item>
          <div class="required field">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="博客描述..."
              v-model="blogInput.description">
            </el-input>
          </div>
        </el-form-item>
        <el-form-item>
          <div class="inline fields">

                <el-switch
                  active-text="推荐"
                  v-model="blogInput.recommend"
                  active-color="#13ce66"
                  inactive-color="#ff4949">
                </el-switch>

            <el-switch
              active-text="转载"
              v-model="blogInput.share_statement"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>

            <el-switch
              active-text="赞赏"
              v-model="blogInput.appreciation"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>

            <el-switch
              active-text="评论"
              v-model="blogInput.commentabled"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>

          </div>
        </el-form-item>
        <el-form-item>
          <el-button  @click="published(1)" type="success" icon="el-icon-check" circle></el-button>
          <el-button  @click="published(0)" type="warning" icon="el-icon-star-off" circle></el-button>
          <el-button onclick="window.history.go(-1)" type="danger" icon="el-icon-delete" circle></el-button>
        </el-form-item>
      </el-form>
   </el-col>
  </el-row>
</template>

<script>
  import {findBlogById} from "network/admin";
  // import {dropdown} from "assets/js/pop";
  import {saveBlog} from "network/admin";

  import {getTypeList} from "network/type"
  import {getTagList} from "network/tag";

  export default {
    name: "BlogAdd",
    data() {
      return {
        blogInput: {
          appreciation: '',
          commentabled: '',
          comments: [],
          content: "",
          create_time: "",
          description: "",
          first_picture: "",
          flag: "原创",
          id: null,
          published: false,
          recommend: false,
          share_statement: false,
          tags: [],
          title: "",
          type_id: "",
          update_time: "",
          user_id: "",
          views: 0,
        },
        typeList : [],
        tagList: []
      }
    },
    methods: {
      //点击事件
      published(p) {
        this.blogInput.published = p
        saveBlog(this.blogInput).then(res => {

          if (res.data.code === 200){
            this.$message.success("操作成功",{duration: 3 * 1000})
            this.$router.go(-1)
          }else{
            this.$message.error("操作失败",{duration: 3 * 1000})
          }

        })
      },
      //网络请求
      getTypeList(){
        getTypeList().then( res => {
          this.typeList = res.data.data
        })
      },
      getTagList(){
        getTagList().then( res => {
          this.tagList = res.data.data
        })
      },
      findBlogById() {
        let id = this.$store.getters.getBlogId

        if (id !== null) {
          findBlogById(id).then(res => {
            console.log(res.data)
            this.blogInput = res.data.data
          })
          this.$store.commit("REMOVE_BLOGID")
        }
      },
    },
    mounted() {
      // dropdown()

      this.findBlogById()
    },
    created() {
      this.getTypeList()
      this.getTagList()
    },

  }
</script>

<style scoped >
  /*.el-select .el-input {*/
  /*  width: 130px;*/
  /*}*/


</style>
