import {
    createRouter,
    createWebHistory
} from "vue-router";

const routes: Array<any> = []
const routesFiles = require.context("./", true,
    /^(?!\.\/index).*\.ts$/)

routesFiles.keys().forEach(filePath => {
    routes.push(...routesFiles(filePath).default)
})
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
