<template>
  <div id="tab-bar">
    <nav class="ui inverted attached segment m-padded-tb-mini m-shadow-small">
      <div class="ui container">
        <div class="ui inverted secondary stackable menu">
          <h2 class="ui teal header item" >Bigff</h2>
          <slot name="text"></slot>
          <slot name="state"></slot>
        </div>
      </div>
      <a href="#" class="ui menu toggle black icon button m-right-top m-mobile-show">
        <i class="sidebar icon"></i>
      </a>
    </nav>
  </div>

</template>

<script>

  // import {modelNav} from 'assets/js/pop.js';
  export default {
    name: "TabBar",
    components: {

    },
    mounted() {
      // modelNav()
    }
  }

</script>

<style scoped>


</style>
