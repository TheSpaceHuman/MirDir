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
          :button-title="modal.buttonTitle || 'Перезвоните мне'"
          button-alight="center"
          :subject="modal.title"
          :mail-to="modal.data.mailTo"
          :action-path="modal.data.actionPath"
          :fields="formsFields[modal.data.fields]"
          :modal-key="key"
        ></comment>
      </a-modal>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import MainForm from '~/components/forms/MainForm.vue'

  export default {
    name: "TheModals",
    components: {
      MainForm
    },
    computed: {
      ...mapGetters([
        'modals',
        'formsFields'
      ])
    },
    methods: {
      closeModal(modalKey) {
        this.$store.commit('toggleModal', modalKey)
      }
    }
  }
</script>

<style lang="scss">
.ant-modal-body label {
  font-weight: 700;
}
</style>
