<template>
    <el-card class="user-function" shadow="none">
        <el-row  justify="space-between">
            <el-col span="4">
                <el-icon size="24"><Menu /></el-icon>
                <p>分类管理</p>
            </el-col>
        </el-row>
    </el-card>

</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'UserFunctionView', // 用户头部
    components: {
        
    }
}
</script>

<style>
.user-function {
    margin-top: 3vh;
    text-align: center;
}

.user-function p {
    margin: 0;
}
</style>
