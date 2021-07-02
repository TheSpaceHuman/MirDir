<template>
  <section class="start-learning">
    <div class="container pt-40">
      <h2 class="h2 text-center mb-20">Как начать учиться?</h2>
      <p class="text-center">Нажмите на кнопку «Начать учиться» и заполните анкету. Мы перезвоним/напишем вам и подробнее расскажем о занятиях.</p>
    </div>
    <div class="container my-50 d-flex justify-content-center">
      <a-button type="primary" @click="learning()">Начать учиться</a-button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StartLearning',
  props: {
    script: {
      type: String
    }
  },
  methods: {
    learning() {
      if (this.script) {
        this.openGetCourse(this.script)
      } else {
        this.openModal('formQuestionnaire');
      }
    },
    openModal(name) {
      this.$store.commit('toggleModal', name)
    },
    openGetCourse(key) {
      const resolve = this.$router.resolve({ path: `/getcourse/${key}`});
      window.open(resolve.href, '_blank');
    }
  }
}
</script>

<style scoped>

</style>
