<template>
  <div class="hot">
    <div class="hot-top">
      <img src="../../../assets/img/log.png">
      <span class="title-left">甩甩回收</span>
      <span class="title-right">全部榜单></span>
    </div>
    <ul class="hot-list">
      <li class="hot-item" v-for="item in hotList" :key="item.id">
        <img :src="item.url">
        <p>{{item.title}}</p>
        <p style="margin-top: .08rem;">最高:
          <span class="price">￥{{item.price}}</span></p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props:['hotList'],
  data() {
    return {
      
    }
  },
}
</script>
<style lang="scss" scoped>
  .hot{
    margin-top: .2rem;
    background-color: white;
    .hot-top{
      position: relative;
      padding-top: .1rem;
      margin-bottom: .1rem;
      height: .45rem;
      line-height: .45rem;
      font-size: .27rem;
      color: #212121;
      img{
        height: .4rem;
      }
      
      .title-right{
        position: absolute;
        right:.1rem;
        color: #616161;
      }
      .title-left{
        position: absolute;
        margin-left: .1rem;
      }
    }
    .hot-list{
      font-size: .24rem;
      height: 2.82rem;;
      overflow-y: hidden;
      overflow-x: scroll;
      white-space: nowrap;
      .hot-item{
        text-align: center;
        padding: 0 .15rem;
        width: 2rem;
        height: 2rem; 
        display: inline-block;
        img{
          width: 100%;
          height: 100%; 
        }
        .price{
          color:orangered;
        }
      }
    }
  }
</style>