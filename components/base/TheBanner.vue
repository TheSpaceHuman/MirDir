<template>
    <section class="banner" :style="style">
      <style>
        :root {
          --banner-image: url('{{image}}');
        }
      </style>
      <div class="banner__content">
        <slot></slot>
      </div>
    </section>
</template>

<script>
  export default {
    name: "TheBanner",
    props: {
      image: {
        type: String,
        require: true
      },
      height: {
        type: String,
        default: 'auto'
      }
    },
    data() {
      return {
        style: {
          minHeight: this.height,
          // backgroundImage: `url("${this.image}")`,
          // backgroundPosition: 'center',
          // backgroundSize: 'cover',
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/assets/scss/utils/vars";
  .banner {
    position: relative;
    text-align: center;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
  .banner::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: var(--banner-image);
    background-position: center;
    background-size: cover;
    z-index: -1;
  }
  .banner::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0, 0.6);
    z-index: -1;
  }

</style>
