<template>
     <div class="gray-card">
        <h4 class="gray-card__title">{{title}}</h4>
        <div class="gray-card__content">
          <slot></slot>
        </div>
     </div>
</template>

<script>
  export default {
    name: "GrayCard",
    props: {
      title: String,
    }
  }
</script>

<style lang="scss">
  .gray-card {
    background-color: rgba(203, 203, 203, 0.25);
    padding: 20px;

    &__title {
      text-transform: uppercase;
      font-size: 22px;
      font-weight: 700;
      position: relative;
      margin-bottom: 20px;
    }
    &__title::before {
      content: "";
      height: 50px;
      width: 3px;
      background-color: #000;
      position: absolute;
      top: 50%;
      left: -12px;
      transform: translateY(-50%);
    }
    &__content {
      font-size: 17px;
      font-weight: 400;
      ul {
        padding-left: 20px;
      }
      li {
        list-style: disc;
      }
    }
  }

</style>
