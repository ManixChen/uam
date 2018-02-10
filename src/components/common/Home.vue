 <template>
    <el-container class="wrapper full_height">
        <v-head></v-head>
        <div class="main-container full_height">
           <el-aside width="220px" class="scrollY">
             <v-sidebar></v-sidebar>
           </el-aside>
           <el-container class="scrollY">
              <!-- class="content" -->
            <el-main>
                <transition name="move" mode="out-in"><router-view></router-view></transition>
            </el-main>
            <el-footer height="30px">
              <v-footer></v-footer>
            </el-footer>
          </el-container>
        </div>
    </el-container>
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    import vFooter from './Footer.vue';
    export default {
        components:{
            vHead, vSidebar, vFooter
        }
    }
</script>
