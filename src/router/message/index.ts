export default [{
    name: 'message',
    path: "/",
    component: () => import("@/views/message/index.vue"),
    meta: {
        permission: "/message",
    },
}, ];