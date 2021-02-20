<template>
  <div>
    <h1>{{ msg }}</h1>
    <input type="text" v-model="msg" />
    <HelloWorld :msg="msg"></HelloWorld>
  </div>
</template>
<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "test",
  props: {},
  components: { HelloWorld },
  data() {
    return {
      msg: "Hello world!",
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped></style>
