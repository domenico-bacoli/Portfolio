<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',

  data() {
    return {
      
    }
  },

  components: {
    AppHeader,
  },

}

</script>

<template>
  <AppHeader></AppHeader>
  <router-view></router-view>
</template>

<style lang="scss" scoped>
#my-form{
    opacity: 0;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 100px 200px;
    background-color: #f7f9fb;
    background-image: linear-gradient(62deg, #f7f9fb 0%, #fbfbff 100%);
    box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.2);
    border-radius: 24px;
    transition: opacity 0.5s ease, top 0.5s ease;
}

#my-form.visible{
    opacity: 1;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
}
</style>
