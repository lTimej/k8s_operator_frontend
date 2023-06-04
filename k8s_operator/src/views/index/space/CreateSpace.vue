<template>
    <!-- <div> -->
      <el-dialog :title="templateTitle" :visible.sync="spaceShow">
          <el-form :model="form" ref="form">
          <el-form-item label="工作空间名称" prop="name" :label-width="formLabelWidth" :rules="[{required: true, message: '模板名称不能为空'}]">
              <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="模板类型" prop="kind"  :label-width="formLabelWidth" :rules="[{required: true, message: '模板类型不能为空'}]">
              <el-select v-model="form.kind" placeholder="请选择活动区域">
              <div v-for="(kind,index) in kinds" :key="index"><el-option :label="kind.Name" :value="kind.Id"></el-option></div>
              </el-select>
          </el-form-item>
          <el-form-item label="镜像" prop="image" :label-width="formLabelWidth" :rules="[{required: true, message: '镜像不能为空'}]">
              <el-input v-model="form.image" autocomplete="off" placeholder="镜像名:版本号"></el-input>
          </el-form-item>
          <el-form-item label="标签" prop="tags" :label-width="formLabelWidth" :rules="[{required: true, message: '标签不能为空'}]">
              <el-input v-model="form.tags" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="描述" prop="description" :label-width="formLabelWidth" :rules="[{required: true, message: '模板描述不能为空'}]">
              <el-input v-model="form.description" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="logo" prop="avatar" :label-width="formLabelWidth" :rules="[{required: true, message: '模板logo不能为空'}]">
              <el-input v-model="form.avatar" autocomplete="off" placeholder="xxx.jpg | png"></el-input>
          </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
          <el-button @click="cancel">取 消</el-button>
          <el-button type="primary" @click="createTemplate('form')">确 定</el-button>
          </div>
      </el-dialog>
    <!-- </div> -->
  </template>
  
  <script>
  export default {
    props:{
      dialogFormVisibleSpace:{
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        spaceShow: this.dialogFormVisibleSpace,
        kinds: [],
        form: {
            name: '',
            kind: "",
            image: '',
            tags: '',
            description: "",
            avatar: "",
            index: -1,
          },
        formLabelWidth: '120px',
        templates: [],
        templateTitle: "创建空间模板",
        createORedit: 0,
      }
    },
    components: {
  
    },
    mounted() {
  
    },
    methods: {
      cancel(){
        this.spaceShow = false
        this.showMore = -1;
      },
      createTemplate(form){
          this.$refs[form].validate((valid) => {
            if (valid) {
                  if(this.createORedit == 1){
                      console.log(11111)
                  }else if(this.createORedit == 2){
                      console.log(2222)
                  }
                  this.showMore = -1;
                  this.spaceShow = false
                } else {
                  return false;
                }
          });
      },
    },
  }
  
  </script>
  <style scoped>
  </style>