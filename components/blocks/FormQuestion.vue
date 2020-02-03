<template>
    <section class="form-question">
      <h4 class="h4 text-primary text-center mb-30">Готовы ответить на любые вопросы</h4>
      <form @submit.prevent="send">
        <a-row type="flex" :gutter="15">
          <a-col :xm="24" :md="12" class="mb-15">
            <label for="name" class="form-label">Имя <span class="text-danger">*</span></label>
            <a-input placeholder="Имя" type="text" id="name" v-model="form.name" />
          </a-col>
          <a-col :xm="24" :md="12" class="mb-15">
            <label for="phone" class="form-label">Телефон <span class="text-danger">*</span></label>
            <a-input placeholder="Телефон" type="text" id="phone" v-model="form.phone" />
          </a-col>
          <a-col :xm="24" :md="12" class="mb-15">
            <a-checkbox v-model="form.personal">Даю согласие на <a href="/docs/Согласие на обработку персональных данных.pdf" target="_blank">обработку персональных данных</a></a-checkbox>
          </a-col>
          <a-col :xm="24" :md="12" class="mb-15 d-flex justify-content-end align-items-center">
            <a-button type="primary" html-type="submit">Перезвоните мне</a-button>
            <span>$invalid = {{$v.form.$invalid}}</span>
          </a-col>
        </a-row>
      </form>
    </section>
</template>

<script>
  import { required, requiredIf } from 'vuelidate/lib/validators'

  export default {
    name: "FormQuestion",
    data() {
      return {
        form: {
          name: '',
          phone: '',
          personal: false
        }
      }
    },
    methods: {
      async send() {
        console.info(this.form)
      }
    },
    validations: {
      form: {
        name: required,
        phone: required,
        personal: requiredIf,
      }
    }
  }
</script>

<style lang="scss" scoped>
  .form-question {}
</style>
