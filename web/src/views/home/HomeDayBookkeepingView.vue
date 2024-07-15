<template>
    <el-row class="header" justify="space-between">
        <el-col span="12">
            <span class="date">
                今天
            </span>&nbsp;&nbsp;
            <span class="week">
                周一
            </span>
        </el-col>
        <el-col span="12">
            <span class="money">
                收&nbsp;<span class="income">0.00</span>
            </span>
            &nbsp;&nbsp;
            <span class="money">
                支&nbsp;<span class="expenditure">0.00</span>
            </span>
        </el-col>
    </el-row>

    <BookkeepingItemView />
    <BookkeepingItemView />
    <BookkeepingItemView />
</template>

<script>
import BookkeepingItemView from '@/components/BookkeepingItemView.vue'

export default {
    name: 'HomeDayBookkeepingView', // 主页
    components: {
        BookkeepingItemView,
    }
}
</script>

<style>

.header {
    margin-top: 3vh;
}

.date {
    font-weight: 600;
}

.week,
.money {
    color: #686868;
}

.income {
    color: #48AC94;
}

.expenditure {
    color: #FB6060;
}

.income > span {
    color: #48AC94;
}

.expenditure > span {
    color: #FB6060;
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
