<template>
  <div class="myWrap">
    <el-table
      ref="one"
      :data="tableBody"
      border
      :header-cell-style="{
        background: '#FAFAFA',
        color: '#333333',
        fontWeight: 'bold',
        fontSize: '14px'
      }"
      show-summary
    >
      <el-table-column type="index" label="序号" width="60"> </el-table-column>
      <el-table-column
        prop="bookType"
        label="人物隶属"
        width="100"
      ></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="zhifubao" label="支付宝" width="360">
      </el-table-column>
      <el-table-column prop="weixin" label="微信" width="360">
      </el-table-column>
      <el-table-column prop="jingdong" label="京东" width="360">
      </el-table-column>
      <el-table-column prop="yunshanfu" label="云闪付" width="360">
      </el-table-column>
      <el-table-column prop="suning" label="苏宁" width="360">
      </el-table-column>
      <el-table-column prop="lakala" label="拉卡拉" width="360">
      </el-table-column>
    </el-table>
    <el-table ref="two" :data="tableBody2" border show-summary>
      <el-table-column type="index" label="序号" width="60"> </el-table-column>
      <el-table-column
        prop="bookType1"
        label="业务类型1"
        width="100"
      ></el-table-column>
      <el-table-column prop="name1" label="姓名1" width="120"></el-table-column>
      <el-table-column prop="zhifubao1" label="支付宝1" width="360">
      </el-table-column>
      <el-table-column prop="weixin1" label="微信1" width="360">
      </el-table-column>
      <el-table-column prop="jingdong1" label="京东1" width="360">
      </el-table-column>
      <el-table-column prop="yunshanfu1" label="云闪付1" width="360">
      </el-table-column>
      <el-table-column prop="suning1" label="苏宁1" width="360">
      </el-table-column>
      <el-table-column prop="lakala1" label="拉卡拉1" width="360">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
// cnpm i lodash --save
import _ from 'lodash'
export default {
  data() {
    return {
      tableBody: [
        {
          bookType: '西游记',
          name: '孙悟空',
          zhifubao: 1,
          weixin: 2,
          jingdong: 3,
          yunshanfu: 4,
          suning: 5,
          lakala: 6
        },
        {
          bookType: '西游记',
          name: '猪八戒',
          zhifubao: 6,
          weixin: 5,
          jingdong: 4,
          yunshanfu: 3,
          suning: 2,
          lakala: 1
        }
      ],
      tableBody2: [
        {
          bookType1: '三国演义',
          name1: '刘备',
          zhifubao1: 2,
          weixin1: 2,
          jingdong1: 2,
          yunshanfu1: 2,
          suning1: 2,
          lakala1: 2
        },
        {
          bookType1: '三国演义',
          name1: '猪八戒',
          zhifubao1: 3,
          weixin1: 3,
          jingdong1: 3,
          yunshanfu1: 3,
          suning1: 3,
          lakala1: 3
        }
      ]
    }
  },
  mounted() {
    // 1. 初始化的时候，设置横向滚动规则
    this.setScrollRule()
  },
  methods: {
    setScrollRule() {
      const that = this // 存一份this便于取用
      this.one = this.$refs.one.bodyWrapper // 获取带有滚动条的dom元素，注意饿了么UI的el-table的横向滚动条是设置在类名为
      this.two = this.$refs.two.bodyWrapper // class="el-table__body-wrapper is-scrolling-left" 这个dom上。审查元素可知
      // console.log('this.one', this.one)
      // 2. 绑定滚动事件，顺带加上一个节流函数吧，也算是性能优化
      this.one.addEventListener(
        'scroll',
        _.throttle(
          function () {
            that.fn1() // 85毫秒触发一次吧
          },
          85,
          {
            leading: true, // 指定调用在节流开始前
            trailing: false // 指定调用在节流结束后,
          }
        )
      )
      // 同上...
      this.two.addEventListener(
        'scroll',
        _.throttle(
          function () {
            that.fn2()
          },
          85,
          {
            leading: true,
            trailing: false
          }
        )
      )
    },
    // 3. 通过Element.scrollLeft属性 可以读取或设置元素滚动条到元素左边的距离
    fn1() {
      // console.log('滚动条一 移动多少？', this.one.scrollLeft)
      this.two.scrollLeft = this.one.scrollLeft
      /**
       * 加了节流函数以后，就会出现当我们滑动过快的时候，远小于定义节流时间所触发的间隔
       * 就会出现距离不准确问题，所以再加一个延时定时器重新更正（更新一下位置）
       * */
      setTimeout(() => {
        this.two.scrollLeft = this.one.scrollLeft // api文档详情见mdn文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollLeft
      }, 120)
    },
    // 同上...
    fn2() {
      // console.log('滚动条二 移动多少？', this.two.scrollLeft)
      this.one.scrollLeft = this.two.scrollLeft
      setTimeout(() => {
        this.one.scrollLeft = this.two.scrollLeft
      }, 120)
    }
  },
  beforeDestroy() {
    // 移除事件监听
    this.one.removeEventListener('scroll', this.fn1)
    this.one.removeEventListener('scroll', this.fn2)
  }
}
</script>
