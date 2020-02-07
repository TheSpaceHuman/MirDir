<template>
    <div class="the-customers">
      <div class="the-customers__items">
        <div class="the-customers__item" v-for="(item, index) in items" :key="index">
          <img :src="item.src" :alt="item.title" class="the-customers__item-img">
          <span class="the-customers__item-description" v-if="item.description">{{item.description}}</span>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "TheCustomers",
    props: {
      items: Array
    }
  }
</script>

<style lang="scss" scoped>
  .the-customers {

    &__items {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
    }
    &__item {
      flex: 1 1 20%;
      margin-bottom: 20px;
    }
    &__item-img {
      width: 60%;
      margin: 0 auto;
    }
    &__item-description {
      text-align: center;
      display: block;
      font-size: 14px;
      max-width: 190px;
      margin: 5px auto 0;
    }
  }
</style>
