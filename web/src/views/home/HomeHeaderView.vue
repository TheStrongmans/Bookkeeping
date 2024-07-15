<template>
    <el-card class="home-header" shadow="none">
        <el-row gutter="2">
        <el-col span="5">
            <span class="explain">本月收入：</span>
            <span class="num income">0.00</span>
        </el-col>
        &nbsp;&nbsp;&nbsp;
        <el-col span="5">
            <span class="explain">本月结余：</span>
            <span class="num">0.00</span>
        </el-col>
        <!-- <el-col :span="5">
            <span class="explain">剩余预算：</span>
            <span class="num">0.00</span>
            <span class="budget-setting">点击设置</span>
        </el-col> -->
        </el-row>
        <br>
        <el-row :gutter="2">
        <el-col span="5">
            <span class="explain">本月支出：</span>
            <span class="num expenditure">0.00</span>
        </el-col>
        </el-row>
    </el-card>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'HomeHeaderView', // 主页
    components: {
    // HelloWorld
    }
}
</script>

<style>
.home-header {
    margin-bottom: 4vh;
}

.home-header .explain {
    font-size: 14px;
    color: #969898;
}

.home-header .num {
    font-size: 18px;
    color: #686868;
}

.home-header .income {
    color: #48AC94;
}

.home-header .expenditure {
    color: #FB6060;
}
</style>
