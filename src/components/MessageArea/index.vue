<template>
  <div class="message-area-container">
    <DataForm v-on="$listeners"/>
    <h3>
      {{ title }}
      <span> {{ subTitle }}</span>
    </h3>
    <DataList :list="list"/>
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import DataForm from "./DataForm";
import DataList from "./DataList";
import EventBus from "@/eventBus";

export default {
  name: 'MessageArea',
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    DataForm,
    DataList,
  },
  methods: {
    hello() {
      EventBus.$on('hello', () => {
      })
    }
  },
};
</script>

<style scoped lang="less">
.loading {
  position: relative;
  height: 100px;
}
</style>
