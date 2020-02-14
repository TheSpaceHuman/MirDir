<template>
  <div class="check-list">
      <a-row type="flex" v-for="(item, key) in items" :key="key" class="check-list__item">
        <a-col :sm="2" class="check-list__icon"><a-icon type="check-circle" /></a-col>
        <a-col :sm="22" class="check-list__content" v-html="item"></a-col>
      </a-row>
  </div>
</template>

<script>
  export default {
    name: "CheckList",
    props: {
      items: {
        type: Array,
        required: true,
      }
    }
  }
</script>

<style lang="scss">
  @import "./../../assets/scss/utils/vars";
  .check-list {

    &__item {
      margin-bottom: 20px;
    }
    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 40px;
        height: 40px;
        fill: $tertiary-color;
      }
    }
    &__content {}
  }
</style>
