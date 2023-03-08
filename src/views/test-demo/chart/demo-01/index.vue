<template>
  <div class="box">
    <iframe :src="src" frameborder="1" width="100%" height="100%"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: ''
    }
  },
  mounted() {
    this.src = './muhao1/infoSummary.html'
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
}
</style>
