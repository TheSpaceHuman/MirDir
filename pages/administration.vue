<template>
  <div>
    <TheBanner image="/images/banners/stockvault-global-network-connecting-the-globe-globalization263891.jpg">
      <h1 class="banner-title">ОБСЛУЖИВАНИЕ И АДМИНИСТРИРОВАНИЕ БАЗ ДАННЫХ</h1>
      <ul class="banner-list">
        <li>Oracle</li>
        <li>MySQL</li>
        <li>Microsoft SQL</li>
        <li>Postgre SQL</li>
      </ul>
      <TheButton type="danger" @click="openModal">Заказать аудит баз данных</TheButton>
    </TheBanner>
    <section class="block-1 py-50">
      <div class="container">
        <a-row type="flex">
          <a-col :xs="24" :md="12">
            <h2 class="h2 text-uppercase text-bold mb-20">Нам доверяют</h2>
            <p class="w--490">{{ getYear }} лет успешной работы на рынках России, Европы, СНГ, включая масштабные
              федеральные проекты для госсектора</p>
          </a-col>
          <a-col :xs="24" :md="6">
            <span class="big-number mb-20">{{SITE.projects}}</span>
            <p>реализованных проекта</p>
          </a-col>
          <a-col :xs="24" :md="6">
            <span class="big-number mb-20">{{SITE.data}}</span> <strong class="color--tertiary">терабайт</strong>
            <p>данных у нас на обслуживании</p>
          </a-col>
        </a-row>
        <div class="pt-50">
          <TheCustomers :items="customers"/>
        </div>
      </div>
    </section>
    <section class="block-2 bg-neutral-primary py-50">
      <div class="container">
        <h2 class="h2 text-uppercase text-bold mb-20">90% Банков и ритейлов теряли деньги...</h2>
        <p class="w--490">из-за медленной и некачественной работы баз данных</p>
        <a-row type="flex" class="py-50">
          <a-col :xs="24" :md="8">
            <GrayCard title="Документы" class="mb-20">
              <ul>
                <li>Заканчивается место на диске</li>
                <li>Ошибки документооборота</li>
                <li>Долгая загрузка</li>
              </ul>
            </GrayCard>
            <GrayCard title="Касса">
              <ul>
                <li>Не проходит обновление ценников</li>
                <li>Не привязываются скидки</li>
                <li>Виснет касса</li>
              </ul>
            </GrayCard>
          </a-col>
          <a-col :xs="24" :md="8">
            <img src="/images/administration.page/e96aebf877ee49fc9f90dd87be995c52.png" alt="Диаграма" style="width: 80%;margin: 0 auto;">
          </a-col>
          <a-col :xs="24" :md="8">
            <GrayCard title="Финансы">
              <ul>
                <li>Невозможно внести данные</li>
                <li>Невозможно построить отчет</li>
                <li>Невозможно правильно расчитать бюджет на следующий период</li>
              </ul>
            </GrayCard>
          </a-col>
        </a-row>

      </div>
    </section>

  </div>
</template>

<script>
  import TheBanner from '~/components/base/TheBanner.vue'
  import TheButton from '~/components/base/TheButton.vue'
  import TheCustomers from '~/components/blocks/TheCustomers.vue'
  import GrayCard from '~/components/base/GrayCard.vue'
  import SITE from  '~/dictionary/site'

  export default {
    name: "administration",
    components: {
      TheBanner, TheButton, TheCustomers, GrayCard
    },
    computed: {
      getYear() {
        const before = new Date(2008, 1, 15).getFullYear()
        const after = new Date().getFullYear()
        return after - before
      }
    },
    data() {
      return {
        SITE,
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
        ]
      }
    },
     methods: {
       openModal() {
         this.$store.commit('toggleModal', 'formNameEmail')
       }
     }
  }
</script>


