<template>
  <div class="ui bottom attached segment">
    <div class="ui middle aligned two column grid" >
      <div class="column">
       <slot name="pageUp"></slot>
      </div>
      <div class="right aligned column">
       <slot name="pageDown"></slot>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "HomeBlogPage"
  }
</script>

<style scoped>

</style>
