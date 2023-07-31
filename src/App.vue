<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',

  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      }
    }
  },

  components: {
    AppHeader,
  },

  methods: {
    encode(data) {
      return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&')
    },

    handleSubmit() {
      fetch('/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: this.encode({
          'form-name': 'contact',
          ...this.form
        })
      })
      .then(() => console.log('successfully sent'))
      .catch(e => console.error(e))
    }
  }

}

</script>

<template>
  <AppHeader></AppHeader>
  <router-view></router-view>
  <div id="my-form hidden-form">
      <form @submit.prevent="handleSubmit" name="contact" method="POST" data-netlify="true">
          <p>
              <label>Your Name: <input v-model="this.form.name" type="text" name="name" /></label>
          </p>
          <p>
              <label>Your Email: <input v-model="this.form.email" type="email" name="email" /></label>
          </p>
          <p>
              <label>Message: <textarea v-model="this.form.message" name="message"></textarea></label>
          </p>
          <p>
              <button type="submit">Send</button>
          </p>
      </form>
    </div>
</template>

<style lang="scss" scoped>
</style>
