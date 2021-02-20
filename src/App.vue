<template>
  <div>
    <h1>hello world!</h1>
    <test></test>
    <message></message>
  </div>
</template>

<script>
import test from "@/views/test";
import message from "@/views/message";

export default {
  name: "App",
  components: {
    test,
    message,
  },
};
</script>

<style>
</style>
