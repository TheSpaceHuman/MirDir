<template>
    <div class="number-card">
      <div class="number-card__number">{{number}}</div>
      <div class="number-card__content" v-html="content"></div>
      <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "NumberCard",
    props: {
      number: Number,
      content: String
    },
    data() {
      return {}
    },
  }
</script>

<style lang="scss">
.number-card {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  &__number {
    position: relative;
    flex: 0 0 75px;
    font-size: 26px;
    font-weight: 700;
    border: 2px solid #ccc;
    text-align: center;
    margin-right: 20px;
    line-height: 75px;
  }
  &__number::after {
    content: '';
    position: absolute;
    right: -7px;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    border-top: 2px solid #ccc;
    border-right: 2px solid #ccc;
    background-color: #fcfcfc;
    width: 12px;
    height: 12px;
  }
  &__content {
    flex: 0 0 auto;
    font-size: 26px;
  }
}
</style>
