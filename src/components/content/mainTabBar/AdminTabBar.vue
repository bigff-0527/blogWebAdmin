<template>
      <el-menu router :default-active="this.$route.path" >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-view"></i>
            <span slot="title">数据</span>
          </template>
          <el-menu-item-group>
            <template slot="title">数据查看</template>
            <el-menu-item index="/admin" ><el-badge is-dot class="item">数据中心</el-badge></el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span slot="title">博客</span>

          </template>
          <el-menu-item-group>
            <template slot="title">博客管理</template>
            <el-menu-item index="/admin/blogs">博客列表</el-menu-item>
            <el-menu-item index="/admin/blogInput">博客新增</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">分类</span>
            </template>
          <el-menu-item-group>
            <template slot="title">分类管理</template>
            <el-menu-item index="/admin/classify">分类列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-star-off"></i>
            <span slot="title">标签</span>
          </template>
          <el-menu-item-group>
            <template slot="title">标签管理</template>
            <el-menu-item index="/admin/tag">标签列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
</template>

<script>
  // import TabBar from "components/common/tabBar/TabBar";



  export default {
    name: "AdminTabBar",
    components: {
      // TabBar,

    },
    // data() {
    //   return {
    //
    // },
    methods: {
      // clickTab(index) {
      //   if (this.$route.path != this.tab[index - 1].path){
      //     this.navIndex = index;
      //     this.$router.replace(this.tab[index - 1].path)
      //   }
      //
      // },

    },
    // mounted: function () {
    //   for (var i = 0; i < this.tab.length; i++) {
    //     if (this.$route.path == this.tab[i].path) {
    //       this.navIndex = i + 1;
    //       break;
    //     }
    //   }
    // },

    }
</script>

<style scoped>

  .item {
    line-height: 30px;
    height: 30px;
  }

</style>