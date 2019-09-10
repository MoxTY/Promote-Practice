<!-- 导航组件 -->
<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont" style="font-size:.28rem">
        &#xe624;
        
      </span>  
    </div> 
    <div class="header-search">
      <span class="iconfont">
        &#xe632;
      </span>
      搜索你感兴趣的
    </div>
    <div class="header-right" @click="Toclass">
      {{Class}}
      <!-- 使用这个组件，这样一来这个值就不再是死的 -->
      <span class="iconfont" style="font-size:.25rem;padding-right:.1rem;">&#xe600;</span>
    </div>
  </div>
</template>

<script>
import {mapState} from  'vuex'
// 引入vuex仓库

export default{
  methods:{
    Toclass(){
      this.$router.push('./Class')
    }
  },
  computed:{
      ...mapState(['Class'])
      // 计算属性使用vuex仓库里的组件class
    }
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
    font-size: .36rem;
    display: flex;
  }
  .header-left{   
    width:.4rem;
    padding: 0.2rem;
    text-align: center;
    font-weight: bold;
  }
  .header-right{
    margin-top: .3rem;
    padding-left: .1rem;
    font-size: .30rem;
  }
  .header-search{
    flex: 1;
    background-color: #fff;
    height: .6rem;
    margin-top: .13rem;
    border-radius: .1rem;
    color: #D5D5D5;
    line-height: .6rem;
    font-size: .30rem;
    padding-left: .2rem;
  }
</style>
