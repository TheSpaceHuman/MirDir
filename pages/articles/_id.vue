<template>
  <div class="post-detail">
    <div class="container">
      <h1 class="post-detail__title">{{ post.title }}</h1>
      <section class="post-detail__content" v-html="post.content"></section>
      <div class="container mt-50 mb-50">
        <a-row type="flex">
          <a-col :xs="24" :sm="24" :md="{span: 12, offset: 6}">
            <MainForm
              title="По вопросам сотрудничества и партнерства. Свяжитесь с нами"
              button-title="Перезвоните мне"
              button-alight="center"
              :fields="$store.getters.formsFields.namePhone"
            ></MainForm>
          </a-col>
        </a-row>
      </div>
      <section class="post-detail__more mt-20 mb-20">
        <h3 class="text-center mb-20">Другие статьи</h3>
        <TheMore :items="more" />
      </section>
    </div>
  </div>
</template>

<script>
import TheMore from '~/components/blocks/TheMore.vue'
import MainForm from '~/components/forms/MainForm.vue'
export default {
  name: "PostDetail",
  components: {
    MainForm,
    TheMore
  },
  computed: {
    post() {
      return this.$store.getters.postById(this.$route.params.id)
    },
    more() {
      const excludePostAlias = this.post.alias
      const allPosts = this.$store.getters.posts
      const morePost = allPosts.filter((p) => p.alias !== excludePostAlias)
      return morePost.map((p) => ({
        title: p.shortTitle,
        url: `/articles/${p.alias}`,
        img: p.images[0].src
      }))
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
  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    margin-bottom: 15px;
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
