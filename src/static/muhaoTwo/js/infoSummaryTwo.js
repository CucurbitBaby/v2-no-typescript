
//业务库存配置
function invent(myChart, option) {
  option.tooltip = {
    trigger: "item",
  }
  option.grid = {
    top: "10%",
    left: "0",
    right: "0",
    bottom: "10%",
  }
  option.legend = {
    show: true,
    left: '35%',
    bottom: "-2%",
    itemWidth: 15,
    itemHeight: 15,
    itemGap: 10,
    width: '50%',
    textStyle: {
      color: '#8d8d93',
    }
  }
  myChart.setOption(option)
}
//业务港口配置
function discharging(myChart, option) {
  option.tooltip = {
    trigger: "item",
  }
  option.grid = {
    top: "10%",
    left: "0",
    right: "0",
    bottom: "10%",
  }
  option.legend = {
    show: true,
    // left: '-1%',
    bottom: "25%",
    itemWidth: 15,
    itemHeight: 15,
    itemGap: 10,
    // width: '50%',
    textStyle: {
      color: '#8d8d93',
    }
  }
  myChart.setOption(option)
}
// 业务库存量情况
(function () {
  var quantity = 0;
  var onthewayQuantity = 0;
  var url = "showScreenDataController.do?storageQuantityReport";
  $.ajax({
    type: "post",
    url: url,
    data: { "para": 1 },
    cache: false,
    async: false,
    dataType: "json",
    success: function (data, textStatus, jqXHR) {
      quantity = data.attributes.quantity; // 在库
      onthewayQuantity = data.attributes.onthewayQuantity;// 在途
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log("请求失败！");
    }
  });
  var myChart = echarts.init(document.querySelector('.storage .chart'))
  var option = {
    color: ["#228ffe", "#34d160"],
    series: [
      {
        name: '业务库存量情况',
        type: 'pie',
        selectedMode: 'single',
        center: ["40%", '50%'],
        radius: [0, '65%'],
        label: {
          color: "#fff",
          length: 8,
          length2: 6,
          normal: {
            formatter: '{b}\n{c}'+'吨',
            show: true,
            position: 'left'
        },
        },
        data: [
          { value: 95, name: '在途', selected: true },
          { value: 5, name: '在库' }
          // { value: onthewayQuantity, name: '在途', selected: true },
          // { value: quantity, name: '在库' }
        ]
      }
    ]
  }
  invent(myChart, option)
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();
// 业务库存港口分布
(function () {
  var array = []
  var list = [{ "discharging": "常熟", "quantity": -0.724298000 }, { "discharging": "青岛", "quantity": 1389.718304000 }, { "discharging": "上海", "quantity": -7.613430000 }, { "discharging": "宁波", "quantity": -1.171000000 }, { "discharging": "平湖", "quantity": -0.023000000 }, { "discharging": "NA", "quantity": -5.103500000 }, { "discharging": "保定", "quantity": -0.369000000 }, { "discharging": "迁安博达", "quantity": -7.115000000 }, { "discharging": "南沙", "quantity": 1.374700000 }, { "discharging": "常熟", "quantity": -0.724298000 }, { "discharging": "青岛", "quantity": 1389.718304000 }, { "discharging": "上海", "quantity": -7.613430000 }, { "discharging": "宁波", "quantity": -1.171000000 }, { "discharging": "平湖", "quantity": -0.023000000 }, { "discharging": "NA", "quantity": -5.103500000 }, { "discharging": "保定", "quantity": -0.369000000 }, { "discharging": "迁安博达", "quantity": -7.115000000 }, { "discharging": "南沙", "quantity": 1.374700000 }]
  if (list.length > 0) {
    for (var i = 0; i < list.length; i++) {
      array.push({
        value: list[i].quantity,
        name: list[i].discharging,
      })
    }
  }
  var url = "showScreenDataController.do?dischargingQuantityReport";
  $.ajax({
    type: "post",
    url: url,
    data: { "para": 1 },
    cache: false,
    async: false,
    dataType: "json",
    success: function (data, textStatus, jqXHR) {
      // var list = data.attributes.list;
      // var list = [{"discharging":"常熟","quantity":-0.724298000},{"discharging":"青岛","quantity":1389.718304000},{"discharging":"上海","quantity":-7.613430000},{"discharging":"宁波","quantity":-1.171000000},{"discharging":"平湖","quantity":-0.023000000},{"discharging":"NA","quantity":-5.103500000},{"discharging":"保定","quantity":-0.369000000},{"discharging":"迁安博达","quantity":-7.115000000},{"discharging":"南沙","quantity":1.374700000},{"discharging":"常熟","quantity":-0.724298000},{"discharging":"青岛","quantity":1389.718304000},{"discharging":"上海","quantity":-7.613430000},{"discharging":"宁波","quantity":-1.171000000},{"discharging":"平湖","quantity":-0.023000000},{"discharging":"NA","quantity":-5.103500000},{"discharging":"保定","quantity":-0.369000000},{"discharging":"迁安博达","quantity":-7.115000000},{"discharging":"南沙","quantity":1.374700000}]
      // if( list.length>0){
      //     for (var i = 0; i < list.length; i++) {
      //         array.push({
      //             value: list[i].quantity,
      //             name: list[i].discharging,
      //         })
      //     }
      // }
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log("请求失败！");
    }
  });
  var myChart = echarts.init(document.querySelector('.discharging .chart'))
  var option = {
    color: ["#027ff2", "#f49e23", "#f45e23", "#8a00e1", "#6054ff", "#34d160"],
    series: [
      {
        name: '业务库存港口分布',
        type: 'pie',
        center: ["50%", '35%'],
        radius: ['15%', '50%'],
        roseType: 'area',
        minAngle:15,
        startAngle:-45,
        label: {
          color: "#fff",
          // length: 8,
          // length2: 6,
          textStyle: {
            fontSize: '0.2rem'
          },
          normal: {
            formatter: '{b}\n{c}'+'吨',
            show: true,
            position: 'left'
        },
        },
        data: array
      }
    ]
  };
  option.legend = {
    show: true,
    // left: '1%',
    bottom: "-1%",
    itemWidth: 15,
    itemHeight: 15,
    itemGap: 10,
    width: '50%',
    textStyle: {
      color: '#8d8d93',
    }
  }
  discharging(myChart, option)
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();
// 中国地图
var mapData = [{ name: "天津", customerNumber: 2 }, { name: "宁夏", customerNumber: 2 }, { name: "宁波", customerNumber: 1 }, { name: "安徽", customerNumber: 3 }, { name: "山东", customerNumber: 83 }, { name: "山西", customerNumber: 1 }, { name: "广东", customerNumber: 4 }, { name: "杭州", customerNumber: 1 }, { name: "江苏", customerNumber: 4 }, { name: "江西", customerNumber: 3 }, { name: "河北", customerNumber: 40 }, { name: "河南", customerNumber: 18 }, { name: "浙江", customerNumber: 20 }, { name: "湖北", customerNumber: 3 }, { name: "福建", customerNumber: 2 }, { name: "辽宁", customerNumber: 1 }, { name: "重庆", customerNumber: 1 }, { name: "陕西", customerNumber: 2 }];
// var mapData = [];
var url = "showScreenDataController.do?customerReport";
$.ajax({
  type: "post",
  url: url,
  data: { "para": 1 },
  cache: false,
  async: false,
  dataType: "json",
  success: function (data, textStatus, jqXHR) {
    // console.log('data', data);
    // debugger
    // mapData = data.attributes.list
  },
  error: function (XMLHttpRequest, textStatus, errorThrown) {
    console.log("请求失败！");
  }
});
var MyMarhq = '';
clearInterval(MyMarhq);
$('.tb-body tbody').empty();
$('.tbl-header tbody').empty();
var str = '';
$.each(mapData, function (i, item) {
  str = '<tr>' +
    '<td>' + item.name + '</td>' +
    '<td>' + item.customerNumber + '</td>' +
    '</tr>'
  $('.tb-body tbody').append(str);
  $('.tbl-header tbody').append(str);
});
if (mapData.length > 10) {
  $('.tb-body tbody').html($('.tb-body tbody').html() + $('.tb-body tbody').html());
  $('.tb-body').css('top', '0');
  var tblTop = 0;
  var speedhq = 50; // 数值越大越慢
  var outerHeight = $('.tb-body tbody').find("tr").outerHeight();
  // 中国地图
  function Marqueehq() {
    if (tblTop <= -outerHeight * mapData.length) {
      tblTop = 0;
    } else {
      tblTop -= 1;
    }
    $('.tb-body').css('top', tblTop + 'px');
  }
  MyMarhq = setInterval(Marqueehq, speedhq);
}
// const mark = '../img/mark.png';
(function () {
  var myChart = echarts.init(document.querySelector('.customer .map'))
  var geoCoordMap = {};
  myChart.hideLoading();
  // debugger
  var mapFeatures = echarts.getMap('china').geoJson.features;
  mapFeatures.forEach(function (v) {
    // 地区名称
    var name = v.properties.name;
    // 地区经纬度
    Object.defineProperty(geoCoordMap, name, {
      value: v.properties.cp
    });
  });
  var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var geoCoord = geoCoordMap[data[i].name];
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].customerNumber),
        });
      }
    }
    return res;
  };


  var red = ['新疆', '云南', '广西', '广东', '江西', '上海', '吉林', '黑龙江', '山东', '北京', '重庆', '山西', '甘肃']
  // 红色框框
  var imgRed = 'image://data:image/png;base64,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'
  // 红色图标
  var redBar = 'image://data:image/png;base64,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'

  var green = ['西藏', '四川', '宁夏', '湖南', '浙江', '河北', '贵州', '陕西', '海南']
  // 绿色框框
  var imgGreen = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPkAAAB9CAYAAABgbsVeAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAA+aADAAQAAAABAAAAfQAAAAD9KNo1AAAVgklEQVR4Ae2ca4xd11XH136cx33PnZcf4yRO6oQ0FhHCCEiRwAltKQGVpMEVFKlQQRQQAj6C+BL3AxLiIyKBpkgFQekjDSlRaFGoVEct9AupIFLMB4LtxLHHnvE87sx9nHvO2Xvz33dsx3Yce3bqJDp4HenMvXfuuues+e35n7X22utcQSGbI3Ho6UPy2B3HZO/Ah2Rncaxaa2uyUC2R9bUMORTbMgEmcDkB3Rk4fXbTNVode3R61nY2OmZu6Yg9cvCgJXHYXm69/Vdi26ZfPaT2E6n0jkwbNROXepzUKI3JiUhqq8rhWEVCb/942z4xGzKB//8Eikg54UoXaTIu1+VoZIukS1lPrOfjxeliL+0tjxw8bEiQC6VxfVEiehMdFvuPkm7G/5MOVmq1eo3qphg1o0jWjYkTo6xWQkhn7PWPF+oh2zOBm4SAkMo6a4wmVxRSjmLhhmUmBrohB/lIZcBQvHTgcyUJEST064vSHZb7vrkSdebHaSrLRqZt2zmagqo7ZF3NOpUKabWzViKqB538Jhk7/jOZwLUJWLmlQ2mdlGSMoUJGlEmSfSPKdWfFhk3lhhmWw6io5aFC19c8u3PiAD2m9J2DJBuo5li4rjBqVimaswZiJ5qXwtScJYUdsdynEiz0azLlN5nAlQSUo60gSXgkIyAq62gFr9bwqqWMWsauas1ENAcDopcew1tu2xH97UXuBf7SY7pV00lvbJqRSruW7LzStNsY1xRS/qxw9iHIeoQzQuC+7mbxkoP5lWPIr5nAtQj4ML6ln4mVw7Q7gpSWMfn9ghTiDSNsgneUGRZyQ5bio9Go/0KA0K8ucggcVwtdRKN4QKqJ40855+YQwXfjZC3o+adw5XlICPEs5H3WWdeVvmpAokQwZ5VPxop/MIHtE3DCKnJSIWBqa33QFD8pnftt5MdPEabDUjpZOicTl1BPjilE6G+dk0OpB+mwWn3hfxPaSY1IqGlcPHZg1r2AgN3BVeZeJOSPohz3T9a5/4ITO4RARdC5Ma46JfzzVyIW+vbHly1vcgKQHEppEDkJTZISyCdFQizx65+BQJt4//NO0ilh3RoMT2NmvKTFeK1jdf8FzNHpOsW4t4j84LcP6s3WXTG1qK5G2bTx826lFqylaZz4A5h3/w4eXxRkv4OTz0P4uSM7UFKMMZEoJ3NyXjG/yf9t+c8PIoAVcARKhQcspCFUC6pDW02IWjsp7sex2tg/j8h5CoJdDRX6pSIXh9wh+cb3KF5T8/VGvT+FE86jer6AE81KZ3fDk9/FVeYVCPs51NdmnZAZaoE9VAGHTtoc8dvgPY7iQSPMxkwABDQq7M6vUlEKcTdJyjYJixUsGSOmPwDddWD1joS+JXJcNvxa+N4jJ+I9M7Va7vpTPoIjOu+GyBGtaRZzhd/D1eYMKgR/h+JaF2viWLcT5zBv2DTaDTWpwpYl6uwscv6nZQKhBJyvqUtCyg5Rk6g7ZzvI17tOQmtI36G9D/vpMo4bLHSsu28J3K+FN3dROih7bSQNM2him8c8fw5XF1xR6DOwGyCd+JI0bgqvR1KKJVPYDbjWt6XNjaASZQNLKL/xxgSYQBgBoZEGO62oLCOnZQ59ldAe1CQt0vNp1MK/hUj8ERz1UTx6oftFLULBG5JL6LTUdC+q7i/TZxGDHTrj3gy2vkZ2fqlsDUtlrTaK5LM6Ubtw+AVk3k0c8DdwZdkFsyektAl6Xgr87ixqbetWQeBOjWVeGhkLBH/emAATeOcENLLzArmwRYVdp1JBf0Z0ofJp1MC80Gvnhf7WOXoulpIps9of0ODKhhmUyAT1OgmK8u24FpkariAt39GGSjmeil/CfHwv0oW/Rgk/xklwhbDL2DcMqYEgkccs8Hc+pvxJJnAZgZJkjtZWIUssU2cQeN8psYYp8Soi+ioicoYw/a+oh/XwMR/Rfb2siyvDLpG6GbOpOlFaqxEtRgePfBap/9YGkR8Wnd4JZa2IChOnfj4gjMlRsv8wMvn7pKOnhFAGLazQtFuWljZQwu9LVYwxLy9t7IuCvDEBJnBDCGi0tk6Ejlx6InT3ptCFXIGwMxTnvoUMfCJ0TKN3Yo29CaHPIkvv1MqsTt1d0fL8K77/FOaY5RO9Ilqbt8jM5L4vPkKZr7BSPYAGF3Szub+AzTrSe4XUfAnBveeU7PurjDO42lgvcDTg8cYEmMCNI/B2Qhe0gii/gtl2hnaZF5Bxr/uGGWTYsxB0ZIVq5kWS2l4Rz9UbkwDuncITvy2TTHHfiTSlcAV6U+2P4Jd/iYMcw55AxWeRqK/j2tK3RbklcNwxQ3Bm8nH+wQSYwI0lcDWhCy/qLaFD1Bkq7v+M9H0VVfk/QKltDvNraWSR6MSpzZVY0tOvTCK5ov375czOrnK1TNFIa9JYJBPuu+iu8z3pU7gtZhUp+ib61n3DS4bOuwLytij6scBv7LDy0ZjA5QSgaFGg29UHUyGsgO4wR/e3guGWT+TZ6IOFiVfybVi6/mEo91/wq5GJRDZe6eUHh1Qeffqo03Rov2sdOWHXFRU6NX0yUK8RO1E9T/EdEEuo6xdoXx2rGI0vpUPpDzGdI/jlg8GvmMC7ReB8RLexQVVOohiH2GowS0YhHgtoSNttBKF/2feVK2VGEsvZ2Xps0lbXPr28NvEKF4TH3WYrNsrEuR3FIzTXDZ2i2EdwV5pN3MXex1e+jEoIHPe1YpkMh+SNCTCB947AhdTdF7oRcHF3SB+59Dqm1SuYY69aIc+hTnayzIsBSuqDqXqUtzZz6wO4d9I3wTvchG7oABXznZPZhpIDHGiSnuPtoS+ylaYskKob4fxlBO3pvDEBJvDeEvBCnxS6kVkrN8bSWR/pec/3q0wq7fgWmVjVNiiKRmvqXLG87HvXHp+I/PytphC6V+8+R/uPfhKtN/UCd6/CALNvfKuT8vW5AuLWHMXf25HlszGBSwh4oZdY7Y5FYfLS+q441Npw9yfJokTVvFP2a4vd8Xj9tN1z9Cf83H3y4a3qOlbZsaLmJ/funnvIKFwe/C78971Mlsgw8WeBX0KbnzKB94nAJHVHS5xWBWpvqJfZcV6iZmYp21WeHX3vvs741X6zPPI4vvQRBt7Lq39pxPvkP5+WCTCBbRCA0L0VIvmklRzt5hb3gJrmvia+EuowAvPl21Ykv/x3/IoJMIGKERDXuPuTRV6xwWR3mUAoARZ5KDG2ZwIVI8Air9iAsbtMIJQAizyUGNszgYoRYJFXbMDYXSYQSoBFHkqM7ZlAxQiwyCs2YOwuEwglwCIPJcb2TKBiBFjkFRswdpcJhBJgkYcSY3smUDECLPKKDRi7ywRCCbDIQ4mxPROoGAEWecUGjN1lAqEEWOShxNieCVSMAIu8YgPG7jKBUAIs8lBibM8EKkaARV6xAWN3mUAoARZ5KDG2ZwIVI8Air9iAsbtMIJQAizyUGNszgYoRYJFXbMDYXSYQSoBFHkqM7ZlAxQiwyCs2YOwuEwglwCIPJcb2TKBiBFjkFRswdpcJhBJgkYcSY3smUDECLPKKDRi7ywRCCbDIQ4mxPROoGAEWecUGjN1lAqEEWOShxNieCVSMAIu8YgPG7jKBUAIs8lBibM8EKkaARV6xAWN3mUAoARZ5KDG2ZwIVI8Air9iAsbtMIJQAizyUGNszgYoRYJFXbMDYXSYQSoBFHkqM7ZlAxQiwyCs2YOwuEwglwCIPJcb2TKBiBFjkFRswdpcJhBJgkYcSY3smUDECLPKKDRi7ywRCCbDIQ4mxPROoGAEWecUGjN1lAqEEWOShxNieCVSMAIu8YgPG7jKBUAIs8lBibM8EKkaARV6xAWN3mUAoARZ5KDG2ZwIVI8Air9iAsbtMIJQAizyUGNszgYoRYJFXbMDYXSYQSoBFHkqM7ZlAxQiwyCs2YOwuEwglwCIPJcb2TKBiBFjkFRswdpcJhBJgkYcSY3smUDECLPKKDRi7ywRCCbDIQ4mxPROoGAEWecUGjN1lAqEEWOShxNieCVSMAIu8YgPG7jKBUAIs8lBibM8EKkaARV6xAWN3mUAoARZ5KDG2ZwIVI8Air9iAsbtMIJQAizyUGNszgYoRYJFXbMDYXSYQSoBFHkqM7ZlAxQiwyCs2YOwuEwglwCIPJcb2TKBiBFjkFRswdpcJhBJgkYcSY3smUDECLPKKDRi7ywRCCWyJ3DlBfsd29OghZWVdWlnDezF+53eJ3U7eDz0B2zMBJvD+ErgQyf2jhtBjmtsfl2k3LhV23YlK1dJGJcoJxSJ/f8eKz84EriDgg68UXpt+X6b9V9WoF7Y4AMtFoiiD0JfnarW5/nzDOKeVyEtRZkaZqHQE3dshCTd2MMfOGxNgAu8PgQvCjiFu/zySNhLiVfrNiNzj3iWvT0dCWP9CYxc9qDaltaikburGzfY4mm0raeLCiUIl49zkvXFk+hmNiZQlA6HjYyx0D5A3JvDeEpBiK7NuSitiTK39LpSzuoQftR0QZo3I7CUqjzjnhe4mIh9CuxsUxQ2iukridtlYaJRCp9JuClcWmZDp0JU1GRk7opLyLaEXHM3f29Hls930BKywsiGNbGAKPRWZtB4Jl8bGqUhKUZpMtYYpCUOUL6OIBlx4uhXJqZhEchkV1K9LSlpzS9/89bxx94nN2Z9+JRq+3o4oQbDXskgMCYUIPonoPnUvJunATc+eATCBd50AZtYiEkbWtIm7caFnai5q1kinaWlRM4samzZtt1tI0wVtUo9aPrL7fRLJCVU3VyKua0jYUKpNurDSWP/3Xy6TGTVs33tcZKdjEyupjMXlwZAz+UiUdqyQuOOiwRH9XR9gPsHNTcDPu4UwcV2Vejq2yWzdJTNtrIK1TNTRIu916xv/saffOvBaqfNC0LhQ1EKJjSaFOJ+uuwih3ZEtS4rKqBzQ6sKvfLtzJm10zj7/sJPx88P2/uPx8OSsrM27coRKHYwhckcKqbvxKQEL/eb+J+S//t0jYH1hDREcAqd24gVeJrOdXE11naq3rOqqmeWvfRpiPOt0SysaJDE1JJLti5X2ichTiHyDTNEhPR7rZGBNvtjb+fC/wS6ZWvzHX3AUfWPU3HeMRidnXDpjlbRI05G6Z5jYY1OmhNAhet6YABO4oQScSLYErqfiPJ2rk+62c9XukmxMl7UFPfP6Ux8XzppTH/yzP3dUKpzcZeQsnlzU42Sd/FUoNKF2PiIzFGT7WBtftkKdWN/9ie8OOwf+s7v4lQfTwbHbTG0hNaoxY/T0lE3mmkU6mxrZnKyjbzXN3NC/jw/GBG5yAjEKbaksdTN2SRfz75lWHk1PkW5Njxu3xJ1TX3tA5yuzZ+78479CqM0iyjChbowzZOW+wg54E6H7SO430yEqVqg+tDRal1RGTmEVrVhXazseRqXNiu7pr/zi2sKnvl7UF17DZ6exu8lhkAZQRiOhhk7mvqLHqfuEKP9gAj8QAQmB11BJr0VlPJeYZK5VxjNTRtVnTLyQtM++8GO1/n/fvXT77z851nNLmjbzgtK+oSzTVBZYKfNF8fMixzqaf/GqQ+0Ncp2isUgpFbl/P2ohFd90GzseccKWYvrUlz6+svCrz5bprjdwXXAWa+WxV/qW0FF/Lwvpa3Ms9B9oePnDTGBL4KmeZMvRVAsdqFOYg8+Y+p601vv+DzVXv3PfysKv/e2occ+rKW2MCopXkIVvpFQONU2NX9kS+QTkhUiO6TeW1xCcZ2lqdI7WqQ7l+sCM1N2lNHBrC4ecOvVlCaE/vHbrp54pantORXTGGZ/w5wqXBFwtTJqpvF+KIkO2zxGd/1WZQCgBCArdKz5Nb0Lg3ZT0fMukcx2r2tNFurMWD47f2ll8/iMbcz//9d70/d9PivWRidIzhuQ5RUXPUXOICIxVcV80mwTwScfbm35A6IjotO8SoReI2Jlqu7RYp3O7Pilm7JdU9/V/+MTKnk8/Y5L5M64QyopIRzKN83xjpPVobN0Yi2soxPlZAW9MgAlsnwAqZpiHK1TTYxe16iaewlJZe9okU22Rb852F7/6sWH3R19c3vnIi4lZH9koWixILisq14ka/T0IuWcvEbg/8cUy+2VeOKf2ofsFEb2GiN4uyM4YimcTs7JXGHPn9Kkv/lw8PHHHuVs/86zRnZWoXB/JMtsk0x8piw45h553nxbwxgSYQDABLJkptK4m6Gyrk0w6Jmq2MDdvzB9/4iHMz4+d/sAffTGizU1L6jQOvoiQjQa32sYuTLeRpvuWFz8fv7hdXeT+7bcTerF8B3L/O7sn//5jSXby1pVbH33ORK11OV4pUbkforsuEwYit8jgJQv9Iml+wgS2RQA5ttAa890EAq9ZkTR8U9rc8ScflGRHJ+/6k6c0jdfRonIGa+MQuVxOKOudQPaNwxdXCtyf8u1F7t+9QuiYo8/i6jGXFL3b0SF75+zrf/NglC0uLN/6W98oarvXpB0hgtscy3YlZgOcrHuGvDGBAAKIjAKNp6iVuQQijm3UFLOvfe5gnJ1un/7gnz5hSC1jqWzJkobAxVJC6frrRLj9ZBLBr6q5a4vcO3dR6FSrUdYpSM3CizlVrCKiF3fNvP6FB3V+budw+kMvY3kOVw00ykwq7D6KX5Y1BPypbMoEbkICqLlhQi5w96i/xRO1rsTF2Ws7ktHxubO3/+GT4/SW4xH1V8eULioyyzHla4JavtCWg5a9UGi7ktz1Re4/AaHvxYIaJFvLIfQSEV1SPKPs6u2y6N/dPfXM/bpY2ukEbohxVmzvoFe6wq+ZABO4SAC96tARmtdMubbrkef67R9/Oab1DUMJ0nRfaCvQz9IcIJx7gV+spF/8/CVPtq9HCB2Vu5hoo1ZS3Eba0MXNKt2oWL1NmcEdmH7XnVTaWjfpokMqwYW3S0DzUyawfQJGOtXaKOMdfmlsCEH1tdnYxB2l59CbsiqxVEYQOKro/osdrilwf84QkXtb6YW+ifYXRaNmTKoNobedyaYwjUiFEfgVbmA3RgilWOSeMG9MIICA1443lyrCfdy+2aQcqzIfGt3oSTI9QWXfr4WfpZcQwQ/4Svp1dbZ9kV9wFF8LtRfLa7iUJJoG+LZHXUdJD48iwVpd7OcSaIyRqBz4K8h1HbhwWH5kAkxgIhiB1lPcE66NoRx3nPjvW9NoN7foaitGTWpnSNEvNLtsq+gVLnI/Ekjd90PMaxA75glxRjqKSEYDlAVtNlZJ6r/plTcmwATeCQH0mFjk4baBCXmEajYa0ooxbiDDYviWuLeRol963ncq8guf82L2z/F4ArsWu2nPhfcuPQ8/ZwJMIIAAxORQNfeZsN99xPb71uttpOiwvbjdWEGe/+72i0fnJ0yACbxzAoFifrsT/R9qvd2f8+4g9gAAAABJRU5ErkJggg=='

  // 绿色柱子
  var greenBar = 'image://data:image/png;base64,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'

  var yellow = ['内蒙古', '清海', '河南', '天津', '辽宁', '安徽', '江苏', '福建', '湖北']
  //黄色框框 与红色使用同一个
  // 黄色柱子
  var yellowBar = 'image://data:image/png;base64,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'
  debugger
  // var color = [];
  // var i=0;
  // mapData.map(item => {
  //   // debugger
  //   item.value = item.customerNumber
  //   if (green.indexOf(item.name) != -1) {
  //     color[i] = '#07be81'
  //   }
  //   if (red.indexOf(item.name) != -1) {
  //     color[i] = '#e64a4c'
  //   }
  //   if (yellow.indexOf(item.name) != -1) {
  //     color[i] = '#f3a52d'
  //   }
  //   i++;
  //   return item
  // })
  var data = convertData(mapData)
  var option = {
    tooltip: {
      show: false,
      trigger: 'none'
    },
    geo: {
      map: 'china',
      // left: '18%', top: '12%',
      left: '10%', top: '10%',
      zoom: 1.2,
      roam: false,
      itemStyle: {
        normal: {
          areaColor: "#035393",
          borderWidth: 4,
          borderColor: '#022f64',
          shadowColor: '#022f64',
          // shadowOffsetX: 6,
          // shadowOffsetY: 24
          shadowOffsetX: 3,
          shadowOffsetY: 12
        },
      },
    },
    series: [
      {
        type: 'map',
        roam: false,
        // left: '18%', top: '12%',
        left: '10%', top: '10%',
        zoom: 1.2,
        map: 'china', //使用
        label: {
          normal: {
            show: true,
            textStyle: {
              color: '#33ccff',
              fontSize: '30px'
            }
          },
        },
        itemStyle: {
          normal: {
            borderColor: '#33ccff',
            borderWidth: 1,
            areaColor: "#035393",
            shadowColor: '#022f64',
            shadowOffsetX: 1,
            shadowOffsetY: 1
          },
        },

        data: mapData.map(item => {
          item.value = item.customerNumber
          return item
        }),
      },
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        geoIndex: 0,
        zlevel: 4,
        label: {
          show: true,
          formatter: function (params) {
              var data = params.data
              // return params.name+'客户统计\n{a|数量:'+params.value[2]+'}'
              if (green.indexOf(data.name) != -1) {
                  return '{a1|'+params.name+'客户统计}\n{b|数量： '+params.value[2]+'}'
              }
              if (red.indexOf(data.name) != -1) {
                  return '{a2|'+params.name+'客户统计}\n{b|数量： '+params.value[2]+'}'
              }
              if (yellow.indexOf(data.name) != -1) {
                  return '{a3|'+params.name+'客户统计}\n{b|数量： '+params.value[2]+'}'
              }
          },
          rich: {
              a1: {
                  color: '#40ff15',
                  fontSize: 14,
                  fontWeight:'bold'
              },
              a2: {
                  color: '#e64a4c',
                  fontSize: 14,
                  fontWeight:'bold'
              },
              a3: {
                  color: '#f3a52d',
                  fontSize: 14,
                  fontWeight:'bold'
              },
              b: {
                  color: '#fff',
                  lineHeight: 28,
                  fontSize: 12,
                  fontWeight:'bold'
              },
          },
          position: ['10%', '25%'],
          // fontSize: 15,
          distance: 10,
        },
        symbol: function (val, params) {
          let data = params.data
          if (green.indexOf(data.name) != -1) {
            return imgGreen
          }
          if (red.indexOf(data.name) != -1) {
            return imgRed
          }
          if (yellow.indexOf(data.name) != -1) {
            return imgRed
          }
        },
        symbolSize: [120, 60],
        symbolOffset: ['-10%', '-70%'],
        silent: true,
        data,
      },
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        geoIndex: 0,
        zlevel: 4,
        symbol: function (val, params) {
          let data = params.data
          if (green.indexOf(data.name) != -1) {
            return greenBar
          }
          if (red.indexOf(data.name) != -1) {
            return redBar
          }
          if (yellow.indexOf(data.name) != -1) {
            return yellowBar
          }
        },
        symbolOffset: ['-30%', '0%'],
        symbolSize: 40,
        silent: true,
        data,
      },
    ]
  };

  myChart.setOption(option, true);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();
// 
function scatterData() {
  return mapData.map((item) => {
    console.log('item', item);
    return [geoCoordMap[item.name][0], geoCoordMap[item.name][1] + item.value * 50]
  })
}


