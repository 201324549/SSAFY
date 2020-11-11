<template>
  <div id="app">
    <NavbarAdmin />
    <router-view></router-view>
   </div>
</template>

<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
<script>
import NavbarAdmin from '@/components/navbar/NavbarAdmin.vue'
export default {
  name: 'App',
  components: {
    NavbarAdmin
  }
}
</script>

<style>

</style>
