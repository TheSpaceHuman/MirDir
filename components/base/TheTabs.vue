<template>
    <section class="the-tabs" :style="tabsStyle">
      <a-row type="flex">
        <a-col :xs="24" :md="image ? 20 : 24">
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
        <a-col :xs="24" :md="4" v-if="image">
          <img :src="image" alt="MirDir">
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
  }
</style>
