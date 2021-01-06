<template>

</template>

<script>
  import AdminTabBar from "components/content/mainTabBar/AdminTabBar";
  export default {
    name: "Index",
    data() {

      return {

        vdaH:0,
      }
    },
    created() {

      let h = document.documentElement.clientHeight || document.body.clientHeight;
      this.vdaH = h - 130 + 'px';

    }
  }
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
