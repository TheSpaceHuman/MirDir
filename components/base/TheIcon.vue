<template>
  <div class="svg-icon">
    <svg class="svg-icon__svg" :style="svgStyle">
      <use :xlink:href="iconName"></use>
    </svg>
  </div>
</template>

<script>
  export default {
    name: "TheIcon",
    props: {
      name: {
        type: String,
        required: true,
      },
      width: {
        type: String,
        default: '50px',
      },
      height: {
        type: String,
        default: '50px',
      }
    },
    computed: {
      iconName() {
        return `#${this.name}`
      }
    },
    data() {
      return {
        svgStyle: {
          width: this.width,
          height: this.height,
        }
      }
    }
  }
</script>

<style lang="scss">
  .svg-icon {
    display: block;
    margin: 0 auto;
    &__svg {
      display: block;
      margin: 0 auto;
    }
  }
</style>
