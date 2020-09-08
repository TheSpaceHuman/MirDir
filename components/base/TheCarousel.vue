<template>
  <a-carousel arrows class="the-carousel" :dots="true">
    <div
      slot="prevArrow"
      slot-scope="props"
      class="custom-slick-arrow"
      style="left: 10px;zIndex: 1"
    >
      <a-icon type="left-circle" />
    </div>
    <div slot="nextArrow" slot-scope="props" class="custom-slick-arrow" style="right: 10px">
      <a-icon type="right-circle" />
    </div>
    <slot></slot>
  </a-carousel>
</template>

<script>
export default {
  name: "TheCarousel"
}
</script>

<style lang="scss">
@import "../../assets/scss/utils/vars";
.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}
.ant-carousel {
  .anticon svg {
    fill: $primary-color;
    opacity: 0.9;
    height: 22px;
    width: 22px;
  }
}
</style>
