<template>
    <div class="the-modals">
      <a-modal
        v-for="(modal, key) in modals"
        :key="key"
        v-model="modal.show"
        @cancel="closeModal(key)"
        :footer="null"
        :title="modal.title"
      >
        <comment
          :is="modal.component"
          button-title="Перезвоните мне"
          button-alight="center"
          :fields="formsFields[modal.data.fields]"
        ></comment>
      </a-modal>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import FormNameEmail from '~/components/forms/FormNameEmail.vue';
  import FormNameEmailPhone from '~/components/forms/FormNameEmailPhone.vue';
  import FormNamePhone from '~/components/forms/FormNamePhone.vue';
  import MainForm from '~/components/forms/MainForm.vue'

  export default {
    name: "TheModals",
    components: {
      FormNameEmail, FormNameEmailPhone, FormNamePhone, MainForm
    },
    computed: {
      ...mapGetters([
        'modals',
        'formsFields'
      ])
    },
    methods: {
      closeModal(modal) {
        this.$store.commit('toggleModal', modal)
      }
    }
  }
</script>

<style lang="scss">

</style>
