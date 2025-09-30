<template>
    <h1>Login User</h1>
    <div class="register-form">
    <input type="text" name="username" id="username" placeholder="Username" v-model="username">
    <input type="password" name="password" id="password" placeholder="Password" v-model="password">
    <button type="submit" @click="login">Login</button>
    <br>
    <button @click="goToSignUp">Sign Up</button>
</div>
</template>
<script>
import axios from 'axios';
export default {    
  name: 'LoginUser',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    goToSignUp() {
      this.$router.push({ name: 'SignUp' });
    },
   async login() {
        let result = await axios.get(`http://localhost:3000/user?name=${this.username}&password=${this.password}`);
        // Handle success or errors here
        if (result.status === 200 && result.data.length > 0) {
            alert('Login successful!');
            this.username = '';
            this.password = '';
            localStorage.setItem('user', JSON.stringify(result.data[0].name));
            this.$router.push({name: 'Home'});
        } else {
            alert('Login failed. Please check your credentials and try again.');
        }
    }
  },
   mounted() {
    let user = localStorage.getItem('user');
    if (user) {
      this.$router.push({ name: 'Home' });
    }
  }
}
</script>