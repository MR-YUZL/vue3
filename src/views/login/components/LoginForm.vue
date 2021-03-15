<template>
  <div class="LoginForm">
    <Form :model="formState" :rules="getFormRules">
      <FormItem>
        <Input
          v-model:value="formState.account"
          :placeholder="t('accountPlaceholder')"
        />
      </FormItem>

      <FormItem>
        <InputPassword
          v-model:value="formState.password"
          :placeholder="t('passwordPlaceholder')"
        />
      </FormItem>

      <Row>
        <Col :span="12">
          <FormItem>
            <Checkbox v-model:checked="checked">{{ t("rememberMe") }}</Checkbox>
          </FormItem>
        </Col>
        <Col :span="12">
          <FormItem style="text-align:right">
            <Button
              type="link"
              size="small"
              @click="setLoginForm(LoginFormType.RESET_PASSWORD)"
            >
              {{ t("forgetPassword") }}
            </Button>
          </FormItem>
        </Col>
      </Row>
    </Form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { t, useFormRules, useLoginForm, LoginFormType } from "../hooks";
import {
  Checkbox,
  Form,
  Input,
  Row,
  Col,
  Button,
  Divider,
} from "ant-design-vue";

export default defineComponent({
  name: "LoginForm",
  props: {},
  components: {
    Checkbox,
    Form,
    Input,
    Row,
    Col,
    Button,
    Divider,
    InputPassword: Input.Password,
    FormItem: Form.Item,
  },
  setup() {
    let checked = ref(false);
    const { getFormRules } = useFormRules;
    const { setLoginForm } = useLoginForm;
    const formState = reactive({
      account: "qfy",
      password: "123456",
    });

    return { formState, t, getFormRules, checked, setLoginForm, LoginFormType };
  },
});
</script>
<style lang="less" scoped></style>
