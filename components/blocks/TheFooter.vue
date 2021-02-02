<template>
  <footer class="footer" id="footer">
    <div class="container">
      <a-row type="flex">
        <a-col :xs="24" :sm="24" :md="6">
          <nuxt-link to="/">
            <img src="/images/logo.png" alt="Мир Данных ИТ - Логотип" class="footer__logo" title="Мир Данных ИТ">
          </nuxt-link>
        </a-col>
        <a-col :xs="24" :sm="24" :md="18">
          <div class="footer__links">
            <a :href="SITE.instagram" target="_blank">
              <font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon>
            </a>
            <a :href="SITE.facebook" target="_blank">
              <font-awesome-icon  :icon="['fab', 'facebook']"></font-awesome-icon>
            </a>
            <a :href="SITE.privacyPolicy" target="_blank">Политика приватности</a>
            <a :href="SITE.personalLink" target="_blank">Обработка данных</a>
          </div>
        </a-col>
      </a-row>
    </div>
  </footer>
</template>

<script>
  import  SITE from '~/dictionary/site'

  export default {
    name: "TheFooter",
    data: () => ({
      SITE
    }),
  }
</script>

<style>

</style>
