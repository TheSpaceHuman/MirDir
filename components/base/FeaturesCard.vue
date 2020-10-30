<template>
    <section class="features-card">
      <h3 class="features-card__title">{{title}}</h3>
      <div class="features-card__content" v-html="content"></div>
      <slot></slot>
    </section>
</template>

<script>
  export default {
    name: "FeaturesCard",
    props: {
      title: String,
      content: String
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/utils/vars";

  .features-card {
    border: 1px solid $tertiary-color;
    padding: 30px;

    ul {
      padding-left: 25px;
      margin-bottom: 20px;
    }
    li {
      list-style: disc;
    }
    p {
      margin-bottom: 20px;
    }

    &__title {
      font-size: 48px;
      font-weight: 700;
      color: $tertiary-color;
      text-align: center;
      margin-bottom: 30px;
      @media screen and (max-width: $tableWidth) {
        font-size: 24px;
      }
      @media screen and (max-width: $phoneWidth) {
        font-size: 19px;
      }
    }
    &__content {
      font-size: 18px;
      line-height: 1.5;
      color: #000;
      @media screen and (max-width: $tableWidth) {
        font-size: 16px;
      }
      @media screen and (max-width: $phoneWidth) {
        font-size: 14px;
      }
    }

  }
  .features-card + .features-card {
    margin-top: 50px;
  }
</style>
