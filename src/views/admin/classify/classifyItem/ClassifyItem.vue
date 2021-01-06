<template>
  <div>
        <slot></slot>
  </div>
</template>

<script>
  import Banner from "components/common/banner/Banner";
  import Operation from "components/common/operation/Operation";
  export default {
    name: "classifyItem",
    components: {
      Banner,
      Operation
    }
  }
</script>

<style scoped>

</style>
