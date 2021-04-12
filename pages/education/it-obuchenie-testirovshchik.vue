<template>
  <section class="page-tester">
    <TheBanner image="/images/education/fon1.jpg">
      <h1 class="banner-title">{{ title }}</h1>
      <TheButton type="danger" @click="openModal('formQuestionnaire')">Анкета кандидата на обучение</TheButton>
    </TheBanner>
    <div class="container">
      <h2 class="h2 my-30">Профессия тестировщик ПО в настоящее время востребована на рынке ИТ. Это один из самых простых способов войти в IT-сферу. Вакансий много, возможен быстрый профессиональный рост. Во всех «IT-школах» это самая популярная специальность. Сюда идет самый большой поток обучающихся. Более 80% начинают работать тестировщиком в течение полугода. Через 2 года зарплата у половины вырастает в среднем в 2-3 раза.</h2>
      <the-carousel class="mb-30">
        <div v-for="(image, index) in carousel" :key="index">
          <img :src="image" :alt="'Вакансия ' + index">
        </div>
      </the-carousel>
    </div>
    <div class="fon-1 py-30">
      <div class="container">
        <WhyAreWe :items="why" />
      </div>
    </div>
    <div class="container py-30">
      <h3 class="h3 text-center text-bold mb-20">ЧЕМУ ВЫ НАУЧИТЕСЬ И ЧТО БУДЕТЕ УМЕТЬ</h3>
      <a-row class="skills" :gutter="16">
        <a-col :sm="24" :md="8" v-for="(skill, index) in skills" :key="index">
          <div v-html="skill"></div>
        </a-col>
      </a-row>
    </div>
    <div class="fon-1 py-30">
      <div class="container mb-20">
        <h4 class="h4 text-center text-bold mb-20">Стажировка с гарантированным трудоустройством от компании МИР ДАННЫХ ИТ для лучших выпускников</h4>
        <p>Наша цель — ваше трудоустройство и успех в профессии.</p>
        <p>Целью программы обучения является подготовка Тестировщика ПО под конкретные задачи и проекты.</p>
        <p>Наш курс для тех,</p>
        <p>- кто хочет сменить профессию</p>
        <p>- кто уже развивается в IT-сфере</p>
        <p>Мы дадим всю необходимую тестировщику теоретическую базу и познакомим с необходимыми инструментами для уверенного старта в профессии. Вы не только освоите востребованные навыки специалиста по тестированию, но и приобрете практическим опыт на учебном проекте.</p>
        <p>Курс проводится в онлайн-режиме.</p>
        <p>По окончании курса слушатели, успешно прошедшие его, получат сертификат, а также возможность пройти стажировку в течение 3 месяцев и закрепить полученные в ходе обучения навыки. Чтобы попасть на курс, <a href="#" class="accent-link" @click.prevent="openModal('formQuestionnaire')">заполните анкету</a> или заполните форму <a href="#" class="accent-link" v-scroll-to="'#page-form'">ниже</a></p>
      </div>
    </div>
    <div class="container py-30">
      <h4 class="h4 text-center mb-30">Программа обучения «Функциональное тестирование ПО»</h4>
      <TheTimeline :items="timeline" />
    </div>
    <ParCertificate />
    <div class="container my-50 d-flex justify-content-center">
      <a-button type="danger" :disabled="true">Узнать стоимость и оплатить</a-button>
    </div>
    <div class="container my-50" id="page-form">
      <a-row type="flex">
        <a-col :xs="24" :sm="24" :md="{span: 12, offset: 6}">
          <MainForm
            title="По вопросам обучения. Свяжитесь с нами"
            button-title="Перезвоните мне"
            button-alight="center"
            mail-to="tc@mir-dit.ru"
            :fields="$store.getters.formsFields.namePhone"
          ></MainForm>
        </a-col>
      </a-row>
    </div>
  </section>
</template>

<script>
import TheBanner from '~/components/base/TheBanner.vue'
import TheCarousel from '~/components/base/TheCarousel.vue'
import ApplicationForTraining from '~/components/blocks/ApplicationForTraining.vue'
import MainForm from '~/components/forms/MainForm.vue'
import WhyAreWe from '~/components/blocks/WhyAreWe.vue'
import TheTimeline from '~/components/base/TheTimeline.vue'
import ParCertificate from "~/components/partials/ParCertificate";
import TheButton from "~/components/base/TheButton";
export default {
  name: "Tester",
  head() {
    return {
      titleTemplate: this.title,
    }
  },
  components: {
    TheButton,
    ParCertificate, TheBanner, TheCarousel, ApplicationForTraining, MainForm, WhyAreWe, TheTimeline },
  data() {
    return {
      title: 'Тестировщик ПО Обучение и стажировка',
      carousel: ['/images/education/tester/_1.jpg', '/images/education/tester/_2.jpg', '/images/education/tester/_3.jpg', '/images/education/tester/_4.jpg'],
      why: [
        {
          title: 'Обучение под конкретные реальные проекты',
          content: 'Вы приобретете базовые навыки разработки тестовой документации для функционального веб-тестирования'
        },
        {
          title: 'Наставник',
          content: 'В течение всего обучения у вас будет личный Наставник. Он поможет вам быстро разобраться со всеми проблемами, на которые в ином случае ушли бы недели. Также он проверит выполнение практических работ после каждого блока обучения и проведет один раз в неделю вебинар с разбором материала и ответами на вопросы.'
        },
        {
          title: 'Практика в специально разработанном учебном проекте',
          content: 'Вы отработаете на практике все этапы процесса тестирования. Поработаете над Проектом, длительностью 1 месяц с 2 спринтами разработки (периоды работы с указанием этапа доработок программного продукта).'
        }
      ],
      skills: [
        '<ul><li>Понимать базовые термины тестирования и выполнять все востребованные виды тестирования в IT</li><li>Освоите принципы проведения тестирования с документацией и при ее отсутствии, получите практический опыт по составлению тестовой документации</li></ul>',
        '<ul><li>Тестировать REST API с применением самых популярных инструментов (Postman, SoapUI, Swagger)</li><li>Приобретете базовые навыки работы с SQL</li><li>Отработаете возможности применения популярных плагинов и утилит для качественной работы тестировщика</li></ul>',
        '<ul><li>Тестировать веб-продукты и пользоваться панелью разработчика</li><li>Получите опыт тестирования требований</li><li>Работать с трекинговой системой JIRA и с инструментами ведения чек-листов и тест-кейсов (JIRA, TestLink)</li></ul>'
      ],
      timeline: [
        {
          title: 'Работа с багрекером',
          content: `
          <ul>
            <li>Что такое баг-трекер и какие баг-трекеры бывают.</li>
            <li>Что такое баг, ошибка, дефект и в чем разница.</li>
            <li>Жизненный цикл бага.</li>
            <li>Атрибуты бага и зачем они нужны, как и кем используются.</li>
          </ul>
          `,
        },
        {
          title: 'Теория тест-анализа, основные техники тест-анализа',
          content: `
          <ul>
            <li>Основные техники тест-анализа (эквивалентное разбиение, граничные значения, анализ состояний и переходов, таблицы решений, попарное тестирование)</li>
          </ul>
          `,
        },
        {
          title: 'Тестирование без требований',
          content: `
          <ul>
            <li>Исследовательское тестирование и какие есть подводные камни при таком виде тестирования.</li>
            <li>Отсутствие требований, разбор основных методов исследовательского тестирования (предугадывание ошибок, тестирование на основе чек-листов, тестирование методом свободного поиска, использование тест-туров, сессий тестирования)</li>
          </ul>
          `,
        },
        {
          title: 'Особенности тестирования',
          content: `
          <ul>
            <li>Тестирование веб-приложений</li>
            <li>Инструментарий для тестов веб-приложений.</li>
            <li>Тестирование веб-сервисов с помощью Postman и Swagger.</li>
            <li>Тестирование пользовательского интерфейса.</li>
          </ul>
          `,
        },
        {
          title: 'Разработка тест-дизайна',
          content: `
          <ul>
            <li>Варианты тестовой документации,</li>
            <li>Инструментарий для разработки тест-дизайнов</li>
            <li>Сервисы Google, TestLink, плагин Test Management for JIRA</li>
          </ul>
          `,
        },
        {
          title: 'Отработка практических заданий после каждого урока с проверками от наставника и рекомендациями',
          content: ``,
        },
      ]
    }
  },
  methods: {
    openModal(name) {
      this.$store.commit('toggleModal', name)
    },
  }
}
</script>

<style lang="scss">
  .skills {
    ul, li {
      list-style: unset;
    }
    ul {
      padding-left: 18px;
    }
  }
</style>
