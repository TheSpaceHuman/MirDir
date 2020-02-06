<template>
    <div class="the-modals">
      <a-modal
        v-for="(modal, key) in modals"
        :key="key"
        v-model="modal.show"
        @cancel="closeModal(key)"
        ok-text="Отправить"
        cancel-text="Закрыть"
      >
        <comment :is="modal.component"></comment>
      </a-modal>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import FormNameEmail from '~/components/forms/FormNameEmail.vue';
  import FormNameEmailPhone from '~/components/forms/FormNameEmailPhone.vue';
  import FormNamePhone from '~/components/forms/FormNamePhone.vue';

  export default {
    name: "TheModals",
    components: {
      FormNameEmail, FormNameEmailPhone, FormNamePhone
    },
    computed: {
      ...mapGetters([
        'modals'
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
