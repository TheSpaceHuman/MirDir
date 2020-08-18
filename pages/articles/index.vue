<template>
  <div class="page-articles">
    <div class="container">
      <h1 class="text-center h1 mb-20">Статьи и публикации</h1>
      <div class="page-articles__post-list">
        <PostCard v-for="(post, index) in $store.getters.posts"
                  :key="index"
                  :title="post.title"
                  :image="post.images[0].src"
                  :description="post.description"
                  :id="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PostCard from '~/components/base/PostCard.vue'
export default {
  name: 'Posts',
  components: { PostCard },
  head() {
    return {
      title: 'Статьи и публикации',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Статьи и публикации компании Мир данных ИТ'
        }
      ],
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
