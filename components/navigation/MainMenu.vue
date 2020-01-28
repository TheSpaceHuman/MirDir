<template>
    <nav class="main-menu">
      <a-menu v-model="activeItem" mode="horizontal" class="main-menu__items">
        <a-menu-item
          class="main-menu__item"
          v-for="item in items"
          :key="item.key"
        >
          <nuxt-link :to="item.link"><a-icon v-if="item.icon" :type="item.icon" /> {{item.name}}</nuxt-link>
        </a-menu-item>
      </a-menu>
    </nav>
</template>

<script>
  export default {
    name: "MainMenu",
    props: {
      items: {
        type: Array,
        default: () => [
          { name: 'Главная', link: '/', key: '1', icon: ''},
          { name: 'Oracle', link: '/oracle', key: '2', icon: ''},
          { name: 'Администрирование', link: '/administration', key: '3', icon: ''},
          { name: 'Разработка', link: '/development', key: '4', icon: ''},
          { name: 'Тренды', link: '/trends', key: '5', icon: ''},
        ]
      },
    },
    data() {
      return {
        activeItem: [],
      }
    },
    methods: {
      initMenu() {
        const currentPage = this.items.filter(el => {
          return el.link === this.$route.path
        });
        if(currentPage.length) {
          this.activeItem =  [currentPage[0].key]
        } else {
          this.activeItem =  [this.items[0].key]
        }
      }
    },
    computed: {
    },
    created() {
      this.initMenu();
    }
  }
</script>

<style scoped lang="scss">
  .main-menu {

    &__items {
      border-color: transparent;
    }
    &__item {}
  }
</style>
