<template>
  <section class="page-rpa-programmer">
    <TheBanner image="/images/education/rpa-programmer/lWq2Aqg8TbKrsYwyOt6M_dreamstime_l_37675810.jpg">
      <h1 class="banner-title">{{ title }}</h1>
      <TheButton type="danger" @click="openModal('formQuestionnaire')">Анкета кандидата на обучение</TheButton>
    </TheBanner>
    <div class="container py-40">
      <strong>Программист Primo RPA</strong>
      <p>
        RPA (Robotic process automation) технология роботизации бизнес-процессов компании – это новое направление, набирающее популярность среди российских и зарубужных компаний. Основная цель внедрения этой технологии заключается в оптимизации бизнес-процессов и сокращении затрат на рутинные задачи.
      </p>
      <p>
        Primo – это российская система RPA, объединяющая передовой опыт лидеров в этой области. Программист RPA должен понимать возможности и ограничения этой технологии, уметь разрабатывать новые RPA алгоритмы и поддерживать существующие RPA, дорабатывать RPA алгоритмы при изменении бизнес-процессов.
      </p>
      <p>
        Мы научим вас оценивать потенциал роботизации бизнес-процессов, разрабатывать алгоритмы автоматизации процессов в соответствии с поставленной задачей.
      </p>
    </div>
    <div class="fon-1 py-30">
      <div class="container">
        <WhyAreWe :items="why" />
      </div>
    </div>
    <div class="container py-40">
      <h2 class="h2 text-center">ЧЕМУ ВЫ НАУЧИТЕСЬ И ЧТО БУДЕТЕ УМЕТЬ</h2>
      <a-row class="py-20">
        <a-col :sm="24" :md="8">
          <ul class="list-default">
            <li>Научитесь собирать и анализировать бизнес-требования для проектов по автоматизации процессов с использованием технологии RPA;Научитесь разрабатывать и модифицировать программных роботов</li>
          </ul>
        </a-col>
        <a-col :sm="24" :md="8">
          <ul class="list-default">
            <li>Научитесь разрабатывать архитектуру решения с использованием очередей, расписаний и триггеров запуска</li>
            <li>Освоите тестирование разработанных программных роботов, сопровождение и запуск в эксплуатацию</li>
          </ul>
        </a-col>
        <a-col :sm="24" :md="8">
          <ul class="list-default">
            <li>Научитесь оценивать потенциал роботизации бизнес-процессов</li>
            <li>Освоите масштабирование программных роботов (RPA)</li>
          </ul>
        </a-col>
      </a-row>
    </div>
    <div class="fon-1 py-30">
      <div class="container">
        <h3 class="h3 mb-20 text-center text-bold">Стажировка с последующим трудоустройством от компании МИР ДАННЫХ ИТ для лучших выпускников</h3>
        <p>Наша цель — ваше трудоустройство и успех в профессии.</p>
        <p>Целью программы обучения является подготовка системного/бизнес аналитика под конкретные задачи и проекты.</p>
        <p>Наш курс для тех:</p>
        <p>- кто хочет сменить профессию</p>
        <p>- кто уже развивается в IT-сфере</p>
        <p>Мы дадим всю необходимую теоретическую базу и познакомим с необходимыми инструментами для уверенного старта в профессии. Вы не только освоите востребованные навыки системного/бизнес аналитика, но и приобрете практическим опыт на учебном проекте.</p>
        <p>Курс проводится в онлайн-режиме.</p>
        <p>По окончании курса слушатели, успешно прошедшие его, получат сертификат, а также возможность пройти стажировку в течение 3 месяцев и закрепить полученные в ходе обучения навыки. Чтобы попасть на курс, <a href="#" class="accent-link" @click.prevent="openModal('formQuestionnaire')">заполните анкету</a> или заполните форму <a href="#" class="accent-link" v-scroll-to="'#page-form'">ниже</a></p>
      </div>
    </div>
    <div class="container py-30">
      <h4 class="h4 text-center mb-30">Программа обучения</h4>
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
            :fields="$store.getters.formsFields.namePhone"
          ></MainForm>
        </a-col>
      </a-row>
    </div>
  </section>
</template>

<script>
import TheBanner from '~/components/base/TheBanner.vue'
import MainForm from '~/components/forms/MainForm.vue'
import WhyAreWe from "~/components/blocks/WhyAreWe";
import TheTimeline from "~/components/base/TheTimeline";
import ParCertificate from "~/components/partials/ParCertificate";
import TheButton from "~/components/base/TheButton";
export default {
  name: "primo-rpa-programmer",
  components: {TheButton, ParCertificate, TheTimeline, WhyAreWe, TheBanner, MainForm },
  head() {
    return {
      titleTemplate: this.title
    }
  },
  data() {
    return {
      title: 'Программист Primo RPA',
      why: [
        {
          title: 'Обучение под конкретные реальные проекты',
          content: 'Вы приобретете базовые навыки бизнес и системной аналитики'
        },
        {
          title: 'Наставник',
          content: 'В течение всего обучения у вас будет личный Наставник. Он поможет вам быстро разобраться со всеми проблемами, на которые в ином случае ушли бы недели. Также он проверит выполнение практических работ после каждого блока обучения и проведет один раз в неделю вебинар с разбором материала и ответами на вопросы.'
        },
        {
          title: 'Практика в специально разработанном учебном проекте',
          content: 'Отработка на практике всех этапов процесса аналитики. Моделирование работы над Проектом.'
        }
      ],
      timeline: [
        {
          title: 'Переменные и типы данных',
          content: `
            <ul class="list--disk">
                <li>Работа с переменными</li>
                <li>Тип данных Массив</li>
                <li>Работа с типом данных Строка</li>
                <li>Работа с типом данных Список и Словарь</li>
                <li>Работа с типом данных Таблица, работа с Excel</li>
            </ul>
          `,
        },
        {
          title: 'Использование циклов',
          content: `
            <ul class="list--disk direction--rtl ">
                <li>Циклы Do-While, While и оператора If-Else</li>
                <li>Цикл For Each и конструкция Switch</li>
            </ul>
          `,
        },
        {
          title: 'UI и обработка ошибок',
          content: `
            <ul class="list--disk">
                <li>Взаимодействие с UI</li>
                <li>Обработка ошибок</li>
            </ul>
          `,
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

<style scoped>

</style>
