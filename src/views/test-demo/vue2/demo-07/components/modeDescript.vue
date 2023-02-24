<template>
  <div class="popoverBox">
    <div class='title'>模式说明</div>
    <div class="descBox">
      <div class="descTit">折扣定价</div>
      <div class="descP1">
        <span class="tit">描述:</span>
        <div class="con">
          数量折扣（到达一定量之后的折扣）、预付款折扣（预付款到达一定比例）、季节折扣（淡季执行价格）、返利折扣
        </div>
      </div>
    </div>
    <div class="descBox">
      <div class="descTit">心理定价</div>
      <div class="descP1">
        <span class="tit">描述:</span>
        <div class="con">
          尾数定价（去尾数不取整数）、声望定价、差别定价
        </div>
      </div>
    </div>
    <div class="descBox">
      <div class="descTit">地区定价</div>
      <div class="descP1">
        <span class="tit">描述:</span>
        <div class="con">
          根据不同的地区指定价格
        </div>
      </div>
    </div>
    <div class="descBox">
      <div class="descTit">组合定价</div>
      <div class="descP1">
        <span class="tit">描述:</span>
        <div class="con">
        </div>
      </div>
    </div>

    <div class="descBox">
      <div class="descTit">新产品定价</div>
      <div class="descP1">
        <span class="tit">描述:</span>
        <div class="con">
          撇脂定价（高定价追求最大回收投资）、渗透定价（新产品进入市场初期时将其价格定在较低水平）
        </div>
      </div>
    </div>
    <div class="descBox">
      <div class="descTit">竞争定价</div>
      <div class="descP1">
        <span class="tit">描述:</span>
        <div class="con">
          针对同类产品与竞争炼厂价格想比对定价
        </div>
      </div>
    </div>
    <div class="descBox">
      <div class="descTit">成本加成定价</div>
      <div class="descP1">
        <span class="tit">描述:</span>
        <div class="con">
          在成本的基础上增加一定比例的利润
        </div>
      </div>
    </div>
    <div class="descBox">
      <div class="descTit">限制性定价</div>
      <div class="descP1">
        <span class="tit">描述:</span>
        <div class="con">
          为了某个产品在行业内保持占有量或者垄断，牺牲短期利益的定价
        </div>
      </div>
    </div>
    <div class="descBox">
      <div class="descTit">损失领导者定价</div>
      <div class="descP1">
        <span class="tit">描述:</span>
        <div class="con">
          通过选择一个或多个项目以低于成本的价格吸引购买其它炼厂产品的定价
        </div>
      </div>
    </div>
    <div class="descBox">
      <div class="descTit">市场导向定价</div>
      <div class="descP1">
        <span class="tit">描述:</span>
        <div class="con">
          成本导向、需求导向、竞争导向
        </div>
      </div>
    </div>
    <div class="descBox">
      <div class="descTit">歧视性定价</div>
      <div class="descP1">
        <span class="tit">描述:</span>
        <div class="con">
          面向不同的采购商提供相同等级、相同质量的产品时，在采购商之间实行不同的销售价格
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.popoverBox {
  padding: 10px 20px;
  height: 540px;
  overflow: auto;
  .title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    line-height: 38px;
    text-align: center;
  }
  .descBox {
    margin-bottom: 10px;

    .descTit {
      font-size: 16px;
      color: #0e42a6;
      line-height: 24px;
      font-weight: bold;
    }
    .descP1 {
      display: flex;

      .tit {
        display: block;
        width: 42px;
      }
      .con {
        flex: 1;
        span {
          line-height: 32px;

          display: block;
        }
      }
    }
    .descP2 {
      display: flex;
      .tit {
        display: block;
        width: 42px;
      }
      .con {
        flex: 1;
        span {
          display: block;
        }
      }
    }
  }
}
</style>
