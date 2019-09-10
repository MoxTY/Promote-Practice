<template>
<div ref="container" class="container">
  <div>
  <!-- hot -->
    <div class="hot">
      <div class="hot-title">假日热门</div>
      <ul class="hot-list">
        <li class="hot-item" v-for="item in classHot" 
        :key="item.key"
        @click="changeCity(item.name)">
          {{item.name}}
        </li>
      </ul>
    </div>
    <!-- sort -->
    <div>
      <div class="sortTitle">
        字母解码
      </div>
      <ul class="sort">
        <li class="sort-item" v-for="item in classSort" 
        :key="item.id" 
        @touchstart='changeSort(item.letter,item.id)'
        >
          {{item.letter}}
        </li>
      </ul>
    </div>
  <!-- list 字母解码板块-->
    <div class="list">
      <div v-for="(val,key) in classList" :key="val.id" 
      ref="letter" >
      <!-- 利用ref绑定的item.letter和遍历里的item.letter就联系在了一起 -->
        <div class="listTitle">
          {{key}}
        </div>
        <ul class="list-msg">
          <li class="list-item" 
          v-for="item in val" 
          :key="item.id"
          >
            {{item.name}}
          </li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import {mapMutations} from 'vuex'

export default {
  props:['classList','classHot','classSort'],
  data(){
    return {
      scroll:''
    }
  },
  mounted(){
    document.addEventListener('touchstart', function(event) {
      // 判断默认行为是否可以被禁用
      if (event.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!event.defaultPrevented) {
            event.preventDefault();
        }
      }
    }, {passive:false});
    // 取消被动行为
    console.log(this.$refs.container);
    let container_ = this.$refs.container;
    this.scroll = new BScroll(container_);
    
  },
  methods:{
    changeSort(letter,id){
      //  let key = this.$refs.letter[id].textContent;
      // 思路：点击的时候从letter跳到key
      console.log(this.$refs.letter[4]);
       this.scroll.scrollToElement(this.$refs.letter[4]);
    },
    changeCity(cityName){
      this.changeCity_(cityName);
      this.$router.push('./');
    },
    ...mapMutations(['changeCity_'])
  }
}
</script>
<style scoped lang='stylus'>
 @import '~css/dealTextover.styl';

.listTitle{
  font-size: .24rem;
  color: #212121;
  padding: .2rem .3rem;
}
.list-item{
  width: 25%;
  text-align: center;
  font-size: .28rem;
  line-height: .9rem;
  float: left;
  border-bottom: .02rem solid #ddd;
  textOverflow();
}
.list-msg{
   position: relative; 
   background-color: white;
   overflow: hidden;
}
.list-msg::before{
  content: "";
  position: absolute;
  left: 25%;
  width: 25%;
  height: 100%;
  border-left: .02rem solid #ddd;
  border-right: .02rem solid #ddd;
}
.list-msg::after{
  content: "";
  position: absolute;
  left: 75%;
  width: 25%;
  height: 100%;
  border-left: .02rem solid #ddd;
  border-right: .02rem solid #ddd;

}
</style>
<style scoped>
.container{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: .88rem;
  background: #f5f5f5;
  overflow: hidden;
}
.hot-title{
  font-size: .24rem;
  color: #212121;
  padding: .2rem .3rem;
}
.hot-list{
  background:#fff;
  font-size: .28rem;
  position: relative;
  overflow: hidden;
  color: #212121;
}
.hot-list:before{
  content: "";
  position: absolute;
  height: 100%;
  width: 33.3333%;
  left: 33.3333%;
  border-left: .02rem solid #ddd;
  border-right:.02rem solid #ddd; 
}
.hot-item{
  width: 33.333%;
  text-align: center;
  height: .9rem;
  line-height: .9rem;
  float: left;
  border-bottom: .02rem solid #ddd;
}
.sortTitle{
  font-size: .24rem;
  color: #212121;
  padding: .2rem .3rem;
}
.sort{
  position: relative;
  overflow: hidden;
  background:#fff;
  font-size: .28rem;
  position: relative;
  overflow: hidden;
  color: #212121;
}
.sort::before{
  content: "";
  position: absolute;
  border-left: .02rem solid #ddd;
  border-right: .02rem solid #ddd;
  height: 100%;
  width: 25%;
  left: 25%;
}
.sort::after{
  content: "";
  position: absolute;
  border-left: .02rem solid #ddd;
  border-right: .02rem solid #ddd;
  height: 100%;
  width: 25%;
  left:75%;
  z-index: 0;
}
.sort-item{
  position: relative;
  width: 25%;
  text-align: center;
  height: .9rem;
  line-height: .9rem;
  float: left;
  border-bottom: .02rem solid #ddd;
  touch-action: none;
  z-index: 20;
}
</style>
