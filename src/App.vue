<template>
  <div id="body" style="width: 100%">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  provide: {
    location: "North Pole",
    geolocation: {
      longitude: 90,
      latitude: 135,
    },
  },
  data() {
    return {
      type: 1,
    };
  },
  mounted() {},
};
</script>

<style>
</style>
