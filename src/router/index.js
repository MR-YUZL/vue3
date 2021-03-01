import {
    createRouter,
    createWebHistory
} from "vue-router";

const routes = []
const routesFiles = require.context("./", true,
    /^(?!\.\/index).*\.js$/)

routesFiles.keys().forEach(filePath => {
    routes.push(...routesFiles(filePath).default)
})
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
