<template>
    <div class="header nav_color">
        <div class="navbar-brand">UAM应用虚拟化管理平台</div>
        <span class="margin_left10 cursor el-icon-menu hidden-xs-only"></span>
        <div class="user-info">
            <span class="index">首页</span>
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" src="../../../static/img/logo.png">
                    {{username}}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="loginout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

            <span class="margin_left10 cursor el-icon-menu visible-xs"></span>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name: 'linxin'
            }
        },
        computed:{
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        },
        methods:{
            handleCommand(command) {
                if(command == 'loginout'){
                    localStorage.removeItem('ms_username')
                    this.$router.push('/login');
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    // @import "../../../static/css/header.scss";
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 60px;
        font-size: 15px;
        line-height: 60px;
        padding:0 15px;
        color: #fff;
        .navbar-brand{
            float: left;
            width:auto;
            text-align: center;
        }
    }
    .user-info {
        float: right;
        padding-right: 30px;
        font-size: 15px;
        color: #fff;
        .el-dropdown-link{
           position: relative;
           display: inline-block;
           padding-left: 50px;
           color: #fff;
           cursor: pointer;
           vertical-align: middle;
       }
       .user-logo{
           position: absolute;
           left:0;
           top:15px;
           width:30px;
           border-radius: 50%;
           vertical-align: middle;
           margin: -5px 10px 0 10px;
       }
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>
