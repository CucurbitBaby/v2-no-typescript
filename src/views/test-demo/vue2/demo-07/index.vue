<template>
  <div class="main-box">
    <div class="title">
      <el-button type="primary" size="mini" @click="onSave()">保存</el-button>
    </div>
    <el-form :model="ruleForm" ref="ruleForm" :rules="rules" label-width="50">
      <div class="head">
        <el-form-item label="业务部门" prop="businessDept" required>
          <el-select v-model="ruleForm.businessDept" placeholder="请选择">
            <el-option
              v-for="item in ruleForm.employeeList"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="发起人" prop="employeeCode" required>
          <el-select v-model="ruleForm.employeeCode" placeholder="请选择">
            <el-option
              v-for="item in ruleForm.businessList"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="发起日期" prop="businessTime" required>
          <el-date-picker
            v-model="ruleForm.businessTime"
            type="date"
            placeholder="请选择时间"
            style="width: 200px"
            format="yyyy-MM-dd"
            value-format="yyyyMMdd"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="产品分类" prop="productGroupCode" required>
          <el-select
            v-model="ruleForm.productGroupCode"
            placeholder="请选择"
            style="width: 200px"
          >
            <el-option
              v-for="item in ruleForm.productGroupList"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-button @click="addScheme" size="mini" type="primary"
          >增加定价方案</el-button
        >
      </div>
      <div
        class="list"
        v-for="(temp, tmpIdx) in ruleForm.scenePriceDetailDtoList"
        :key="tmpIdx"
      >
        <div class="temp">
          <div class="top">
            <el-form-item
              label="业务场景"
              :rules="rules.scenePriceDetailDtoList.sceneType"
              :prop="`scenePriceDetailDtoList[${tmpIdx}].sceneType`"
              required
            >
              <el-select
                v-model="temp.sceneType"
                placeholder="请选择"
                style="width: 200px"
              >
                <el-option
                  v-for="item in ruleForm.sceneTypeList"
                  :key="item"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item
              label="业务方案号"
              :prop="`scenePriceDetailDtoList[${tmpIdx}].businessCode`"
            >
              <el-input
                v-model="temp.businessCode"
                placeholder="请输入内容"
                style="width: 200px"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="计价模式"
              :rules="rules.scenePriceDetailDtoList.pricingMode"
              :prop="`scenePriceDetailDtoList[${tmpIdx}].pricingMode`"
              required
            >
              <el-select
                v-model="temp.pricingMode"
                placeholder="请选择"
                :clearable="true"
              >
                <el-option
                  v-for="item in ruleForm.pricingModeList"
                  :key="item"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item
              label="适用产品"
              :rules="rules.scenePriceDetailDtoList.productCode"
              :prop="`scenePriceDetailDtoList[${tmpIdx}].productCode`"
              required
            >
              <el-select
                v-model="temp.productCode"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in ruleForm.productCodeList"
                  :key="item"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-button
              v-show="tmpIdx !== 0"
              size="mini"
              @click="delScheme(temp, tmpIdx)"
              style="margin: 0 20px"
              >删除定价方案</el-button
            >
            <el-popover
              placement="right-start"
              width="360"
              trigger="manual"
              v-model="temp.visible"
            >
              <mode-descript></mode-descript>
              <el-button
                slot="reference"
                size="mini"
                type="primary"
                @click="temp.visible = !temp.visible"
              >
                定价模式说明
              </el-button>
            </el-popover>
          </div>
          <el-form-item
            label="业务背景"
            :rules="rules.scenePriceDetailDtoList.businessBackground"
            :prop="`scenePriceDetailDtoList[${tmpIdx}].businessBackground`"
            required
          >
            <el-input
              type="textarea"
              cols="200"
              maxlength="1024"
              :autosize="{ minRows: 6, maxRows: 10 }"
              v-model="temp.businessBackground"
            >
            </el-input>
          </el-form-item>
          <el-form-item
            label="计价模式说明"
            :rules="rules.scenePriceDetailDtoList.pricingModeExplain"
            :prop="`scenePriceDetailDtoList[${tmpIdx}].pricingModeExplain`"
            required
          >
            <el-input
              type="textarea"
              cols="200"
              maxlength="1024"
              :autosize="{ minRows: 6, maxRows: 10 }"
              v-model="temp.pricingModeExplain"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="业务方案"
            :rules="rules.scenePriceDetailDtoList.businessProgramme"
            :prop="`scenePriceDetailDtoList[${tmpIdx}].businessProgramme`"
            required
          >
            <el-input
              type="textarea"
              cols="200"
              maxlength="1024"
              :autosize="{ minRows: 6, maxRows: 10 }"
              v-model="temp.businessProgramme"
            ></el-input>
          </el-form-item>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
import modeDescript from './components/modeDescript.vue'
export default {
  name: 'scenePriceAdd',
  components: {
    modeDescript
  },
  data() {
    return {
      ruleForm: {
        employeeCode: '',
        employeeList: [1, 2],
        businessDept: '',
        businessList: [3, 4],
        businessTime: '',
        productGroupCode: '',
        productGroupList: [5, 6],
        productCodeList: [7, 8],
        sceneTypeList: [9, 10],
        pricingModeList: [11, 12],
        scenePriceDetailDtoList: [
          {
            sceneType: '',
            businessCode: '',
            pricingMode: '',
            productCode: [],
            visible: false,
            businessBackground: '',
            pricingModeExplain: '',
            businessProgramme: ''
          }
        ]
      },
      rules: {
        employeeCode: [
          { required: true, message: '请选择业务部门', trigger: 'change' }
        ],
        businessDept: [
          { required: true, message: '请选择发起人', trigger: 'change' }
        ],
        businessTime: [
          { required: true, message: '请选择发起时间', trigger: 'change' }
        ],
        productGroupCode: [
          { required: true, message: '请选择产品分类', trigger: 'change' }
        ],
        pricingMode: [
          { required: true, message: '请选择产品分类', trigger: 'change' }
        ],
        scenePriceDetailDtoList: {
          sceneType: [
            { required: true, message: '请输入业务场景', trigger: 'change' }
          ],
          pricingMode: [
            { required: true, message: '请输入业务场景', trigger: 'change' }
          ],
          productCode: [
            { required: true, message: '请输入业务场景', trigger: 'change' }
          ],
          businessBackground: [
            { required: true, message: '请输入业务场景', trigger: 'blur' }
          ],
          pricingModeExplain: [
            { required: true, message: '请输入业务场景', trigger: 'blur' }
          ],
          businessProgramme: [
            { required: true, message: '请输入业务场景', trigger: 'blur' }
          ]
        }
      }
    }
  },
  methods: {
    addScheme() {
      this.ruleForm.scenePriceDetailDtoList.push({
        sceneType: '',
        businessCode: '',
        pricingMode: '',
        productCodeList: [],
        businessBackground: '',
        pricingModeExplain: '',
        businessProgramme: ''
      })
    },
    delScheme(temp, tmpIdx) {
      this.ruleForm.scenePriceDetailDtoList.splice(tmpIdx, 1)
    },
    onSave() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          alert('submit')
          // 删除tab页
          // this.$store.dispatch('delVisitedViews', this.$route).then(() => {
          //   this.$router.push({
          //     name: 'scenePrice'
          //   })
          // })
        }
      })
    }
  }
}
</script>

<style lang="scss">
.main-box {
  box-sizing: border-box;
  // font-size: 14px;
  font-weight: 350;

  .title {
    background-color: #ffffff;
    padding: 6px;
    margin:0 6px;
    display: flex;
    align-items: center;
    border-radius: 4px;
  }

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    background-color: #ffffff;
    padding: 10px;
    margin: 6px;
    .el-form-item {
      width: 23%;
      margin-right: 10px;
    }
  }
  .list {
    box-sizing: border-box;
    .temp {
      background-color: #ffffff;
      padding: 10px;
      margin: 4px 6px;
      border-radius: 4px;

      .top {
        display: flex;
        align-items: center;
        .el-form-item {
          width: 23%;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
