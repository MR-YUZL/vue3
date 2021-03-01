<template>
  <div class="table">
    <div class="header">
      <div class="header_item" v-for="(v, index) in headList" :key="index">
        <span>{{ v }}</span>
      </div>
    </div>
    <div class="body">
      <div v-for="(v, index) in list" :key="index" class="body_item">
        <div class="body_item_name">
          {{ v.name }}
        </div>
        <div class="body_item_phone">
          {{ v.phone }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Table",
  props: {
    headList: {
      type: Array,
      default: () => [],
    },
    list: {
      type: Array,
      default: () => [],
    },
  },
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.table {
  .header {
    display: flex;
    align-items: center;
    height: 40px;
    width: 100%;
    background: rgb(247, 247, 247);
    padding: 0 10px;
    border-bottom: 1px solid lightgrey;
    .header_item {
      flex-grow: 1;
    }
  }
  .body {
    width: 100%;
    height: calc(100% - 40px);
    overflow: hidden;
    .body_item {
      display: flex;
      align-items: center;
      width: 100%;
      height: 30px;
      line-height: 30px;
      padding: 0 10px;
      cursor: pointer;
      .body_item_name,
      .body_item_phone {
        height: 100%;
        width: 50%;
      }
    }

    .heightLight {
      background: #e9eff4;
    }
  }
}

.body_spin {
  opacity: 0.5;
}
</style>
