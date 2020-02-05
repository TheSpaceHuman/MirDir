<template>
  <div class="default-layout" id="default-layout">
    <TheHeader />
    <main class="main">
      <nuxt />
    </main>
    <TheFooter />
    <ArrowUp />
  </div>
</template>

<script>
  import TheHeader from '~/components/blocks/TheHeader.vue'
  import TheFooter from '~/components/blocks/TheFooter.vue'
  import ArrowUp from '~/components/base/ArrowUp.vue'

  export default {
    components: {
      TheHeader, TheFooter, ArrowUp
    }
  }
</script>
