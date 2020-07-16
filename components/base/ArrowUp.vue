<template>
    <a href="#" class="arrow-up" v-scroll-to="'#default-layout'" v-if="windowScroll > 200">
      <a-icon type="up-circle"  class="arrow-up__icon" theme="filled" />
    </a>
</template>

<script>
  export default {
    name: "ArrowUp",
    data() {
      return {
        windowScroll: 0,
      }
    },
    methods: {
      windowScrollHandler(e) {
        this.windowScroll = window.scrollY
      }
    },
    created() {
      if(process.client) {
        window.addEventListener('scroll', this.windowScrollHandler)
      }
    },
    beforeDestroy() {
      if(process.client) {
        window.removeEventListener('scroll', this.windowScrollHandler)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .arrow-up {
    position: fixed;
    bottom: 13%;
    right: 4%;
    z-index: 200;
    &__icon {
      font-size: 35px;
      svg {
        width: 40px!important;
        height: 40px!important;
      }
    }
  }
</style>
