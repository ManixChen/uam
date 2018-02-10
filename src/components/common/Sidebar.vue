<template>
    <div class="sidebar full_height scrollY">
        <el-menu :default-active="1" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: 'main',
                        title: '首页'
                    },
                    {
                        icon: 'el-icon-zoom-out',
                        index: '2',
                        title: '用户管理',
                        subs: [
                            {
                                index: 'manageuser',
                                title: '用户管理'
                            },
                            {
                                index: 'userpower',
                                title: '权限配置'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-zoom-out',
                        index: '3',
                        title: '应用管理',
                        subs: [
                            {
                                index: 'apppc',
                                title: '虚拟应用'
                            },
                            {
                                index: 'app',
                                title: '原生应用'
                            },
                            {
                                index: 'apppush',
                                title: '应用推送'
                            },
                            {
                                index: 'appcontrol',
                                title: '控制台'
                            },
                            {
                                index: 'appstrage',
                                title: '策略管理'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-zoom-out',
                        index: '4',
                        title: '终端管理',
                        subs: [
                            {
                                index: 'device',
                                title: '设备注册'
                            },
                            {
                                index: 'terminal',
                                title: '终端管理'
                            },
                            {
                                index: 'track',
                                title: '终端追踪'
                            },
                            {
                                index: 'termnlogs',
                                title: '终端日志'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-zoom-out',
                        index: '5',
                        title: '主机配置',
                        subs: [
                            {
                                index: 'apphost',
                                title: '应用下载主机'
                            },
                            {
                                index: 'pchost',
                                title: '虚拟主机管理'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-zoom-out',
                        index: '6',
                        title: '系统设置',
                        subs: [
                            {
                                index: 'adminset',
                                title: '管理员设置'
                            },
                            {
                                index: 'dbset',
                                title: '数据库设置'
                            },
                            {
                                index: 'aboutuam',
                                title: '关于'
                            }
                        ]
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/', '');
            }
        }
    }
</script>

<style scoped>
.sidebar{
    display: block;
    position: absolute;
    width: 220px;
    left: 0;
    top: 60px;
    bottom:0;
    background: #2E363F;
  }
.sidebar > ul {
    height:100%;
  }
</style>
