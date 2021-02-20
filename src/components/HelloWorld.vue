<template>
  <div class="hello">
    <div class="header">啦啦啦</div>
    <div class="main"></div>
    <div class="footer">坎坎坷坷</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mounted() {
    let obj = {
      a: 1,
    };
    let a = 2
    Object.defineProperty(obj, "a", {
      get: () => {
        return a + 1;
      },
      set: (y) => {
        y + 3;
      },
    });
    console.log("obj", obj);
  },
  methods: {},
};
</script>

<style scoped lang="less">
.hello {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.header {
  background: yellowgreen;
}
.main {
  flex: 1;
  background: wheat;
}
.footer {
  background: #000;
}
</style>
