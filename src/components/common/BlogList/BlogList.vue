<template>

    <!-- 中间内容部分（左边文章+右边图片） -->
    <div class="ui padded vertical segment m-padded-tb-large" >
      <div class="ui middle aligned mobile reversed stackable grid">
        <!-- 左边文章 -->
        <div class="eleven wide column">
<!--          标题-->
          <slot name="title"></slot>
<!--          简介-->
          <slot name="desc"></slot>
          <!-- 底部小组件 -->
          <div class="ui stackable grid">
            <div class="eleven wide column">
              <div class="ui mini horizontal link list">
<!--                <div class="item">-->
<!--                  <slot name="headPortrait"></slot>-->
                  <slot name="author"></slot>
<!--                </div>-->
                <div class="item">
                  <i class="calendar icon"></i><slot name="createTime"></slot>
                </div>
                <div class="item">
                  <i class="eye icon"></i><slot name="view"></slot>
                </div>
              </div>
            </div>
            <div class="right aligned five wide column">
              <slot name="classify"></slot>
            </div>
          </div>
        </div>

        <!-- 右边图片 -->
        <div class="five wide column">
          <a href="#" target="_blank">
            <slot name="first_picture"></slot>
          </a>
        </div>
      </div>
    </div>
    <!--/*-->

    <!--*/-->

  </div>
</template>

<script>
  export default {
    name: "HomeBlogList",
    components: {
    }
  }
</script>

<style scoped>

</style>
