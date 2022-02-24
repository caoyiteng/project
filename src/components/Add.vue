<template>
  <div>
    <h1>当前最新的Count值为：{{ this.$store.state.count }}</h1>
    <button @click="btAdd">+1</button>
    <button @click="btAdd2">+N</button>
    <button @click="btAdd3">+1 async</button>
    <button @click="subN(100000)">+1 async2</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {
    ...mapActions(['addAsync', 'subN']),
    btAdd() {
      this.$store.commit('add')
    },
    btAdd2() {
      this.$store.commit('add2', 10)
    },
    btAdd3() {
      this.$store.dispatch('addAsync')
    }
  }
}
</script>

<style></style>
