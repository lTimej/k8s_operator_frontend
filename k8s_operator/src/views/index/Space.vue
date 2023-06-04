<template>
    <index :resource="resource">
        <div class="space">
            <div class="space-title">工作空间:</div>
            <el-table
                :data="tableData"
                style="width: 100%"
                :row-class-name="tableRowClassName">
                <el-table-column
                prop="name"
                label="空间名称"
                min-width="180"
                >
                </el-table-column>
                <el-table-column
                prop="template"
                label="模板"
                min-width="180"
                >
                </el-table-column>
                <el-table-column
                prop="spec"
                label="规格"
                min-width="180"
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
                    <div :class="{run:isRun==0}">
                      <i class="el-icon-view" ></i>
                    </div>
                </el-table-column>
                <el-table-column
                prop="option"
                label="操作"
                min-width="180"
                >
                    <i class="el-icon-video-play start" @click="startSpace"></i>
                    <i class="el-icon-video-pause stop" @click="stopSpace"></i>
                    <i class="el-icon-delete del" @click="delSpace"></i>
                </el-table-column>
            </el-table>
        </div>
    </index>
</template>

<script>
import Index from "views/index/Index"
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
        console.log(row)
        return '';
      },
      startSpace() {
        this.$confirm('是否启动该工作空间?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '启动成功!'
          })
          this.isRun = 1;
          console.log(this.isRun,"4444444")
        }).catch(() => {
                   
        });
      },
      stopSpace() {
        this.$confirm('是否停止该工作空间?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.isRun = 0;
          console.log(this.isRun,"1111")
          this.$message({
            type: 'success',
            message: '停止成功!'
          });
          console.log(this.isRun,"22222")
          
        }).catch(() => {
          console.log(this.isRun,"3333")  
        });
      },
      delSpace() {
        this.$confirm('是否删除该工作空间?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
                   
        });
      },
  },
  activated() {
    console.log("进入空间")
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