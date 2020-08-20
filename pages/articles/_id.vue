<template>
  <div class="post-detail">
    <div class="container">
      <h1 class="post-detail__title">{{ post.title }}</h1>
      <!--<the-carousel>
        <div v-for="(image, index) in post.images" :key="index">
          <img :src="image.src" :alt="post.title" :title="post.title">
        </div>
      </the-carousel>-->
      <section class="post-detail__content" v-html="post.content"></section>
    </div>
  </div>
</template>

<script>
import TheCarousel from '~/components/base/TheCarousel.vue'
export default {
  name: "PostDetail",
  components: {
    TheCarousel
  },
  computed: {
    post() {
      return this.$store.getters.postById(this.$route.params.id)
    }
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description
        }
      ],
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/utils/vars";
.post-detail {
  strong {
    font-size: 1.5rem;
    font-weight: 700;
  }
  p {
    margin-bottom: 15px;
  }
  ul, ol {
    padding-left: 20px;
    margin-bottom: 15px;
    list-style: unset;
  }
  li {
    list-style: unset;
  }
  h1 {
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 15px;
  }
  h2 {
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
  h3 {
    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 15px;
  }
  &__title {
    font-weight: 300!important;
    font-size: 3rem!important;
    line-height: 1;
    color: $primary-color;
    margin-bottom: 25px;
  }
  &__content {}
}
</style>
