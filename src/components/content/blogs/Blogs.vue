<template>
  <div class="ui top attached teal segment">
    <blog-list slot="blogList" v-for="item in blogList">
      <h3 slot="title" class="ui header"><a href="#"  target="_blank" class="m-black" >{{item.title}}</a></h3>
      <p slot="desc" class="m-text" >{{item.description}}</p>
      <blog-author slot="author">
        <img slot="authorHead" :src="item.user.avatar"  alt="" class="ui avatar image">
        <div slot="authorName" class="content"><a href="#" class="header" >{{item.user.username}}</a></div>
      </blog-author>
      <span slot="createTime" >{{item.update_time}}</span>
      <span slot="view">{{item.views}}</span>
      <img slot="first_picture" :src="item.first_picture" class="ui rounded image" alt="">
      <a slot="classify" href="#" target="_blank" class="ui teal basic label m-padded-tiny m-text-thin" >{{item.type.typeName}}</a>
    </blog-list>
  </div>
</template>


<script>
  import BlogList from "../../common/BlogList/BlogList";
  import BlogAuthor from "../../common/BlogList/BlogAuthor/BlogAuthor";
  export default {
    name: "Blogs",
    components: {
      BlogList,
      BlogAuthor
    },
    props:{
      blogList: {
        type: Array,
        default() {
          return {}
        }
      }

    }
  }
</script>

<style scoped>

</style>
