<template>
    <div class="navs">
        <router-link :class="'navs-link ' + (router_name === 'home' ? 'navs-link-active' : '')" :to="{name: 'home'}">
            <el-icon><HomeFilled /></el-icon>
            <span>主页</span>
        </router-link>
        <router-link :class="'navs-link ' + (router_name === 'calendar' ? 'navs-link-active' : '')" :to="{name: 'calendar'}">
            <el-icon><Grid /></el-icon>
            <span>日历</span>
        </router-link>
        <router-link :class="'navs-link ' + (router_name === 'statistics' ? 'navs-link-active' : '')" :to="{name: 'statistics'}">
            <el-icon><Histogram /></el-icon>
            <span>统计</span>
        </router-link>
        <router-link :class="'navs-link ' + (router_name === 'user' ? 'navs-link-active' : '')" :to="{name: 'user'}">
            <el-icon><Avatar /></el-icon>
            <span>我的</span>
        </router-link>


        <div class="Line"></div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router'

export default {
    name: "NavView",
    setup() {
        const router1 = useRoute();
        const router_name = computed(() => router1.name);


        return {
            router_name,
        }
    }
}
</script>


<style>
.navs {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 10vh 0;
    box-sizing: border-box;
}

.navs-link {
    width: 100%;
    height: 8vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: #000;
    text-decoration: none;
}

.navs-link > * {
    width: 100%;
    text-align: center;
}

.navs-link-active {
    color: #48AC94;
}

.Line{
    position: absolute;
    right: 0;
    top: 0;
    width:2px;
    height:100%;
    background:linear-gradient(244deg,rgba(0,0,0,0) 0%,rgba(72,172,148,1) 50%,rgba(255,255,255,0) 100%);
}

@media(max-width:720px){
  
    .navs {
        position: relative;
        width: 100%;
        height: 10vh;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        padding: 1vh 0;
        box-sizing: border-box;
    }

    .navs-link {
        padding-top: 1vh
    }

    .Line{
    position: absolute;
    right: 0;
    top: 0;
    width:100%;
    height:1px;
    background:linear-gradient(244deg,rgba(0,0,0,0) 0%,rgba(72,172,148,1) 50%,rgba(255,255,255,0) 100%);
}

}
</style>
  