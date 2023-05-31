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
import {getNetwork} from "networks/resource/resource"
export default {
  name: "Net",
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
    var chart = this.$refs.net
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
        getNetwork().then(res => {
          if(res.status != 200){
            this.data.push(1);
          }else{
            this.data.push(res.data.data.net_download);
            this.$emit("getNet",res.data.data.net_download)
          }
          // console.log(res,"=======");
          // 
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
            color: '#008000'
          }
        ]
      };
      setInterval(this.set_interval, 100000);

      this.option && this.myChart.setOption(this.option);
    },
  },
}

</script>
<style scoped>
.el-main {
    padding: 0;
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
