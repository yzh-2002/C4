import {createRouter,createWebHistory,RouteRecordRaw} from "vue-router"

const routes:Array<RouteRecordRaw> =[
    {
        path:"/",
        redirect:"/login"
    },
    {
        path:"/login",
        component:()=>import("@/views/Login.vue"),
        name:"login"
    },
    {
        path:"/dashboard",
        component:()=>import("@/views/dashboard/Dashboard.vue"),
        name:"dashboard"
    },
    // 网络管理路由
    // {
    //     path:"/netmanage",
    //     component:()=>import("@/views/netmanage/NetList.vue"),
    //     name:"netmanage"
    // },
    {
        path:"/netlist",
        component:()=>import("@/views/netmanage/NetList.vue"),
        name:"netlist"
    },
    {
        path:"/netlist",
        component:()=>import("@/views/netmanage/NetList.vue"),
        name:"netlist"
    },
    {
        path:"/netcreate",
        component:()=>import("@/views/netmanage/NetCreate.vue"),
        name:"netcreate"
    },
    // 设备管理路由
    {
        path:"/switchlist",
        component:()=>import("@/views/devicemanage/SwitchList.vue"),
        name:"switchlist"
    },
    {
        path:"/hostlist",
        component:()=>import("@/views/devicemanage/HostList.vue"),
        name:"hostlist"
    },
    {
        path:"/linklist",
        component:()=>import("@/views/devicemanage/LinkList.vue"),
        name:"linklist"
    },
    {
        path:"/delayinfo",
        component:()=>import("@/views/datamonitor/DelayInfo.vue"),
        name:"delayinfo"
    }
]


const router =createRouter({
    history:createWebHistory(),
    routes
})

export default router;