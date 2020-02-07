<template>
    <section class="features-card">
      <h3 class="features-card__title">{{title}}</h3>
      <p class="features-card__content" v-html="content"></p>
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
    font-family: 'Montserrat', sans-serif;

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
    }
    &__content {
      font-size: 18px;
      line-height: 1.5;
      color: #000;
    }

  }
  .features-card + .features-card {
    margin-top: 50px;
  }
</style>
