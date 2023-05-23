<template>
  <div class="my-resource">
    <el-main>
        <div class="my-resource-item">
            <div class="circle">
                <div class="cpu"><el-progress type="circle" :percentage="0"></el-progress></div>
                <div class="memory"><el-progress type="circle" :percentage="25"></el-progress></div>
                <div class="disk"><el-progress type="circle" :percentage="100" status="success"></el-progress></div>
                <div class="net"><el-progress type="circle" :percentage="50" status="exception"></el-progress></div>
            </div>

            <div class="process">
                <div class="cpus">
                    <div class="c"></div>
                </div>
                <div class="memorys">
                    <div class="c"></div>
                </div>
                <div class="disks">
                    <div class="c"></div>
                </div>  
                <div class="nets">
                    <div class="c"></div>
                </div>
            </div>
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
  .my-resource-item{
    margin:44px 0 0 100px;
  }
  .my-resource-item .circle{
    padding: 20px 0;
  }
  .cpu,.memory,.disk,.net{
    width: 25%;
    display: inline-block;
  }
  .my-resource-item .process{
    display: flex;
    align-items:center;
    text-align: center;
  }
  .cpus,.memorys,.disks,.nets{
    flex: 1;
    align-items:center;
    text-align: center;
    /* height: 20px; */
    margin: 15px;
    /* display: inline-block; */
  }
  .c{
    width: 80px;
    height: 30px;
    background-color: red;
    border-radius: 15px;
    text-align: center;
    margin-left: 100px;
  }
</style>