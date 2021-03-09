<template>
  <ConfigProvider>
    <router-view></router-view>
  </ConfigProvider>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { ConfigProvider } from "ant-design-vue";

@Options({
  components: {
    ConfigProvider,
  },
})
export default class App extends Vue {}
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
}
</style>
