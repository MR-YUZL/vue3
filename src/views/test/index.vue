<template>
  <div style="height: 150vh" class="test">
    <h1>{{ msg }}</h1>
    <h1>{{ $route.params.id }}</h1>
    <input type="text" v-model="searchQuery" />

    <h1>{{ str1 }}</h1>
    <HelloWorld :msg="msg" v-model:str="str1"></HelloWorld>
    <TableList :list="repositories" :headList="headList"></TableList>
    <a-button @click="onClick">跳转</a-button>

    <div class="g-container">
      <div class="g-real-box">
        <p class="g-real-p">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
      </div>
      <div class="g-footer"></div>
    </div>
  </div>
</template>
<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import TableList from "@/components/TableList.vue";
import filterList from "./hooks/filterList";
import getList from "./hooks/getList";
import { watch, onUpdated, reactive, provide, toRefs } from "vue";

const state = reactive({
  count: 0,
});

export default {
  name: "test",
  components: { HelloWorld, TableList },
  props: {
    typer: {
      type: Number,
      default: 1,
    },
  },
  setup(props) {
    const { typer } = toRefs(props); //为了解构时保持数据的响应性

    const { repositories, getUserRepositories } = getList({ typer });

    const { searchQuery, repositoriesMatchingSearchQuery } = filterList(
      repositories
    );

    // provide(
    //   "repositoriesMatchingSearchQuery",
    //   readonly(repositoriesMatchingSearchQuery)
    // );

    watch(repositoriesMatchingSearchQuery, (val, olVal) => {
      console.log("val,olVal", val, olVal);
    });

    onUpdated(() => {
      console.log("repositories", repositories);
      provide("repositories", repositories); //提供注入均为同步函数
    });

    return {
      repositories: repositoriesMatchingSearchQuery,
      getUserRepositories,
      searchQuery,
    };
  },
  data() {
    return {
      str1: "",
      msg: "Hello world!",
      headList: ["姓名", "电话"],
    };
  },
  watch: {
    str1(val: string) {
      console.log("val", val);
    },
  },
  created() {},
  mounted() {
    state.count++;
    console.log("state.count", state.count);
    console.log("route", this.$route);
  },
  methods: {
    onClick(): void {
      let router: any = this.$router;
      router.push("/");
    },
  },
};
</script>
<style lang="less" scoped>
.test {
  font-family: "PingFang SC", miui, system-ui, -apple-system, BlinkMacSystemFont,
    Helvetica Neue, Helvetica, sans-serif;
}
.g-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .g-real-p {
    width: 50px;
    // white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    user-select: all;
  }
}

.g-footer {
  margin-top: auto;
  flex-shrink: 0;
  height: 30px;
  background: deeppink;
}
</style>
