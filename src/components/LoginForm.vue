<template>
<div class= "logo-cont">
  <img src="./ceit.png" alt="CEIT Logo" class="ceit-logo" />
</div>
  <div class="login-container">
    <h1>Login Page</h1>

    <form @submit.prevent="login" class="login-form">
      <label for="email">Email:</label>
      <input v-model="email" type="text" required />

      <label for="password">Password:</label>
      <input v-model="password" type="password" required />

      <button type="submit" @click="login">Login</button>
    </form>
     <div v-if="showLoginMessage" class="login-message">
        <p>Button clicked! You can show a login-related message here.</p>
      </div>
      <div v-if="showLoginMessage2" class="login-message">
        <p> Wrong Password or Email</p>
      </div>
  </div>
</template>

<script>
import { auth, signInWithEmailAndPassword  } from '@/firebase';

export default {
  data() {
    return {
      email: '',
      password: '',
      showLoginMessage: false,
      showLoginMessage2: false,
    }
  },
  methods: {

    async login() {

      try {
        const response = await signInWithEmailAndPassword(auth, this.email, this.password);
        this.showLoginMessage = true;
        console.log('Logged in successfully:', response.user);
       this.showLoginMessage2 = true;
        this.$router.push('/data')// Redirect or perform other actions upon successful login
      } catch (error) {
    this.showLoginMessage2 = true;
        console.error('Error logging in:', error.message);
      }
    },
  },
};

</script>
<style>
.login-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  h1 {
    text-align: center;
    color: #333;
  }
.login-message {
  margin-top: 20px;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border-radius: 4px;
  }
  .login-form {
  text-align:left;
    display: flex;
    flex-direction: column;
  }

  label {

    margin-bottom: 10px;
    color: #333;
  }

  input {
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 10px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
  .ceit-logo {
max-width: 130%;
  max-height: 130%;
  display: inline-block;
  }
.logo-cont{
 max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
    background-color: #fff;

text-align:center;
}







</style>
