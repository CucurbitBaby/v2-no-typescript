// 合同统计配置
function contractOption (myChart, tab, option,number) {
  // let myChart = echarts.init(document.querySelector(name))
  option.grid = {
    top: "10%",
    left: "1%",
    right: "5%",
    bottom: "10%",
    containLabel: true
  }
  option.legend = {
    show: true,
    left: '20%',
    bottom: '-1%',
    itemWidth: 20,
    itemHeight: 4,
    itemGap: 20,
    itemStyle: {
      borderCap: 'round'
    },
    textStyle: {
      color: '#8d8d93',
    }
  }
  option.xAxis = [
    {
      type: "category",
      // data: number,
        data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
        color: "#fff",
        interval: 0,
        fontSize: "12"
      },
    }
  ]
  option.yAxis = [{
    type: "value",
    axisLine: {
      show: true
    },
    axisLabel: {
      color: "#fff",
      fontSize: "12"
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: "#33384c",
      }
    }
  }]
  myChart.setOption(option)
  // 柱形图和折线图的切换
  $(tab).on("click", "a", function () {
      var dom = $(this)[0] //document.querySelector('.bar')
      var clss=$(this).attr('class');
    if ($(this).index() === 0) {
      // dom.style.color = '#0f3e86'
      // dom.style.border = ' solid 2px #0f3e86'
        dom.style.color = '#6674ae'
        dom.style.border = ' solid 2px #6674ae'
        $(this).attr('class')
      // var w = document.querySelector('.line')
      var w = document.querySelector('.line'+clss.charAt(clss.length-1))
        w.style.color = '#0f3e86'
        w.style.border = ' solid 2px #0f3e86'
      // w.style.color = '#6674ae'
      // w.style.border = ' solid 2px #6674ae'
      option.tooltip = {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        }
      }
      for (var i = 0; i < option.series.length; i++) {
        const element = option.series[i];
        element.type = "bar";
        element.itemStyle = {
          barBorderRadius: [20, 20, 0, 0],
        }
      }
    } else {
      // dom.style.color = '#0f3e86'
      // dom.style.border = ' solid 2px #0f3e86'
        dom.style.color = '#6674ae'
        dom.style.border = ' solid 2px #6674ae'
      var w = document.querySelector('.bar'+clss.charAt(clss.length-1))
      // var w = document.querySelector('.bar')
        w.style.color = '#0f3e86'
        w.style.border = ' solid 2px #0f3e86'
      // w.style.color = '#6674ae'
      // w.style.border = ' solid 2px #6674ae'
      option.tooltip = {
        trigger: "axis",
        axisPointer: {
          type: "line",
        }
      }
      option.xAxis.boundaryGap = false
      for (var i = 0; i < option.series.length; i++) {
        const element = option.series[i];
        element.type = "line";
        element.smooth = true
      }
    }
    // 需要重新渲染
    myChart.setOption(option);
  });
}
// 同比统计配置
function yoyOption (myChart, option,season,maxLeft,minRate,maxRate) {

  option.grid = {
    top: "10%",
    left: "1%",
    right: "10%",
    bottom: "10%",
    containLabel: true
  }
  option.legend = {
    show: true,
    left: '6%',
    bottom: 0,
    itemWidth: 16,
    itemHeight: 4,
    itemGap: 6,
    itemStyle: {
      borderCap: 'round'
    },
    textStyle: {
      color: '#8d8d93',
    }
  }
  option.tooltip = {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  }
  option.xAxis = [
    {
      type: "category",
      data: ["第1季度", "第2季度", "第3季度", "第4季度"],
      // data: season,
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
        color: "#fff",
        interval: 0,
        fontSize: "12"
      },

    }
  ]
  option.yAxis = [
    {
      type: "value",
      min: 0, // 指定最小值
      max: 1000, // 指定最大值
      // max:Math.ceil( 3/2 * maxLeft/1000)*1000, // 指定最大值
      axisLine: {
        show: true
      },
      axisLabel: {
        color: "#fff",
        fontSize: "12"
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#33384c",
        }
      }
    },
    {
      type: "value",
      min: 0, // 指定最小值
      max: 1000, // 指定最大值
      // min: Math.floor((4 * minRate - 3*maxRate)/100)* 100, // 指定最小值
      // max: Math.ceil( maxRate/100) * 100, // 指定最大值
      position: 'right',
      axisLine: {
        show: true,
      },
      axisLabel: {
        color: "#fff",
        fontSize: "12",
        formatter: '{value}%'
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#33384c",
        }
      }
    },
  ]
  myChart.setOption(option)
}
// 获取当前城市
var ipKey = 'd7f59315adbac8996398caf2a85b7d08';
// var ipKey = 'f3ceffb86da8f928271ac9376b2bd0fb';
//正式ip:59.49.17.104
// var ipUrl = 'https://restapi.amap.com/v3/ip?ip=59.49.17.104&key='+ipKey;
var ipUrl = 'https://restapi.amap.com/v3/ip?key='+ipKey;
//测试ip:49.7.238.166
// var ipUrl = 'https://restapi.amap.com/v3/ip?ip=49.7.238.166&key='+ipKey;
var city = '';
$.ajax({
  type: "GET",
  url: ipUrl,
  cache: false,
  async: false,
  dataType: "json",
  success: function (data, textStatus, jqXHR) {
      if(data.city.length!=0){
          city = data.city;
      }else{
          city='太原';
      }
  },
  error: function (XMLHttpRequest, textStatus, errorThrown) {
    console.log("请求失败！");
  }
});
// 获取当前天气
var tqkey = 'be1c2d18a50f4fb2d36da8c975591d82';
var sun = 'plug-in/screen/image/sun.png';
var yun = 'plug-in/screen/image/yun.png';
var mai = 'plug-in/screen/image/mai.png';
var wu = 'plug-in/screen/image/wu.png';
var snow = 'plug-in/screen/image/snow.png';
var rain = 'plug-in/screen/image/rain.png';
var cool = 'plug-in/screen/image/cool.png';
var dian = 'plug-in/screen/image/dian.png';
var feng = 'plug-in/screen/image/feng.png';
var shuang = 'plug-in/screen/image/shuang.png';
var lei = 'plug-in/screen/image/lei.png';
const tq = {
  '晴': sun,
  '多云': yun,
  '霾': mai,
  '雾': wu,
  '雪': snow,
  '雨': rain,
  '阴': cool,
  '电': dian,
  '雷': lei,
  '风': feng,
  '霜': shuang,
}
var tqUrl = 'https://restapi.amap.com/v3/weather/weatherInfo?key='+tqkey+'&city='+city+'&extensions=all';
$.ajax({
  type: "GET",
  url: tqUrl,
  cache: false,
  async: false,
  dataType: "json",
  success: function (data, textStatus, jqXHR) {
    var weather = data.forecasts[0].casts[0].dayweather
      var high = data.forecasts[0].casts[0].daytemp
      var low = data.forecasts[0].casts[0].nighttemp
      var city = data.forecasts[0].city
      var temp = low + ' ~ ' + high
      document.querySelector('.weather .city').innerHTML = city
      document.querySelector('.weather .dayweather').innerHTML = weather
      document.querySelector('.weather .temp').innerHTML = temp+" ℃"
      var imgSrc = document.querySelector('.weather img')
    for (const key in tq) {
      if (weather.indexOf(key) != -1) {
        imgSrc.src = tq[key]
      }
    }
  },
  error: function (XMLHttpRequest, textStatus, errorThrown) {
    console.log("请求失败！");
  }
});
// 获取当前时间
var t = null;
t = setTimeout(time, 1000);
function time () {
  clearTimeout(t);//清除定时器
  dt = new Date();
  var mt = dt.getMonth() + 1;
  var day = dt.getDate();
  var week = "日一二三四五六".charAt(dt.getDay())
  var h = dt.getHours();
  var m = dt.getMinutes();
  var s = dt.getSeconds();
  if(h<10){
      h='0'+h
  }
  if(m<10){
      m='0'+m
  }
  if(s<10){
      s='0'+s
  }
  document.querySelector(".date").innerHTML = mt+'月'+day+'日'+' 星期'+week+' '+h+':'+m+':'+s;
  t = setTimeout(time, 1000); //设定定时器，循环运行     
}
// window.onload = function(){
// $(document).ready(function() {
  document.getElementsByClassName('buyYearQuantity')[0].innerHTML =100000;
  document.getElementsByClassName('buyYearAmount')[0].innerHTML = 200000;
  document.getElementsByClassName('sellYearQuantity')[0].innerHTML = 300000;
  document.getElementsByClassName('sellYearAmount')[0].innerHTML = 400000;
  document.getElementsByClassName('buyMonthQuantity')[0].innerHTML = 500000;
  document.getElementsByClassName('buyMonthAmount')[0].innerHTML = 600000;
  document.getElementsByClassName('sellMonthQuantity')[0].innerHTML =700000;
  document.getElementsByClassName('sellMonthAmount')[0].innerHTML = 800000;
// 采购销售数据请求
    var url = "showScreenDataController.do?getAggregateData";
    $.ajax({
        type: "post",
        url: url,
        data: {"para": 1},
        cache: false,
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            // console.log('data', data);
            document.getElementsByClassName('buyYearQuantity')[0].innerHTML = Math.ceil(data.attributes.buyYearQuantity);
            document.getElementsByClassName('buyYearAmount')[0].innerHTML = Math.ceil(data.attributes.buyYearAmount);
            document.getElementsByClassName('sellYearQuantity')[0].innerHTML = Math.ceil(data.attributes.sellYearQuantity);
            document.getElementsByClassName('sellYearAmount')[0].innerHTML = Math.ceil(data.attributes.sellYearAmount);
            document.getElementsByClassName('buyMonthQuantity')[0].innerHTML = Math.ceil(data.attributes.buyMonthQuantity);
            document.getElementsByClassName('buyMonthAmount')[0].innerHTML = Math.ceil(data.attributes.buyMonthAmount);
            document.getElementsByClassName('sellMonthQuantity')[0].innerHTML = Math.ceil(data.attributes.sellMonthQuantity);
            document.getElementsByClassName('sellMonthAmount')[0].innerHTML = Math.ceil(data.attributes.sellMonthAmount);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("请求失败！");
        }
    });
// 合同单数统计
    (function () {
        var myChart = echarts.init(document.querySelector('.order .chart'))
        var buySingle = []
        var saleSingle = []
        var number = []
        var url = "showScreenDataController.do?getMonthOrderNumber";
        $.ajax({
            type: "post",
            url: url,
            data: {"para": 1},
            cache: false,
            async: false,
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                // console.log('data', data);
                buySingle = data.attributes.buyNumber
                saleSingle = data.attributes.sellNumber
                number = data.attributes.number
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log("请求失败！");
            }
        });
        var option = {
            color: ["#3161ff", "#07d6de"],
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                }
            },
            series: [
                {
                    name: "采购单数(单)",
                    type: "bar",
                    // barWidth: "10",
                    itemStyle: {
                        barBorderRadius: [10, 10, 0, 0],
                    },
                    label: {
                        show: true,
                        color: "#fff",
                        position: 'top'
                    },
                    areaStyle: {
                        color: "#3161ff"
                    },
                    data: [10, 92, 200, 334, 390, 330, 220, 52, 200, 334, 390, 330],//buySingle//
                    // data: buySingle
                },
                {
                    name: "销售单数(单)",
                    type: "bar",
                    itemStyle: {
                        barBorderRadius: [10, 10, 0, 0],
                    },
                    label: {
                        show: true,
                        color: "#fff",
                        position: 'top'
                    },
                    areaStyle: {
                        color: "#07d6de"
                    },
                    data: [100, 52, 200, 334, 390, 330, 220, 200, 334, 390, 330, 220], //saleSingle//
                    // data: saleSingle
                }
            ]
        }
        contractOption(myChart, ".order h3", option,number)
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    })();
// 合同数量统计
    (function () {
        var buyMonthQuantity = []
        var sellMonthQuantity = []
        var number = []
        var url = "showScreenDataController.do?getMonthQuantity";
        $.ajax({
            type: "post",
            url: url,
            data: {"para": 1},
            cache: false,
            async: false,
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                // console.log('data', data);
                 buyMonthQuantity = data.attributes.buyMonthQuantity.map(function (x) {
                    return Math.ceil(x);//向上取整
                });
                sellMonthQuantity = data.attributes.sellMonthQuantity.map(function (x) {
                    return Math.ceil(x);//向上取整
                });
                number = data.attributes.number
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log("请求失败！");
            }
        });
        var myChart = echarts.init(document.querySelector('.count .chart'))
        var option = {
            color: ["#4b4cde", "#07d6de"],
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    // type: "line",
                    type: "shadow",
                }
            },
            series: [
                {
                    name: "采购数量(吨)",
                    type: "bar",
                    itemStyle: {
                        barBorderRadius: [10, 10, 0, 0],
                    },
                    smooth: true,
                    areaStyle: {
                        color: "#4b4cde"
                    },
                    label: {
                        show: true,
                        color: "#fff",
                        position: 'top',
                    },
                  // data: buyMonthQuantity
                    data: [10, 52, 200, 334, 390, 330, 220, 52, 200, 334, 390, 330],//buyMonthQuantity //
                },
                {
                    name: "销售单数数量(吨)",
                    type: "bar",
                    itemStyle: {
                        barBorderRadius: [10, 10, 0, 0],
                    },
                    smooth: true,
                    areaStyle: {
                        color: "#07d6de"
                    },
                    label: {
                        show: true,
                        color: "#fff",
                        position: 'top'
                    },
                    data: [10, 52, 200, 334, 390, 330, 220, 200, 334, 390, 330, 220],//sellMonthQuantity//
                    // data: sellMonthQuantity
                }
            ]
        }
        contractOption(myChart, ".count h3", option,number)
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    })();
// 合同金额统计
(function () {
  var buyMonthAmount = []
  var sellMonthAmount = []
  var number = []
  var url = "showScreenDataController.do?getMonthAmount";
  $.ajax({
    type: "post",
    url: url,
    data: { "para": 1 },
    cache: false,
    async: false,
    dataType: "json",
    success: function (data, textStatus, jqXHR) {
      // console.log('data', data);
      // buyMonthAmount = data.attributes.buyMonthAmount
      // sellMonthAmount = data.attributes.sellMonthAmount
        buyMonthAmount = data.attributes.buyMonthAmount.map(function (x) {
            return Math.ceil(x);//向上取整
        });
        sellMonthAmount = data.attributes.sellMonthAmount.map(function (x) {
            return Math.ceil(x);//向上取整
        });
      number = data.attributes.number
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log("请求失败！");
    }
  });
  var myChart = echarts.init(document.querySelector('.amount .chart'))
  var option = {
    color: ["#008ce3", "#30b1ff"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      }
    },
    series: [
      {
        name: "采购金额(万元)",
        type: "bar",
        itemStyle: {
          barBorderRadius: [10, 10, 0, 0],
        },
        label: {
          show: true,
          color: "#fff",
          position: 'top'
        },
        areaStyle: {
          color: "#008ce3"
        },
        // data: buyMonthAmount
        data: [140, 232, 101, 264, 90, 340, 250, 101, 264, 90, 340, 250]
      },
      {
        name: "销售单数金额(万元)",
        type: "bar",
        itemStyle: {
          barBorderRadius: [10, 10, 0, 0],
        },
        label: {
          show: true,
          color: "#fff",
          position: 'top'
        },
        areaStyle: {
          color: "#30b1ff"
        },
        // data: sellMonthAmount
        data: [120, 282, 111, 234, 220, 340, 310, 111, 234, 220, 340, 310]
      }
    ]
  }
  contractOption(myChart, ".amount h3", option, number)
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
// 合同完结情况
(function () {
  var buyNotFinishRo = 0;
  var buyFinishRo = 0;
  var sellNotFinishRo = 0;
  var sellFinishRo = 0;
  var url = "showScreenDataController.do?contractFinishRatio";
  $.ajax({
    type: "post",
    url: url,
    data: { "para": 1 },
    cache: false,
    async: false,
    dataType: "json",
    success: function (data, textStatus, jqXHR) {
      buyNotFinishRo = data.attributes.buyNotFinishRo; // 采购未完成
      buyFinishRo = data.attributes.buyFinishRo; // 采购已完成
      sellNotFinishRo = data.attributes.sellNotFinishRo; // 销售未完成
      sellFinishRo = data.attributes.sellFinishRo; // 销售已完成
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log("请求失败！");
    }
  });
  var myChart = echarts.init(document.querySelector('.case .chart'))
  var option = {
    color: ["#228ffe", "#34d160", "#6054ff", "#ffcc33"],
    tooltip: {
      trigger: "item",
    },
    grid: {
      top: "10%",
      left: "0",
      right: "0",
      bottom: "10%",
    },
    legend: {
      show: true,
      left: '10%',
      bottom: "-2%",
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 10,
      itemStyle: {
        borderCap: 'round'
      },
      textStyle: {
        color: '#8d8d93',
      }
    },
    series: [
      {
        type: 'pie',
        radius: ['45%', '76%'],
        center: ['30%', '50%'],
        label: {
          fontSize: 12,
          rotate: true,
            normal: {
                color: "#fff",
                formatter: '{d}%',
                show: true,
                position: 'left'
            },
        },
        labelLine: {
          show: true,
          length: 6,
          length2: 8,
          lineStyle: {
            width: 2
          }
        },
        data: [
          { value: buyNotFinishRo, name: '采购未完成' },
          { value: buyFinishRo, name: '采购已完成' },

        ]
      },
      {
        type: 'pie',
        radius: ['42%', '63%'],
        center: ['79%', '49%'],
        label: {
          fontSize: 12,
          rotate: true,
            normal: {
                color: "#fff",
                formatter: '{d}%',
                show: true,
                position: 'left'
            },
        },
        labelLine: {
          show: true,
          length: 6,
          length2: 8,
          lineStyle: {
            width: 2
          }
        },
        data: [
          { value: sellNotFinishRo, name: '销售未完成' },
          { value: sellFinishRo, name: '销售已完成' },

        ]
      },
    ]
  }
  myChart.setOption(option)
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
var date = new Date();
var year = date.getFullYear();
var lastYear = new Date(new Date().setFullYear(date.getFullYear() - 1)).getFullYear();
// 合同采购量同比
(function () {
  var buyNowQuantity = []
  var buyLostQuantity = []
  var buyQuantityIncreaseRate = []
  var season = []
  var maxLeft = 0//左侧Y轴最大值
  var minRate = 0//右侧Y轴最小值
  var maxRate = 0//右侧Y轴最大值
  var url = "showScreenDataController.do?buyQuantityYOY";
  $.ajax({
    type: "post",
    url: url,
    data: { "para": 1 },
    cache: false,
    async: false,
    dataType: "json",
    success: function (data, textStatus, jqXHR) {
      // console.log('data', data);
      // buyNowQuantity = data.attributes.buyNowQuantity
      // buyLostQuantity = data.attributes.buyLostQuantity
        buyNowQuantity = data.attributes.buyNowQuantity.map(function (x) {
            return Math.ceil(x);//向上取整
        });
        buyLostQuantity = data.attributes.buyLostQuantity.map(function (x) {
            return Math.ceil(x);//向上取整
        });
      // buyQuantityIncreaseRate = data.attributes.buyQuantityIncreaseRate
        buyQuantityIncreaseRate = data.attributes.buyQuantityIncreaseRate.map(function (x) {
            // return Number(x).toFixed(1);//一位小数
            return (Math.ceil(x * 10) / 10).toFixed(1);//一位小数
        });

      season =  data.attributes.season
      maxLeft = data.attributes.maxLeft
      minRate = data.attributes.minRate
      maxRate = data.attributes.maxRate
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log("请求失败！");
    }
  });
  var myChart = echarts.init(document.querySelector('.caigou .chart'))
  var option = {
    color: ["#3161ff", "#06a7de", "#34d160"],
    series: [
      {
        // name: lastYear + "年采购数量(吨)",
        name: "上年同期采购数量(吨)",
        type: "bar",
        barWidth: "15",
        itemStyle: {
          barBorderRadius: [10, 10, 0, 0],
        },
        label: {
          show: true,
          color: "#fff",
          position: 'top'
        },
        // data: buyLostQuantity,
        data: [52, 390, 330, 220]
      },
      {
        // name: year + "年采购数量(吨)",
        name: "采购数量(吨)",
        type: "bar",
        barWidth: "15",
        itemStyle: {
          barBorderRadius: [10, 10, 0, 0],
        },
        label: {
          show: true,
          color: "#fff",
          position: 'top'
        },
        // data: buyNowQuantity,
        data: [200, 334, 390, 220]
      },
      {
        name: "增长率(%)",
        type: "line",
        smooth: true,
        symbol: 'circle',
        symbolSize: 10,
        yAxisIndex: 1,
        markPoint: {
          symbol: 'rect',
          // symbolSize: [30, 20],
          symbolSize:  (rawValue, params) => {
            params.symbolSize =parseInt[params.dataIndex]
            // console.log(params)
            // console.log(rawValue)
            return params.symbolSize;
        },
          symbolOffset: [0, '-90%'],
          label: {
            show: true,
            distance: 10,
            position: 'top',
            formatter: '{b}%'
            // formatter: function(data){
            //         return Number(data.name).toFixed(1)+'%'
            // }
          },
          data: [
            {
              name: '10',
              coord: [0, '10'],
            }, {
              name: '52',
              coord: [1, '52'],
            }, {
              name: '33',
              coord: [2, '33'],
            }, {
              name: '22',
              coord: [3, '22'],
            }
          ],
          // 下面是服务器数据
          // data: buyQuantityIncreaseRate.map((v, i) => {
          //   return {
          //     name: v + '',
          //     coord: [i, v + '']
          //   }
          // })
        },
        // data: buyQuantityIncreaseRate
        data: [10, 52, 33, 22]
      }
    ]
  }
  yoyOption(myChart, option, season,maxLeft,minRate,maxRate)
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
// 合同销售量同比
(function () {
  var sellNowQuantity = []
  var sellLostQuantity = []
  var sellQuantityIncreaseRate = []
  var season = []
    var maxLeft = 0//左侧Y轴最大值
    var minRate = 0//右侧Y轴最小值
    var maxRate = 0//右侧Y轴最大值
  var url = "showScreenDataController.do?sellQuantityYOY";
  $.ajax({
    type: "post",
    url: url,
    data: { "para": 1 },
    cache: false,
    async: false,
    dataType: "json",
    success: function (data, textStatus, jqXHR) {
      // console.log('data', data);
      // sellNowQuantity = data.attributes.sellNowQuantity
      // sellLostQuantity = data.attributes.sellLostQuantity
        sellNowQuantity = data.attributes.sellNowQuantity.map(function (x) {
            return Math.ceil(x);//向上取整
        });
        sellLostQuantity = data.attributes.sellLostQuantity.map(function (x) {
            return Math.ceil(x);//向上取整
        });
      // sellQuantityIncreaseRate = data.attributes.sellQuantityIncreaseRate
        sellQuantityIncreaseRate = data.attributes.sellQuantityIncreaseRate.map(function (x) {
            return (Math.ceil(x * 10) / 10).toFixed(1);//一位小数
        });
      season = data.attributes.season
        maxLeft = data.attributes.maxLeft
        minRate = data.attributes.minRate
        maxRate = data.attributes.maxRate+data.attributes.maxRate
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log("请求失败！");
    }
  });
  var myChart = echarts.init(document.querySelector('.sale .chart'))
  var option = {
    color: ["#3161ff", "#06a7de", "#34d160"],
    series: [
      {
        // name: lastYear + "年销售数量(吨)",
        name: "上年同期销售数量(吨)",
        type: "bar",
        barWidth: "15",
        itemStyle: {
          barBorderRadius: [10, 10, 0, 0],
        },
        label: {
          show: true,
          color: "#fff",
          position: 'top'
        },
        // data: sellLostQuantity
        data: [52, 390, 330, 220]
      },
      {
        // name: year + "年销售数量(吨)",
        name: "销售数量(吨)",
        type: "bar",
        barWidth: "15",
        itemStyle: {
          barBorderRadius: [10, 10, 0, 0],
        },
        label: {
          show: true,
          color: "#fff",
          position: 'top'
        },
        // data: sellNowQuantity
        data: [200, 334, 390, 220]
      },
    {
        name: "增长率(%)",
        type: "line",
        smooth: true,
        symbol: 'circle',
        symbolSize: 10,
        yAxisIndex: 1,
        markPoint: {
        symbol: 'rect',
            // symbolSize: [30, 20],
            symbolSize:  (rawValue, params) => {
            params.symbolSize =parseInt[params.dataIndex]
            // console.log(params)
            // console.log(rawValue)
            return params.symbolSize;
        },
        symbolOffset: [0, '-90%'],
            label: {
            show: true,
                distance: 10,
                position: 'top',
                formatter: '{b}%'
                // formatter: function(data){
                //     return Number(data.name).toFixed(1)+'%'
                // }
        },
        data: [
          {
            name: '10',
            coord: [0, '10'],
          }, {
            name: '52',
            coord: [1, '52'],
          }, {
            name: '33',
            coord: [2, '33'],
          }, {
            name: '22',
            coord: [3, '22'],
          }
        ],
        // 下面是服务器数据
        // data: sellQuantityIncreaseRate.map((v, i) => {
        //     return {
        //         name: v + '',
        //         coord: [i, v + '']
        //     }
        // })
    },
        // label: {
        //   show: true,
        //   color: "#fff",
        //   position: 'top'
        // },
        // data: sellQuantityIncreaseRate
        data: [10, 52, 33, 22]
    }
    ]
  }
  yoyOption(myChart, option, season,maxLeft,minRate,maxRate)
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
// 合同采购金额同比
(function () {
  var buyNowAmount = []
  var buyLostAmount = []
  var buyAmountIncreaseRate = []
  var season = []
    var maxLeft = 0//左侧Y轴最大值
    var minRate = 0//右侧Y轴最小值
    var maxRate = 0//右侧Y轴最大值
  var url = "showScreenDataController.do?buyAmountYOY";
  $.ajax({
    type: "post",
    url: url,
    data: { "para": 1 },
    cache: false,
    async: false,
    dataType: "json",
    success: function (data, textStatus, jqXHR) {
      // buyNowAmount = data.attributes.buyNowAmount
      // buyLostAmount = data.attributes.buyLostAmount
        buyNowAmount = data.attributes.buyNowAmount.map(function (x) {
            return Math.ceil(x);//向上取整
        });
        buyLostAmount = data.attributes.buyLostAmount.map(function (x) {
            return Math.ceil(x);//向上取整
        });
      // buyAmountIncreaseRate = data.attributes.buyAmountIncreaseRate
        buyAmountIncreaseRate = data.attributes.buyAmountIncreaseRate.map(function (x) {
            return (Math.ceil(x * 10) / 10).toFixed(1);//一位小数
        });
      season = data.attributes.season
        maxLeft = data.attributes.maxLeft
        minRate = data.attributes.minRate
        maxRate = data.attributes.maxRate+data.attributes.maxRate
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log("请求失败！");
    }
  });
  var myChart = echarts.init(document.querySelector('.cgAmount .chart'))
  var option = {
    color: ["#07d6de", "#228ffe", "#f49e23"],
    series: [
      {
        // name: lastYear + "采购金额(万元)",
        name: "上年同期采购金额(万元)",
        type: "bar",
        barWidth: "15",
        itemStyle: {
          barBorderRadius: [10, 10, 0, 0],
        },
        label: {
          show: true,
          color: "#fff",
          position: 'top'
        },
        // data: buyLostAmount
        data: [10, 390, 330, 220]
      },
      {
        // name: year + "采购金额(万元)",
        name: "采购金额(万元)",
        type: "bar",
        barWidth: "15",
        itemStyle: {
          barBorderRadius: [10, 10, 0, 0],
        },
        label: {
          show: true,
          color: "#fff",
          position: 'top'
        },
        // data: buyNowAmount
        data: [52, 200, 334, 220]
      },
      {
        name: "增长率(%)",
        type: "line",
        smooth: true,
        symbol: 'circle',
        symbolSize: 10,
        yAxisIndex: 1,
        markPoint: {
          symbol: 'rect',
          // symbolSize: [30, 20],
          symbolSize:  (rawValue, params) => {
            params.symbolSize =parseInt[params.dataIndex]
            // console.log(params)
            // console.log(rawValue)
            return params.symbolSize;
          },
          symbolOffset: [0, '-90%'],
          label: {
            show: true,
            distance: 10,
            // position: 'inside',
            position: 'top',
            formatter: '{b}%'
            // formatter: function(data){
            //     return Number(data.name).toFixed(1)+'%'
            // }
          },
          data: [
            {
              name: '522345',
              coord: [0, '522345'],
            }, {
              name: '2006543',
              coord: [1, '2006543'],
            }, {
              name: '390456',
              coord: [2, '390456'],
            }, {
              name: '330654',
              coord: [3, '330654'],
            }
          ],
            // 下面是服务器数据
            // data: buyAmountIncreaseRate.map((v, i) => {
            //     return {
            //         name: v + '',
            //         coord: [i, v + '']
            //     }
            // })
        },
        // label: {
        //   show: true,
        //   color: "#fff",
        //   position: 'top'
        // },
        // data: buyAmountIncreaseRate
        data: [52, 200, 390, 330]
      }
    ]
  }
  yoyOption(myChart, option, season,maxLeft,minRate,maxRate)
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
// 合同销售同比
(function () {
  var sellNowAmount = []
  var sellLostAmount = []
  var sellAmountIncreaseRate = []
  var season = []
    var maxLeft = 0//左侧Y轴最大值
    var minRate = 0//右侧Y轴最小值
    var maxRate = 0//右侧Y轴最大值
  var url = "showScreenDataController.do?sellAmountYOY";
  $.ajax({
    type: "post",
    url: url,
    data: { "para": 1 },
    cache: false,
    async: false,
    dataType: "json",
    success: function (data, textStatus, jqXHR) {
      // console.log('data', data);
      // sellNowAmount = data.attributes.sellNowAmount
      // sellLostAmount = data.attributes.sellLostAmount
        sellNowAmount = data.attributes.sellNowAmount.map(function (x) {
            return Math.ceil(x);//向上取整
        });
        sellLostAmount = data.attributes.sellLostAmount.map(function (x) {
            return Math.ceil(x);//向上取整
        });
      // sellAmountIncreaseRate = data.attributes.sellAmountIncreaseRate
        sellAmountIncreaseRate = data.attributes.sellAmountIncreaseRate.map(function (x) {
            return (Math.ceil(x * 10) / 10).toFixed(1);//一位小数
        });
      season = data.attributes.season
        maxLeft = data.attributes.maxLeft
        minRate = data.attributes.minRate
        maxRate = data.attributes.maxRate+data.attributes.maxRate
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log("请求失败！");
    }
  });
  var myChart = echarts.init(document.querySelector('.saleAmount .chart'))
  var option = {
    color: ["#07d6de", "#228ffe", "#f49e23"],
    series: [
      {
        // name: lastYear + "销售金额(万元)",
        name: "上年同期销售金额(万元)",
        type: "bar",
        barWidth: "15",
        itemStyle: {
          barBorderRadius: [10, 10, 0, 0],
        },
        label: {
          show: true,
          color: "#fff",
          position: 'top'
        },
        // data: sellLostAmount
        data: [10, 52, 200, 334]
      },
      {
        // name: year + "销售金额(万元)",
        name: "销售金额(万元)",
        type: "bar",
        barWidth: "15",
        itemStyle: {
          barBorderRadius: [10, 10, 0, 0],
        },
        label: {
          show: true,
          color: "#fff",
          position: 'top'
        },
        // data: sellNowAmount
        data: [10, 52, 330, 220]
      },
      {
        name: "增长率(%)",
        type: "line",
        smooth: true,
        symbol: 'circle',
        symbolSize: 10,
        yAxisIndex: 1,
        markPoint: {
          symbol: 'rect',
          // symbolSize: [30, 20],
          symbolSize:  (rawValue, params) => {
            params.symbolSize =parseInt[params.dataIndex]
            // console.log(params)
            // console.log(rawValue)
            return params.symbolSize;
        },
          symbolOffset: [0, '-90%'],
          label: {
            show: true,
            distance: 10,
            position: 'top',
            formatter: '{b}%'
            // formatter: function(data){
            //     return Number(data.name).toFixed(1)+'%'
            // }
          },
          data: [
            {
              name: '10',
              coord: [0, '10'],
            }, {
              name: '52',
              coord: [1, '52'],
            }, {
              name: '33',
              coord: [2, '33'],
            }, {
              name: '22',
              coord: [3, '22'],
            }
          ],
            // 下面是服务器数据
            // data: sellAmountIncreaseRate.map((v, i) => {
            //     return {
            //         name: v + '',
            //         coord: [i, v + '']
            //     }
            // })
        },
        // label: {
        //   show: true,
        //   color: "#fff",
        //   position: [0, -30]
        // },
        // data: sellAmountIncreaseRate
        data: [10, 52, 33, 22]
      }
    ]
  }
  yoyOption(myChart, option, season,maxLeft,minRate,maxRate)
})();
// }


