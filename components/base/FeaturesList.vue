<template>
    <section class="features-list">
      <a-row type="flex" class="features-list__item" v-for="(item, index) in items" :key="index">
        <a-col :xs="24" :sm="24" :md="4" :lg="4" class="features-list__item-icon">
          <a-icon :type="item.icon" class="features-list__item-icon-svg" theme="outlined"></a-icon>
        </a-col>
        <a-col :xs="24" :sm="24" :md="20" :lg="20" class="features-list__item-content">
          <p>{{item.content}}</p>
        </a-col>
      </a-row>
    </section>
</template>

<script>
  export default {
    name: "FeaturesList",
    props: {
      items: Array
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/utils/vars";
  .features-list {
    &__items {
      font-size: 22px;
      color: $primary-color;
      @media screen and (max-width: $tableWidth) {
        font-size: 18px;
      }
      @media screen and (max-width: $phoneWidth) {
        font-size: 16px;
      }
    }
    &__item {
      padding: 20px;
      align-items: center;
    }

    &__item-icon-svg {
      display: flex;
      justify-content: center;
      @media screen and (max-width: $tableWidth) {
        margin-bottom: 20px;
      }
    }
    &__item-icon-svg svg {
      width: 90px;
      height: 90px;
      fill: $primary-color;
    }
    &__item-content {

    }
  }

</style>
