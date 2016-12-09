<template>
  <div class="infinite-scroll-demo" :style="{ height: '300px' }">
    <ul class="list"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="0">
      <li v-for="item in list">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
  import Vue from 'vue'
  // import InfiniteScroll from 'components/mint-ui/packages/infinite-scroll'
  import { InfiniteScroll } from 'mint-ui'

  Vue.use(InfiniteScroll)

  export default {
    // components: {
    //   infinitescroll: InfiniteScroll
    // },
    data () {
      return {
        list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      }
    },
    methods: {
      loadMore () {
        console.log('load')
        this.loading = true
        setTimeout(() => {
          let last = this.list[this.list.length - 1]
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i)
          }
          this.loading = false
        }, 2500)
      }
    },
    ready () {
      this.loadMore()
    }
  }
  </script>

<style lang="less">
  .infinite-scroll-demo {
    height: 300px;
    // overflow-y: scroll;
    overflow: scroll;

    .list {
      list-style: none;
    }
  }
</style>
