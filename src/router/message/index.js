export default [{
    name: 'message',
    path: "/",
    component: () => import("@/views/message"),
    meta: {
        permission: "/message",
    },
}, ];