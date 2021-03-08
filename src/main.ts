import { createApp } from "vue";
// import Button from 'ant-design-vue/lib/button';
import { Button, Radio, Input, Anchor } from "ant-design-vue";
import App from "./App.vue";
import router from "./router";
import "ant-design-vue/dist/antd.css";
const app = createApp(App);
app.use(router);
app.use(Button);
app.use(Radio);
app.use(Input);

app.use(Anchor);
app.mount("#app");
