<template>
  <div class="hello">
    <h1>导出excel, 多个表格的数据导出到同一张excel, 两个sheel显示</h1>
    <button @click="getExcel">导出excel</button>
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
      >
        <el-table-column type="index" label="序号" width="60">
        </el-table-column>
        <el-table-column
          prop="bookType"
          label="人物隶属"
          width="180"
        ></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="zhifubao" label="支付宝">
        </el-table-column>
        <el-table-column prop="weixin" label="微信">
        </el-table-column>
        <el-table-column prop="jingdong" label="京东">
        </el-table-column>
        <el-table-column prop="yunshanfu" label="云闪付">
        </el-table-column>
        <el-table-column prop="suning" label="苏宁">
        </el-table-column>
        <el-table-column prop="lakala" label="拉卡拉">
        </el-table-column>
      </el-table>
      <br>
      <el-table ref="two" :data="tableBody2" border>
        <el-table-column type="index" label="序号" width="60">
        </el-table-column>
        <el-table-column
          prop="bookType1"
          label="业务类型1"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="name1"
          label="姓名1"
        ></el-table-column>
        <el-table-column prop="zhifubao1" label="支付宝1">
        </el-table-column>
        <el-table-column prop="weixin1" label="微信1">
        </el-table-column>
        <el-table-column prop="jingdong1" label="京东1">
        </el-table-column>
        <el-table-column prop="yunshanfu1" label="云闪付1">
        </el-table-column>
        <el-table-column prop="suning1" label="苏宁1">
        </el-table-column>
        <el-table-column prop="lakala1" label="拉卡拉1">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import XLSX from 'xlsx' // 引入xlsx
export default {
  name: 'HelloWorld',
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
        },
        {
          bookType: '西游记',
          name: '沙和尚',
          zhifubao: 6,
          weixin: 5,
          jingdong: 4,
          yunshanfu: 3,
          suning: 2,
          lakala: 1
        },
        {
          bookType: '西游记',
          name: '唐僧',
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
          name1: '张飞',
          zhifubao1: 3,
          weixin1: 3,
          jingdong1: 3,
          yunshanfu1: 3,
          suning1: 3,
          lakala1: 3
        },
        {
          bookType1: '三国演义',
          name1: '关羽',
          zhifubao1: 3,
          weixin1: 3,
          jingdong1: 3,
          yunshanfu1: 3,
          suning1: 3,
          lakala1: 3
        },
        {
          bookType1: '三国演义',
          name1: '诸葛亮',
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
  mounted() {},
  methods: {
    // 导出excel, 多个表格的数据导出到同一张excel, 两个sheel显示
    getExcel() {
      // 表格数据1
      const sheet1data = this.tableBody
      // 表格数据2
      const sheet2data = this.tableBody2
      // 修改数组对象中对象属性名, 因为属性都是英文名, 所以要匹配成 中文 -------end
      const sheet1 = XLSX.utils.json_to_sheet(sheet1data) // json_to_sheet 将 JS 对象数组转换为工作表。 //aoa_to_sheet 将 JS 数据数组的数组转换为工作表。
      const sheet2 = XLSX.utils.json_to_sheet(sheet2data)
      // const sheet1 = XLSX.utils.table_to_book(sheet1data) // json_to_sheet 将 JS 对象数组转换为工作表。 //aoa_to_sheet 将 JS 数据数组的数组转换为工作表。
      // const sheet2 = XLSX.utils.table_to_book(sheet2data)
      /* create a new blank workbook */
      const wb = XLSX.utils.book_new()
      console.log('wb', wb)
      XLSX.utils.book_append_sheet(wb, sheet1, '第一个')
      XLSX.utils.book_append_sheet(wb, sheet2, '第二个')
      const workbookBlob = this.workbook2blob(wb)
      this.openDownloadDialog(workbookBlob, '多表格导出.xlsx')
    },
    // 将workbook装化成blob对象
    workbook2blob(workbook) {
      // 生成excel的配置项
      const wopts = {
        // 要生成的文件类型
        bookType: 'xlsx',
        // // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
        bookSST: false,
        type: 'binary'
      }
      const wbout = XLSX.write(workbook, wopts)
      // 将字符串转ArrayBuffer
      function s2ab(s) {
        const buf = new ArrayBuffer(s.length)
        const view = new Uint8Array(buf)
        for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xff
        return buf
      }
      const blob = new Blob([s2ab(wbout)], {
        type: 'application/octet-stream'
      })
      return blob
    },
    // 将blob对象创建bloburl，然后用a标签实现弹出下载框
    openDownloadDialog(blob, fileName) {
      if (typeof blob === 'object' && blob instanceof Blob) {
        blob = URL.createObjectURL(blob) // 创建blob地址
      }
      const aLink = document.createElement('a')
      aLink.href = blob
      // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，有时候 file:///模式下不会生效
      aLink.download = fileName || ''
      let event
      if (window.MouseEvent) event = new MouseEvent('click')
      //   移动端
      else {
        event = document.createEvent('MouseEvents')
        event.initMouseEvent(
          'click',
          true,
          false,
          window,
          0,
          0,
          0,
          0,
          0,
          false,
          false,
          false,
          false,
          0,
          null
        )
      }
      aLink.dispatchEvent(event)
    }
  }
}
</script>
