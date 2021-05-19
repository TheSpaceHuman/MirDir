<template>
  <section class="page-mobile-testers">
    <TheBanner image="/images/education/mobile-tester/smartphone-1701086.jpg">
      <h1 class="banner-title">{{ title }}</h1>
      <TheButton type="danger" @click="openModal('formQuestionnaireMobileTester')">Анкета кандидата на обучение</TheButton>
    </TheBanner>
    <div class="container py-30">
      <h2 class="h2 mb-20">Какие мобильные устройства бывают</h2>
      <p class="mb-10"><b>Особенности смартфонов</b></p>
      <ul class="list-default">
        <li>Операционная система</li>
        <li>Многозадачность</li>
        <li>Многофункциональность</li>
        <li>Интерфейсы</li>
        <li>Фрагментация</li>
      </ul>
    </div>
    <div class="container py-30">
      <h2 class="h2 mb-20">Какие мобильные приложения бывают</h2>
      <p class="mb-10"><b>Частые дефекты в тестировании мобильных приложений</b></p>
      <ul class="list-default mb-20">
        <li>Остановка работы приложения</li>
        <li>Ошибки в поддержке разных версий ОС, браузеров и устройств</li>
        <li>Сбои при отображении на экранах разного разрешения</li>
        <li>Дефекты в локализации приложения</li>
        <li>Облачное тестирование мобильного приложения</li>
      </ul>
      <p class="mb-10"><b>Чек-листы проверок мобильных приложений</b></p>
      <ul class="list-default mb-20">
        <li>Функциональное тестирование</li>
        <li>Тестирование совместимости</li>
        <li>Тестирование безопасности</li>
        <li>Тестирование локализации и глобализации</li>
        <li>Тестирование удобства использования</li>
        <li>Стрессовое тестирование</li>
        <li>Кросс-платформенное тестирование</li>
        <li>Тестирование производительности</li>
      </ul>
      <p><em>Практическая работа: Подготовительные работы для теста Мобильного приложения.</em></p>
    </div>
    <div class="container py-30">
      <h2 class="h2 mb-20">Обмен данными МП и сервера</h2>
      <p class="mb-10"><b>На чём тестировать МП – Симуляторы, эмуляторы и фермы устройств</b></p>
      <ul class="list-default">
        <li>Симуляторы, эмуляторы<br><em>Практическая работа: Выбор мобильного устройства, установка Эмулятора</em></li>
        <li>Фермы устройств<br><em>Практическая работа: Аренда устройства на ферме устройств.</em></li>
      </ul>
    </div>
    <div class="container py-30">
      <h2 class="h2 mb-20">Использование перехватчиков трафика (Fiddler)</h2>
      <p class="mb-10"><b>Операции над запросами в Fiddler</b></p>
      <p><em>Практическая работа: Учимся перехватывать трафик и работать с ним.</em></p>
    </div>
    <div class="container py-30">
      <h2 class="h2 mb-20">Полезные утилиты для тестирования мобильных приложений</h2>
      <ul class="list-default mb-20">
        <li>Скриншоты, записи видео с экранов</li>
        <li>Утилиты удаляют системные и польз. приложения</li>
        <li>Временная почта</li>
        <li>Сервисы виртуальных номеров телефонов</li>
      </ul>
      <p class="mb-10"><b>Снятие логов</b></p>
      <p class="mb-10"><em>Практическая работа: Используем утилиты для мобильного тестирования.</em></p>
      <p class="mb-10"><b>Алгоритм тестирования Мобильных приложений</b></p>
      <ul class="list-default mb-20">
        <li>Анализ требований</li>
        <li>Планирование тестирования</li>
        <li>Разработка тестов</li>
        <li>Выполнение тестирования</li>
        <li>Анализ результатов</li>
      </ul>
      <p><em>Итоговая практическая работа: Провести полный цикл тестирования МП версии 2.0</em></p>
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
import TheBanner from "@/components/base/TheBanner";
import TheButton from "@/components/base/TheButton";
import MainForm from "@/components/forms/MainForm";

export default {
  name: "MobileTesters",
  components: { TheBanner, TheButton, MainForm },
  head() {
    return {
      titleTemplate: this.title,
    }
  },
  data() {
    return {
      title: 'Тестирование мобильных приложений'
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
