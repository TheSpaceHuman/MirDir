<template>
  <section class="promo" v-if="isVisible">
    <div class="promo__logo">
      <img src="/images/logo.png" alt="Mir-dit logo">
    </div>
    <div class="promo__message">
      <h4 class="promo__title">
        Программы обучения по направлению Тестирование программного обеспечения. Приходите к нам в Учебный центр за новыми знаниями и возможностью попасть в проекты к нашим партнерам и заказчикам.
      </h4>
      <p class="promo__sub-title"><em>Лицензия на осуществление образовательной деятельности <a href="http://isga.obrnadzor.gov.ru/rlic/" target="_blank">№041374</a> от "19" апреля 2021г.</em></p>
    </div>
    <div class="promo__action">
      <a href="https://mir-dit.online/" target="_blank">
        <TheButton type="danger" class="text-nowrap">Учебнуя платформа</TheButton>
      </a>
    </div>
  </section>
</template>

<script>
import TheButton from '@/components/base/TheButton.vue'
export default {
  name: "ThePromo",
  components: { TheButton },
  props: {
    urls: Array,
    title: String,
    subTitle: String
  },
  computed: {
    isVisible() {
      return this.urls.includes(this.$route.path)
    }
  }
}
</script>

<style scoped lang="scss">
.promo {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px 4px;

  &__title {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 10px;
  }

  &__sub-title {
    font-size: 16px;
    font-weight: 300;
    line-height: 1.1;
    margin-bottom: 0;
  }
  &__logo {
    img {
      width: 100px;
    }
  }
  &__message {
    padding: 0 20px;
  }
}
</style>
