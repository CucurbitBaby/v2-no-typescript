<template>
  <el-table
    :data="khbzList"
    :span-method="objectSpanMethod"
    border
  >
    <el-table-column label="考核标准" align="center" prop="khbzName" />
    <el-table-column label="考核部门" align="center" prop="khbm" />
    <el-table-column label="考核事项" align="center" prop="khsx" />
    <el-table-column label="分解分值" align="center" prop="score" />
    <el-table-column label="考核内容" align="center" prop="khnr" />
    <el-table-column label="考核方式" align="center" prop="khfs" />
    <el-table-column
      label="操作"
      align="center"
      class-name="small-padding fixed-width"
    >
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="text"
          icon="el-icon-edit"
          @click="handleUpdate(scope.row)"
          v-hasPermi="['hzkh:khxz:edit']"
        ></el-button>
        <el-button
          size="mini"
          type="text"
          icon="el-icon-delete"
          @click="handleDelete(scope.row)"
          v-hasPermi="['hzkh:khxz:remove']"
        ></el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      // 考核标准下拉框
      khbzList: [
        {
          searchValue: null,
          createBy: null,
          createTime: '2022-09-19 10:56:14',
          updateBy: null,
          updateTime: null,
          remark: null,
          params: {},
          id: 3,
          khbzId: 9,
          khbzName: '2018年村长工作考核制度',
          khbm: '**县水务局',
          khbmId: null,
          khsx: '河长巡河',
          score: 40,
          khnr: '河长巡河频次',
          pfff: '按照市级工作方案要求',
          khfs: '现场抽查、查阅资料',
          sort: 1,
          zl: 'ssfa,gzzd'
        },
        {
          searchValue: null,
          createBy: null,
          createTime: '2022-09-20 13:47:45',
          updateBy: null,
          updateTime: null,
          remark: null,
          params: {},
          id: 4,
          khbzId: 9,
          khbzName: '2018年村长工作考核制度',
          khbm: '**县水务局',
          khbmId: null,
          khsx: '环境保护',
          score: 10,
          khnr: '垃圾清理',
          pfff: '按照市级工作方案要求',
          khfs: '现场抽查、查阅资料',
          sort: 1,
          zl: 'ssfa'
        },
        {
          searchValue: null,
          createBy: null,
          createTime: '2022-09-20 17:28:59',
          updateBy: null,
          updateTime: null,
          remark: null,
          params: {},
          id: 5,
          khbzId: 9,
          khbzName: '2018年村长工作考核制度',
          khbm: '**县',
          khbmId: 100,
          khsx: '111',
          score: 10,
          khnr: '12121',
          pfff: null,
          khfs: null,
          sort: 1,
          zl: ''
        },
        {
          searchValue: null,
          createBy: null,
          createTime: '2022-09-20 17:29:19',
          updateBy: null,
          updateTime: null,
          remark: null,
          params: {},
          id: 6,
          khbzId: 9,
          khbzName: '2018年村长工作考核制度',
          khbm: '**县',
          khbmId: 100,
          khsx: '111',
          score: 10,
          khnr: '1',
          pfff: null,
          khfs: null,
          sort: 1,
          zl: ''
        },
        {
          searchValue: null,
          createBy: null,
          createTime: '2022-09-21 09:59:14',
          updateBy: null,
          updateTime: null,
          remark: null,
          params: {},
          id: 7,
          khbzId: 10,
          khbzName: '2019年村长工作考核制度',
          khbm: '**县',
          khbmId: 100,
          khsx: '测试1',
          score: 10,
          khnr: '233',
          pfff: null,
          khfs: null,
          sort: 1,
          zl: ''
        },
        {
          searchValue: null,
          createBy: null,
          createTime: '2022-09-21 09:59:52',
          updateBy: null,
          updateTime: null,
          remark: null,
          params: {},
          id: 8,
          khbzId: 10,
          khbzName: '2019年村长工作考核制度',
          khbm: '**县',
          khbmId: 100,
          khsx: '测试1',
          score: 20,
          khnr: '阿打发',
          pfff: null,
          khfs: null,
          sort: 2,
          zl: ''
        },
        {
          searchValue: null,
          createBy: null,
          createTime: '2022-09-21 10:00:09',
          updateBy: null,
          updateTime: null,
          remark: null,
          params: {},
          id: 9,
          khbzId: 10,
          khbzName: '2019年村长工作考核制度',
          khbm: '**县水务局',
          khbmId: 101,
          khsx: '1212',
          score: 20,
          khnr: '122',
          pfff: null,
          khfs: null,
          sort: 0,
          zl: ''
        }
      ],
      // data里面需要合并的项以及对应的spanArr和pos
      mergerItems: [
        { columnIndex: 0, spanArr: [], pos: 0, prop: 'khbzName', parent: [] },
        {
          columnIndex: 1,
          spanArr: [],
          pos: 0,
          prop: 'khbm',
          parent: ['khbzId']
        },
        {
          columnIndex: 2,
          spanArr: [],
          pos: 0,
          prop: 'khsx',
          parent: ['khbzId', 'khbmId']
        }
      ]
    }
  },
  created() {
    this.getSpanArr(this.khbzList, this.mergerItems)
  },
  methods: {
    getSpanArr(data, array) {
      // 循环数据处理
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
              if (
                data[i][array[n].parent[j]] !== data[i - 1][array[n].parent[j]]
              ) {
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
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0 || columnIndex === 1 || columnIndex === 2) {
        // 这里判断第几列需要合并
        const item = this.mergerItems.find(
          (item) => item.columnIndex === columnIndex
        )
        const _row = item.spanArr[rowIndex]
        const _col = _row > 0 ? 1 : 0
        return {
          rowspan: _row,
          colspan: _col
        }
      }
    }
  }
}
</script>
