<template>
    <div id="myChartWhater" :style="{width:'500px',height:'500px'}"></div>
</template>

<script>
import 'echarts-liquidfill/src/liquidFill.js'
// 引入基本模板
// let echarts = require('echarts/lib/echarts')
// require('echarts/lib/chart/pie')
export default {
  name: "hello",
  data() {
    return {
      myChart: null,
      score:0.8,
      healthyName:"良好 +",
    };
  },
  mounted() {
    let that = this;
    console.log(that);
    // this.fetchData(function(data) {
    //   that.myChart.setOption({
    //     legend: {},
    //     tooltip: {},
    //   });
    // });
    this.initWater() 
  },
  methods: {
   initWater() {
            let value = this.score;
            let myChart = this.$echarts.init(document.getElementById("myChartWhater"));
            let colorScore = this.score * 100;
            let colorList = [];
            if (colorScore >= 90) {
                let color1 = "rgb(45,224,1135)";
                let color2 = "rgb(74,227,141)";
                colorList.push(color1);
                colorList.push(color2);
            } else if (colorScore >= 80 && colorScore < 90) {
                let color1 = "rgb(41,145,235)";
                let color2 = "rgb(0,137,255)";
                colorList.push(color1);
                colorList.push(color2);
            } else if (colorScore >= 60 && colorScore < 80) {
                let color1 = "rgb(219,185,246)";
                let color2 = "rgb(253,208,0)";
                colorList.push(color1);
                colorList.push(color2);
            } else if (colorScore < 60) {
                let color1 = "rgb(207,74,84)";
                let color2 = "rgb(243,17,34)";
                colorList.push(color1);
                colorList.push(color2);
            }
            var data = [];
            data.push(value);
            data.push(value);
            myChart.setOption({
                backgroundColor: "white", //容器背景颜色
                title: {
                    text: "",
                    textStyle: {
                        fontWeight: "normal",
                        fontSize: 25,
                        color: "rgb(97, 142, 205)"
                    }
                },
                series: [
                    {
                        type: "liquidFill",
                        radius: "80%", //水球的半径
                        data: data,
                        backgroundStyle: {
                            color: "white"
                        },
                        label: {
                            normal: {
                                formatter:
                                    "{a|" +
                                    (value * 100).toFixed(0) +
                                    "}" +
                                    " " +
                                    "\n" +
                                    "\n" +
                                    "{b|" +
                                    this.healthyName +
                                    "}",
                                textStyle: {
                                    fontSize: 55 //字体大小
                                },
                                position: ["50%", "50%"],
                                rich: {
                                    //富文本 对字体进一步设置样式。a对应的value,b对应的healthyName
                                    a: {
                                        fontSize: 60,
                                        lineHeight: 10,
                                        fontWeight: "bold",
                                        padding: [0, 0, 0, 20]
                                    },
                                    b: {
                                        fontSize: 30,
                                        lineHeight: 10,
                                        fontWeight: "bold"
                                    }
                                }
                            }
                        },
                        outline: {
                            show: true, //是否显示轮廓 布尔值
                            borderDistance: 0, //外部轮廓与图表的距离 数字
                            itemStyle: {
                                borderColor: "#edf2f6", //边框的颜色
                                borderWidth: 1 //边框的宽度
                            }
                        },
                        color: [...colorList]
                    }
                ]
            });
        }
    // fetchData() {
    //   this.myChart = this.$echarts.init(document.getElementById("myChart"));
    //   this.myChart.setOption({
    //     // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
    //     xAxis: { type: "category" },
    //     // 声明一个 Y 轴，数值轴。
    //     yAxis: {},
    //     // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
    //     series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],

    //      dataset: {
    //       // 提供一份数据。
    //       dimensions: ["product", "2015", "2016", "2017"],
    //       source: [
    //         {
    //           product: "Matcha Latte",
    //           "2015": 43.3,
    //           "2016": 85.8,
    //           "2017": 93.7
    //         },
    //         { product: "Milk Tea", "2015": 83.1, "2016": 73.4, "2017": 55.1 },
    //         {
    //           product: "Cheese Cocoa",
    //           "2015": 86.4,
    //           "2016": 65.2,
    //           "2017": 82.5
    //         },
    //         {
    //           product: "Walnut Brownie",
    //           "2015": 72.4,
    //           "2016": 53.9,
    //           "2017": 39.1
    //         }
    //       ]
    //     }
    //   });
    // }
  }
};

//  export default {
//   name: 'hello',
//   data() {
//     return {
//         myChart:null
//     };
//   },
// mounted() {
//     let that = this;
//     console.log(that)
//     this.echarsDemo();
//     this.fetchData(function(data){
//         that.myChart.hideLoading();
//         that.myChart.setOption({
//             xAxis:{
//                 data:data.categories
//             },
//             series:[
//                 {
//                     name:"销量",
//                     data:data.data
//                 }
//             ]
//         })
//     })
// },
// methods: {
//    echarsDemo(){
//        this.myChart = this.$echarts.init(document.getElementById("myChart"));
//        this.myChart.setOption({
//            title:{
//                text:""
//            },
//            tooltip:{},
//            legend:{
//                data:["销量"]
//            },
//            xAxis:{
//               data:[]
//           },
//            yAxis:{},
//            series:[
//               {
//                   name:"销量",
//                   type:"bar",
//                   data:[]
//               }
//           ]
//        })
//        this.myChart.showLoading();
//    } ,
//    fetchData(cb){
//        setTimeout(function () {
//         cb({
//             categories: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
//             data: [5, 20, 36, 10, 10, 20]
//         });
//     }, 3000);
//    }
// },
// }

//  mounted() {
//     this.drawLine();
//   },
//  methods: {
//     drawLine() {
//       // 基于准备好的dom，初始化echarts实例
//  let myChart = echarts.init(document.getElementById('myChart'))
//     myChart.setOption({
//     backgroundColor:'#102b40',
//     visualMap:{
//         show:false,
//         min:80,
//         max:600,
//         inRange:{
//             colorLightness:[0,1]
//         }
//     },
//     series : [
//         {
//             name: '访问来源',
//             type: 'pie',
//             radius: '55%',
//             roseType:'angle',
//             data:[
//                 {value:235, name:'视频广告'},
//                 {value:274, name:'联盟广告'},
//                 {value:310, name:'邮件营销'},
//                 {value:335, name:'直接访问'},
//                 {value:400, name:'搜索引擎'}
//             ]
//         },
//            ],
//             setOption: {
//                 textStyle: {
//                    color: 'rgba(255, 255, 255, 0.3)'
//                     }
//             },
//             labelLine: {
//                 lineStyle: {
//                     color: 'rgba(255, 255, 255, 0.3)'
//                 }
//            },
//           itemStyle:{
//               emphasis: {
//                   shadowBlur:200,
//                   shadowColor:'rgba(0,0,0,0.5)'
//               }
//           },
//           // 设置扇形的颜色
//                 color: '#c23531',
//                 shadowBlur: 200,
//                 shadowColor: 'rgba(0, 0, 0, 0.5)'
//      })

//     }
//  }

// // 引入柱状图组件
// require('echarts/lib/chart/bar')
// // 引入提示框和title组件
// require('echarts/lib/component/tooltip')
// require('echarts/lib/component/title')
// export default {
//   name: 'hello',
//   data() {
//     return {
//       msg: 'Welcome to Your Vue.js App'
//     }
//   },
//   mounted() {
//     this.drawLine();
//   },
//   methods: {
//     drawLine() {
//       // 基于准备好的dom，初始化echarts实例
//       let myChart = echarts.init(document.getElementById('myChart'))
//       // 绘制图表
//       myChart.setOption({
//         title: { text: 'ECharts 入门示例' },
//         tooltip: {},
//         xAxis: {
//           data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
//         },
//         yAxis: {},
//         series: [{
//           name: '销量',
//           type: 'bar',
//           data: [5, 20, 36, 10, 10, 20]
//         }]
//       });
//     }
//   }
// }
</script>
<style>
/* #myChart {
  width: 100%;
  height: 300px;
  overflow-x: hidden;
  text-align: center;
} */
</style>


