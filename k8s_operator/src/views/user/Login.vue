<template>
    <div class="login">
      <div class="login-item">
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="用户名" prop="username">
                  <el-input v-model="ruleForm.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                  <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                  <el-button @click="register">注册</el-button>
              </el-form-item>
          </el-form>
      </div>
    </div>
  </template>
  
  <script>
  import { login } from '@/networks/user/user';
  import {Base64} from "js-base64"
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
        return {
          ruleForm: {
            password: '',
            username: ''
          },
          rules: {
              username: [
              { validator: checkUsername, trigger: 'blur',required: true }
            ],
            pass: [
              { validator: validatePass, trigger: 'blur',required: true }
            ],
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
              login(this.ruleForm).then(res =>{
                console.log(res)
                if(res.status == 200){
                    if(res.data.code != 2){
                        this.$toast.show(res.data.msg,2000)
                    }else{
                        this.$toast.show(res.data.msg,2000)
                        const jsonData = JSON.stringify(res.data.data) 
                        const encodedData = Base64.encode(jsonData)
                        window.sessionStorage.setItem("userInfo",encodedData)
                        window.sessionStorage.setItem("token",res.data.data.Token)
                        this.$router.push("/")
                    }
                }
              })
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        register() {
          this.$router.push("/register")
        }
      },
  }
  
  </script>
  <style scoped >
      .login{
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
      .login .login-item{
          text-align: center;
          position: absolute;
          top: 30%;
          left: 35%;
          border: 1px solid rgba(255,200,200,0.6);
          padding-right: 40px;
          padding-top: 30px;
          height: 200px;
          background-color: rgba(255,200,200,0.3);
      }
  </style>