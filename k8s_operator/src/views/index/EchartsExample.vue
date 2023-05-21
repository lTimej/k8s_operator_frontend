<template>
    <div class="space-template">
      <el-main>
          <div class="space-template-item" ref="chart">
              空间模板
          </div>
      </el-main>
    </div>
  </template>
  
  <script>
  export default {
    data () {
      return {
          option : {
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          legend: {
            data: ['销量']
          },
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [
            {
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }
          ]
        }
      }
    },
    components: {
  
    },
    mounted() {
      const chart = this.$refs.chart
      const myChart = this.$echarts.init(chart)
      // let myChart = this.$echarts.init(document.getElementById("space-template-item"));
      myChart.setOption(this.option);
    },
    methods: {
  
    },
  }
  
  </script>
  <style scoped>
  .el-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
      position: absolute;
      top: 0;
      right:0;
      left:0;
      bottom:0;
      height: 100%;
      width: 100%;
      padding: 0;
    }
    .space-template-item{
      margin:44px 0 0 100px;
      width: 25%;
      height: 400px;
    }
  </style>