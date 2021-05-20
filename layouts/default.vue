<template>
    <div class="default-layout" id="default-layout">
      <SvgSprite />
        <TheHeader />
        <main class="main">
          <nuxt />
        </main>
        <TheFooter />
      <ArrowUp />
      <TheModals />
    </div>
</template>

<script>
  // perfect-scrollbar - dont work
  import TheHeader from '~/components/blocks/TheHeader.vue'
  import TheFooter from '~/components/blocks/TheFooter.vue'
  import ArrowUp from '~/components/base/ArrowUp.vue'
  import TheModals from '~/components/blocks/TheModals.vue'
  import SvgSprite from '~/components/blocks/SvgSprite.vue'

  export default {
    name: 'Layout',
    components: {
      TheHeader, TheFooter, ArrowUp, TheModals, SvgSprite
    }
  }
</script>
