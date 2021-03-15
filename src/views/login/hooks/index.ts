import store from "@/store";
import { ref, computed, unref } from "vue";

export enum LoginFormType {
  LOGIN = t("signInFormTitle"),
  REGISTER = t("signUpFormTitle"),
  RESET_PASSWORD = t("forgetFormTitle"),
  MOBILE = t("mobileSignInFormTitle"),
  QR_CODE = t("qrSignInFormTitle"),
}

export function t(name: string) {
  let t;
  if (store.state.common.staticData.login) {
    t = store.state.common.staticData.login[name];
  } else {
    store.commit("common/GET_STATIC");
    t = store.state.common.staticData.login[name];
  }

  return t;
}

const loginTitle = ref(LoginFormType.LOGIN);

export function useLoginForm() {
  function setLoginTitle(state: LoginFormType) {
    loginTitle.value = state;
  }
  console.log("loginTitle", loginTitle);
  let getLoginTitle = computed(() => loginTitle.value);

  function handleBackLogin() {
    setLoginTitle(LoginFormType.LOGIN);
  }

  return { setLoginTitle, getLoginTitle, handleBackLogin };
}

export function useFormRules() {
  const rulesAccount = createRule(t("accountPlaceholder"));
  const rulesPassword = createRule(t("passwordPlaceholder"));
  const rulesMobile = createRule(t("mobilePlaceholder"));

  function getFormRules() {
    switch (unref(loginTitle)) {
      case LoginFormType.MOBILE:
        return {
          mobile: rulesMobile,
        };
        break;
      default:
        return {
          account: rulesAccount,
          password: rulesPassword,
        };
        break;
    }
  }

  return { getFormRules };
}

function createRule(message: string) {
  return [
    {
      required: true,
      message,
      trigger: "change",
    },
  ];
}
