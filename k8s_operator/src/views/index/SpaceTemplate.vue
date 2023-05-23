<template>
  <div class="space-template">
    <el-main>
        <div class="space-template-item"  ref="chart">
            我的资源
        </div>
    </el-main>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  },
  mounted() {
    var chart = this.$refs.chart
    var myChart = this.$echarts.init(chart)
    var option;

    var base = +new Date(2014, 9, 3);
    console.log(base,"-----")
    var oneDay = 24 * 3600 * 1000;
    var date = [];
    var data = [Math.random() * 150];
    var now = new Date();
    console.log(now,"===")
    function addData(shift) {
      now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/');
      date.push(now);
      data.push((Math.random() - 0.4) * 10 + data[data.length - 1]);
      if (shift) {
        date.shift();
        data.shift();
      }
      now = new Date(+new Date(now) + oneDay);
    }
    for (var i = 1; i < 100; i++) {
      addData();
    }
    option = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date
      },
      yAxis: {
        boundaryGap: [0, '50%'],
        type: 'value'
      },
      series: [
        {
          name: '成交',
          type: 'line',
          smooth: true,
          symbol: 'none',
          stack: 'a',
          areaStyle: {
            normal: {}
          },
          data: data
        }
      ]
    };
    setInterval(function () {
      addData(true);
      myChart.setOption({
        xAxis: {
          data: date
        },
        series: [
          {
            name: '成交',
            data: data
          }
        ]
      });
    }, 500);

    option && myChart.setOption(option);
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
      margin:44px 0 0 150px;
      width: 300px;
      height: 225px;
    }
</style>