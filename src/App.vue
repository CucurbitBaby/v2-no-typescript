<template>
  <div id="app" class="app">
    <div class="app__left">
      <LeftNav />
    </div>
    <div class="app__right">
      <router-view/>
    </div>
  </div>
</template>
<script>

import LeftNav from '@/layout/left-nav'

export default {
  components: {
    LeftNav
  }
}
</script>
<style lang="scss">
html, body {
  height: 100%;
  margin: 0;
}
</style>

<style lang="scss" scoped>
.app {
  height: 100%;
  display: flex;
  &__left {
    box-sizing: border-box;
    height: 100%;
    width: 210px;
    overflow: hidden;
    .el-menu {
      width: 100%;
      height: 100%;
    }
  }
  &__right {
    flex: 1;
    box-sizing: border-box;
    min-height: 100%;
    background: #f0f2f5;
    padding: 32px;
    overflow-y: auto;
  }
}
</style>
