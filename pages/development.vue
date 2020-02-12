<template>
  <div>
    <TheBanner image="/images/banners/computer-1209641_1920.jpg">
      <h1 class="banner-title">Центр разработки «МИР ДАННЫХ ИТ»</h1>
      <a-row type="flex">
        <a-col :xs="24" :md="{span: 12, offset: 6}">
          <h2 class="banner-subtitle h2 text-left mb-20">Сотрудничество с крупными системными интеграторами.</h2>
          <ul class="banner-list">
            <li>Проектирование</li>
            <li>Разработка проектной и эксплуатационной документации</li>
            <li>Тестирование конечного решения</li>
            <li>Сопровождение и эксплуатация внедренных решений от первичного анализа и разработки документации и продукта до тестирования конечного решения</li>
          </ul>
        </a-col>
      </a-row>
    </TheBanner>
    <div class="container py-50">
      <h2 class="h2 text-center mb-30">Мы уже внедрили ряд уникальных разработок в бизнес-процессы наших клиентов. Поможем претворить в жизнь все ваши гениальные идеи.</h2>
      <a-row type="flex">
        <a-col :xs="24" :md="{span: 12, offset: 6}">
          <FormNamePhone
            title="Оставьте контакты. Мы перезвоним."
            button-title="Перезвоните мне"
            button-alight="center"
            :col="1"
          ></FormNamePhone>
        </a-col>
      </a-row>
    </div>
    <TheBanner color="rgb(238, 238, 238)" height="300px" class="fz-20">
      <div class="container">
        <a-row type="flex">
          <a-col :xs="24" :md="{span: 14, offset: 5}" class="text-left">
            <h4 class="h4 mb-30">Удерживаем конкурентоспособные цены на весь спектр услуг</h4>
            <p class="mb-20">Работаем в 9 региноах России: Москва, Севастополь, Тула, Ростов-на-Дону, Челябинск, Калининград, Пушкино, Мытищи, Люберцы, Нижний Новгород и наша география продолжает расширяться.</p>
            <a-button type="primary" @click="openModal('formNameEmailPhone')">Сотрудничество</a-button>
          </a-col>
        </a-row>
      </div>
    </TheBanner>
    <div class="container py-50 bg-molecular-pattern">
      <h3 class="h3 text-center mb-30">{{ $store.getters.birthday }} лет в сфере ИТ разработки </h3>
      <p class="text-center mb-20">Технологические и эксплуатационные требования и уникальность каждого бизнеса - основа нашей работы</p>
      <p class="text-center">Безопасность - NDA</p>
      <p class="text-center mb-30">Взаимодействие - ЭДО</p>
      <p class="text-center">Мы готовы предоставить заказчику максимально подходящий вариант сотрудничества</p>
      <section class="development-cards py-30">
        <a-row type="flex">
          <a-col :xs="24" :md="8" v-for="(card, key) in cards" :key="key" class="p-15">
            <a-card>
              <img
                style="height: 380px;"
                :alt="card.title"
                :src="card.src"
                slot="cover"
              />
              <a-card-meta :title="card.title">
                <template slot="description">{{card.description}}</template>
              </a-card-meta>
            </a-card>
          </a-col>
        </a-row>

      </section>
    </div>
  </div>
</template>

<script>
  import TheBanner from '~/components/base/TheBanner.vue'
  import FormNamePhone from '~/components/forms/FormNamePhone.vue'

  export default {
    name: "development",
    data: () => ({
      cards: [
        { title: 'Аутсорсинг',  description: 'Работа наших специалистов в нашем офисе под управлением специалистами Заказчика удаленно', src: '/images/development.page/recruitment-3182373_640.jpg' },
        { title: 'Аутстаффинг',  description: 'Работа наших специалистов в офисе заказчика под управлением специалистами Заказчика', src: '/images/development.page/2.jpg' },
        { title: 'Классический подход',  description: 'Работа по техническому зданию в нашем офисе. Сдача реализованного решения специалистам Заказчика удаленно или в офисе Заказчика', src: '/images/development.page/contract-408216_640.jpg' },
      ]
    }),
    components: {
      TheBanner, FormNamePhone
    },
    methods: {
      // formNamePhone formNameEmail formNameEmailPhone
      openModal(name) {
        this.$store.commit('toggleModal', name)
      },
    }
  }
</script>

<style scoped>

</style>
