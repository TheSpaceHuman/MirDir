<template>
  <div>
    <TheBanner image="/images/banners/stockvault-global-network-connecting-the-globe-globalization263891.jpg">
      <h1 class="banner-title">ОБСЛУЖИВАНИЕ И АДМИНИСТРИРОВАНИЕ БАЗ ДАННЫХ</h1>
      <ul class="banner-list banner-list--line mb-40">
        <li>Oracle</li>
        <li>MySQL</li>
        <li>Microsoft SQL</li>
        <li>Postgre SQL</li>
      </ul>
      <TheButton type="danger" @click="openModal('formNamePhone')">Заказать аудит баз данных</TheButton>
    </TheBanner>
    <section class="block-1 py-50">
      <div class="container">
        <a-row type="flex">
          <a-col :xs="24" :sm="24" :md="12">
            <h2 class="h2 text-uppercase text-bold mb-20">Нам доверяют</h2>
            <p class="w--490">{{ $store.getters.birthday }} лет успешной работы на рынках России, Европы, СНГ, включая масштабные
              федеральные проекты для госсектора</p>
          </a-col>
          <a-col :xs="24" :sm="24" :md="6">
            <span class="big-number mb-20">{{SITE.projects}}</span>
            <p>реализованных проекта</p>
          </a-col>
          <a-col :xs="24" :sm="24" :md="6">
            <span class="big-number mb-20">{{SITE.dataSupported}}</span> <strong class="color--tertiary">терабайт</strong>
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
          <a-col :xs="24" :sm="24" :md="8">
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
          <a-col :xs="24" :sm="24" :md="8">
            <img src="/images/administration.page/e96aebf877ee49fc9f90dd87be995c52.png" alt="Диаграма" style="width: 70%;margin: 0 auto;">
          </a-col>
          <a-col :xs="24" :sm="24" :md="8">
            <GrayCard title="Финансы">
              <ul>
                <li>Невозможно внести данные</li>
                <li>Невозможно построить отчет</li>
                <li>Невозможно правильно расчитать бюджет на следующий период</li>
              </ul>
            </GrayCard>
          </a-col>
        </a-row>
        <lazy-component>
          <BannerCard
            class="mt-50"
            image="/images/administration.page/367b7d52f215d68ead20fb77270c30ea.jpg"
            title="Ваша база данных - друг или враг?"
          >
            <p class="mb-30 text-center">Проверьте свою базу данных по нашему чек-листу и узнайте сильные и слабые места вашей системы</p>
            <a-row type="flex" justify="center">
              <TheButton type="danger" @click="openModal('formNameEmailPhone')">Скачать чек-лист</TheButton>
            </a-row>
          </BannerCard>
        </lazy-component>
      </div>
    </section>
    <section class="block-3 py-50">
      <div class="container">
        <h2 class="h2 text-uppercase text-bold mb-20">Добавьте до 30% к скорости баз данных</h2>
        <p><span class="color--secondary">Компания Мир Данных ИТ</span> занимается реализацией масштабных проектов обслуживания, контроля и обновления баз данных для средних и крупных предприятий</p>
        <div class="mt-30">
          <TheTabs :items="tabs" image="/images/logo.png" />
        </div>
      </div>
    </section>
    <section class="block-4 py-50">
      <div class="container">
        <h2 class="h2 text-uppercase text-bold mb-20">Гарантия вашего результата</h2>
        <a-row type="flex" :gutter="20">
          <a-col :xs="24" :sm="24" :md="6" v-for="(card, index) in warrantyCards" :key="index" class="mb-20">
            <WarrantyCard
              :title="card.title"
              :icon="card.icon"
              :description="card.description"
            />
          </a-col>
        </a-row>
        <div class="pt-50">
          <lazy-component>
            <BannerCard
            class="mt-50"
            image="/images/administration.page/144.jpg"
            title="Проверьте свою базу самостоятельно!"
            color="#fff"
          >
            <p class="mb-30 text-center">Скачайте чек-лист проверки БД, разработанный экспертами команды МИР ДАННЫХ ИТ</p>
            <a-row type="flex" justify="center">
              <TheButton type="danger" @click="openModal('formNameEmailPhone')">Скачать чек-лист</TheButton>
            </a-row>
          </BannerCard>
          </lazy-component>
        </div>
      </div>
    </section>
    <section class="block-5 bg-neutral-primary py-50">
      <div class="container">
        <h2 class="h2 text-bold text-uppercase mb-30">Что входит в обслуживание</h2>
        <p><span class="color--secondary">Ведение ваших баз данных</span> для проектов любой сложности и объема</p>
        <div class="py-50">
          <a-row type="flex">
            <a-col :xs="24" :sm="24" :md="12" v-for="(item, index) in numberList" :key="index">
              <NumberCard
                :number="item.number"
                :content="item.content"
              ></NumberCard>
            </a-col>
          </a-row>
        </div>
        <h2 class="h2 text-bold text-uppercase mb-30">А ещё...</h2>
        <a-row type="flex" :gutter="20">
          <a-col :xs="24" :sm="24" :md="8" v-for="(card, index) in warrantyCards2" :key="index" class="mb-20">
            <WarrantyCard
              :title="card.title"
              :icon="card.icon"
              :description="card.description"
              :transparent="card.transparent"
            />
          </a-col>
        </a-row>
      </div>
    </section>

  </div>
</template>

<script>
  import TheBanner from '~/components/base/TheBanner.vue'
  import TheButton from '~/components/base/TheButton.vue'
  import TheCustomers from '~/components/base/TheCustomers.vue'
  import GrayCard from '~/components/base/GrayCard.vue'
  import BannerCard from '~/components/base/BannerCard.vue'
  import TheTabs from '~/components/base/TheTabs.vue'
  import WarrantyCard from '~/components/base/WarrantyCard.vue'
  import NumberCard from '~/components/base/NumberCard.vue'
  import SITE from  '~/dictionary/site'
  import { mapGetters } from 'vuex';

  export default {
    name: "administration",
    components: {
      TheBanner, TheButton, TheCustomers, GrayCard, BannerCard, TheTabs, WarrantyCard, NumberCard
    },
    data() {
      return {
        SITE,
        tabs: [
          { title: 'Доступность данных', content: '<h3 class="h3 text-uppercase text-bold mb-20">Доступность данных</h3><ul><li>Обеспечение постоянного доступа к данным во избежание сбоя выполнения бизнес-процессов</li><li>Поддержка бесперебойной работы в реальном времени 24/7</li></ul>' },
          { title: 'Защита данных', content: '<h3 class="h3 text-uppercase text-bold mb-20">Защита данных</h3><ul><li>От несанкционированного доступа</li></ul>' },
          { title: 'Производительности', content: '<h3 class="h3 text-uppercase text-bold mb-20">Повышение производительности</h3><ul><li>Обеспечение оптимального времени отклика для эффективных бизнес-операций</li></ul>' },
          { title: 'Снижение расходов', content: '<h3 class="h3 text-uppercase text-bold mb-20">Снижение расходов</h3><ul><li>для оптимизации корпоративного бюджета</li></ul>' },
          { title: 'Минимизация рисков', content: '<h3 class="h3 text-uppercase text-bold mb-20">Минимизация рисков</h3><ul><li>долгосрочное, стабильное обеспечение требуемого уровня обслуживания с учетом развития бизнеса</li><li>без неожиданных больших затрат и разочарований</li></ul>' },
        ],
        warrantyCards: [
          { icon: 'bar-chart', title: 'Собственная система мониторинга', description: 'Используем систему, усиленную лучшим в классе решением <strong>Zabbix</strong>' },
          { icon: 'dashboard', title: 'Круглосуточная служба поддержки ', description: 'Обратная связь от 15 минут по удобному для вас каналу связи' },
          { icon: 'team', title: 'Сильная команда профессионалов', description: '<strong>Сертификаты</strong> Oracle Database, Microsoft SQL Server, MySQL, PostgreSQL' },
          { icon: 'setting', title: 'Проектирование и дизайн БД', description: 'Максимальная производительность базы данных благодаря новому дизайну и архитектуре' },
        ],
        warrantyCards2: [
          { icon: 'phone', title: 'ВНЕШНИЙ ОТДЕЛ ПРОДАЖ', description: 'Включая полный цикл продаж с контролем качества, пресейлом, апсейлом, работой с рекламациями', transparent: true },
          { icon: 'notification', title: 'ВНЕШНИЙ ТЕНДЕРНЫЙ ОТДЕЛ', description: '', transparent: true },
          { icon: 'message', title: 'ПРЕДОСТАВЛЕНИЕ СПЕЦИАЛИСТОВ', description: 'Под ваши конкретные проекты', transparent: true },
        ],
        numberList: [
          {number: 1, content: 'Анализ баз данных на наличие ошибок'},
          {number: 5, content: 'Разграничение прав доступа'},
          {number: 2, content: 'Установка обновления баз данных'},
          {number: 6, content: 'Резервное копирование '},
          {number: 3, content: 'Проверка на целостность баз данных'},
          {number: 7, content: 'Удаленное администрирование и обслуживание'},
          {number: 4, content: 'Построение структуры баз данных'},
          {number: 8, content: 'Обучение вашего персонала'},
        ]

      }
    },
    computed: {
      ...mapGetters([
        'customers'
      ])
    },
    methods: {
      // formNamePhone formNameEmail formNameEmailPhone
      openModal(name) {
        this.$store.commit('toggleModal', name)
      },
    }
  }
</script>


