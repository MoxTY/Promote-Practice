<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  *{
    margin: 0px;
    padding: 0px;
  }
  .swiper-pagination-bullet-active{
  background-color:black;
}
p{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
html, body, div,h1,h2,h3,h4,h5,h6,p,span,a,option,input,select,textarea{
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", "Source Han Sans CN", sans-serif;
}
</style>
