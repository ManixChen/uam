import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          redirect: '/login'
      },
      {
          path: '/main',
          component: resolve => require(['../components/common/Home.vue'], resolve),
          children:[
              {
                  path: '/',
                  component: resolve => require(['../components/pages/Main.vue'], resolve)
              },
              //  用户管理
              {
                  path: '/manageuser',
                  component: resolve => require(['../components/pages/user/User.vue'], resolve)
              },
              {
                  path: '/userpower',
                  component: resolve => require(['../components/pages/user/UserPower.vue'], resolve)
              },
              //  应用管理
              {
                  path: '/app',
                  component: resolve => require(['../components/pages/yygl/App.vue'], resolve)  //原生应用
              },
              {
                  path: '/apppc',
                  component: resolve => require(['../components/pages/yygl/AppPc.vue'], resolve)  //虚拟应用
              },
              {
                  path: '/apppush',
                  component: resolve => require(['../components/pages/yygl/AppPush.vue'], resolve)  //应用推送
              },
              {
                  path: '/appcontrol',
                  component: resolve => require(['../components/pages/yygl/AppControl.vue'], resolve)  //控制台
              },
              {
                  path: '/appstrage',
                  component: resolve => require(['../components/pages/yygl/AppStrage.vue'], resolve)  //虚拟应用策略管理
              },
              {
                  path: '/apphost',
                  component: resolve => require(['../components/pages/yygl/AppHost.vue'], resolve)  //应用下载主机
              },
              {
                  path: '/pchost',
                  component: resolve => require(['../components/pages/yygl/AppPcHost.vue'], resolve)  //虚拟应用主机
              },
              //终端管理
              {
                  path: '/terminal',
                  component: resolve => require(['../components/pages/zdgl/Terminal.vue'], resolve)  //终端管理
              },
              {
                  path: '/device',
                  component: resolve => require(['../components/pages/zdgl/Device.vue'], resolve)  //设备注册
              },
              {
                  path: '/track',
                  component: resolve => require(['../components/pages/zdgl/TrackTerminal.vue'], resolve)  //追踪终端
              },
              {
                  path: '/termnlogs',
                  component: resolve => require(['../components/pages/zdgl/TerminalLog.vue'], resolve)  //终端日志
              },
              //系统设置
              {
                  path: '/adminset',
                  component: resolve => require(['../components/pages/admin/AdminSetting.vue'], resolve)  //管理员设置
              },
              {
                  path: '/dbset',
                  component: resolve => require(['../components/pages/admin/DbSetting.vue'], resolve)  //数据库设置
              },
              {
                  path: '/aboutuam',
                  component: resolve => require(['../components/pages/admin/AboutUam.vue'], resolve)  //关于
              },


          ]
      },
      {
          path: '/login',
          component: resolve => require(['../components/pages/Login.vue'], resolve)
      },
      {
          path: '/register',
          component: resolve => require(['../components/pages/Register.vue'], resolve)
      },
  ]
})
