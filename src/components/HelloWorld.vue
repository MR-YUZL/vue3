<template>
  <div class="hello">
    <!-- <div class="header">啦啦啦</div>
    <div class="main"></div>
    <div class="footer">坎坎坷坷</div> -->
    <h1>{{ obj.a }}</h1>
    <input v-model="message" />
    <h1 v-for="(v, index) in arr" :key="index">{{ v }}</h1>
  </div>
</template>

<script>
import {
  ref,
  onMounted,
  watch,
  toRefs,
  reactive,
  inject,
  onUpdated,
} from "vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  inject: ["location", "geolocation"],
  setup(props) {
    const { msg } = toRefs(props);
    const obj = ref({
      a: "1",
    });
    let arr = ref([]);
    let arr2 = [];
    let func = () => {
      arr.value.push("o");
    };
    onMounted(func);
    let obj2 = "";

    onUpdated(() => {
      obj2 = inject("repositories");
      console.log("obj2", obj2.value[0].name);
    });
    // watch([arr, msg], ([arrNew, msgNew], [arrOld, msgOld]) => {
    //   console.log("msgNew,msgOld", msgNew, msgOld, arrNew, arrOld);
    // });
    watch(msg, (msgNew, msgOld) => {
      console.log("msgNew,msgOld", msgNew, msgOld);
      func();
    });
    watch(arr, (arrNew) => {
      console.log("arrNew", arrNew);
    });

    return { obj, arr, arr2, func, obj2 }; // 这里返回的任何内容都可以用于组件的其余部分
  },
  watch: {
    message: "onChange",
    arr2() {
      console.log("arr2");
    },
    arr() {
      console.log("arr");
    },
  },
  data() {
    return {
      message: "",
      object: {
        a: "",
      },
    };
  },
  mounted() {
    console.log("obj2", this.obj2);
  },
  methods: {
    onChange() {
      this.arr.push("l");
      this.obj.a = 111;
    },
  },
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
