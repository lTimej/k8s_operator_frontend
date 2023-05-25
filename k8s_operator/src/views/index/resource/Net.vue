<template>
  <div class="net">
    <div class="net-title">NetIO</div>
    <el-main>
        <div class="net-item"  ref="net">
        </div>
    </el-main>
  </div>
</template>

<script>
//import {getResource} from "networks/resource/resource"
// import {getCpu} from "networks/resource/resource"
//import {getmemory} from "networks/resource/resource"
//import {getdisk} from "networks/resource/resource"
//import {getnetwork} from "networks/resource/resource"
export default {
  data () {
    return {

    }
  },
  components: {

  },
  mounted() {
    var chart = this.$refs.net
    var myChart = this.$echarts.init(chart)
    var option;
    var date = [];
    var data = [Math.random() * 150];
    var now = new Date();
    
    function addData(shift) {
      var now1 = [now.getHours(), now.getMinutes(), now.getSeconds()].join(':');
      date.push(now1);
      if(!shift){
        data.push(0);
      }else{
        data.push(1);
        // getCpu().then(res => {
        //   console.log(res,"=======");
        //   data.push(res.data.data.cpu_utility);
        // })
      }
      if (shift) {
        date.shift();
        data.shift();
      }
      now = new Date(now.setSeconds(now.getSeconds() + 1));
    }
    for (var i = 1; i < 10; i++) {
      addData();
    }
    option = {
      xAxis: {
        type: 'category',
        boundaryGap:["20%","20%"],
        data: date
      },
      yAxis: {
        boundaryGap: false,
        // boundaryGap: [0, '10%'],
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
    }, 1000);

    option && myChart.setOption(option);
  },
  methods: {

  },
}

</script>
<style scoped>
.el-main {
    /* background-color: #E9EEF3;
    color: #333;
    text-align: center;
    position: absolute;
    top: 0;
    right:0;
    left:0;
    bottom:0;
    height: 100%;
    width: 100%;
    padding: 0; */
  }
  .net{
    height: 100%;
    position: absolute;
    top:0;
    left:904px;
  }
  .net-item{
      margin:44px 0 0 70px;
      width: 300px;
      height: 225px;
    }
  .net-title{
    position:relative;
      top:100px;
      left:190px;
      font-size: 32px;
      font-weight: 600;
      color: green;
      display:inline-block;
  }
</style>
