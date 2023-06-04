<template>
    <index>
        <div class="space">
            <div class="space-title">我的工作空间</div>
            <div class="space-item">
                <div class="space-item-title">哈哈哈</div>
                <div class="space-item-title">Python</div>
                <div class="space-item-title">4C 2G 20G</div>
                <div class="space-item-title">fkdf</div>
                <div class="space-item-title">
                    <i class="el-icon-video-play"></i>
                    <i class="el-icon-video-pause"></i>
                    <i class="el-icon-delete"></i>
                    
                </div>
            </div>
        </div>
    </index>
</template>

<script>
import Index from "views/index/Index"
export default {
  data () {
    return {

    }
  },
  components: {
    Index,
  },
  mounted() {

  },
  methods: {

  },
}

</script>
<style scoped>
  .space{
      position: absolute;
      top:60px;
      left:110px;
      right:0;
      bottom:0;
  }
  .space .space-title{
      height: 44px;
  }
  .space .space-item{
    height: 44px;
    display: flex;
    text-align: center;
    line-height: 44px;
    font-size: 20px;
    color: red;
    background: lavender;
  }
  .space .space-item .space-item-title{
      padding-right: 10px;
      flex:1;
  }
  .space .space-item .space-item-title i{
      padding-right: 10px;
  }
</style>