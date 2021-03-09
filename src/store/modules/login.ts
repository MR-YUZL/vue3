const path = require("path");

interface login {
  staticData: any;
}

const login = {
  namespaced: true,
  state: {
    staticData: {},
  },
  mutations: {
    GET_STATIC({ staticData }: login) {
      const data: any = {};
      const dataFiles = require.context("@/lang/zh_CN", false, /\.ts$/);

      dataFiles.keys().forEach((fileName: string): void => {
        let name = path.basename(fileName, ".ts");
        data[name] = dataFiles(fileName).default;
      });

      staticData = data;
    },
  },
};

export default login;
