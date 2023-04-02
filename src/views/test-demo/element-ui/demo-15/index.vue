<template>
  <div style="margin: 15px">
    <h3>el-table @select事件版本表格回显演示</h3>
    <el-table ref="multipleTable" :data="showTableData" tooltip-effect="dark" style="width: 100%" border
      @selection-change="handleSelectionChange" @select-all="handleSelectAllChange" @select="handleSelectRowChange">
      <el-table-column type="selection" width="55" />
      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120" />
      <el-table-column prop="address" label="地址" show-overflow-tooltip />
    </el-table>

    <el-pagination class="echo-pagination" :total="pageTotal" :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20, 50, 100]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange" @current-change="handleCurrentChange" />
  </div>
</template>

<script>
import tableData from './tableData'
/**
 * 事件顺序:
 *    select 事件 selection-change 事件
 *    selection-change 事件  select-all 事件
 *    select 和 select-all不会同时触发
 * 如何得知当前操作是什么操作(勾选行，取消勾选行，全选，取消全选) => 自带的事件即可得知1/2(select-all, select 事件)
 * 如何区分当前操作是: 勾选还是取消勾选?  => 计算
 */
export default {
  name: 'TestElementUiDemo15View',
  data() {
    return {
      tableData: tableData,
      showTableData: [],
      currentPage: 1, // 这个属性是页面加载时分页组件默认选中的页码
      pageTotal: 0,
      pageSize: 5,
      multipleSelection: []
    }
  },
  mounted() {
    this.pageTotal = this.tableData.length
    this.showTableData = this.tableData.slice(0, 5)
  },
  methods: {
    /**
     * PageSize 修改页面默认显示条数
     * */
    handleSizeChange(val) {
      this.pageSize = val
      this.showTableData = this.tableData.slice(0, val)
    },
    /**
     * 修改页码
     * */
    handleCurrentChange(val) {
      this.currentPage = val
      this.showTableData = this.tableData.slice(
        (val - 1) * Number(this.pageSize),
        val * Number(this.pageSize)
      )
    },

    /**
     * 当用户手动勾选全选 Checkbox 时触发的事件
     */
    handleSelectAllChange(selection) {
      console.log('select-all 事件')
    },

    /**
     * 当用户手动勾选数据行的 Checkbox 时触发的事件
     */
    handleSelectRowChange(selection, row) {
      console.log('select 事件')
    },

    /**
     * selection-change 勾选事件
     */
    handleSelectionChange(val) {
      console.log('selection-change 事件')
      this.multipleSelection = val
    }
  }
}
</script>

<style lang="scss" scoped>
.echo-pagination {
  margin-top: 6px;
}
</style>
