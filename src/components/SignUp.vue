<template>
<h3>Sign up</h3>
<div class="register-form">
    <input type="text" name="username" id="username" placeholder="Username" v-model="username">
    <input type="email" name="email" id="email" placeholder="Email" v-model="email">
    <input type="password" name="password" id="password" placeholder="Password" v-model="password">
    <button type="submit" @click="checkfields">Register</button>
    <br>
    <button @click="goToLogin">Login</button>
</div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'SignUp',
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    goToLogin(){
        this.$router.push({ name: 'LoginUser' });
    },
   checkfields() {
        if (this.username === '' || this.email === '' || this.password === '') {
            alert('Please fill in all fields.');
        } else {
            this.register();
        }
    }, 
   async register() {
        let result = await axios.post('http://localhost:3000/user', {
            name: this.username,
            email: this.email,
            password: this.password
        });
        // Handle success or errors here
        if (result.status === 201) {
            alert('Registration successful!');
            this.username = '';
            this.email = '';
            this.password = '';
            localStorage.setItem('user', JSON.stringify(result.data.name));
            this.$router.push({name: 'Home'});
        } else {
            alert('Registration failed. Please try again.');
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
<style>
.register-form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 300px;
}
.register-form input {
    margin: 10px 0;
    padding: 10px;
    font-size: 16px;
}
.register-form button {
    padding: 10px;
    font-size: 16px;
    background-color: #42b983;
    color: white;
    border: none;
    cursor: pointer;
}
.register-form button:hover {
    background-color: #369b7a;
}
</style>