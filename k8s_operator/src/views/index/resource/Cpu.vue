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

import {getCpu} from "networks/resource/resource"
export default {
  name: "Cpu",
  props:{
    
  },
  data () {
    return {
      date: [],
      data: [],
      option: {},
      myChart: null,

    }
  },
  components: {

  },
  mounted() {
    var chart1 = this.$refs.cpu1;
    this.myChart = this.$echarts.init(chart1);
    this.init_data();
    // var chart2 = this.$refs.cpu2;
    // var myChart2 = this.$echarts.init(chart2);
    // this.init_data(myChart2);
    
  },
  methods: {
    addData(shift){
      var now = new Date();
      var now1 = [now.getHours(), now.getMinutes(), now.getSeconds()].join(':');
      this.date.push(now1);
      if(!shift){
        this.data.push(0);
      }else{
        // data.push(1);
        getCpu().then(res => {
          // console.log(res,"=======");
          if(res.status != 200){
            this.data.push(1);
          }else{
            this.data.push(res.data.data.cpu_utility);
            this.$emit("getCpu",res.data.data.cpu_utility)
          }
        }).catch(err => {
          this.data.push(this.data[this.data.length-1]);
          console.log(err)
        })
      }
      if (shift) {
        this.date.shift();
        this.data.shift();
      }
      now = new Date(now.setSeconds(now.getSeconds() + 1));
    },
    set_interval(){
      this.addData(true);
        // console.log(this.resource,"--22222-===")
        this.myChart.setOption({
          xAxis: {
            data: this.date
          },
          series: [
            {
              name: '成交',
              data: this.data
            }
          ]
        });
    },
    init_data(){
      for (var i = 1; i < 150; i++) {
        this.addData(false);
      }
      this.option = {
        xAxis: {
          type: 'category',
          boundaryGap:false,
          data: this.date
        },
        yAxis: {
          boundaryGap: false,
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
            data: this.data,
            color: 'rgb(255,0,0)'
          }
        ]
      };
      setInterval(this.set_interval, 1000);

      this.option && this.myChart.setOption(this.option);
    }
  },
}

</script>
<style scoped>
  .el-main {
    padding: 0;
  }  
  .cpu{
    height: 100%;
    position: absolute;
    top:0;
    left:45px;
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
