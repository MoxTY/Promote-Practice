<template>
  <div id="Home">
    <home-header></home-header>
    <home-swiper :swiperList='swiperList'></home-swiper>
    <home-icons :iconsList='iconsList'></home-icons>
    <home-location></home-location>
    <home-active></home-active>
    <home-hot :hotList='hotList'></home-hot>
    <home-like :likeList='likeList'></home-like>
    <home-travel :travelList='travelList'></home-travel>
  </div>
</template>

<script>
import HomeHeader from './pages/Header'//引入导航组件
import HomeSwiper from './pages/Swiper'//引入轮播组件
import HomeIcons from './pages/Icons'//引入图标选项组件
import HomeLocation from './pages/Location'//引入导航组件
import HomeActive from './pages/Active'//引入活动组件
import HomeHot from './pages/Hot'//热门回收
import HomeLike from './pages/Like'  //猜你喜欢
import HomeTravel from './pages/Travel'  //旅游板块
import{mapState} from 'vuex'   //引入vuex数据存储

export default{
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeLocation,
    HomeActive,
    HomeHot,
    HomeLike,
    HomeTravel
  },
  data(){
    return{
      swiperList:[],
      iconsList:[],
      hotList:[],
      likeList:[],
      travelList:[],
      changeClass:''  //新建一个changeClass用来记录每次发送请求时候的class的值
    }
  },
  computed:{
    ...mapState(['Class'])
  },
  methods:{
    getHttp(){
      this.$http.get("/api/dataHome.json")
      .then((res)=>{
        let data_ =res.data.data;
        data_.forEach((item,index) => {
          if(item.city==this.Class){
            this.swiperList=item.swiperList;
            this.iconsList=item.iconsList;
            this.hotList=item.hotList;
            this.likeList=item.likeList;
            this.travelList=item.travelList
        }
      });
    })
    }
  },
  mounted(){
    this.changeClass=this.Class;
    //把第一次挂载上的时候发送的请求值Class用changeClass值记录下来
    this.getHttp();
  },
  activated(){
    if(this.changeClass!=this.Class){
      // 在这个keep-alive生成的周期函数中判断class前后变动的值，即如果没有发送过，就发送请求
      this.getHttp();
      this.changeClass=this.Class;
    }
  }
}
</script>

<style>
  *{
    margin: 0px;
    padding: 0px;
  }
</style>
