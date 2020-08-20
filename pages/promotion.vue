<template>
  <div>
    <TheBanner image="/images/banners/media-2082641.jpg">
      <h1 class="banner-title">Продвижение партнеров</h1>
    </TheBanner>
    <h3 class="h3 text-center text-uppercase my-50">Страница в разработке!</h3>
  </div>
</template>

<script>
  import TheBanner from '~/components/base/TheBanner.vue'

  export default {
    name: "promotion",
    components: {
      TheBanner
    },
    head() {
      return {
        titleTemplate: '%s | Продвижение',
      }
    }
  }
</script>

<style lang="scss">

</style>
