<template>
    <section class="main-form">
      <h4 class="h4 color--primary  text-center mb-30"></h4>
      <form @submit.prevent="send">
        <a-row type="flex" :gutter="15">
          <template v-if="col === 1">
            <a-col :xm="24" :md="24" class="mb-15" v-for="field in fields" :key="field.name">
              <label :for="field.name" class="form-label" v-if="field.label">{{field.label}} <span class="color--danger" v-if="field.required">*</span></label>
              <a-input :placeholder="field.placeholder" :type="field.text" :id="field.name" v-model="form[field.name]" />
            </a-col>
          </template>
          <template v-else>
            <a-col :xm="24" :md="12" class="mb-15" v-for="field in fields" :key="field.name">
              <label :for="field.name" class="form-label" v-if="field.label">{{field.label}} <span class="color--danger" v-if="field.required">*</span></label>
              <a-input :placeholder="field.placeholder" :type="field.text" :id="field.name" v-model="form[field.name]" />
            </a-col>
          </template>
          <a-col :xm="24" :md="24" class="mb-15" v-if="personal.active">
            <a-checkbox v-model="personal">Даю согласие на <a :href="personal.link" target="_blank">обработку персональных данных</a>  <span class="color--danger">*</span></a-checkbox>
          </a-col>
        </a-row>
        <a-button type="primary" html-type="submit">Отправить</a-button>
      </form>
    </section>
</template>

<script>

  export default {
    name: "MainForm",
    props: {
      title: String,
      fields: {
        type: Array,
        required: true,
        // {label: '', name: '', mask: '', placeholder: '', type: 'text', required: ''}
      },
      personal: {
        type: Object,
        default: () => ({
          active: true,
          link: '/docs/Согласие на обработку персональных данных.pdf'
        })
      },
      col: {
        type: Number,
        default: 1,
      },
    },
    data() {
      return {
        form: {},
        personal: false
      }
    },
    created() {
     this.fields.forEach((el) => {
        this.form[el.name] = ''
      })
    },
    methods: {
      async send() {
        // Я пытался =(
        console.info(this.form)
      }
    }
  }
</script>

<style lang="scss">

</style>
