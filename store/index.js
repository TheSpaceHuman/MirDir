export const state = () => ({
  modals: {
    formNamePhone: {
      show: false,
      component: 'form-name-email'
    },
    formNameEmail: {
      show: false,
      component: 'form-name-email-phone'
    },
    formNameEmailPhone: {
      show: false,
      component: 'form-name-phone'
    }
  }
})

export const mutations = {
  toggleModal (state, name) {
    state.modals[name].show = !state.modals[name].show
  }
}

export const getters = {
  modals: (state) => state.modals
}
