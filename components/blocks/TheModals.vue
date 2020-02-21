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
      closeModal(modal) {
        this.$store.commit('toggleModal', modal)
      }
    }
  }
</script>

<style lang="scss">

</style>
