<template>
    <index :resource="resource">
        <div class="space">
            <div class="space-title">工作空间:</div>
            <el-table
                :data="spaces"
                style="width: 100%"
                :row-class-name="tableRowClassName">
                <el-table-column
                prop="Name"
                label="空间名称"
                min-width="180"
                >
                </el-table-column>
                <el-table-column
                prop="templates[TemplateId]"
                label="模板"
                min-width="180"
                :formatter="FormatterTemplate"
                >
                </el-table-column>
                <el-table-column
                prop="SpecId"
                label="规格"
                min-width="180"
                :formatter="FormatterSpec"
                >
                </el-table-column>
                <el-table-column
                prop="description"
                label="描述"
                min-width="180"
                >
                </el-table-column>
                <el-table-column
                prop="status"
                label="状态"
                min-width="180"
                >
                  <template slot-scope="scope">
                    <div :class="{run:scope.row.RunningStatus == 0}">
                      <i class="el-icon-view" ></i>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column
                prop="option"
                label="操作"
                min-width="180"
                >
                  <template slot-scope="scope">
                    <i class="el-icon-video-play start" @click="startSpace(scope.$index)"></i>
                    <i class="el-icon-video-pause stop" @click="stopSpace(scope.$index)"></i>
                    <i class="el-icon-delete del" @click="delSpace(scope.$index)"></i>
                 </template>
                </el-table-column>
            </el-table>
        </div>
    </index>
</template>

<script>
import Index from "views/index/Index"
import {getSpace} from "networks/space/space"
import {getSpaceTemplate} from "networks/space/space"
import {getSpaceSpec} from "networks/space/space"
import {stopSpace} from "networks/space/space"
import {startSpace} from "networks/space/space"
import {delSpace} from "networks/space/space"
export default {
  data () {
    return {
        tableData: [{
          name: '哈哈哈',
          template: 'Python',
          spec: '4C 2G 20G',
          description: "sfsd",

        }],
        resource: "space",
        isRun: 0,
        spaces: [],
        templates: {},
        specs: {},
    }
  },
  components: {
    Index,
  },
  mounted() {

  },
  methods: {
    tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        console.log(row);
        return '';
      },
      get_space(){
          getSpace().then(res => {
             this.spaces = res.data.data;
          })
      },
      startSpace(index) {
        this.$confirm('是否启动该工作空间?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async() => {
          var msg = ""
          await startSpace(this.spaces[index].Id).then(res => {
              this.spaces[index].RunningStatus = 1;
              msg = res.data.msg;
          }).catch(err => {
              console.log(err);
          })
          this.$message({
            type: 'success',
            message: msg
          })
        }).catch(() => {
                   
        });
      },
      stopSpace(index) {
        this.$confirm('是否停止该工作空间?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async() => {
          this.isRun = 0;
          var msg = "";
          await stopSpace(this.spaces[index].Id,this.spaces[index].Sid).then(res => {
              this.spaces[index].RunningStatus = 0;
              msg = res.data.msg;
          }).catch(err => {
             console.log(err);
          })
          this.$message({
            type: 'success',
            message: msg
          });
          
        }).catch(() => {
          console.log(this.isRun,"3333")  
        });
      },
      delSpace(index) {
        this.$confirm('是否删除该工作空间?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async() => {
          var msg = ""
          await delSpace(this.spaces[index].Id).then(res => {
              msg = res.data.msg;
          }).catch(err => {
              console.log(err);
          })
          this.spaces.slice(index,1);
          this.$message({
            type: 'success',
            message: msg
          });
        }).catch(() => {
                   
        });
      },
      get_space_template(){
        getSpaceTemplate().then(res => {
            let ret = res.data.data;
            for(var i = 0;i < ret.length;i++){
                this.templates[ret[i].Id] = ret[i].Name;
            }
            console.log(this.templates,"333");
        })
      },
      FormatterTemplate(row, column){
         console.log(column);
         return this.templates[row.TemplateId];
      },
      get_space_spec(){
          getSpaceSpec().then(res =>{
              let ret = res.data.data;
              for(var i = 0;i < ret.length;i++){
                  this.specs[ret[i].Id] = ret[i].Name;
              }
          }).catch(err =>{
            console.log(err)
          })
      },
      FormatterSpec(row, column){
         console.log(column);
         return this.specs[row.SpecId];
      },
  },
  activated() {
    console.log("进入空间")
    this.get_space_template();
    this.get_space();
    this.get_space_spec();
  },
  deactivated() {
    console.log("离开空间")
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
      /* background-color: rgba(125,125,125,0.1); */
      display: inline-block;
      line-height: 44px;
      color: black;
      padding: 0 5px;
  }
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .el-table i{
    padding-right: 5px;
    font-size: 20px;
    cursor: pointer;
  }
  .el-table .start{
    color: blue;
  }
  .el-table .stop{
    color: green;
  }
  .el-table .del{
    color: red;
  }
  .run{
    color: lightgrey;
  }
</style>
