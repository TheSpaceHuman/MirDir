<template>
  <section class="start-learning">
    <div class="container pt-40">
      <h2 class="h2 text-center mb-20">Как начать учиться?</h2>
      <p>Нажмите на кнопку «Начать учиться» и заполните анкету, если у вас остались вопросы. Мы перезвоним/напишем вам и подробнее расскажем о занятиях.</p>
    </div>
    <div class="container my-50 d-flex justify-content-center">
      <a-button type="primary" @click="openModal('formQuestionnaire')">Начать учиться</a-button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StartLearning',
  methods: {
    openModal(name) {
      this.$store.commit('toggleModal', name)
    },
  }
}
</script>

<style scoped>

</style>
