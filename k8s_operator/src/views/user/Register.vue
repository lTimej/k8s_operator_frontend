<template>
    <div class="register">
      <div class="register-item">
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="用户名" prop="username">
                  <el-input v-model="ruleForm.username"></el-input>
              </el-form-item>
              <el-form-item label="昵称" prop="nickname">
                  <el-input v-model="ruleForm.nickname"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                  <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="re_password">
                  <el-input type="password" v-model="ruleForm.re_password" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item
                    prop="email"
                    label="邮箱"
                    :rules="[
                    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                    ]"
                >
                    <el-input v-model="ruleForm.email"></el-input>
                </el-form-item>
              <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
                  <el-button @click="back">返回登陆</el-button>
              </el-form-item>
          </el-form>
      </div>
    </div>
  </template>
  
  <script>
  import { register } from '@/networks/user/user';
  export default {
      data() {
        var checkUsername = (rule, value, callback) => {
          if (!value) {
            return callback(new Error('用户名不能为空'));
          }
          setTimeout(() => {
            if (value.length < 4) {
              callback(new Error('用户名长度不低于4位'));
            } else if(value.length > 8) {
                callback(new Error('用户名长度不高于8位'));
            }else{
              callback()
            }
          }, 1000);
        };
        var checkNickname = (rule, value, callback) => {
        //   if (!value) {
        //     return callback(new Error('用户名不能为空'));
        //   }
          setTimeout(() => {
            if(value != ''){
                if (value.length < 2) {
                callback(new Error('昵称长度不低于2位'));
                } else if(value.length > 8) {
                    callback(new Error('昵称长度不高于8位'));
                }else{
                callback()
                }
            }else{
                callback();
            } 
          }, 1000);
        };
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.ruleForm.checkPass !== '') {
              this.$refs.ruleForm.validateField('checkPass');
            }
            callback();
          }
        };
        var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.ruleForm.password) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        };
        return {
          ruleForm: {
            password: '',
            re_password: '',
            username: '',
            nickname: '',
            email: '',
          },
          rules: {
            password: [
              { validator: validatePass, trigger: 'blur',required: true }
            ],
            re_password: [
              { validator: validatePass2, trigger: 'blur' ,required: true}
            ],
            username: [
              { validator: checkUsername, trigger: 'blur',required: true }
            ],
            nickname: [
              { validator: checkNickname, trigger: 'blur' }
            ]
          }
        };
      },
    components: {
  
    },
    mounted() {
  
    },
    methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              register(this.ruleForm).then(res => {
                if(res.status == 200){
                    if(res.data.code != 25){
                        this.$toast.show(res.data.msg,2000);
                    }else{
                        this.$toast.show(res.data.msg,2000);
                        this.$router.push("/login")
                    }
                }
                console.log(res,"==========")
              }).catch(err => {
                console.log(err,"-------")
              })

            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        back() {
          this.$router.back();
        }
      },
  }
  
  </script>
  <style scoped >
      .register{
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-size: cover;
          background-repeat: no-repeat;
          background-image: url('assets/backgroud/keji.png');
          
      }
      .register .register-item{
        text-align: center;
        position: absolute;
        top: 20%;
        left: 35%;
        border: 1px solid rgba(255,200,200,0.6);
        padding-right: 40px;
        padding-top: 30px;
        height: 375px;
        background-color: rgba(255,200,200,0.3);
      }
  </style>