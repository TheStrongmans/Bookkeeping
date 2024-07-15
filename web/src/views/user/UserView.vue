<template>
    <div class="user">
        <UserHeaderView />

        <UserFunctionView />
        
        <el-button class="logout" type="danger">退出登录</el-button>
    </div>
</template>

<script>
import UserHeaderView from './UserHeaderView.vue'
import UserFunctionView from './UserFunctionView.vue';

export default {
    name: 'UserView', // 用户 / 我的
    components: {
        UserHeaderView,
        UserFunctionView,
    }
}
</script>

<style>
.logout {
    width: 100%;
    margin-top: 4vh;
}
</style>
  