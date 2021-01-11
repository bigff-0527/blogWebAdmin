<template>
  <nav class="navbar  navbar-light bg-light row justify-content-md-center myNav m-mobile-hide ">
    <div class="col-12">
      <div class="col-sm-12" id="so">
        <div class="input-group">
          <el-form :inline="true" :model="searchDto" class="demo-form-inline">
            <el-form-item>
              <el-input v-model="searchDto.title" placeholder="标题"></el-input>
            </el-form-item>
            <el-form-item>
              <el-select v-model="searchDto.typeId" clearable placeholder="分类">
                <el-option
                  v-for="item in typeList"
                  :key="item.typeId"
                  :label="item.typeName"
                  :value="item.typeId"

                ></el-option>

              </el-select>
            </el-form-item>

            <el-form-item>
              <el-select v-model="searchDto.tagId" clearable placeholder="标签">
                <el-option
                  v-for="item in tagList"
                  :key="item.tagId"
                  :label="item.tagName"
                  :value="item.tagId">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <div class="block">
                <el-date-picker
                  clearable
                  value-format="yyyy-MM"
                  v-model="dateValue"
                  type="monthrange"
                  range-separator="-"
                  start-placeholder="开始月份"
                  end-placeholder="结束月份">
                </el-date-picker>
              </div>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "Search",
    data(){
      return {
        searchDto: {
          title: null,
          typeId: null,
          tagId: null,
          dateStart: null,
          dateEnd: null,
          pageNum: 0,
          pageSize: 4
        },
        dateValue:null
      }
    },
    props: {
      tagList: {
        type: Array,
        default(){
          return []
        }
      },
      typeList: {
        type: Array,
        default(){
          return []
        }
      }
    },
    methods: {
      onSubmit(){
        if (this.dateValue!=null){
          this.searchDto.dateStart = this.dateValue[0]
          this.searchDto.dateEnd = this.dateValue[1]
        }
        this.searchDto.pageNum = 1
        this.$emit("onSubmit",this.searchDto)
      }
    }
  }
</script>

<style scoped>

</style>
