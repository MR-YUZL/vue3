<script>
import { h } from "vue";
export default {
  name: "render",
  props: {
    level: {
      type: Number,
      default: 1,
    },
  },
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  render() {
    return h(
      "h" + this.level, // tag name
      {}, // props/attributes
      this.$slots.default() // array of children
    );
  },
};
</script>
<style lang="less" scoped></style>
