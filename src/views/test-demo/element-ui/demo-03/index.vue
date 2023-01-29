<template>
  <div>
    <dl>
      <dt>解决 el-cascader 懒加载回显异常</dt>
      <dd>
      </dd>
    </dl>
    <div>
      <div class="box-shadow--blue">
        <el-cascader v-model="cityValue" :props="props" @change="handleChange" @visible-change="visibleChange"></el-cascader>
        {{ cityValue }}
      </div>
    </div>
  </div>
</template>

<script>
//*
import { getCity } from '@/api'

function treeFind(tree, func) {
  for (const data of tree) {
    if (func(data)) return data
    if (data.children) {
      const res = treeFind(data.children, func)
      if (res) return res
    }
  }
  return null
}
// */

// let id = 0

export default {
  name: 'TestElementUiDemo01View',
  data() {
    return {
      cityList: [],
      // cityValue: [],
      cityValue: [110000000000, 110100000000, 110101000000, 110101001000],

      props: {
        checkStrictly: true,
        lazy: true,
        lazyLoad(node, resolve) {
          if (node.root) {
            getCity().then((res) => {
              this.cityList = res.length ? res : []
              resolve(
                this.cityList.map((item) => {
                  return {
                    value: item.areaCode,
                    label: item.name,
                    leaf: !item.children
                  }
                })
              )
            })
          } else {
            const findResult = treeFind(
              this.cityList,
              (data) => data.areaCode === node.value
            )
            const options = findResult?.children?.length ? findResult.children : []
            resolve(
              options.map((item) => {
                return {
                  value: item.areaCode,
                  label: item.name,
                  leaf: !item.children
                }
              })
            )
          }
        }
      }
    }
  },
  created() {
    // getCity().then((res) => {
    //   // console.log(res)
    //   this.cityList = res
    // })

    // setTimeout(() => {
    //   this.cityValue = [110000000000, 110100000000, 110101000000, 110101001000]
    // }, 3000)
  },
  mounted() {
  },
  methods: {
    // visibleChange(flag) {
    //   if (flag) {
    //     this.cityValue.forEach(value => {
    //       this.$nextTick(() => {
    //         const dom = document.getElementsByClassName('el-radio__original')
    //         Array.from(dom).forEach((element) => {
    //           const currentValues = element.value.split(',')
    //           const currentFlag = currentValues.some((value) =>
    //             this.cityValue.includes(Number(value))
    //           )
    //           if (currentFlag) {
    //             const brother = element.parentNode.parentNode.nextElementSibling
    //             brother.click()
    //           }
    //         })
    //       })
    //     })
    //   }
    // },
    visibleChange(flag) {
      // if (flag) {
      //   this.cityValue.forEach(value => {
      //     // console.log(value)
      //     const dom = document.getElementsByClassName('el-cascader-menu')
      //     console.log(dom)
      //     console.log()
      //   })
      // }
    },
    handleChange() {
      // [ 110000000000, 110100000000, 110101000000, 110101001000 ]
      // console.log(this.cityValue)
      // this.$nextTick(() => {
      //   const dom = document.getElementsByClassName('el-radio is-checked')[0]
      //   const brother = dom.nextElementSibling
      //   brother.click()
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
.box-shadow--blue {
  padding: 6px;
  border: 1px dashed #409eff;
  border-radius: 6px;
}
</style>
