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

    <el-menu-item index="/">
      <i class="el-icon-collection-tag"></i>
      <span slot="title">主页</span>
    </el-menu-item>

    <el-submenu index="/test-demo">

      <template slot="title">
        <i class="el-icon-tickets"></i>
        <span>测试</span>
        <!-- tip 父类目录能不能点击跳转 -->
        <!-- <el-menu-item index="1-0">导航一</el-menu-item> -->
      </template>

      <!--
        <el-menu-item-group>
        <template slot="title">业务</template>
        <el-menu-item index="/">Home</el-menu-item>
        <el-menu-item index="/about">About</el-menu-item>
      </el-menu-item-group>
      -->

      <el-submenu index="/test-demo/axios">
        <template slot="title"><ic />axios</template>
        <el-menu-item index="/test-demo/axios/demo-01"><ic />选项1</el-menu-item>
      </el-submenu>

      <!--
        <el-menu-item-group title="组件">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      -->

      <el-submenu index="/test-demo/vue2">
        <template slot="title"><ic />Vue2</template>
        <el-menu-item index="/test-demo/vue2/demo-01"><ic />v-if和slot同时用</el-menu-item>
        <el-menu-item index="/test-demo/vue2/demo-02"><ic />表格计算</el-menu-item>
        <el-menu-item index="/test-demo/vue2/demo-03"><ic />嵌套mixins钩子</el-menu-item>
        <el-menu-item index="/test-demo/vue2/demo-04"><ic />mixins 数据</el-menu-item>
      </el-submenu>

      <el-submenu index="1-4">
        <template slot="title"><ic />Vue3</template>
        <el-menu-item index="1-4-1"><ic />选项1</el-menu-item>
      </el-submenu>

      <el-submenu index="/test-demo/element-ui">
        <template slot="title"><ic />ElementUI</template>
        <el-menu-item index="/test-demo/element-ui/demo-01"><ic />el-cascader</el-menu-item>
        <el-menu-item index="/test-demo/element-ui/demo-02"><ic />懒加载 cascader</el-menu-item>
        <el-menu-item index="/test-demo/element-ui/demo-03"><ic />懒加载回显</el-menu-item>
        <el-menu-item index="/test-demo/element-ui/demo-04"><ic />试用倒计时</el-menu-item>
        <el-menu-item index="/test-demo/element-ui/demo-05"><ic />普通分页回显</el-menu-item>
        <el-menu-item index="/test-demo/element-ui/demo-06"><ic />后端分页回显</el-menu-item>
        <el-menu-item index="/test-demo/element-ui/demo-07"><ic />混入默认回显</el-menu-item>
        <el-menu-item index="/test-demo/element-ui/demo-08"><ic />混入双向绑定</el-menu-item>
        <el-menu-item index="/test-demo/element-ui/demo-09"><ic />简单模态回显</el-menu-item>
        <el-menu-item index="/test-demo/element-ui/demo-10"><ic />复杂模态回显</el-menu-item>
      </el-submenu>

    </el-submenu>

    <el-submenu index="/vue2-demo">

      <template slot="title">
        <i class="el-icon-tickets"></i>
        <span>Vue2</span>
      </template>

      <el-submenu index="/vue2-demo/composition-api">
        <template slot="title"><ic />CompositionAPI</template>
        <el-menu-item index="/vue2-demo/composition-api/demo-01"><ic />选项1</el-menu-item>
      </el-submenu>

      <!--
        模板
        <el-submenu index="1-3">
        <template slot="title"><ic />选项2</template>
        <el-menu-item index="1-3-1"><ic />选项1</el-menu-item>
      </el-submenu>
      -->

    </el-submenu>

    <el-submenu index="/data-structures-and-algorithms">

      <template slot="title">
        <i class="el-icon-tickets"></i>
        <span>数据结构与算法</span>
      </template>

      <el-submenu index="/data-structures-and-algorithms/tree">
        <template slot="title"><ic />tree</template>
        <el-menu-item index="/data-structures-and-algorithms/tree/demo-01"><ic />城市树</el-menu-item>
      </el-submenu>

      <!--
        模板
        <el-submenu index="1-3">
        <template slot="title"><ic />选项2</template>
        <el-menu-item index="1-3-1"><ic />选项1</el-menu-item>
      </el-submenu>
      -->

    </el-submenu>

    <el-menu-item index="3">
      <i class="el-icon-tickets"></i>
      <span slot="title">导航二</span>
    </el-menu-item>

    <!--
    <el-menu-item index="3" disabled>
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    -->

    <el-menu-item index="4">
      <i class="el-icon-tickets"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import ic from '@/components/navigation-icon'

export default {
  name: 'LeftNav',
  components: {
    ic
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath)
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
