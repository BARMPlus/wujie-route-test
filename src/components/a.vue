<template>
  <div class="a">
    <button @click="handleClick">更换src</button>
    <iframe width="100%" height="800px" :src="iframeSrc" :key="iframeSrc" />
<!--    <iframe width="100%" height="800px" :src="iframeSrc" />-->
  </div>
</template>

<script>
import { createToast } from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'

const map = {
  1: {
    name: '首页',
    src: 'https://wujie-micro.github.io/demo-main-vue/home'
  },
  2: {
    name: 'react16',
    src: 'https://wujie-micro.github.io/demo-main-vue/react16'
  },
  3: {
    name: 'react17',
    src: 'https://wujie-micro.github.io/demo-main-vue/react17'
  },
  4: {
    name: 'vue2',
    src: 'https://wujie-micro.github.io/demo-main-vue/vue2'
  },
  5: {
    name: 'vue3',
    src: 'https://wujie-micro.github.io/demo-main-vue/vue3'
  },
  6: {
    name: 'vite',
    src: 'https://wujie-micro.github.io/demo-main-vue/vite'
  },
  7: {
    name: 'angular12',
    src: 'https://wujie-micro.github.io/demo-main-vue/angular12'
  },
  8: {
    name: 'all',
    src: 'https://wujie-micro.github.io/demo-main-vue/all'
  },
}


export default {
  data() {
    return {}
  },
  computed: {
    iframeSrc() {
      return map[this.$route.query.tab || 1].src
    }
  },
  methods: {
    handleClick() {
      const max = Object.keys(map).length
      let tab = Number(this.$route.query.tab || 1)
      if (tab >= max) {
        tab = 1
      } else {
        tab++
      }
      this.$router.push(`/a?tab=${tab}`)
      createToast(map[tab].name)
    },
  },
}
</script>
