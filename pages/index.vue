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
        { title: '', subtitle: '', image: '/images/cards/card-1.jpg', link: '/oracle' },
        { title: '', subtitle: '', image: '/images/cards/card-2.jpg', link: '/administration' },
        { title: '', subtitle: '', image: '/images/cards/card-3.jpg', link: '/development' },
        { title: '', subtitle: '', image: '/images/cards/card-4.jpg', link: '/tenders' },
        { title: '', subtitle: '', image: '/images/cards/card-5.jpg', link: '/promotion' },
        { title: '', subtitle: '', image: '/images/cards/card-6.jpg', link: '/education' },
      ]
    }
  },
  methods: {}
}
</script>

