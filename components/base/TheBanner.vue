<template>
    <section class="banner" :style="style">
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
          backgroundImage: `url("${this.image}")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
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
  }
/*  .banner::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    opacity: 0.5;
  }*/
</style>
