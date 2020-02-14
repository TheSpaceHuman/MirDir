<template>
    <section class="the-tabs" :style="tabsStyle">
      <a-row type="flex">
        <a-col :xs="24" :sm="24" :md="image ? 20 : 24">
          <a-tabs
            :default-active-key="activeTab"
            tab-position="top"
          >
            <a-tab-pane
              v-for="tab in items"
              :tab="tab.title"
              :key="tab.title"
            >
              <div class="the-tabs__content" v-html="tab.content"></div>
            </a-tab-pane>
          </a-tabs>
        </a-col>
        <a-col :xs="24" :sm="24" :md="4" v-if="image">
          <img :src="image" alt="Мир данных ИТ" class="the-tabs__logo" >
        </a-col>
      </a-row>
    </section>
</template>

<script>
  export default {
    name: "TheTabs",
    props: {
      backgroundColor: {
        type: String,
        default: 'rgba(111, 147, 165, 0.3)'
      },
      image: String,
      items: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        tabsStyle: {
          backgroundColor: this.backgroundColor
        }
      }
    },
    computed: {
      activeTab() {
        return this.items[0].title
      }
    }
  }
</script>

<style lang="scss">
  @import "./../../assets/scss/utils/vars";
  .the-tabs {
    padding: 40px;
    .ant-tabs-bar {
      border-bottom: 0!important;
    }
    ul {
      padding-left: 20px;
    }
    li {
      list-style: disc;
    }
    &__content {
      font-size: 18px;
    }
    &__logo {
      @media screen and (max-width: $tableWidth) {
        margin: 0 auto;
        max-width: 220px;
      }
    }
  }
</style>
