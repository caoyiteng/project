<template>
  <div>
    <h1>当前最新的Count值为：{{ count }}</h1>
    <button @click="subCount">-1</button>
    <button @click="subCount2">-N</button>
    <button @click="subCount3">-N async</button>
    <hr />
    <h3>{{ this.$store.getters.showNumber }}</h3>
    <h3>{{ showNumber }}</h3>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'MySub',
  data() {
    return {}
  },
  methods: {
    // 把mutation里面的所有方法按需拿到展开
    // 导过来这里的都可以认为是一个方法

    ...mapMutations(['sub', 'sub2']),
    ...mapActions(['subN']),
    subCount() {
      this.sub()
    },
    subCount2() {
      this.sub2(10)
    },
    subCount3() {
      this.$store.dispatch('subN', 100)
    }
  },
  computed: {
    // 导过来这里的都可以认为是一个计算属性
    ...mapState(['count']),
    ...mapGetters(['showNumber'])
  }
}
</script>

<style></style>
