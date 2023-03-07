<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="productName" label="产品名称"> </el-table-column>
      <el-table-column prop="customerName" label="客户"> </el-table-column>
      <el-table-column prop="baoXiao" label="报销"> </el-table-column>
      <el-table-column prop="shenHe" label="审核"> </el-table-column>
    </el-table>
    <br />
    <el-button type="primary" plain @click="handleClickMagic">Magic</el-button>
  </div>
</template>

<script>
import tableData from './tableData'
export default {
  name: 'TestElementUiDemo11View',
  data() {
    return {
      // 原始数据是乱序的
      tableData
    }
  },
  methods: {
    handleClickMagic() {
      // 数组对象根据每个对象的指定key值归类
      const result = this.tableData.reduce((a, b) => {
        // console.log('a', a)
        if (a[b.productName]) {
          // console.log('a[b.productName]', a[b.productName])
          a[b.productName].push(b)
        } else {
          // console.log('[b]', [b])
          a[b.productName] = [b]
        }
        return a
      }, {})
      // console.log('result', result)
      // 所有key值
      const productKeys = Object.keys(result)
      // console.log('productKeys', productKeys)
      // 所有key值的排序
      const productKeysSort = productKeys.sort(function (a, b) {
        // console.log("a.localeCompare(b, 'zh-CN')", a.localeCompare(b, 'zh-CN'))
        return a.localeCompare(b, 'zh-CN')
      })
      // console.log(productKeysSort)

      // 添加合计
      productKeysSort.forEach((k) => {
        const count = result[k].reduce(function (countObj, current) {
          // 判断当前数组元素是否出现过
          if (countObj.productName) {
            countObj.customerName += current.customerName
            countObj.baoXiao += current.baoXiao
            countObj.shenHe += current.shenHe
          } else {
            countObj = {
              productName: '合计',
              _productName: current.productName,
              customerName: current.customerName,
              baoXiao: current.baoXiao,
              shenHe: current.shenHe
            }
          }
          return countObj
        }, {})

        result[k].push(count)
      })

      // 重写表格数据
      const _tableData = productKeysSort.map((k) => result[k]).flat()
      // console.log(_tableData)

      this.tableData = _tableData
    }
  }
}
</script>
