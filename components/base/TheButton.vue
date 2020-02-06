<template>
  <button
    @click="click($event)"
    class="the-button"
    :class="classes"
    type="button"
  ><slot/></button>
</template>

<script>
  export default {
    name: "TheButton",
    props: {
      type: String, // primary | secondary  | tertiary | success | danger | warning | purple
      required: true,
    },
    data() {
      return {
        classes: {
          'the-button--primary': this.type === 'primary',
          'the-button--secondary': this.type === 'secondary',
          'the-button--tertiary': this.type === 'tertiary',
          'the-button--success': this.type === 'success',
          'the-button--danger': this.type === 'danger',
          'the-button--warning': this.type === 'warning',
          'the-button--purple': this.type === 'purple',
        }
      }
    },
    methods: {
      click(event) {
        this.$emit('click', event)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./../../assets/scss/utils/vars";
  .the-button {
    cursor: pointer;
    padding: 12px 25px;
    border-radius: 8px;
  }
  .the-button--primary {
    background-color: $primary-color;
    color: #fff;
    &:hover {
      background-color: lighten($primary-color, 10%);
    }
  }
  .the-button--secondary {
    background-color: $secondary-color;
    color: #fff;
    &:hover {
      background-color: lighten($secondary-color, 10%);
    }
  }
  .the-button--tertiary {
    background-color: $tertiary-color;
    color: #fff;
    &:hover {
      background-color: lighten($tertiary-color, 10%);
    }
  }
  .the-button--success {
    background-color: $success-color;
    color: #fff;
    &:hover {
      background-color: lighten($success-color, 10%);
    }
  }
  .the-button--danger {
    background-color: $danger-color;
    color: #fff;
    &:hover {
      background-color: lighten($danger-color, 10%);
    }
  }
  .the-button--warning {
    background-color: $warning-color;
    color: #fff;
    &:hover {
      background-color: lighten($warning-color, 10%);
    }
  }
  .the-button--purple {
    background-color: $purple-color;
    color: #fff;
    &:hover {
      background-color: lighten($purple-color, 10%);
    }
  }
</style>
