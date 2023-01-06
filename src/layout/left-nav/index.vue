<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
  >
    <el-submenu index="1">

      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
        <!-- tip 父类目录能不能点击跳转 -->
        <!-- <el-menu-item index="1-0">导航一</el-menu-item> -->
      </template>

      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="/">Home</el-menu-item>
        <el-menu-item index="/about">About</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template slot="title">选项4</template>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>

    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>

    <!--
    <el-menu-item index="3" disabled>
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    -->

    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'LeftNav',
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu-demo {
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar-track-piece {
    // background: #d3dce6;  // 滚动条背景色
    background: #545c64;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    // background: #99a9bf;  // 在上面(#d3dce6)的色域右下方一点
    background: #747c85;
    border-radius: 20px;
  }
}
</style>
