<template>
    <section class="main-form">
      <h2 class="h4 color--primary  text-center mb-30" v-if="title">{{title}}</h2>
      <form @submit.prevent="action">
        <a-row type="flex" :gutter="15">
          <template v-for="field in fields">
            <a-col :xs="24" :sm="24" :md="24 / col" :lg="24 /col" class="mb-15"  :key="field.name" v-if="isVisible(field)">
              <label :for="field.name" class="form-label" v-if="field.label">{{field.label}} <span class="color--danger" v-if="field.required">*</span></label>
              <template v-if="field.type === 'input'">
                <a-input v-if="field.mask" :placeholder="field.placeholder" type="text" :id="field.name" v-model="form[field.name]" v-mask="field.mask" />
                <a-input v-else :placeholder="field.placeholder" :type="field.nativeType || 'text'" :id="field.name" v-model="form[field.name]" />
              </template>
              <template v-if="field.type === 'select'">
                <a-select v-model="form[field.name]" :placeholder="field.placeholder">
                  <a-select-option
                    v-for="(option, index) in field.values"
                    :key="index"
                    :value="option.value"
                  >{{ option.label }}</a-select-option>
                </a-select>
              </template>
            </a-col>
          </template>
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
  import CONTACT from  '~/dictionary/contact'
  import VALIDATION from  '~/dictionary/validation'

  export default {
    name: "MainForm",
    props: {
      title: String,
      // PHP mail subject
      subject: String,
      // PHP mail address
      mailTo: {
        type: String,
        default: 'info@mir-dit.ru'
      },
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
      actionPath: {
        type: String,
        default: '/php/mail.php'
      },
      action: {
        type: Function,
        default: function () {
          const form = {...this.form}
          form.subject = this.subject || this.title;
          form.body = this.createBody(this.form);
          form.mailTo = this.mailTo || this.CONTACT.email;
          const formData = new FormData()
          for(let key in form) {
            formData.set(key, form[key])
          }
          this.$axios.post(this.actionPath, formData)
            .then(() => {
              this.clearForm()
              this.$message.success(this.VALIDATION.success)
              this.closeModal(this.modalKey)
            })
            .catch((e) => {
              console.error('error', e)
              this.$message.error(this.VALIDATION.error)
            })

        }
      },
      modalKey: {
        type: String,
        default: ''
      },
      visibleCondition: {
        type: String,
        default: 'true'
      }
    },
    data() {
      return {
        form: {},
        SITE,
        CONTACT,
        VALIDATION,
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
      isVisible(field) {
        if (!field.visibleCondition) {
          field.visibleCondition = 'true'
        }
        const f = new Function('form', `return ${field.visibleCondition}`)
        return f(this.form)
      },
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
      closeModal(modalKey) {
        this.$store.commit('toggleModal', modalKey)
      },
      createBody(form) {
        let body = '';
        for (let [key, value] of Object.entries(form)) {
          body += `<b>${key}</b>`
          body += `<p>${value}</p>`
        }
        return body;
      }
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
