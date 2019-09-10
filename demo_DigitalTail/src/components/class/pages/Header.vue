<!-- 导航组件 -->
<template>
  <div class="header">
    <div class="header-left">
      <router-link to='/'>
        <span class="iconfont" style="font-size:.28rem;color:white;">
          &#xe624;
        </span> 
      </router-link>
    </div> 
    <div class="header-title">
      属性分类
    </div>
  </div>
</template>

<script>
export default{
 
}
</script>

<style scoped lang='stylus'>
// style中引入自定路径要加~  表示引入路径 js中不加
@import '~css/var.styl';
  .header{
    width: 100%;
    height: .88rem;
    background-color: $bgColor;
    color: $textColor;
    font-size: .30rem;
    position :relative;
   
  }
  .header-left{   
    width:.4rem;
    line-height .50rem;
    padding: 0.2rem;
    text-align: center;
    font-weight: bold;
    position :absolute;
  }
  .header-title{
    line-height .98rem;
    text-align :center;
  }
  
</style>
