<template>
    <div class="post-card">
      <div class="post-card__img">
        <img :src="image" :alt="title" :title="title">
      </div>
      <div class="post-card__content">
        <h3 class="post-card__title">{{ title }}</h3>
        <p class="post-card__description">{{ description }}</p>
        <nuxt-link :to="`/articles/${id}`">
          <TheButton type="primary">Читать</TheButton>
        </nuxt-link>
      </div>
    </div>
</template>

<script>
import TheButton from '~/components/base/TheButton.vue'
export default {
  name: "PostCard",
  props: {
    title: String,
    description: String,
    image: String,
    id: String | Number
  },
  data() {
    return {}
  },
  components: {
    TheButton
  },
  methods: {
    openPost() {
      this.$router.push(`/articles/${this.id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils/vars";
.post-card {
  margin-bottom: 25px;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  &__title {
    font-weight: 700;
    margin-bottom: 12px;
  }
  &__description {
    color: #2f2f2f;
    margin-bottom: 12px;
  }
  &__content {
    padding: 0 18px;
    flex: 1 1 70%;
    height: 100%;
  }
  &__img {
    flex: 1 1 30%;
    min-width: 320px;
    img {
      object-fit: cover;
      height: 210px;
      width: 100%;
    }
  }
}
</style>
