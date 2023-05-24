<template>
  <div class="cpu">
    <div class="cpu-title">CPU</div>
    <el-main>
        <div class="cpu-item"  ref="cpu1"></div>
    </el-main>
    <!-- <el-main>
        <div class="cpu-item"  ref="cpu2"></div>
    </el-main> -->
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
    var chart1 = this.$refs.cpu1;
    var myChart1 = this.$echarts.init(chart1);
    this.init_data(myChart1);
    // var chart2 = this.$refs.cpu2;
    // var myChart2 = this.$echarts.init(chart2);
    // this.init_data(myChart2);
    
  },
  methods: {
    init_data(myChart){
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
            name: 'sdfsdfdsfsdfsfdsdf',
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
    }
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
  .cpu{
    height: 100%;
    position: absolute;
    top:0;
    left:0;
  }
  .cpu-item{
      margin:44px 0 0 80px;
      width: 300px;
      height: 225px;
    }
    .cpu-title{
      position:relative;
      top:100px;
      left:230px;
      font-size: 32px;
      font-weight: 600;
      color: red;
      display:inline-block;
    }
</style>
