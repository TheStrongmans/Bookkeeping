<template>
  <div class="home"  v-infinite-scroll="load">
    <HomeHeaderView />

    <el-button class="add-bookkeeping" type="primary" size="large" color="#48AC94" >添加一条记账</el-button>

    <HomeDayBookkeepingView v-for="i in count" :key="i" />
  </div>
</template>

<script>
import { ref } from 'vue'
import HomeHeaderView from './HomeHeaderView.vue'
import HomeDayBookkeepingView from './HomeDayBookkeepingView.vue'

export default {
  name: 'HomeView', // 主页
  components: {
    HomeHeaderView,
    HomeDayBookkeepingView,
  },
  setup() {
    let count = ref(0);


    const load = () => {
      count.value ++;
    }

    return {
      count,
      load,
    }
  }
}
</script>

<style>

.add-bookkeeping {
  width: 100%;
  font-size: 30px;
  font-weight: 600 !important;
  color: #fff !important;
  letter-spacing: 2px;
  font-size: 18px !important;
  margin-bottom: 3vh;
}
</style>
