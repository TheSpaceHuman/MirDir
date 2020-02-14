<template>
    <figure :style="style" class="figure">
      <a-row type="flex">
        <a-col :xs="24" :md="{span: 12, offset: 12}" >
          <figcaption v-if="title" class="h4 text-uppercase text-bold text-center mb-30">{{title}}</figcaption>
          <slot></slot>
        </a-col>
      </a-row>
    </figure>
</template>

<script>
  export default {
    name: "BannerCard",
    props: {
      image: String,
      title: String,
      color: {
        type: String,
        default: '#000'
      }
    },
    data() {
      return {
        style: {
          backgroundImage: `url('${this.image}')`,
          color: this.color
        }
      }
    }
  }
</script>

<style lang="scss">
  .figure {
    padding: 70px 10px 70px;
    box-shadow: 6px 11px 20px 4px rgba(0,0,0,0.75);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
