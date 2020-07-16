export const state = () => ({
  modals: {
    formNamePhone: {
      show: false,
      component: 'main-form',
      title: 'Задать вопрос',
      data: {fields: 'namePhone'},
    },
    formNameEmail: {
      show: false,
      component: 'main-form',
      title: 'Заявка на аудит',
      data: {fields: 'nameEmail'},
    },
    formNameEmailPhone: {
      show: false,
      component: 'main-form',
      title: 'Заявка на чек-лист проверки базы данных',
      data: {fields: 'nameEmailPhone'},
    }
  },
  formsFields: {
    namePhone: [
      {label: 'Имя', name: 'name', mask: '', placeholder: 'Имя', type: 'text', required: true},
      {label: 'Телефон', name: 'phone', mask: '+7 (###) ###-##-##', placeholder: 'Телефон', type: 'text', required: true},
    ],
    nameEmail: [
      {label: 'Имя', name: 'name', mask: '', placeholder: 'Имя', type: 'text', required: true},
      {label: 'Email', name: 'email', mask: '', placeholder: 'Email', type: 'email', required: true},
    ],
    nameEmailPhone: [
      {label: 'Имя', name: 'name', mask: '', placeholder: 'Имя', type: 'text', required: true},
      {label: 'Email', name: 'email', mask: '', placeholder: 'Email', type: 'email', required: true},
      {label: 'Телефон', name: 'phone', mask: '+7 (###) ###-##-##', placeholder: 'Телефон', type: 'text', required: true},
    ],
  },
  birthday: {
    year: 2008,
    month: 1,
    date: 15,
  },
  customers: [
    {title: 'Дискси', src: '/images/customers/ff1e7c634aae05dfaf06a01323a947fe.png', description: ''},
    {title: 'Мегамарт', src: '/images/customers/61fcda56c79ed7763e370190ebe919b2.png', description: ''},
    {title: 'Федеральная служба  по финансовому мониторингу', src: '/images/customers/d67793c6bbee58a646b1a0d759dd96e6.png', description: 'Федеральная служба  по финансовому мониторингу'},
    {title: 'Natalie tours', src: '/images/customers/ff39ffbe72c71b25a445643992958172.png', description: ''},
    {title: 'Федеральная миграционная служба РФ', src: '/images/customers/07af8c0d4e60b02f8bc6cff9ad039a69.png', description: 'Федеральная миграционная служба РФ'},
    {title: 'Кораблик', src: '/images/customers/59becde746c9e448ff68226020855e60.png', description: ''},
    {title: 'Мир детства', src: '/images/customers/9bcbfe25766bc1cefbf61e5dab6555ee.png', description: ''},
    {title: 'Сфера', src: '/images/customers/23ca5331d6aff57e5743265ecfb62a25.png', description: ''},
    {title: 'Queen mary', src: '/images/customers/4bd22cb2fbcefa654e3c4ee165c472dd.png', description: ''},
    {title: 'USB', src: '/images/customers/284167d2a5d2691e56acdb7bcbc9cc9e.png', description: ''},
  ],
  menu: [
    { name: 'Главная', link: '/', key: '1', icon: ''},
    { name: 'Oracle', link: '/oracle', key: '2', icon: ''},
    { name: 'Администрирование', link: '/administration', key: '3', icon: ''},
    { name: 'Разработка', link: '/development', key: '4', icon: ''},
    { name: 'Тендеры', link: '/tenders', key: '5', icon: ''},
    { name: 'Продвижение', link: '/promotion', key: '6', icon: ''},
    { name: 'Обучение персонала', link: '/education', key: '7', icon: ''},
    { name: 'Скачать презентацию', link: '/docs/markiting-wd.pdf', key: '8', icon: '', target: '_blank'},
  ]
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
  },
  customers: (state) => state.customers,
  menu: (state) => state.menu,
  formsFields: (state) => state.formsFields
}
