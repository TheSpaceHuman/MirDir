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
  },
  birthday: {
    year: 2008,
    month: 1,
    date: 15,
  }
})

export const mutations = {
  toggleModal (state, name) {
    state.modals[name].show = !state.modals[name].show
  }
}

export const getters = {
  modals: (state) => state.modals,
  birthday: (state) => {
    const before = new Date(state.birthday.year, state.birthday.month, state.birthday.date).getFullYear()
    const after = new Date().getFullYear()
    return after - before
  }
}
