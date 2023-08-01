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
          'form-name': 'portfolio message',
          ...this.form
        })
      })
      .then(() => this.confirmMessage())
      .catch(e => console.error(e))
    },

    contactForm() {
      const myFormEl = document.getElementById("my-form");
      const container = document.querySelector(".container");
      myFormEl.classList.add('visible');         
      container.style.opacity = "0.15";
    },

    closeButton() {
      const closeForm = document.getElementById("my-form");
      const container = document.querySelector(".container");
      const confirmMessageEl = document.querySelector(".alert");
      const formTextEl = document.querySelector(".form-text");
      closeForm.classList.remove('visible');
      container.style.opacity = "1";
      confirmMessageEl.style.display = "none";
      formTextEl.style.opacity = "1";
    },

    confirmMessage() {
      const confirmMessageEl = document.querySelector(".alert");
      const formTextEl = document.querySelector(".form-text");
      confirmMessageEl.style.display = "block";
      formTextEl.style.opacity = "0.2";
      confirmMessageEl.style.zIndex = "2";
    },
  }

}

</script>

<template>
  <div class="container">
    <AppHeader></AppHeader>
    <router-view @contactForm="contactForm()"></router-view>
  </div>  
    <div id="my-form">
      <form @submit.prevent="handleSubmit" name="portfolio message" method="POST" data-netlify="true">
        <div class="form-text">
          <div style="--d: .05s;" class="your-name">
            <label>Your Name:</label> 
            <input v-model="this.form.name" type="text" name="name" required />
          </div>
          <div style="--d: .15s;" class="your-email">
              <label>Your Email:</label> 
              <input v-model="this.form.email" type="email" name="email" required />
          </div>
          <div style="--d: .25s;" class="your-message">
              <label>Message:</label>
              <textarea v-model="this.form.message" name="message" required></textarea>
          </div>
        </div>
        <div style="--d: .25s;" class="submit-button">
              <button type="submit">Send</button>
              <router-link :to="{ name: 'home' }"><button @click="closeButton()" class="cancel-button">Close</button></router-link>
        </div>
      </form> 
    </div>
    <div class="alert alert-success" role="alert">
        Messaggio Inviato!
    </div> 

</template>

<style lang="scss" scoped>
.container{
  padding: 4px 0 0;
}
.alert{
  display: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#my-form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -1;
  height: 0;
  width: 0;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f7f9fb;
  background-image: linear-gradient(62deg, #f7f9fb 0%, #fbfbff 100%);
  box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.2);
  border-radius: 24px;
  transition: opacity .8s ease, width .3s ease, height .3s ease;
  
  .form-text{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    font-weight: 600;
    font-size: 1em;
    
    
    input{
      width: 350px;
      height: 44px;
      border-radius: 16px;
      border: none;
      box-shadow: rgba(100, 100, 111, 0.2) 2px 2px 29px 4px;
      padding: 10px 20px;
    }

    textarea{
      width: 350px;
      height: 110px;
      resize: none;
      border-radius: 16px;
      border: none;
      box-shadow: rgba(100, 100, 111, 0.2) 2px 2px 29px 4px;
      padding: 10px 20px;
    }
    .your-name, .your-email, .your-message, .submit-button{
      opacity: 0;
    }

    .your-name, .your-email, .your-message{
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }

  .submit-button{
      display: flex;
      gap: 20px;
      justify-content: center;
      padding-top: 30px;

      button{
        width: 120px;
        height: 40px;
        border-radius: 20px;
        border: none;
        font-weight: 600;
        font-size: 1.1em;
      }
    }

}

#my-form.visible {
  
    .your-name, .your-email, .your-message, .submit-button{
      opacity: 0;
      animation: formTextReveal forwards .6s var(--d);
    }
  }

#my-form.visible{
  height: 500px;
  width: 700px;
  opacity: 1;
  z-index: 2;
}



@keyframes formTextReveal {
	from {
		transform: translateY(80px);
	}
  to {
    opacity: 1;
		transform: none;
	}
}



</style>
