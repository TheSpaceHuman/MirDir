<template>
    <nav class="main-menu">
      <div class="main-menu__mobile-wrapper"
           v-if="mobile"
           :class="{'is-active': activeHamburger}"
      >
        <button
          class="hamburger hamburger--collapse"
          :class="{'is-active': activeHamburger}"
          type="button"
          @click="toggleHamburger">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
        <transition
          name="mobile-menu-transition"
          enter-active-class="animated slideInLeft"
          leave-active-class="animated slideOutLeft"
        >
          <ul
            class="main-menu__mobile-items"
            v-if="activeHamburger">
            <li
              class="main-menu__mobile-item"
              :class="{'is-active': $route.path === item.link}"
              v-for="(item, key) in items"
              :key="key"
              @click="hideMobileMenu"
            >
              <nuxt-link :to="item.link" class="main-menu__mobile-link"><a-icon v-if="item.icon" :type="item.icon" /> {{item.name}}</nuxt-link>
            </li>
          </ul>
        </transition>

      </div>
      <a-menu v-model="activeItem" mode="horizontal" class="main-menu__items" v-else>
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
        required: true,
      },
      mobile: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        activeItem: [],
        activeHamburger: false,

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
      },
      toggleHamburger() {
        this.activeHamburger = !this.activeHamburger
      },
      hideMobileMenu() {
        this.activeHamburger = false
      }
    },
    created() {
      this.initMenu();
    },
    watch: {
      $route: {
        handler(val){
          this.initMenu()
        },
        deep: true
      }
    }
  }
</script>

<style lang="scss">
  @import "./../../assets/scss/utils/vars";

  .main-menu {
    a {
      font-size: inherit;
      color: inherit;
    }

    &__items {
      border-color: transparent;
    }
    &__item {}

    &__mobile-items {
      max-width: 320px;
      font-size: 21px;
      display: block;
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      padding: 45px 30px;
      background-color: $primary-color;
      color: $secondary-color;
    }
    &__mobile-wrapper {
      display: flex;
      justify-content: flex-end;
    }
    &__mobile-wrapper.is-active {
      &::before {
        content: "";
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,0.5);
        z-index: -1;
      }
    }

    &__mobile-item {
      border-bottom: 1px solid transparent;
      margin-bottom: 12px;
      &.is-active {
        color: $danger-color;
        border-color: $danger-color;
      }
      &:hover {
        color: $danger-color;
      }
    }

  }
</style>
