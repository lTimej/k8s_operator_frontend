<template>
  <div class="disk">
    <div class="disk-title">Disk</div>
    <el-main>
        <div class="disk-item"  ref="disk">
        </div>
    </el-main>
  </div>
</template>

<script>
//import {getResource} from "networks/resource/resource"
// import {getCpu} from "networks/resource/resource"
//import {getmemory} from "networks/resource/resource"
import {getDisk} from "networks/resource/resource"
//import {getnetwork} from "networks/resource/resource"
export default {
  name: "Disk",
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
    var chart = this.$refs.disk
    this.myChart = this.$echarts.init(chart)
    this.init_data()
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
        getDisk().then(res => {
          if(res.status != 200){
            this.data.push(1);
          }else{
            this.data.push(res.data.data.disk_free_percent);
            this.$emit("getDisk",res.data.data.disk_free_percent)
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
            color: '#ffff00'
          }
        ]
      };
      setInterval(this.set_interval, 100000);

      this.option && this.myChart.setOption(this.option);
    },
  }
}

</script>
<style scoped>
.el-main {
    padding: 0;
  }
  .disk{
    height: 100%;
    position: absolute;
    top:0;
    left:620px;
  }
  .disk-item{
      margin:44px 0 0 70px;
      width: 300px;
      height: 225px;
    }
    .disk-title{
      position:relative;
      top:100px;
      left:200px;
      font-size: 32px;
      font-weight: 600;
      color: yellow;
      display:inline-block;
    }
</style>
