<template>
  <div class="fix-layout">
    <div class="app__left">
      <LeftNav />
    </div>
    <div class="app__right">
      <router-view />
    </div>
  </div>
</template>

<script>
import LeftNav from '@/layout/left-nav'

export default {
  name: 'LayoutCmp',
  components: {
    LeftNav
  }
}
</script>

<style>
.fix-layout {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
