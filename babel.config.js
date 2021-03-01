module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    // 按需加载
    [
      "import",
      {
        libraryName: "ant-design-vue",
        libraryDirectory: "lib",
        style: "css"
      }
    ]
  ]
}