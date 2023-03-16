<template>
  <div class="addBox">
    <div class="head">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="box">
        <el-form-item label="编号" prop="num">
          <el-input v-model="ruleForm.num"></el-input>
        </el-form-item>
        <el-form-item label="计划日期" prop="date">
          <el-time-picker placeholder="选择时间" v-model="ruleForm.date"></el-time-picker>
        </el-form-item>
        <el-form-item label="提报部门" prop="dept">
          <el-select v-model="ruleForm.dept" placeholder="请选择提报部门">
            <el-option v-for="item in ruleForm.deptList" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="提报人" prop="people">
          <el-select v-model="ruleForm.people" placeholder="请选择提报部门">
            <el-option v-for="item in ruleForm.peopleList" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="list">
      <el-table :data="listData" :span-method="spanMethod" border show-summary :summary-method="getSummary">
        <el-table-column prop="product" label="产品名称" width="300"> </el-table-column>
        <el-table-column prop="custom" label="客户名称" width="300"> </el-table-column>
        <el-table-column prop="amount" label="提报量" width="300"> </el-table-column>
      </el-table>
    </div>
    <div class="table">
      <div class="top">
        <div class="custom">
          <span>客户：</span>
          <el-select v-model="cuetom" placeholder="请选择客户">
            <el-option v-for="item in cuetomList" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>
        <div class="saleman">
          <span>业务员：</span>
          <el-select v-model="sale" placeholder="请选择业务员">
            <el-option v-for="item in saleList" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>
        <el-button>查询</el-button>
      </div>
      <el-table ref="multipleTable" :data="tableData" border style="width: 100%" @selection-change="selectionChange">
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column prop="num" label="协议号"> </el-table-column>
        <el-table-column prop="custom" label="客户" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="shengyu" label="协议剩余量"> </el-table-column>
        <el-table-column prop="product" label="产品" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="amount" label="提报量"> </el-table-column>
        <el-table-column prop="sale" label="业务员" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="remark" label="备注"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      listData: [],
      cuetom: '',
      cuetomList: [],
      sale: '',
      saleList: [],
      spanArr: [], // 一个空的数组，用于存放每一行记录的合并数
      pos: 0, // spanArr 的索引
      tableData: [
        {
          num: 111,
          custom: 'A',
          shengyu: 333,
          product: '70号',
          amount: 40,
          sale: 666,
          remark: 777
        },
        {
          num: 111,
          custom: 'B',
          shengyu: 333,
          product: '70号',
          amount: 30,
          sale: 666,
          remark: 777
        },
        {
          num: 111,
          custom: 'C',
          shengyu: 333,
          product: '90号',
          amount: 10,
          sale: 666,
          remark: 777
        },
        {
          num: 111,
          custom: 'A',
          shengyu: 22,
          product: '70号',
          amount: 60,
          sale: 666,
          remark: 777
        },
        {
          num: 111,
          custom: 'B',
          shengyu: 333,
          product: '70号',
          amount: 20,
          sale: 666,
          remark: 777
        },
        {
          num: 111,
          custom: 'C',
          shengyu: 333,
          product: '90号',
          amount: 15,
          sale: 666,
          remark: 777
        },
        {
          num: 111,
          custom: 'A',
          shengyu: 333,
          product: '70号',
          amount: 20,
          sale: 666,
          remark: 777
        },
        {
          num: 111,
          custom: 'B',
          shengyu: 333,
          product: '70号',
          amount: 30,
          sale: 666,
          remark: 777
        },
        {
          num: 111,
          custom: 'C',
          shengyu: 333,
          product: '90号',
          amount: 50,
          sale: 666,
          remark: 777
        }
      ], // 渲染表格的data
      saveData: [], // 传参的data
      ruleForm: {
        num: '',
        date: '',
        dept: '',
        deptList: [],
        people: '',
        peopleList: []
      },
      rules: {
        num: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
        date: [{ required: true, message: '请选择时间', trigger: 'change' }],
        dept: [{ required: true, message: '请选择提报部门', trigger: 'change' }],
        people: [{ required: true, message: '请选择提报人', trigger: 'change' }]
      },
      mergerItems: [{ columnIndex: 0, spanArr: [], pos: 0, prop: '_product', parent: [] }]
    }
  },
  methods: {
    spanMethod({ columnIndex, rowIndex }) {
      if (columnIndex === 0) {
        // 这里判断第几列需要合并
        const item = this.mergerItems.find((item) => item.columnIndex === columnIndex)
        const _row = item.spanArr[rowIndex]
        const _col = _row > 0 ? 1 : 0
        return {
          rowspan: _row,
          colspan: _col
        }
      }
    },
    getArr(data, array) {
      for (let n = 0; n < array.length; n++) {
        array[n].spanArr = [] // 数据清空(重新调此方法的时候需要清空上一次的数据)
        for (let i = 0; i < data.length; i++) {
          if (i === 0) {
            array[n].spanArr.push(1)
            array[n].pos = 0
          } else {
            // 判断当前元素与上一个元素是否相同
            let flag = true
            for (let j = 0; j < array[n].parent.length; j++) {
              if (data[i][array[n].parent[j]] !== data[i - 1][array[n].parent[j]]) {
                flag = false
                break
              }
            }
            if (flag && data[i][array[n].prop] === data[i - 1][array[n].prop]) {
              array[n].spanArr[array[n].pos] += 1
              array[n].spanArr.push(0)
            } else {
              array[n].spanArr.push(1)
              array[n].pos = i
            }
          }
        }
      }
    },
    selectionChange(event) {
      const e = _.cloneDeep(event)
      const result = e.reduce((a, b) => {
        if (a[b.product]) {
          a[b.product].push(b)
        } else {
          a[b.product] = [b]
        }
        return a
      }, {})
      const productKeys = Object.keys(result)
      const productKeysSort = productKeys.sort(function (a, b) {
        return a.localeCompare(b, 'zh-CN')
      })
      let newArray = []
      productKeysSort.forEach((k) => {
        newArray = result[k].reduce((total, cur, index) => {
          const hasValue = total.findIndex((current) => {
            return current.custom === cur.custom
          })
          hasValue === -1 && total.push(cur)
          hasValue !== -1 && (total[hasValue].amount = total[hasValue].amount + cur.amount)
          return total
        }, [])
        result[k] = newArray
        const count = result[k].reduce(function (countObj, current) {
          // 判断当前数组元素是否出现过
          if (countObj.product) {
            countObj.custom += ''
            countObj.amount += current.amount
          } else {
            countObj = {
              product: '合计',
              _product: current.product,
              custom: '',
              amount: current.amount
            }
          }
          return countObj
        }, {})
        result[k].push(count)
      })
      const _tableData = productKeysSort.map((k) => result[k]).flat()
      this.listData = _tableData
      this.getArr(this.listData, this.mergerItems)
    },
    getSummary(param) {
      const { columns, data } = param
      const table = []
      if (data.length) {
        data.forEach((item) => {
          if (item.product !== '合计') {
            table.push(item)
          }
        })
      }
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '汇总'
          return
        }
        const values = table.map((item) => Number(item[column.property]))
        if (!values.every((value) => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
          return sums[index]
        } else {
          sums[index] = ''
        }
      })
      return sums
    }
  }
}
</script>

<style lang="scss" scoped>
.addBox {
  margin: 0 10px;
  box-sizing: border-box;
  .head {
    padding: 10px;
    border-radius: 4px;
    background-color: #ffffff;
    .box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .el-form-item {
        margin-right: 10px;
      }
    }
  }
  .list {
    margin-top: 10px;
    padding: 10px 0;
    border-radius: 4px;
  }
  .table {
    padding: 10px;
    margin-top: 10px;
    background-color: #ffffff;
    .top {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      .custom,
      .saleman {
        display: flex;
        align-items: center;
        margin-right: 20px;
      }
      span {
        margin-right: 10px;
        width: 80px;
      }
    }
  }
}
</style>
