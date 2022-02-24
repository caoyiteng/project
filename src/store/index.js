import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add(state) {
      state.count++
    },
    add2(state, i) {
      state.count += i
    },
    sub(state) {
      state.count--
    },
    sub2(state, i) {
      state.count -= i
    }
  },
  // actions只是定义异步操作
  actions: {
    // 可以认为context是   new Vuex.Store()的实例对象，里面有一个conmmit方法
    addAsync(context) {
      setTimeout(() => {
        //在action里面 不能直接修改state的值，必须通过mutation进行修改
        context.commit('add')
      }, 1000)
    },
    subN(context, i) {
      setTimeout(() => {
        context.commit('sub2', i)
      }, 2000)
    }
  },
  modules: {},

  getters: {
    showNumber(state) {
      return '当前最新的数量是【' + state.count + '】'
    }
  }
})
