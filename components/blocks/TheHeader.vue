<template>
    <header class="header" id="header">
      <div class="container">
        <section class="header__top-menu">
          <div class="header__top-menu-logo">
            <nuxt-link to="/">
              <img src="/images/logo.png" class="header__top-menu-logo-img" alt="WD">
            </nuxt-link>
          </div>
          <div class="header__top-menu-nav">
            <MainMenu />
          </div>
          <div class="header__top-menu-phone">
            <a :href="phone | phone-href">{{ phone | phone }}</a>
          </div>
        </section>
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
        phone: CONTACTS_CONST.phone
      }
    }
  }
</script>
