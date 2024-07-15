<template>
    <el-container class="el-container" style="height: 100%;">
      <el-aside class="el-aside" width="100px">
        <NavView />
      </el-aside>
      <el-container>
        <el-main class="el-main">
          <router-view/>
        </el-main>

        <el-footer class="el-footer">
          <NavView />
        </el-footer>
      </el-container>
    </el-container>
</template>

<script>
import NavView from './components/NavView.vue';

export default {
  name: "App",
  components: {
    NavView,
  }
}
</script>

<style>

body {
  width: 100vw;
  height: 100vh;
  margin: 0;
}

#body {
  width: 100vw;
  height: 100vh;
  margin: 0;
}

.el-main {
  background-color: #F2F2F2;
  padding: 2vh;
  box-sizing: border-box;
}

.el-footer {
  display: none;
}

@media(max-width:720px){
  
  .el-container {

  }

  .el-aside {
    display: none;
  }

  .el-main {
    height: calc(100% - 10vh);
    box-sizing: border-box;
    overflow: hidden;
  }

  .el-footer {
    display: block;
    height:10vh !important;
    box-sizing: border-box;
  }

}
</style>
