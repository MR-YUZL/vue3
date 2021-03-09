<template>
  <div class="login h-full w-full relative">
    <div class="container mx-auto py-2 h-full">
      <div class="flex-center h-full">
        <div class="w-half h-full relative flex">
          <div>
            <img
              :src="require('@/assets/images/logo.png')"
              alt=""
              class="logo"
            />
            <span>{{ t("11") }}</span>
          </div>
          <div class="my-auto">
            <img
              :src="require('@/assets/svg/login-box-bg.svg')"
              alt=""
              class="w-half"
            />
            <p></p>
            <p></p>
          </div>
        </div>
        <div class="w-half h-full">
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { t } from "@/hooks";

export default defineComponent({
  name: "login",
  props: {},
  components: {},
  setup() {
    const store = useStore();
    console.log("store", store.state.login);
    return { t };
  },
});
</script>
<style lang="less" scoped>
.login {
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-image: url("../../assets/svg/login-bg.svg");
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: 100%;
    content: "";
  }

  .container {
    max-width: 1200px;
    .logo {
      position: absolute;
      top: 12px;
      left: 0;
      width: 48px;
      vertical-align: middle;
    }
  }
}
</style>
