<template>
<!--  <div id="table-container">-->
<!--    <table class="ui compact teal table">-->
<!--      <thead>-->
<!--      <tr>-->
<!--        <th></th>-->
<!--        <slot name="operationText"></slot>-->
<!--      </tr>-->
<!--      </thead>-->
<!--      <tbody>-->
<!--      <slot name="operationContent"></slot>-->
<!--      </tbody>-->
<!--      <tfoot>-->
<!--      <tr>-->
<!--        <th colspan="7">-->
<!--          <div v-if="upFlag || nextFlag" class="ui mini pagination menu">-->
<!--            <a @click="up" v-if="upFlag"  class=" item" >上一页</a>-->
<!--            <a @click="next" v-if="nextFlag"  class=" item" >下一页</a>-->
<!--          </div>-->
<!--          <slot name="operationInsert"></slot>-->
<!--        </th>-->
<!--      </tr>-->
<!--      </tfoot>-->
<!--    </table>-->
<!--  </div>-->
  <div>

  </div>
</template>

<script>
  export default {
    name: "Operation",
    props: {
      upFlag : Boolean,
      nextFlag : Boolean,
      typeList: {
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        search: ''
      }
    },
    methods: {
      next(){
        this.$emit("nextList")
      },
      up(){
        this.$emit("upList")

      },
    },


  }
</script>

<style scoped>

</style>
