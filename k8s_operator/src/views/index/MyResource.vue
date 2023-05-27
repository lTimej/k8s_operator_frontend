<template>
  <div class="my-resource">
    <div class="process">
      <cpu @getCpu="getCpu"/>
      <memory @getMemory="getMemory"/>
      <disk @getDisk="getDisk"/>
      <net @getNet="getNet"/>
    </div>
    <div class="circle">
        <div class="cpu"><el-progress type="circle" :percentage="cpu"></el-progress></div>
        <div class="memory"><el-progress type="circle" :percentage="memory"></el-progress></div>
        <div class="disk"><el-progress type="circle" :percentage="disk"></el-progress></div>
        <div class="net"><el-progress type="circle" :percentage="0" :format="definePerc"></el-progress></div>
        <!-- <div class="net"><el-progress type="circle" :percentage="resource.net" status="exception"></el-progress></div> -->
    </div>
  </div>
</template>

<script>
import Cpu from "views/index/resource/Cpu"
import Memory from "views/index/resource/Memory"
import Disk from "views/index/resource/Disk"
import Net from "views/index/resource/Net"
export default {
  data () {
    return {
      cpu: 0,
      memory: 0,
      disk: 0,
      net: "",
    }
  },
  components: {
    Cpu,
    Memory,
    Disk,
    Net,
  },
  mounted() {
    
  },
  methods: {
    getCpu(cpu){
      this.cpu = cpu;
    },
    getMemory(memory){
      this.memory = memory;
    },
    getDisk(disk){
      this.disk = disk;
    },
    getNet(net){
      this.net = net;
    },
    definePerc(){
      
      if(this.net == ""){
        return "0kbs"
      }
      return this.net
    }
  },
}

</script>
<style scoped>
  .my-resource .process{
    color: #333;
    position: absolute;
    top: 0;
    right:0;
    bottom:0;
    height: 100%;
    width: 100%;
    padding: 0;
  }
  .my-resource .circle{
     color: #333;
    position: absolute;
    top: 300px;
    right:0;
    left: 240px;
    bottom:0;
    padding: 0;
  }
  .circle .cpu,.circle .memory,.circle .disk,.circle .net{
    width: 25%;
    display: inline-block;
  }
</style>
