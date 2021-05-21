<template>
  <div>
    <TheBanner image="/images/banners/POP-SW-header.jpg">
      <h1 class="banner-title">Центр разработки «МИР ДАННЫХ ИТ»</h1>
      <span class="banner-subtitle">{{ $store.getters.birthday }} лет практики.</span>
      <span class="banner-subtitle">100+ проектов и постоянных клиентов.</span>
      <span class="banner-subtitle">Широкий список сертификатов и технологий.</span>
      <span class="banner-subtitle">Офисы в 9 регионах страны - а значит адекватные цены.</span>
    </TheBanner>
    <section class="index-cards py-30">
      <div class="container">
        <a-row type="flex" :gutter="15">
          <a-col :xs="24" :sm="24" :md="12" :lg="8" v-for="(card, index) in cards" :key="index">
            <nuxt-link :to="card.link">
              <a-card  class="card mb-15" :hoverable="true" :bordered="false">
                <img v-lazy="card.image" :alt="card.title"  slot="cover" class="card__img">
                <div class="card__title" slot="cover" v-html="card.title"></div>
              </a-card>
            </nuxt-link>
          </a-col>
        </a-row>
      </div>
    </section>
    <div class="container mb-50">
      <a-row type="flex">
        <a-col :xs="24" :sm="24" :md="{span: 12, offset: 6}">
          <MainForm
            title="По вопросам сотрудничества и партнерства. Свяжитесь с нами"
            button-title="Перезвоните мне"
            button-alight="center"
            :fields="$store.getters.formsFields.namePhone"
          ></MainForm>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import TheBanner from '~/components/base/TheBanner.vue'
import TheButton from '~/components/base/TheButton.vue'
import MainForm from '~/components/forms/MainForm.vue'

export default {
  name: "index",
  components: {
    TheBanner, TheButton, MainForm,
  },
  data() {
    return {
      cards: [
        { title: '<p>Администрирование <br>баз данных</p>', subtitle: '', image: '/images/cards/1.jpg', link: '/administration' },
        { title: '<p>Разработка <br>программного <br>обеспечения</p>', subtitle: '', image: '/images/cards/2.jpg', link: '/development' },
        { title: '<p>Тендеры<br>Субподряд</p>', subtitle: '', image: '/images/cards/3.jpg', link: '/tenders' },
        { title: '<p>Продвижение <br>партнеров</p>', subtitle: '', image: '/images/cards/4.jpg', link: '/promotion' },
        { title: '<p>Обучение</p>', subtitle: '', image: '/images/cards/5.jpg', link: '/education' },
        { title: '<p>Диагностика систем <br>Oracle</p>', subtitle: '', image: '/images/cards/6.jpeg', link: '/oracle' },
      ]
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
  .fix--height {
    object-fit: cover;
    height: 210px;
  }
</style>

