<template>
  <div id="Class">
    <class-header></class-header>
    <class-list :classList='classList' 
                :classHot='classHot' 
                :classSort='classSort'
                >
    </class-list>
  </div>
</template>
<script>
import ClassHeader from './pages/Header'
import ClassList from './pages/List'

export default {
  components:{
    ClassHeader,
    ClassList
  },
  data(){
    return{
      classSort:[],
      classHot:[],
      classList:{}//该json数据为对象
    }
  },
  mounted(){
    this.$http.get('/api/class.json')
    .then((res)=>{
      const data_=res.data.data[0];
      this.classHot=data_.hot;
      this.classSort=data_.decode;
      this.classList=data_.letter;
    })
  }
}
</script>
<style >
.city{
  background: #f5f5f5;
}
</style>


