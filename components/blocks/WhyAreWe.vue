<template>
  <section class="why">
    <h3 class="h2 text-center text-bold mb-20">{{ title }}</h3>
    <a-row class="why__items" :gutter="16">
      <a-col :sm="24" :md="8" v-for="item in items" class="why__item mb-10" :key="item.title">
        <h4 class="why__title">{{ item.title }}</h4>
        <p class="why__content">{{ item.content }}</p>
      </a-col>
    </a-row>
  </section>
</template>

<script>
  export default {
    name: "WhyAreWe",
    props: {
      title: {
        type: String,
        default: 'Почему мы?'
      },
      items: Array
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .why {
    &__title {
      font-size: 21px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    &__items {}
    &__item {}
    &__content {}
  }
</style>
