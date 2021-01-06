<template>
  <div class="demo-input-size">
    <el-input
            placeholder="请输入内容"
            suffix-icon="el-icon-date"
            v-model="input1">
    </el-input>
    <el-input
            size="medium"
            placeholder="请输入内容"
            suffix-icon="el-icon-date"
            v-model="input2">
    </el-input>
    <el-input
            size="small"
            placeholder="请输入内容"
            suffix-icon="el-icon-date"
            v-model="input3">
    </el-input>
    <el-input
            size="mini"
            placeholder="请输入内容"
            suffix-icon="el-icon-date"
            v-model="input4">
    </el-input>
  </div>
<!--  <el-input type="text" v-model="title" name="title" placeholder="标题"></el-input>-->
<!--              <el-select v-model="typeId" filterable placeholder="分类">-->
<!--                <el-option-->
<!--                        v-for="item in typeList"-->
<!--                        :key="item.typeId"-->
<!--                        :label="item.typeName"-->
<!--                        :value="item.typeId">-->
<!--                </el-option>-->
<!--              </el-select>-->
<!--              <button @click="clear()" class="ui compact clear button">clear</button>-->
<!--              <input type="checkbox" v-model="recommend" id="recommend" name="recommend">-->
<!--              <label for="recommend">推荐</label>-->
<!--            <button @click="search()" type="button"  id="search-btn" class="ui mini teal basic button"><i class="search icon"></i>搜索</button>-->
<!--      <slot></slot>-->
</template>

<script>
  import Operation from "components/common/operation/Operation";
  import Banner from "components/common/banner/Banner";
  import {getTypeList} from "network/type";

  export default {
    name: "BlogItem",
    data(){
      return {
        title: '',
        typeId: '',
        recommend: false,
        typeList:[]
      }
    },
    components: {
      Operation,
      Banner
    },
    methods: {
      search(){
        this.$parent.searchBlog(this.title,this.typeId,this.recommend)
      },
      clear(){
        this.title = '',
        this.typeId = '',
        this.recommend = false
      },
      getTypeList(){
        getTypeList().then( res => {
          this.typeList = res.data.data
        })

      }
    },
    mounted(){
      this.getTypeList()
    }
  }
</script>

<style scoped>

</style>
