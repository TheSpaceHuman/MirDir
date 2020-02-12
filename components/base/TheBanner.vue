<template>
    <section class="banner" :style="bannerStyle">
      <div class="banner__image" :style="bannerImageStyle" v-if="image"></div>
      <div class="banner__color" :style="bannerColorStyle" v-else></div>
      <div class="banner__content">
        <slot></slot>
      </div>
    </section>
</template>

<script>
  export default {
    name: "TheBanner",
    props: {
      image: String,
      color: {
        type: String,
        default: '#000'
      },
      height: {
        type: String,
        default: '550px'
      }
    },
    data() {
      return {
        bannerStyle: {
          minHeight: this.height,
        },
        bannerImageStyle: {
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundImage: 'url("' + this.image +'")',
          zIndex: -1,
        },
        bannerColorStyle: {
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: this.color,
          zIndex: -1,
        }
      }
    }
  }
</script>

<style lang="scss">
  .banner {
    position: relative;
    text-align: center;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    &__image::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0,0,0, 0.6);
      z-index: -1;
    }
  }
</style>
