<template>
  <div class="message" @scroll="scrollEvent" id="message">
    <a href="#one">one</a>
    <h1 ref="message">{{ id }}</h1>
    <Render :level="2">啦啦啦</Render>
    <h1>{{ object }}</h1>
    <input type="text" v-model="object" />
    <a-button>按钮</a-button>

    <a-radio-group v-model:value="value1">
      <a-radio-button value="a">Hangzhou</a-radio-button>
      <a-radio-button value="b">Shanghai</a-radio-button>
      <a-radio-button value="c">Beijing</a-radio-button>
      <a-radio-button value="d">Chengdu</a-radio-button>
    </a-radio-group>

    <!-- <router-link :to="{ path: `/test/${id}` }">跳转</router-link> -->
    <router-link :to="{ name: 'test', params: { id } }">跳转</router-link>
    <input ref="root" />
    <teleport to="#app">
      <div style="width: 100%">A</div>
    </teleport>
    <div>{{ `${imgList}` }}</div>
    <div class="container">
      <div v-for="v in imgList" :key="v.url">
        <img
          :data-src="v.url"
          class="lazy-image"
          :ref="
            (el) => {
              if (el) imgs.push(el);
            }
          "
        />
      </div>
    </div>
    <img src="1.png" alt="图片描述" :onerror="onerror" id="one" />
  </div>
</template>
<script>
import Render from "@/components/Render";
import { throttle } from "@/utils";
import { ref, onMounted } from "vue";
export default {
  name: "message",
  props: {},
  components: { Render },
  setup() {
    const root = ref(null);

    onMounted(() => {
      // DOM元素将在初始渲染后分配给ref
      console.log(root.value);
    });

    return {
      root,
    };
  },
  data() {
    return {
      id: "message",
      imgList: [
        {
          url: require("@/assets/logo.png"),
        },
        {
          url: require("@/assets/logo.png"),
        },
        {
          url: require("@/assets/logo.png"),
        },
        {
          url: require("@/assets/logo.png"),
        },
        {
          url: require("@/assets/logo.png"),
        },
        {
          url: require("@/assets/logo.png"),
        },
        {
          url: require("@/assets/logo.png"),
        },
      ],
      scollFunc: null,
      imgs: [],
      onClick: function() {
        console.log("this", this);
      },
      that: this,
      value1: "a",
    };
  },
  computed: {
    obj({ id }) {
      return id + "w";
    },
    object: {
      get({ id }) {
        console.log("id", id);
        return id;
      },
      set(value) {
        console.log("value", value);
        this.id = value + "w";
      },
    },
  },
  watch: {
    value1(val) {
      console.log("val", val);
    },
  },
  created() {},
  mounted() {
    this.root.focus();
    this.$nextTick(() => {
      let obj = {
        a: "",
      };
      this.inViewShow();
      // document
      //   .getElementById("message")
      //   .addEventListener("scroll", debounce.call(obj, this.inViewShow, 1000));
      this.onClick.call(obj);
      console.log("that", this.that);
    });

    let func = (a, ...arg) => {
      console.log("a,b,c", a, arg);
      return a, arg.push(a), arg[2];
    };
    let f = func(1, "aaa", 2);
    console.log("f", f);
  },
  beforeUnmount() {
    // document
    //   .getElementById("message")
    //   .removeEventListener("scroll", this.inViewShow);
  },
  methods: {
    scrollEvent: throttle(function() {
      this.inViewShow();
    }, 1000),
    onerror(el) {
      console.log("el", el);
      el.target.classList.add("error");
    },
    inViewShow() {
      //图片懒加载
      let imageElements = this.imgs;
      let len = imageElements.length;
      for (let i = 0; i < len; i++) {
        let imageElement = imageElements[i];
        const rect = imageElement.getBoundingClientRect(); // 出现在视野的时候加载图片
        if (
          rect.top < document.documentElement.clientHeight &&
          rect.bottom > 0
        ) {
          imageElement.src = imageElement.dataset.src; // 移除掉已经显示的
          imageElements.splice(i, 1);
          len--;
          i--;
        }
      }
    },
  },
};
</script>
<style lang="less" scoped>
.message {
  width: 50%;
  height: 100vh;
  overflow: auto;
  scroll-behavior: smooth;
  .container {
    display: flex;
    flex-direction: column;
    .lazy-image {
      width: 200px;
      height: 200px;
      background: #000;
      object-fit: cover;
    }
  }
}
.error {
  position: relative;
  display: inline-block;
  width: 150px;
  height: 100px;
}

.error::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #999;
}

.error::after {
  content: attr(alt);
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 5px 10px;
  background: #000;
  color: #eee;
  font-size: 12px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
