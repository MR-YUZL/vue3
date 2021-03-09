import {
  createRouter,
  // createWebHistory
  createWebHashHistory,
} from "vue-router";

const routes: Array<any> = [];
const routesFiles = require.context("./", true, /^(?!\.\/index).*\.ts$/);

routesFiles.keys().forEach((filePath) => {
  routes.push(...routesFiles(filePath).default);
});
const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
});

export default router;
