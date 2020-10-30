<template>
  <a-timeline mode="alternate" class="the-timeline">
    <a-timeline-item v-for="(item, index) in items" :key="index">
      <div slot="dot" class="circle">{{ ++index }}</div>
      <p class="text-bold">{{ item.title }}</p>
      <div class="the-timeline" v-if="item.content" v-html="item.content"></div>
    </a-timeline-item>
  </a-timeline>
</template>

<script>
  export default {
    name: "TheTimeline",
    props: {
      items: Array
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/utils/vars";
  .circle {
    border: 1px solid $neutral-regular;
    color: $neutral-regular;
    border-radius: 50%;
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 17px;
    font-size: 13px;
  }
</style>
