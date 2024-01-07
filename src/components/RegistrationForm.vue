<!-- RegistrationForm.vue -->

<template>
  <div>
      <div class="login-container">
    <h2>Register</h2>

    <form @submit.prevent="register"  class="login-form">
      <label for="email">Email:</label>
      <input v-model="email" type="email" required />

      <label for="password">Password:</label>
      <input v-model="password" type="password" required />

      <button type="submit">Register</button>
    </form>
    </div>
  </div>
</template>

<script>
import { auth, createUserWithEmailAndPassword } from '@/firebase';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async register() {
        alert("OK");
        this.$router.push('/data');
      try {
        const response = await createUserWithEmailAndPassword(auth, this.email, this.password);
        console.log('User registered successfully:', response.user);
         alert("OK");// You can redirect or perform other actions upon successful registration
      } catch (error) {

        console.error('Error registering user:', error.message);
        alert(error.message);
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

  h2 {
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
 form{
 text-align: center;
 }
</style>