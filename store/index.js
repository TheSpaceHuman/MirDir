export const state = () => ({
  modals: {
    formNamePhone: {
      show: false,
      component: 'form-name-phone',
      title: 'Задать вопрос',
      data: {},
    },
    formNameEmail: {
      show: false,
      component: 'form-name-email',
      title: 'Заявка на аудит',
      data: {},
    },
    formNameEmailPhone: {
      show: false,
      component: 'form-name-email-phone',
      title: 'Заявка на чек-лист проверки базы данных',
      data: {},
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
