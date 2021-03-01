export default [{
    name: 'test',
    path: "/test/:id",
    component: () => import("@/views/test"),
    meta: {
        permission: "/test",
    },
}, ];