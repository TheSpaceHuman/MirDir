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
          <a-col :xs="24" :sm="24" :md="12" :lg="12" v-for="(card, index) in cards" :key="index">
            <nuxt-link :to="card.link">
              <a-card hoverable class="card mb-15">
                <img v-lazy="card.image" :alt="card.title"  slot="cover" class="card__img">
                <a-card-meta :title="card.title" :description="card.subtitle"/>
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
            title="Готовы ответить на любые вопросы"
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
    TheBanner, TheButton, MainForm
  },
  data() {
    return {
      cards: [
        { title: 'Администрирование баз данных', subtitle: '', image: '/images/cards/bandwidth-close-up-computer-connection-1148820.jpg', link: '/administration' },
        { title: 'Разработка программного обеспечения', subtitle: '', image: '/images/cards/person-using-silver-macbook-pro-1181467.jpg', link: '/development' },
        { title: 'Обучение персонала', subtitle: '', image: '/images/cards/top-view-photo-of-group-of-people-using-macbook-while-3182773.jpg', link: '/education' },
        { title: 'Продвижение партнеров', subtitle: '', image: '/images/cards/photo-of-people-near-wooden-table-3184418.jpg', link: '/promotion' },
        { title: 'Oracle', subtitle: '', image: '/images/cards/oracle.jpg', link: '/oracle' },
        { title: 'Тендеры. Конкурсы. Субподряд', subtitle: '', image: '/images/cards/sign-pen-business-document-48195.jpg', link: '/trends' },
      ]
    }
  },
  methods: {}
}
</script>

