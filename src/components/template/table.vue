<template>
  <div class="main">
   <div class="topButtons" v-for="(button,btnIdx) in topButtons" :key="btnIdx">
    <el-button >{{button.name}}</el-button>
   </div>
   <div class="table">
    
   </div>
   <div class="bottomButtons" v-for="(button,btnIdx) in bottomButtons" :key="btnIdx">
    <el-button>{{button.name}}</el-button>
   </div>
  </div>
</template>

<script>
export default {
name:"table",
data(){
  return{
    
  }
},
props:{
  topButtons:{
    type:Array,
    default:()=>[]
  },
  bottomButtons:{
    type:Array,
    default:()=>[]
  },
},
methods:{}
}
</script>

<style lang="scss" scoped>

</style>