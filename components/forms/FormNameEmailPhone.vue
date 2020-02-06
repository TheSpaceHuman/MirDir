<template>
    <section class="form-name-phone">
      <h4 class="h4 color--primary  text-center mb-30" v-if="title">{{title}}</h4>
      <form @submit.prevent="send">
        <a-row type="flex" :gutter="15">
          <a-col :xm="24" :md="24 / col" class="mb-15">
            <label for="name" class="form-label">Имя <span class="color--danger">*</span></label>
            <a-input placeholder="Имя" type="text" id="name" v-model="form.name" />
          </a-col>
          <a-col :xm="24" :md="24 / col" class="mb-15">
            <label for="phone" class="form-label">Телефон <span class="color--danger">*</span></label>
            <a-input placeholder="Телефон" type="text" id="phone" v-mask="'+7 (###) ###-##-##'" v-model="form.phone" />
          </a-col>
          <a-col :xm="24" :md="24 / col" class="mb-15">
            <label for="email" class="form-label">Email <span class="color--danger">*</span></label>
            <a-input placeholder="Email" type="text" id="email" v-model="form.email" />
          </a-col>
          <a-col :xm="24" :md="24" class="mb-15">
            <a-checkbox v-model="form.personal">Даю согласие на <a :href="SITE.personalLink" target="_blank">обработку персональных данных</a>  <span class="color--danger">*</span></a-checkbox>
          </a-col>
          <div class="d-flex w-100" :class="buttonClass">
            <a-button type="primary" html-type="submit" :disabled="$v.form.$invalid">{{buttonTitle}}</a-button>
          </div>
        </a-row>
      </form>
      <slot></slot>
    </section>
</template>

<script>
  import { required } from 'vuelidate/lib/validators'
  import SITE from  '~/dictionary/site'

  export default {
    name: "FormNamePhone",
    props: {
      title: {
        type: String,
        default: ''
      },
      buttonTitle: {
        type: String,
        default: 'Отправить'
      },
      buttonAlight: {
        type: String,
        default: 'center'
      },
      col: {
        type: Number,
        default: 1
      }
    },
    data() {
      return {
        form: {
          name: '',
          phone: '',
          email: '',
          personal: false,
        },
        SITE,
        buttonClass: {
          'justify-content-center': this.buttonAlight === 'center',
          'justify-content-start': this.buttonAlight === 'left',
          'justify-content-end': this.buttonAlight === 'right',
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
        name: {
          required,
        },
        email: {
          required
        },
        phone: {
          required
        },
        personal: {
          isRequired(value) {
            return value
          }
        },
      }
    }
  }
</script>

<style lang="scss">
  .form-name-email-phone {}
</style>
