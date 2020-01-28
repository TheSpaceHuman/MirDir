<template>
    <header class="header">
      <div class="container">
        <MainMenu />
      </div>
    </header>
</template>

<script>
  import MainMenu from '~/components/navigation/MainMenu.vue'

  export default {
    name: "TheHeader",
    components: {
      MainMenu
    }
  }
</script>

<style>

</style>
