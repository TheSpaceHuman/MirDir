<template>
  <section class="page-tester">
    <TheBanner image="/images/education/fon1.jpg">
      <h1 class="banner-title">{{ title }}</h1>
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
        <h3 class="h2 text-center text-bold mb-20">Почему мы?</h3>
        <a-row class="why-items" :gutter="16">
          <a-col :sm="24" :md="8" v-for="item in why" class="why-item mb-10" :key="item.title">
            <h4 class="why-item__title">{{ item.title }}</h4>
            <p class="why-item__content">{{ item.content }}</p>
          </a-col>
        </a-row>
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
        <h4 class="h4 text-center text-bold mb-20">Стажировка с гарантированным трудоустройством от компании МИР ДАННЫХ ИТ</h4>
        <p>Наша цель — ваше трудоустройство и успех в профессии.</p>
        <p>Целью программы обучения является подготовка Тестировщика ПО под конкретные задачи и проекты.</p>
        <p>Наш курс для тех,</p>
        <p>- кто хочет сменить профессию</p>
        <p>- тем, кто уже развивается в IT-сфере</p>
        <p>Обучение ведется по направлению Тестировщик ПО — это специалист, который следит за качеством программных продуктов: сайтов, мобильных и веб-приложений. Он моделирует ситуации, которые могут возникнуть во время работы с программой, чтобы найти ошибки и исправить их. Мы дадим всю необходимую тестировщику теоретическую базу и познакомим с необходимыми инструментами для уверенного старта в профессии. Вы не только освоите востребованные навыки специалиста по тестированию, но и поработаете с настоящими проектами</p>
        <p>Курс проводится в онлайн-режиме в течение 3 календарных недель.</p>
        <p>По окончании курса специалисты зачисляются на испытательный срок к Заказчику.</p>
        <p>Для участия в отборе на стажерскую программу отправляй резюме и сопроводительное письмо в мессенджер Facebook и получи подробную программу курса и план обучения</p>
      </div>
      <ApplicationForTraining />
    </div>
    <div class="container py-30">
      <h4 class="h4 text-center mb-30">Программа обучения «Функциональное тестирование ПО»</h4>
      <a-timeline mode="alternate">
        <a-timeline-item>
          <div slot="dot" class="circle">1</div>
          <p class="text-bold">Работа с багрекером</p>
          <ul>
            <li>Что такое баг-трекер и какие баг-трекеры бывают.</li>
            <li>Что такое баг, ошибка, дефект и в чем разница.</li>
            <li>Жизненный цикл бага.</li>
            <li>Атрибуты бага и зачем они нужны, как и кем используются.</li>
          </ul>
        </a-timeline-item>
        <a-timeline-item>
          <div slot="dot" class="circle">2</div>
          <p class="text-bold">Теория тест-анализа, основные техники тест-анализа</p>
          <ul>
            <li>Основные техники тест-анализа (эквивалентное разбиение, граничные значения, анализ состояний и переходов, таблицы решений, попарное тестирование)</li>
          </ul>
        </a-timeline-item>
        <a-timeline-item>
          <div slot="dot" class="circle">3</div>
          <p class="text-bold">Тестирование без требований</p>
          <ul>
            <li>Исследовательское тестирование и какие есть подводные камни при таком виде тестирования.</li>
            <li>Отсутствие требований, разбор основных методов исследовательского тестирования (предугадывание ошибок, тестирование на основе чек-листов, тестирование методом свободного поиска, использование тест-туров, сессий тестирования)</li>
          </ul>
        </a-timeline-item>
        <a-timeline-item>
          <div slot="dot" class="circle">4</div>
          <p class="text-bold">Особенности тестирования</p>
          <ul>
            <li>Тестирование веб-приложений</li>
            <li>Инструментарий для тестов веб-приложений.</li>
            <li>Тестирование веб-сервисов с помощью Postman и Swagger.</li>
            <li>Тестирование пользовательского интерфейса.</li>
          </ul>
        </a-timeline-item>
        <a-timeline-item>
          <div slot="dot" class="circle">5</div>
          <p class="text-bold">Разработка тест-дизайна</p>
          <ul>
            <li>Варианты тестовой документации,</li>
            <li>Инструментарий для разработки тест-дизайнов</li>
            <li>Сервисы Google, TestLink, плагин Test Management for JIRA</li>
          </ul>
        </a-timeline-item>
        <a-timeline-item>
          <div slot="dot" class="circle">6</div>
          <p class="text-bold">Отработка практических заданий после каждого урока с проверками от наставника и рекомендациями</p>
        </a-timeline-item>
      </a-timeline>
    </div>
    <ApplicationForTraining class="mb-20" />
    <div class="fon-2 py-30">
      <div class="container font-white">
          <h4 class="h4 text-center text-bold font-white mb-20">СЕРТИФИКАТ для РАБОТОДАТЕЛЯ</h4>
          <p class="text-center fz-20">Сертификат получают после успешного выполнения всех практических заданий курса. Для работодателя это показатель, что ваш уровень знаний в тестировании высок. "Мир данных ИТ" имеет хорошую репутацию на рынке ИТ-услуг. Именно сертификат нашей компании продемонстрирует работодателю что обучение проводилось на таком же высоком уровне как и все что делает "Мир данных ИТ". Сертификат НЕ является документом об образовании и подтверждает только то, что вы прошли курс. Вы можете разместить ссылку на него в своем резюме, публичных профилях и любых других общедоступных местах, где Вы хотите сообщить о наличии у Вас сертификата.</p>
      </div>
    </div>
    <div class="container my-50">
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
import TheCarousel from '~/components/base/TheCarousel.vue'
import ApplicationForTraining from '~/components/blocks/ApplicationForTraining.vue'
import MainForm from '~/components/forms/MainForm.vue'
export default {
  name: "Tester",
  head() {
    return {
      titleTemplate: this.title,
    }
  },
  components: { TheBanner, TheCarousel, ApplicationForTraining, MainForm },
  data() {
    return {
      title: 'Тестировщик ПО Обучение и стажировка',
      carousel: ['/images/education/tester/_1.jpg', '/images/education/tester/_2.jpg', '/images/education/tester/_3.jpg', '/images/education/tester/_4.jpg', '/images/education/tester/_5.jpg'],
      why: [
        {
          title: 'Обучение под конкретные реальные проекты',
          content: 'Приобретете базовые навыки разработки тестовой документации для функционального веб-тестирования'
        },
        {
          title: 'Наставник',
          content: 'В течение всего обучения у вас будет личный Наставник. Проверка выполнения практических работ после каждого блока обучения, созвон раз в неделю, разбор материала, ответы на вопросы. Он поможет вам быстро разобраться со всеми проблемами, на которые в ином случае ушли бы недели'
        },
        {
          title: 'Практика в специально разработанном учебном проекте',
          content: 'Отработка на практике всех этапов процесса тестирования. Моделирование работы над Проектом, длительностью 1 месяц с 2 спринтами разработки программного продукта'
        }
      ],
      skills: [
        '<ul><li>Понимать базовые термины тестирования и выполнять все востребованные виды тестирования в IT</li><li>Освоите принципы проведения тестирования с документацией и при ее отсутствии, получите практический опыт по составлению тестовой документации</li></ul>',
        '<ul><li>Тестировать REST API с применением самых популярных инструментов (Postman, SoapUI, Swagger)</li><li>Приобретете базовые навыки работы с SQL</li><li>Отработаете возможности применения популярных плагинов и утилит для качественной работы тестировщиком</li></ul>',
        '<ul><li>Тестировать веб-продукты и пользоваться панелью разработчика</li><li>Получите опыт тестирования требований</li><li>Работать с баг-трекингом JIRA и с инструментами ведения чек-листов и тест-кейсов (JIRA, TestLink)</li></ul>'
      ]
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/utils/vars";
.fon-1 {
  background-color: #f5f5f5;
}
.fon-2 {
  background-color: $secondary-color;
}
.why-item {
  &__title {
    font-size: 21px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  &__content {}
}
.skills {
  ul, li {
    list-style: unset;
  }
  ul {
    padding-left: 18px;
  }
}
.circle {
  border: 1px solid $neutral-regular;
  color: $neutral-regular;
  border-radius: 50%;
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 17px;
  font-size: 13px;
}
  .font-white {
    color: $neutral-primary;
  }
</style>
