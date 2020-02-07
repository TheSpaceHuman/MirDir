<template>
    <section class="features-list">
        <div class="features-list__items">
          <div class="features-list__item" v-for="(item, index) in items" :key="index">
            <div class="features-list__item-icon">
              <a-icon :type="item.icon" class="features-list__item-icon-svg" theme="outlined"></a-icon>
            </div>
            <div class="features-list__item-content">
              <p>{{item.content}}</p>
            </div>
          </div>
        </div>
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

<style lang="scss" scoped>
  @import "../../assets/scss/utils/vars";
  .features-list {
    &__items {
      display: flex;
      flex-wrap: wrap;
      font-family: 'Montserrat', sans-serif;
      font-size: 22px;
      color: $primary-color;
    }
    &__item {
      flex: 0 0 100%;
      display: flex;
      padding: 20px;
      align-items: center;
    }

    &__item-icon-svg {
      flex: 1 1 20%;
      margin-right: 15px;
    }
    &__item-icon-svg svg {
      width: 90px;
      height: 90px;
      fill: $primary-color;
    }
    &__item-content {
      flex: 1 1 80%;
    }
  }

</style>
