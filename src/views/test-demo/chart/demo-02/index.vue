<template>
  <div class="box">
    <div>
    </div>
    <iframe :src="src" frameborder="1" width="100%" height="100%">{{src}}</iframe>
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
    this.src = './muhaoTwo/infoSummaryTwo.html'
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
}
</style>
