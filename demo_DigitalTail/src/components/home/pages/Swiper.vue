<template>
  <div class="header-swiper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for='item in swiperList' :key='item.id'>
        <img v-bind:src="item.url">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default{
  props:['swiperList'],
  data(){
    return{
      swiperOption:{ 
        loop:true,
        speed: 500,
        autoplay:true,
        pagination:{
          el:'.swiper-pagination',
        },
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.header-swiper{
  background-color: gray;
  width: 100%;
  height: 4rem;
  img{
    width: 100%;
    height:4rem;
   lighting-color: alpha($color: black)
  }
}

</style>
