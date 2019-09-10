import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let defaultClass='分类';
defaultClass=localStorage.Class;

const state={
  //把组件声明成一个常量  放在这个仓库里  然后就在任何组件都可以用这个组件的值
  Class:defaultClass
}

const mutations={
  changeCity_(state,cityName){
    state.Class=cityName;
    localStorage.Class=cityName;
  }
}
export default new Vuex.Store({
  state,
  mutations
})