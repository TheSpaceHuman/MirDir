<template>
  <footer class="footer" id="footer">
    <div class="container">
      <a-row type="flex">
        <a-col :xm="24" :md="6">
          <nuxt-link to="/">
            <img src="/images/logo.png" alt="" class="footer__logo">
          </nuxt-link>
        </a-col>
        <a-col :xm="24" :md="18">
          <div class="footer__links">
            <a href="/docs/Политика в отношении обработки персональных данных.pdf" target="_blank">Политика приватности</a>
            <a href="/docs/Согласие на обработку персональных данных.pdf" target="_blank">Обработка данных</a>
          </div>
        </a-col>
      </a-row>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "TheFooter"
  }
</script>

<style>

</style>
