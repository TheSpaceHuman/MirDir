<template>
    <header class="header" id="header" :class="top ? 'header--fixed': 'header--scroll'">
      <div class="container">
        <a-row type="flex" class="header__menu">
          <a-col :xs="8" :sm="8" :md="8" :lg="2" class="header__menu-logo">
            <nuxt-link to="/">
              <img src="/images/logo.png" class="header__menu-logo-img" alt="Мир Данных ИТ - Логотип" title="Мир Данных ИТ">
            </nuxt-link>
          </a-col>
          <a-col :lg="19" class="header__menu-nav">
            <MainMenu :items="$store.getters.menu" />
          </a-col>
          <a-col :xs="8" :sm="8" :md="8" :lg="3" class="header__menu-phone">
            <a :href="phone | phoneHref">{{ phone | phone }}</a>
          </a-col>
          <a-col :xs="8" :sm="8" :md="8" class="header__menu-mobile">
            <MainMenu :items="$store.getters.menu" :mobile="true" />
          </a-col>
        </a-row>
      </div>
    </header>
</template>

<script>
  import MainMenu from '~/components/navigation/MainMenu.vue'
  import CONTACTS_CONST from '~/dictionary/contact'

  export default {
    name: "TheHeader",
    components: {
      MainMenu
    },
    data() {
      return {
        phone: CONTACTS_CONST.phone,
        windowScroll: null,
      }
    },
    methods: {
      windowScrollHandler(e) {
        this.windowScroll = window.scrollY
      }
    },
    computed: {
      top() {
        return this.windowScroll === 0
      }
    },
    created() {
      if(process.client) {
        window.addEventListener('scroll', this.windowScrollHandler)
      }
    },
    mounted() {
      this.windowScroll = window.scrollY
    },
    beforeDestroy() {
      if(process.client) {
        window.removeEventListener('scroll', this.windowScrollHandler)
      }
    },
  }
</script>
