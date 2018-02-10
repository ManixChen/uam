<template>
  <section id="login-container">
    <el-row  :gutter="10" id="login-containers">
      <el-col :xs="11"  :md="3"  id="login-wrapper" class=" animated flipInY">
        <h3 class="website-title">UAM統一應用管理系统</h3>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ruleForm">
          <div class="panel panel-dark_blue">
              <div class="panel-heading">
                  <h3 class="panel-title">
                      登 录
                  </h3>
              </div>
              <div class="panel-body">
                  <p>输入您的账号</p>
                  <div class="form-group">
                    <el-form-item prop="username">
                        <el-input v-model="ruleForm.username" placeholder="username"></el-input>
                    </el-form-item>
                      <i class="fa fa-user"></i>
                  </div>
                  <div class="form-group">
                    <el-form-item prop="password">
                        <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                    </el-form-item>
                      <i class="fa fa-lock"></i>
                  </div>

                  <div class="form-group">
                      <a id="signIn"  class="btn btn-dark-blue btn-block" @click="submitForm('ruleForm')">登 录</a>
                      <hr />
                      <a  class="btn btn-default btn-block">刷新</a>
                      <a v-if="download"  class="btn btn-default btn-block">下载App</a>
                      <a @click="register()"  class="btn btn-default btn-block">没有账号？注册</a>

                  </div>
              </div>
          </div>
          </el-form>
      </el-col>
    </el-row>
</section>


</template>

<script>
export default {
    data: function(){
        return {
            download: false,
            ruleForm: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        submitForm(formName) {
            const self = this;
            self.$refs[formName].validate((valid) => {
                if (valid) {
                    localStorage.setItem('ms_username', self.ruleForm.username);
                      self.$router.push('/main');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        register(){
            const self = this;
            self.$router.push('/register');
        }
    }
}
</script>

<style scoped  rel="stylesheet/scss" lang="scss">
    @import "../../../static/css/login/login.scss";
</style>
