<template>
  <div class="icons">
    
    <swiper :options="swiperOption">
      <swiper-slide v-for='(item,key) in page' 
      :key="key">
        <!-- 按照计算属性遍历page-->
        <div class="item-icons"
        v-for='page in item' :key="page.id">
        <!-- page的图片等部分，是遍历item（二维数组） -->
          <img :src="page.url">
          <p>{{page.title}}</p>
        </div> 
      </swiper-slide>
    </swiper>
<!-- 二维数组思想：相当于一个大框里面  套了两个大框  
这两个大框里面又有很多对象，这两个大框都是一个数组 -->

    

  </div>
</template>

<script>
export default {
  props:["iconsList"],
  data (){
    return{
      swiperOption:{}
    }
  },
  computed: {
      page(){
        // 利用计算属性 给分页做一个标准
        let pages = [];
        // 定义一个空数组pages，和之前的swiper数组相当于一个二维数组。
        // 按标准分页好的放进pages
        this.iconsList.forEach((item,index) => {
          // 遍历iconlist这个数组
          let idx=Math.floor(index/8);
          // 搞一个分页标准idx
          if( !pages[idx] ){
            pages[idx] = []
            // 不是0就是1，这样就把下标为0或者1的对象新建成两个数组了
          } 
          pages[idx].push(item)
          // 然后再把item往刚才分好的两个数组里面push
        })
        return pages;
        // 有定义就一定要有返回值，有头有尾
      }
  }
}
</script>
<style scoped lang='scss'>
.icons{
  width: 100%;
  background-color: white;
}
.item-icons{
  height:0;
  width: 24.4%;
  padding-bottom: 25%;
  float: left;
  img{
    display: block;
    height: 1.2rem;
    width: 1.2rem;
    border-radius: .6rem;
    margin: .2rem auto;
  }
  p{
    font-size: .1rem;
    text-align: center;
  }
}

</style>

