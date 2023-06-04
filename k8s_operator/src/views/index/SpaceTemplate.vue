<template>
  <div class="space-template">
      <index :resource="resource">
        <div class="space-template-create">
            <el-button type="primary" @click="showCreateTemplate">创建空间模板</el-button>
          </div>
      <div class="space-template-item">
        <div class="template" @click="showCreateSpace" v-for="(template,index) in templates" :key="index">
          <div class="template-img">
            <img :src="bindLogo(template.Avatar)" />
          </div>
          <div class="template-desc">
            <div class="template-title">{{ template.Name  }}</div>
            <div class=template-version>{{ template.Tags  }}</div>
            <div class=template-version>{{ template.Description  }}</div>
          </div>
          <div class="template-edit" @click.stop="show_more(index)">
            <i class="el-icon-more"></i>
            <div class="template-more" v-show="showMore==index" @click.stop>
              <div>
                启动
              </div>
              <div @click="showEditTemplate(index)">
                编辑
              </div>
              <div @click="deleteTemplate(index)">
                删除
              </div>
            </div>
          </div>
        </div>
        <el-dialog :title="templateTitle" :visible.sync="dialogFormVisible" >
          <el-form :model="form" ref="form">
            <el-form-item label="模板名称" prop="name" :label-width="formLabelWidth" :rules="[{required: true, message: '模板名称不能为空'}]">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="模板类型" prop="kind"  :label-width="formLabelWidth" :rules="[{required: true, message: '模板类型不能为空'}]">
              <el-select v-model="form.kind" placeholder="请选择模板类型">
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

        <el-dialog :title="templateTitle" :visible.sync="dialogFormVisibleSpace" >
          <el-form :model="formSpace" ref="formSpace">
            <el-form-item label="空间名称" prop="name" :label-width="formLabelWidth" :rules="[{required: true, message: '空间名称不能为空'}]">
              <el-input v-model="formSpace.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="空间规格" prop="spec"  :label-width="formLabelWidth" :rules="[{required: true, message: '资源规格不能为空'}]">
              <el-select v-model="formSpace.spec" placeholder="请选择资源规格">
                <div v-for="(spec,index) in specs" :key="index"><el-option :label="spec.Name" :value="spec.Id"></el-option></div>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="cancelSpace">取 消</el-button>
            <el-button type="primary" @click="createSpace('formSpace')">确 定</el-button>
          </div>
        </el-dialog>
        <!-- <create-space :dialogFormVisibleSpace="dialogFormVisibleSpace"/> -->
      </div>
      </index>
      
  </div>
</template>

<script>
import Index from "views/index/Index"
import {createSpaceTemplate} from "networks/space/space"
import {getTemplateKind} from "networks/space/space"
import {getSpaceTemplate} from "networks/space/space"
import {editSpaceTemplate} from "networks/space/space"
import {deleteSpaceTemplate} from "networks/space/space"
import {getSpaceSpec} from "networks/space/space"
// import CreateSpace from "views/index/space/CreateSpace"
export default {
  data () {
    return {
      showMore: -1,
      dialogFormVisible: false,
      dialogFormVisibleSpace: false,
      kinds: [],
      specs: [],
      form: {
          name: '',
          kind: "",
          image: '',
          tags: '',
          description: "",
          avatar: "",
          index: -1,
        },
        formSpace:{
          name: "",
          spec: "",
        },
      formLabelWidth: '120px',
      templates: [],
      templateTitle: "创建空间模板",
      createORedit: 0,
      resource: "space_template",
    }
  },
  components: {
    // CreateSpace,
    Index,
  },
  mounted() {
      this.get_template_kind();
      this.get_space_template();
      this.get_spece_spec();
  },
  created(){
    
  },
  methods: {
    bindLogo(logo) {
	return require("@/assets/logos/"+logo);
    },
    show_more(field){
      if(this.showMore == -1 || this.showMore != field){
        this.showMore = field
      }else{
        this.showMore = -1;
      }
    },
    cancel(){
      this.dialogFormVisible = false
      this.showMore = -1;
    },
    cancelSpace(){
      this.dialogFormVisibleSpace = false
    },
    createSpace(formSpace){
      this.$refs[formSpace].validate((valid) => {
          if (valid) {
                this.dialogFormVisibleSpace = false
                console.log("创建工作空间")
              } else {
                return false;
              }
        });
      
    },
    showCreateTemplate(){
        this.templateTitle = "创建空间模板";
        this.createORedit = 1;
        this.dialogFormVisible = true;
        console.log(this.templateTitle,"5555555555");
        this.showMore = -1;
        this.form = {
           name: "",
           kind: "",
           image: "",
           tags: "",
           description: "",
           avatar: "",
           index: -1,
        }
    },
    showCreateSpace(){
      this.templateTitle = "创建工作空间";
        // this.createORedit = 1;
        if(this.showMore == -1){
            this.dialogFormVisibleSpace = true;
        }
        console.log(this.templateTitle,"666666",this.dialogFormVisibleSpace);
        this.showMore = -1;
        this.form = {
           name: "",
           kind: "",
           image: "",
           tags: "",
           description: "",
           avatar: "",
           index: -1,
        }
    },
    createTemplate(form){
        this.$refs[form].validate((valid) => {
          if (valid) {
                if(this.createORedit == 1){
                    createSpaceTemplate(this.form).then(res => {
                      this.templates.push(res.data.data);
                      this.$toast.show(res.data.msg,2000);
                    })
                }else if(this.createORedit == 2){
                    let index = this.form.index;
                    editSpaceTemplate(this.form,this.templates[index].Id).then(res => {
                      if(res.status == 200){
                          this.templates[index].KindId = this.form.kind;
                          this.templates[index].Name = this.form.name;
                          this.templates[index].Description = this.form.description;
                          this.templates[index].Tags = this.form.tags;
                          this.templates[index].Image = this.form.image;
                          this.templates[index].Avatar = this.form.avatar;
                          this.$toast.show(res.data.msg,2000);
                          
                      }
                    }).catch(err => {
                        console.log(err)
                    })
                }
                this.showMore = -1;
                this.dialogFormVisible = false
              } else {
                return false;
              }
        });
    },
    get_template_kind(){
        getTemplateKind().then(res => {
            console.log(res.data);
            this.kinds = res.data.data
        })
    },
    get_space_template(){
        getSpaceTemplate().then(res => {
            this.templates = res.data.data;	    
            console.log(this.templates,"333");
        })
    },
    showEditTemplate(index){
        this.templateTitle = "编辑空间模板";
        this.createORedit = 2;
        this.dialogFormVisible = true;
        this.form = {
           name: this.templates[index].Name,
           kind: this.templates[index].KindId,
           image: this.templates[index].Image,
           tags: this.templates[index].Tags,
           description: this.templates[index].Description,
           avatar: this.templates[index].Avatar,      
           index: index,
        }
    },
    deleteTemplate(index){
       deleteSpaceTemplate(this.templates[index].Id).then(res => {
           this.$toast.show(res.data.msg,2000);
           this.templates.splice(index,1);
       })
       console.log(index) 
    },
    get_spece_spec(){
      getSpaceSpec().then(res =>{
        console.log(res)
        this.specs = res.data.data;
      }).catch(err =>{
        console.log(err)
      })
    }
  },
  activated() {
    console.log("进入模板")
  },
  deactivated() {
    console.log("离开模板")
  },
}

</script>
<style scoped>
  .space-template{
      width: 100%;
  }
  .space-template-create{
    height: 40px;
    position: fixed;
    top: 60px;
    left: 120px;
  }
  .space-template .space-template-item{
    display: flex;
    justify-content: stretch;
    align-items: center;
    flex-wrap: wrap;
    position: absolute;
    top: 120px;
    left: 110px;
  }
  .space-template-item .template{
      background-color: white;
      flex: 0 0 24%;
      height: 200px;
      margin: 0 10px 20px 0;
      border:1px solid lightgray;
      cursor: pointer;
  }
  .space-template-item .template .template-img{
    margin: 60px 0 0 10px;
    float: left;
  }
  .space-template-item .template .template-img img{
    width: 80px;
    height: 60px;   
  }
  .space-template-item .template .template-desc{
    margin: 60px 0 0 5px;
    float: left;
    font-size: 18px;
  }
  .space-template-item .template .template-desc .template-title{
    /* margin: 60px 0 0 20px; */
    /* float: left; */
  }
  .space-template-item .template .template-desc .template-version{
    margin: 3px 0 0 0;
    color: gray;
    font-size: 12px;
  }
  .space-template-item .template .template-edit{
    float: right;
    margin: 0 10px 0 0;
    font-size: 30px;
    color: slategray;
    text-align: center;
  }
  .template-more{
    position: relative;
    bottom: 9px;
    width: 36px;
    background: slategray;
    font-size: 12px;
    text-align: center;
    color: white;
    padding: 5px 0;
  }
  .el-dialog__body {
    padding: 0;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
}
</style>
