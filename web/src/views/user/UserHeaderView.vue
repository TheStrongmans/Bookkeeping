<template>
    <el-card class="user-header" shadow="none">
        <div class="user-info">
            <el-avatar :size="50"   src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
            <p class="username">早睡早起</p>
        </div>
    </el-card>

</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'UserHeaderView', // 用户头部
    components: {
        
    }
}
</script>

<style>
.user-header {
    text-align: center;
    
}

.user-info {
}

.username {
}
</style>
