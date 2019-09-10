<template>
  <div class="travel">
    <div class="travel-top">
      <img src="../../../assets/img/travellog.jpg">
      旅行
    </div>
    <ul class="traval-list" v-for='item in travelList' :key="item.id">
      <li>
        <div class="list-img">
          <img :src="item.img">
        </div>
        <div>
          <p class="list-title">
            {{item.title}}
          </p>
          <p class="list-detal">
            {{item.dital}}
          </p>
        </div>
      </li>
    </ul>
    <hr>
  </div>
</template>
<script>
export default {
   props:['travelList'],
  data(){
    return{
      
    }
  }
}
</script>
<style lang="scss" scoped>
  .travel{
    background-color: white;
    margin-top: .16rem;
    padding: .1rem 0;
    .travel-top{
      height: .5rem;
      line-height: .5rem;
      font-size: .28rem;
      img{
      width: .32rem;
      height: .32rem;
      }
    } 
    .traval-list{
      border-bottom: .1rem solid silver;
      margin-bottom: 1rem 0;
      li{
      font-size: .26rem;
      p{
        margin: .20rem .1rem;
        line-height: .35rem;
      }
      .list-img{
        img{
          width: 100%;
          height:4.5rem;
        }
      }
     }
    }
  }
</style>