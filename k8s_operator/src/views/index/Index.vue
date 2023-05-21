<template>
  <div class="home">
    <div class="home-head">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark" >
            <div class="logout" @click="logout">
              <i class="el-icon-switch-button"></i>
              <span>登出</span>
            </div>
            <div class="user-info">
              <div class="user-tx"><img src="~assets/img/tx.jpg"/></div>
              <div class="user-info-name">谢勇</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-container>
        <el-container>
          <el-aside width="100px">
            <div class="my-resource" @click="toMyResource" :class="{active: resource=='my_resource'}">
              <i class="el-icon-stopwatch"></i>
              <span>我的资源</span>
            </div>
            <div class="space-template" @click="toSpaceTemplate" :class="{active: resource=='space_template'}">
              <i class="el-icon-document-copy"></i>
              <span>空间模板</span>
            </div>
          </el-aside>
          <my-resource v-show="resource == 'my_resource'" />
          <space-template v-show="resource == 'space_template'"/>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
import MyResource from "views/index/MyResource"
import SpaceTemplate from "views/index/SpaceTemplate"
export default {
  name: "Index",
  data() {
    return {
      resource: "my_resource",
    }
  },
  components: {
    MyResource,
    SpaceTemplate,
  },
  mounted() {

  },
  methods: {
    logout(){
      this.$router.push("/login")
    },
    toMyResource(){
      this.resource = "my_resource";
      console.log(this.resource)
    },
    toSpaceTemplate(){
      this.resource = "space_template";
    }
  },
}

</script>
<style scoped>
  .el-row {
    margin-bottom: 20px;
  }
  .el-row:last-child{
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
  .home-head{
    height: 44px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom:0;
    z-index: 2;
  }
  .grid-content{
    height: 44px;
    width: 100%;
    position: absolute;
    top: 0;
    line-height: 44px;
    color: white  ;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .home .user-info{
    float:right;
    margin: 0 10px;
    text-align: center;
  }
  .home .user-info img{
    width: 28px;
    height: 28px;
    border-radius: 100%;
  }
  .home .user-info .user-tx{
    float: left;
    margin: 8px 5px;
  }
  .home .user-info .user-info-name{
   float: right;
  }
  .home .logout{
    float: right;
    margin: 0 10px;
    cursor: pointer;
  }
  .home .logout i{
    color: red;
    padding-right: 5px;
    font-size: 20px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    /* line-height: 200px; */
    position: absolute;
    top: 0;
    height: 100%;
    padding: 0;
    left:0;
    z-index: 1;
  }
  .home .my-resource{
    margin-top: 44px;
  }
  .home .my-resource,.home .space-template{
    color: black;
    padding: 10px 5px;
    cursor: pointer;
  }
  .home .my-resource i,.home .space-template i{
    font-size: 22px;
    color: black;
    padding-right: 3px;
  }
  .active, .active i{
    color: orange !important;
  }
</style>