<template>
    <div class="service-card">
      <a-row type="flex" jutify="center">
        <a-col :xs="24" :sm="24" :md="8" class="service-card__icon">
          <TheIcon :name="icon" width="80%" height="100%" />
        </a-col>
        <a-col :xs="24" :sm="24" :md="16">
          <h5 class="service-card__title"></h5>
          <div class="service-card__content">
            <slot></slot>
          </div>
        </a-col>
      </a-row>
    </div>
</template>

<script>
  import TheIcon from '~/components/base/TheIcon.vue'

  export default {
    name: "ServiceCard",
    props: {
      icon: String,
      title: String,
    },
    components: {
      TheIcon
    }
  }
</script>

<style lang="scss">
  .service-card {

    &__icon {}
    &__title {}
    &__content {}
  }
  .service-card + .service-card {
    margin-top: 35px;
  }
</style>
