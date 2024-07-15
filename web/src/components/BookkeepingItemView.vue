<template>
    <el-card class="bookkeeping-item" shadow="none">
        <el-row  justify="space-between">
            <el-col span="12">
                <span class="icon"><el-icon><Bowl /></el-icon></span>
                &nbsp;
                <span class="name">0.00</span>
            </el-col>
            <el-col span="12">
                <span class="income" v-if="false">-1000</span>
                <span class="expenditure">+1000</span>
            </el-col>
        </el-row>
    </el-card>
</template>

<script>

export default {
    name: "BookkeepingItemView"
}
</script>


<style>
.bookkeeping-item {
    margin-top: 2vh;
}
</style>