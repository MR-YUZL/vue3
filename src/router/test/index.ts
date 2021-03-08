export default [{
    name: 'test',
    path: "/test/:id",
    component: () => import("@/views/test/index.vue"),
    meta: {
        permission: "/test",
    },
}, ];