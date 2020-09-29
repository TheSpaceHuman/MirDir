<template>
  <VueSlickCarousel :arrows="false" :dots="true" :slidesPerRow="3">
    <nuxt-link :to="item.url" class="more_item" v-for="item in items" :key="item.title">
      <img :src="item.img" :alt="item.title" class="more_item-img">
      <div class="more_item-text">
        <p class="more_item-text-p">{{ item.title }}</p>
      </div>
    </nuxt-link>
  </VueSlickCarousel>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  export default {
  name: "TheMore",
  components: { VueSlickCarousel },
  props: {
    items: {
      type: Array,
      default: () => ([
        {
          title: '1',
          url: '/1',
          img: '/images/articles/1.jpg'
        },
        {
          title: '2',
          url: '/1',
          img: '/images/articles/1.jpg'
        },
        {
          title: '3',
          url: '/1',
          img: '/images/articles/1.jpg'
        },
        {
          title: '4',
          url: '/1',
          img: '/images/articles/1.jpg'
        }
      ])
    }
  },
}
</script>

<style lang="scss" scoped>
.more_item {
  position: relative;
  padding: 10px;
  &-text {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    vertical-align: middle;
    display: none;
    &-p {
      width: 85%;
      font-size: 21px;
      color: #FFFFFF;
      font-weight: 700;
      background-color: rgba(0, 0, 0, 0.5);
      display: inline-block;
      padding: 8px;
    }
  }
  &:hover &-text {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    position: relative;
    cursor: pointer;
    margin: 0;
    width: 100%;
    height: 210px;
    object-fit: cover;
  }
}
</style>
