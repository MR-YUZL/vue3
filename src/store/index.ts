import { createStore } from "vuex";

const path = require("path");
const modules: any = {};
const modulesFiles = require.context("./modules", false, /\.ts$/);

modulesFiles.keys().forEach((fileName: string): void => {
  let name = path.basename(fileName, ".ts");
  modules[name] = modulesFiles(fileName).default;
});

// Create a new store instance.
const store = createStore({
  modules,
});

export default store;
