<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppForm from './components/AppForm.vue';

export default {
  name: 'App',

  data() {
    return {
      
    }
  },

  components: {
    AppHeader,
    AppForm
  },

}

</script>

<template>
  <AppHeader></AppHeader>
  <AppForm></AppForm>
  <router-view></router-view>
</template>

<style lang="scss" scoped>

</style>
