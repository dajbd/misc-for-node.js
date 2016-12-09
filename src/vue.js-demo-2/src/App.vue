<template>
  <div id="app">
    <!-- <img class="logo" src="./assets/logo.png"> -->
    <InfiniteScrollDemo></InfiniteScrollDemo>

    <hello></hello>
    <back-to-top></back-to-top>
  </div>
</template>

<script>
import Hello from './components/Hello'
import BackToTop from './components/BackToTop'
import InfiniteScrollDemo from './biz/infinite-scroll-demo'

export default {
  components: {
    Hello,
    BackToTop,
    infinitescrolldemo: InfiniteScrollDemo
  }
}
</script>

<style>
#app{
  /*min-height: 2500px;*/
  text-align: center;
}
</style>
