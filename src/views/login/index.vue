<template>
  <div class="login h-full w-full relative px-4">
    <div class="container mx-auto py-2 h-full px-10">
      <div class="flex-center h-full">
        <div class="w-half h-full relative flex">
          <div class="logo flex enter-x">
            <img
              :src="require('@/assets/images/logo.png')"
              alt=""
              class="logo-img"
            />
            <p class="cfff fs-p-24 fw-7 m-l-10">
              {{ t("logoTitle") }}
            </p>
          </div>
          <div class="my-auto">
            <img
              :src="require('@/assets/svg/login-box-bg.svg')"
              alt=""
              class="w-half enter-x"
            />
            <p class="m-t-20 enter-x">
              <span class="cfff fs-r-8 fw-5"> {{ t("signInTitle") }}</span>
            </p>
            <p class="m-t-10 enter-x">
              <span class="cfff fs-r-4 fw-4"> {{ t("signInDesc") }}</span>
            </p>
          </div>
        </div>
        <div class="w-half h-full flex-y px-2">
          <h1 class="c000 fs-p-24 fw-7 mb-4">{{ getLoginTitle }}</h1>
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import LoginForm from "./components/LoginForm";
import { t, useLoginForm } from "./hooks";
import { useStore } from "vuex";

export default defineComponent({
  name: "login",
  props: {},
  components: { LoginForm },
  setup() {
    const { getLoginTitle } = useLoginForm;
    return { t, getLoginTitle };
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
      align-items: center;
      position: absolute;
      top: 12px;
      left: 0;
      height: 80px;
      .logo-img {
        width: 48px;
        vertical-align: middle;
      }
    }
  }
}
</style>
