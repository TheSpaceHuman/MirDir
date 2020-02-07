<template>
    <div class="warranty-card" :class="{'warranty-card--transparent': transparent}">
      <a-card :hoverable="!transparent" :bordered="!transparent">
        <a-icon :type="icon" slot="cover" class="warranty-card__icon big--icon" :class="{'text-left': transparent}"></a-icon>
        <a-card-meta :title="title">
          <template slot="description">
            <div class="warranty-card__description" v-html="description"></div>
          </template>
        </a-card-meta>
      </a-card>
    </div>
</template>

<script>
  export default {
    name: "WarrantyCard",
    props: {
      title: String,
      description: String,
      icon: String,
      transparent: {
        type: Boolean,
        default: false,
      }
    }
  }
</script>

<style lang="scss">
  @import "./../../assets/scss/utils/vars";

  .warranty-card {
    height: 100%;
    .ant-card-meta-title {
      font-weight: 700;
    }
    &__icon {
      svg {
        fill: $secondary-color;
      }
      padding: 24px 24px 0;
    }
    &__description {

    }
    .ant-card {
      height: 100%;
    }
  }
  .warranty-card--transparent {
    .ant-card {
      background-color: transparent;
    }
  }
</style>
