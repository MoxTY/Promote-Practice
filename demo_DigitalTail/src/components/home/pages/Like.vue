<template>
  <div class="like">
    <div class="like-guss">
      <img src="../../../assets/img/like.png">
      <span class="title-left">&nbsp;兴趣</span>
    </div>
    <ul>
      <li v-for="item in likeList" :key="item.id">
        <div class="like-img"><img :src="item.likeImg"></div>
        <p class="mes">{{item.mes}}</p>
        <div class="interact">
          <img src="../../../assets/img/like.jpg"><span class="like-num">{{item.likeNum}}</span>
          <div class="com-num">
            <img src="../../../assets/img/com.jpg"><span >{{item.comNum}}</span>
            </div>
        </div>
        <div class="bottom">
          <span class="people">{{item.people}}</span>
          <span class="from">来自<a href="">&nbsp;{{item.from}}</a></span>
        </div>
        <hr class="bottom-line">
      </li >
    </ul>
  </div>
</template>
<script>
export default {
  props:['likeList'],
  data(){
    return{
      
    }
  }
}
</script>
<style scoped lang='scss'>
.like{
  background-color: white;
  margin-top: .2rem;
  font-size: .28rem;
  .like-guss{
    width: 100%;
    padding: .1rem 0;
    height: .5rem;
    color:#212121; 
    img{
    width: .3rem;
    height: .3rem;
    }
  }
  ul{
    height: 7rem;
    overflow: hidden;
    overflow-y: scroll;
    li{
      .like-img img{
        height: 2.5rem;
        width: 3rem;
        float: left;
        margin-right: .2rem;
        margin-bottom: .2rem;
      }
      .interact img{
        width: .32rem;
        height: .32rem;
        margin-top: .5rem;
      }
      .interact{
        .com-num{
          float: left;
          margin-right: .2rem;
        }
      }
      .mes{
        margin-top: .2rem;
        padding-top: .5rem;
        height: .3rem;
        width: 3.5rem;
      }
      .bottom{
        padding: .2rem 0;
        margin-top: .3rem;
        font-size: .24rem;
        a{
          color:rgb(108,167, 222);
        }
        .from{
          margin-left: .7rem;
        }
      }
      .bottom-line{
        width: 100%;
        height: 1px;
	      border-top:1px solid #ccc;
      }
    }
  }
}

</style>

