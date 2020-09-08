<template>
  <section class="application-for-training">
    <div class="container">
      <h4 class="application-for-training__title">{{ title }}</h4>
      <div class="d-flex justify-content-center">
        <p class="application-for-training__text">{{ description }}</p>
      </div>
      <div class="d-flex justify-content-center">
        <a href="http://m.me/mirdit.ru/" target="_blank"><a-icon type="facebook" class="application-for-training__icon" /></a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ApplicationForTraining",
  props: {
    title: {
      type: String,
      default: 'Заявка на обучение'
    },
    description: {
      type: String,
      default: 'Отправь сообщение в мессенджер Facebook и получи подробную программу курса и план обучения'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils/vars";
.application-for-training {
  &__title {
    text-align: center;
    font-size: 35px;
    font-weight: 700;
    color: $tertiary-color;
    margin-bottom: 20px;
  }
  &__text {
    display: inline-block;
    text-align: center;
    max-width: 550px;
    font-size: 22px;
    margin-bottom: 20px;
  }
  &__icon {
    text-align: center;
    font-size: 35px;
    color: $tertiary-color;
  }
}
</style>
