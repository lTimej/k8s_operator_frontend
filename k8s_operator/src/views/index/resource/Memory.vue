<template>
  <div class="memory">
    <div class="memory-title">Memory</div>
    <el-main>
        <div class="memory-item"  ref="memory">
        </div>
    </el-main>
  </div>
</template>

<script>
//import {getResource} from "networks/resource/resource"
// import {getCpu} from "networks/resource/resource"
import {getMemory} from "networks/resource/resource"
//import {getdisk} from "networks/resource/resource"
//import {getnetwork} from "networks/resource/resource"
export default {
  name: "Memory",
  data () {
    return {
      date: [],
      data: [],
      option: {},
      myChart: null,
      timer: null,
    }
  },
  components: {

  },
  mounted() {
    var chart = this.$refs.memory
    this.myChart = this.$echarts.init(chart)
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
        getMemory().then(res => {
          if(res.status != 200){
            this.data.push(1);
          }else{
            this.data.push(res.data.data.memory_free_percent);
            this.$emit("getMemory",res.data.data.memory_free_percent)
          }
          // console.log(res,"=======");
          
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
            color: '#ffa500'
          }
        ]
      };
      this.timer = setInterval(this.set_interval, 1000);

      this.option && this.myChart.setOption(this.option);
    }
  },
  activated() {
    // console.log("进入memory")
    this.init_data();
  },
  deactivated() {
    // console.log("离开memory")
    clearInterval(this.timer);
  },
}

</script>
<style scoped>
.el-main {
    padding: 0;
  }
  .memory{
    height: 100%;
    /* position: absolute; */
    display: inline-block;
    width: 24%;
  }
  .memory-item{
      margin:44px 0 0 70px;
      width: 300px;
      height: 225px;
    }
    .memory-title{
      position:relative;
      top:100px;
      left:180px;
      font-size: 32px;
      font-weight: 600;
      color: orange;
      display:inline-block;
    }
</style>
