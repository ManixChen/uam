<template>
  <section id="login-container">
      <el-row  :gutter="10" id="login-containers">

        <!--  註冊-->
        <el-col  :xs="11"  :md="3"  id="register-wrapper" class="animated flipInY">
          <div class="panel panel-primary">
              <div class="panel-heading">
                  <h3 class="panel-title">
                      注 册
                  </h3>
              </div>
              <div class="panel-body">
                  <p>已有账号?
                      <a href="pages-login.html">
                          <strong>登 录</strong>
                      </a>
                  </p>
                  <form role="form">
                      <div class="form-group">
                          <label for="exampleInputEmail1">用户名</label>
                          <input type="text" class="form-control" id="exampleInputEmail1" placeholder="请输入用户名">
                      </div>
                      <div class="form-group">
                          <label for="exampleInputPassword1">邮箱</label>
                          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="请输入邮箱">
                      </div>
                      <div class="form-group">
                          <label for="exampleInputPassword2">密码</label>
                          <input type="password" class="form-control" id="exampleInputPassword2" placeholder="请输入密码">
                      </div>
                      <div class="form-group">
                          <label for="exampleInputPassword3">确认密码</label>
                          <input type="password" class="form-control" id="exampleInputPassword3" placeholder="请确认密码">
                      </div>

                      <a href="javascript:void(0)" id="sign-up" class="btn btn-primary btn-block">注 册</a>
                  </form>

              </div>
          </div>
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
      register() {
        this.$router.push('/register');
      }
    }
}
</script>


<style scoped type="text/css" lang="scss">
@import "../../../static/css/login/login.scss"; 
#login-container #register #register-wrapper{
  display: block;
}
</style>

<style   >
</style>
