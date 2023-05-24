<template>
  <div class="space-template">
   
      <cpu />
      <memory />
      <disk />
      <net />
   
    <!-- <div class="circle">
        <div class="cpu"><el-progress type="circle" :percentage="0"></el-progress></div>
        <div class="memory"><el-progress type="circle" :percentage="25"></el-progress></div>
        <div class="disk"><el-progress type="circle" :percentage="100" status="success"></el-progress></div>
        <div class="net"><el-progress type="circle" :percentage="50" status="exception"></el-progress></div>
    </div> -->
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
      margin:44px 0 0 80px;
      /* width: 300px; */
      /* height: 225px; */
    }
  /* .space-template .process{

  }
  .space-template .circle{
    padding: 20px 0;
  }
  .cpu,.memory,.disk,.net{
    width: 25%;
    display: inline-block;
  } */
</style>
