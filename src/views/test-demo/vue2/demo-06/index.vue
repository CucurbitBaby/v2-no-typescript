<template>
  <div>
    <dt style="margin-bottom: 15px">
      添加多行合计 <el-button @click="exportExcel">导出</el-button>
    </dt>
    <u-table
      :data="tableData"
      border id="tableOut"
      :span-method="spanMethod"
      show-summary
      :summary-method="getSummaries"
      style="width: 100%"
    >
      <u-table-column
        prop="materialName"
        label="原料类别"
        width="180"
      ></u-table-column>
      <u-table-column
        prop="portOfDestination"
        label="港口"
        width="180"
      ></u-table-column>
      <u-table-column
        prop="contractNumber"
        label="合同号"
        width="180"
      ></u-table-column>
      <u-table-column
        prop="outHarborQuantity"
        label="合同未到货量"
        width="180"
      ></u-table-column>
      <u-table-column
        prop="plannedTransportationVolume"
        label="排货计划合计"
        width="180"
      ></u-table-column>
      <u-table-column
        prop="remainingQuantityPort"
        label="在港剩余量"
        width="180"
      ></u-table-column>
      <!-- 拼接动态表头 -->
      <u-table-column
        width="120"
        v-for="(item, index) in dateArr"
        :key="index"
        :prop="item"
      >
        <template slot="header">{{
          item.substring(4, 6) + '.' + item.substring(6, 8)
        }}</template>
        <template slot-scope="scope">{{
          scope.row.bigDecimals[item]
        }}</template>
      </u-table-column>
    </u-table>
  </div>
</template>

<script>
/* eslint-disable */
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
export default {
  name: 'test',
  data() {
    return {
      tableData: [
        {
          asphaltType: '沥青原料',
          bigDecimals: {
            20230214: 6104.34,
            20230215: 6104.34,
            20230216: 6104.34,
            20230217: 0,
            20230218: 0,
            20230219: 0,
            20230220: 0,
            20230221: 0,
            20230222: 0,
            20230223: 0,
            20230224: 0,
            20230225: 0,
            20230226: 0,
            20230227: 0,
            20230228: 0
          },
          contractNumber: 'SHC2208-0176-A31L',
          materialCode: '0024',
          materialName: '马瑞',
          outHarborQuantity: 24417.34,
          plannedTransportationVolume: 18313.005,
          portOfDestination: '烟台西港',
          rawMaterialsOutside: '拟订09月-2.44万吨 (09月30日到港）',
          remainingQuantityPort: 6104.335,
          schemeCode: '20230214111315',
          updateDate: '20230214'
        },
        {
          asphaltType: '沥青原料',
          bigDecimals: {
            20230214: 0,
            20230215: 0,
            20230216: 0,
            20230217: 0,
            20230218: 0,
            20230219: 0,
            20230220: 0,
            20230221: 0,
            20230222: 0,
            20230223: 0,
            20230224: 0,
            20230225: 0,
            20230226: 0,
            20230227: 0,
            20230228: 0
          },
          contractNumber: 'SHC2209-0114-A31L',
          materialCode: '0024',
          materialName: '马瑞',
          outHarborQuantity: 44537.62,
          plannedTransportationVolume: 4537,
          portOfDestination: '烟台西港',
          rawMaterialsOutside: '拟订11月-4.45万吨 (11月25日到港）',
          remainingQuantityPort: 40000.62,
          schemeCode: '20230214111315',
          updateDate: '20230214'
        },
        {
          asphaltType: '沥青原料',
          bigDecimals: {
            20230214: 0,
            20230215: 0,
            20230216: 0,
            20230217: 0,
            20230218: 0,
            20230219: 0,
            20230220: 0,
            20230221: 0,
            20230222: 0,
            20230223: 0,
            20230224: 0,
            20230225: 0,
            20230226: 0,
            20230227: 0,
            20230228: 0
          },
          contractNumber: 'SHC2206-0176-A71L',
          materialCode: '0001',
          materialName: '胜利',
          outHarborQuantity: 15404.54,
          plannedTransportationVolume: 0,
          rawMaterialsOutside: '拟订05月-1.54万吨 (05月31日到港）',
          remainingQuantityPort: 0,
          schemeCode: '20230214111315',
          updateDate: '20230214'
        },
        {
          asphaltType: '沥青原料',
          bigDecimals: {
            20230214: 0,
            20230215: 0,
            20230216: 0,
            20230217: 0,
            20230218: 0,
            20230219: 0,
            20230220: 0,
            20230221: 0,
            20230222: 0,
            20230223: 0,
            20230224: 0,
            20230225: 0,
            20230226: 0,
            20230227: 0,
            20230228: 0
          },
          contractNumber: 'SHC2208-0178-A31L',
          materialCode: '0117',
          materialName: 'Soroosh',
          outHarborQuantity: 75769.13,
          plannedTransportationVolume: 0,
          portOfDestination: '烟台',
          rawMaterialsOutside: '拟订09月-7.58万吨 (09月30日到港）',
          remainingQuantityPort: 0,
          schemeCode: '20230214111315',
          updateDate: '20230214'
        },
        {
          asphaltType: '沥青原料',
          bigDecimals: {
            20230214: 4318.28,
            20230215: 0,
            20230216: 0,
            20230217: 0,
            20230218: 0,
            20230219: 0,
            20230220: 0,
            20230221: 0,
            20230222: 0,
            20230223: 0,
            20230224: 0,
            20230225: 0,
            20230226: 0,
            20230227: 0,
            20230228: 0
          },
          contractNumber: 'SHC2208-0276-A31L',
          materialCode: '1164',
          materialName: 'LANA',
          outHarborQuantity: 34546.23,
          plannedTransportationVolume: 4318.2788,
          portOfDestination: '烟台西港',
          rawMaterialsOutside: '拟订11月-3.45万吨 (11月30日到港）',
          remainingQuantityPort: 30227.9512,
          schemeCode: '20230214111315',
          updateDate: '20230214'
        },
        {
          asphaltType: '沥青原料',
          bigDecimals: {
            20230214: 0,
            20230215: 0,
            20230216: 0,
            20230217: 0,
            20230218: 0,
            20230219: 0,
            20230220: 0,
            20230221: 0,
            20230222: 0,
            20230223: 0,
            20230224: 0,
            20230225: 0,
            20230226: 0,
            20230227: 0,
            20230228: 0
          },
          contractNumber: 'SHC2207-0083-03-A70L',
          materialCode: '1137',
          materialName: 'kimanis',
          outHarborQuantity: 8466.75,
          plannedTransportationVolume: 0,
          portOfDestination: '烟台西港',
          remainingQuantityPort: 0,
          schemeCode: '20230214111315',
          updateDate: '20230214'
        },
        {
          asphaltType: '沥青原料',
          bigDecimals: {
            20230214: 4245.23,
            20230215: 0,
            20230216: 0,
            20230217: 0,
            20230218: 0,
            20230219: 0,
            20230220: 0,
            20230221: 0,
            20230222: 0,
            20230223: 0,
            20230224: 0,
            20230225: 0,
            20230226: 0,
            20230227: 0,
            20230228: 0
          },
          contractNumber: 'SHC2209-0115-A70L',
          materialCode: '1137',
          materialName: 'kimanis',
          outHarborQuantity: 67923.74,
          plannedTransportationVolume: 4245.2338,
          portOfDestination: '烟台西港',
          rawMaterialsOutside: '拟订11月-6.79万吨 (11月15日到港）',
          remainingQuantityPort: 63678.5062,
          schemeCode: '20230214111315',
          updateDate: '20230214'
        }
      ],
      dateArr: [
        '20230214',
        '20230215',
        '20230216',
        '20230217',
        '20230218',
        '20230219',
        '20230220',
        '20230221',
        '20230222',
        '20230223',
        '20230224',
        '20230225',
        '20230226',
        '20230227',
        '20230228'
      ],
      spanArr: [], // 一个空的数组，用于存放每一行记录的合并数
      pos: 0 // spanArr 的索引
    }
  },
  created() {
    this.getArr(this.tableData)
  },
  methods: {
    // 表格合并
    spanMethod({ columnIndex, rowIndex }) {
      if (columnIndex == 0 || columnIndex == 1) {
        const _rows = this.spanArr[rowIndex]
        const _cols = _rows > 0 ? 1 : 0
        return {
          rowspan: _rows,
          colspan: _cols
        }
      }
    },
    // 合并前处理数据
    getArr(data) {
      for (let i = 0; i < data.length; i++) {
        if (i === 0) {
          this.spanArr.push(1)
          this.pos = 0
        } else {
          if (
            data[i].materialName == data[i - 1].materialName ||
            data[i].portOfDestination == data[i - 1].portOfDestination
          ) {
            this.spanArr.push(0)
            this.spanArr[this.pos] += 1
          } else {
            this.spanArr.push(1)
            this.pos = i
          }
        }
      }
    },
    // 合计
    getSummaries(param) {
      const { columns, data } = param
      let data1 = []
      let data2 = []
      data.map((item) => {
        if (item.materialName == '马瑞') {
          data1.push(item)
        } else {
          data2.push(item)
        }
      })
      let values1 = []
      let values2 = []
      let values3 = []
      let mrTotal = []
      let other = []
      let sums = []
      // 这里应该是从左往右遍历表头
      columns.forEach((column, index) => {
        if (index === 0) {
          // 这里应该是填充最后一行数据
          mrTotal.push('马瑞到货合计')
          other.push('沥青到货合计')
          sums.push('其他沥青到货合计')
          return
        } else if (index === 1 || index === 2) {
          mrTotal[index] = ''
          other[index] = ''
          sums[index] = ''
        }
        // 获取一列的数据数组

        if (index > 5) {
          values1 = data1.map((item) => {
            return Number(item.bigDecimals[column.property])
          })
          values2 = data2.map((item) => {
            return Number(item.bigDecimals[column.property])
          })
          values3 = data.map((item) => {
            return Number(item.bigDecimals[column.property])
          })
        } else {
          values1 = data1.map((item) => {
            return Number(item[column.property])
          })
          values2 = data2.map((item) => {
            return Number(item[column.property])
          })
          values3 = data.map((item) => {
            return Number(item[column.property])
          })
        }

        if (!values1.every((value) => isNaN(value))) {
          // 这里应该是填充最后一行数据
          mrTotal[index] = values1.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return Number((prev + curr).toFixed(2))
            } else {
              return prev
            }
          }, 0)
          mrTotal[index]
        } else {
          // 这里应该是填充最后一行数据
          mrTotal[index] = 0
        }
        if (!values2.every((value) => isNaN(value))) {
          // 这里应该是填充最后一行数据
          other[index] = values2.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return Number((prev + curr).toFixed(2))
            } else {
              return prev
            }
          }, 0)
          other[index]
        } else {
          // 这里应该是填充最后一行数据
          other[index] = 0
        }
        if (!values3.every((value) => isNaN(value))) {
          // 这里应该是填充最后一行数据
          sums[index] = values3.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return Number((prev + curr).toFixed(2))
            } else {
              return prev
            }
          }, 0)
          sums[index]
        } else {
          // 这里应该是填充最后一行数据
          sums[index] = 0
        }
      })
      // 得到最后一列数据， 我猜测的，验证一下。 就是这样的
      return [mrTotal, other, sums]
    },
    exportExcel() {
      var xlsxParam = { raw: true }
      var wb = XLSX.utils.table_to_book(document.querySelector('#tableOut'), xlsxParam)
      var wbout = XLSX.write(wb, {
        bookType: 'xlsx',
        bookSST: true,
        type: 'array'
      })
      try {
        FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), '表格导出.xlsx')
      } catch (e) {
        if (typeof console !== 'undefined') console.log(e, wbout)
      }
      return wbout
    },
  }
}
</script>

<style>
/* 将表格底部的滚动条放在合计下面 */
.el-table {
  overflow-x: auto;
}
.el-table__header-wrapper,
.el-table__body-wrapper,
.el-table__footer-wrapper {
  overflow: visible;
}
.el-table::after {
  position: relative;
}
.el-table--scrollable-x .el-table__body-wrapper {
  overflow: visible;
}
.el-table td .cell {
  height: auto !important;
}
</style>