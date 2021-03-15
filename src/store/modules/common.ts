const path = require("path");

interface common {
  staticData: any;
}

const common = {
  namespaced: true,
  state: {
    staticData: {},
  },
  mutations: {
    GET_STATIC(state: common) {
      const data: any = {};
      const dataFiles = require.context("@/lang/zh_CN", true, /\.ts$/);

      dataFiles.keys().forEach((fileName: string): void => {
        let name = path.basename(fileName, ".ts");
        data[name] = dataFiles(fileName).default;
      });

      state.staticData = data;
    },
  },
};

export default common;
