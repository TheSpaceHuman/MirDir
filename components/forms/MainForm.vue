<template>
    <section class="main-form">
      <h4 class="h4 color--primary  text-center mb-30" v-if="title">{{title}}</h4>
      <form @submit.prevent="action">
        <a-row type="flex" :gutter="15">
          <a-col :xs="24" :sm="24" :md="24 / col" :lg="24 /col" class="mb-15" v-for="field in fields" :key="field.name">
            <label :for="field.name" class="form-label" v-if="field.label">{{field.label}} <span class="color--danger" v-if="field.required">*</span></label>
            <a-input v-if="field.mask" :placeholder="field.placeholder" :type="field.text" :id="field.name" v-model="form[field.name]" v-mask="field.mask" />
            <a-input v-else :placeholder="field.placeholder" :type="field.text" :id="field.name" v-model="form[field.name]" />
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" class="mb-15" v-if="personal">
            <a-checkbox v-model="form.personal">Даю согласие на <a :href="SITE.personalLink" target="_blank">обработку персональных данных</a>  <span class="color--danger">*</span></a-checkbox>
          </a-col>
        </a-row>
        <div class="d-flex w-100" :class="buttonClass">
          <a-button type="primary" html-type="submit" :disabled="$v.form.$invalid">{{buttonTitle}}</a-button>
        </div>
      </form>
    </section>
</template>

<script>
  import { required } from 'vuelidate/lib/validators'
  import SITE from  '~/dictionary/site'

  export default {
    name: "MainForm",
    props: {
      title: String,
      fields: {
        type: Array,
        required: true,
      },
      personal: {
        type: Boolean,
        default: true
      },
      col: {
        type: Number,
        default: 1,
      },
      buttonTitle: {
        type: String,
        default: 'Отправить'
      },
      buttonAlight: {
        type: String,
        default: 'center'
      },
      action: {
        type: Function,
        default: function () {
          console.info(this.form)
          this.clearForm()
          this.$message.success('Сообщение успешно отправлено!')
        }
      }
    },
    data() {
      return {
        form: {},
        SITE,
        buttonClass: {
          'justify-content-center': this.buttonAlight === 'center',
          'justify-content-start': this.buttonAlight === 'left',
          'justify-content-end': this.buttonAlight === 'right',
        }
      }
    },
    created() {
      this.init()
    },
    methods: {
      init() {
        this.fields.forEach((el) => {
          this.$set(this.form, el.name, null)
        });
        this.personal ? this.$set(this.form, 'personal', false) : ''
      },
      clearForm() {
        for (let key in this.form) {
          key === 'personal' ? this.form[key] = false : this.form[key] = null
        }
      },
    },
    validations() {
      let form = {}
      this.fields.forEach((el) => {
        if(el.required) {
          form[el.name] = {required}
        }
      });
      if(this.personal) {
        form.personal = {
          isRequired(value) {
            return value
          }
        }
      }
      return {
        form: form
      }
    }
  }
</script>

<style lang="scss">

</style>
