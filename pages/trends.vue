<template>
  <div>
    <TheBanner image="/images/banners/laptop-3196481_1920.jpg">
      <h1 class="banner-title mb-20">Центр разработки «МИР ДАННЫХ ИТ»</h1>
      <h2 class="banner-title text text-uppercase text-bold">Тендеры</h2>
    </TheBanner>
    <section class="py-50">
      <div class="container">
        <a-row type="flex">
          <a-col :xs="24" :sm="24" :md="12">
            <h3 class="h1 text-bold mb-20">Команда разработчиков на тендеры и субподряд под большие IT-проекты </h3>
            <span class="d-block mb-20">АУТСОРСИНГ и АУТСТАФФИНГ</span>
            <p>Качественная реализация федеральных и коммерческих проектов </p>
          </a-col>
          <a-col :xs="24" :sm="24" :md="12" class="px-30">
            <FormNamePhone
              title="Обсудите вопросы сотрудничества с ген.дир-ом"
              button-title="Есть разговор"
              button-alight="center"
              :col="1"
            ></FormNamePhone>
          </a-col>
        </a-row>
        <div class="pt-50">
          <CheckList :items="getCheckListItems"/>
        </div>
        <div class="pt-50">
          <TheCustomers :items="customers"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import TheBanner from '~/components/base/TheBanner.vue'
  import FormNamePhone from '~/components/forms/FormNamePhone.vue'
  import CheckList from '~/components/base/CheckList.vue'
  import TheCustomers from '~/components/base/TheCustomers.vue'
  import SITE from '~/dictionary/site'
  import { mapGetters } from 'vuex';


  export default {
    name: "trends",
    components: {
      TheBanner, FormNamePhone, CheckList, TheCustomers
    },
    data: () => ({
      SITE
    }),
    computed: {
      getCheckListItems() {
        let result = []
        const staff = this.SITE.staff
        let staffAllMembers = 0
        for(let key in this.SITE.staff) {
          staffAllMembers += staff[key]
        }

        result.push(`<strong class="d-block">${staffAllMembers} бойца:</strong><p>${staff.tester} тестировщиков, ${staff.analytic} аналитика, ${staff.developer} разработчиков, ${staff.technicalWriter} технических писателя, ${staff.stressTesting} эксперт по нагрузочному тестированию </p>`)
        result.push(`<strong class="d-block">${this.$store.getters.birthday} лет опыта и участие в ${this.SITE.projects} проектах.</strong><p>В том числе Федеральное казначейство, Росфинмониторинг </p>`)
        result.push(`<strong class="d-block">Технологии: </strong><p>${this.SITE.technology}</p>`)
        result.push(`<strong class="d-block">Сертификаты: </strong><p>${this.SITE.certificate}</p>`)

        return result;

      },
      ...mapGetters([
        'customers'
      ])
    }
  }
</script>

<style>

</style>
