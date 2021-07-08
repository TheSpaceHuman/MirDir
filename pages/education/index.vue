<template>
  <div>
    <TheBanner image="/images/banners/laptop-3196481_1920.jpg">
      <h1 class="banner-title">Обучение</h1>
    </TheBanner>
    <div class="container">
      <h2 class="h2 my-20 text-center">Программы обучения</h2>
      <a-row type="flex" :gutter="15" class="mb-30">
        <a-col :xs="24" :sm="24" :md="12" :lg="8" v-for="(education, index) in $store.getters.education" :key="index">
          <nuxt-link :to="education.url">
            <a-card  class="card mb-15" :hoverable="true" :bordered="false">
              <img v-lazy="education.image" :alt="education.title"  slot="cover" class="card__img">
              <div class="card__title" slot="cover">
                <p>{{ education.title }}</p>
              </div>
            </a-card>
          </nuxt-link>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
  import TheBanner from '~/components/base/TheBanner.vue'
  import TheButton from '~/components/base/TheButton.vue'
  export default {
    name: "education",
    components: {
      TheBanner,
      TheButton
    },
    head() {
      return {
        titleTemplate: '%s | Обучение персонала',
      }
    }
  }
</script>

<style lang="scss">

</style>
