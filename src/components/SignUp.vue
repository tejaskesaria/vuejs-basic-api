<template>
<h3>Sign up</h3>
<div class="register-form">
    <input type="text" name="username" id="username" placeholder="Username" v-model="username">
    <input type="email" name="email" id="email" placeholder="Email" v-model="email">
    <input type="password" name="password" id="password" placeholder="Password" v-model="password">
    <button type="submit" @click="register">Register</button>
</div>
</template>
<script>
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
    register() {
    //   const user = {
    //     id: Date.now(),
    //     name: this.username,
    //     email: this.email,
    //     password: this.password
    //   };
      // Here you would typically make an API call to register the user
      console.log('User registered:', this.username, this.email, this.password);
    }
  }
}
</script>
<style scoped>
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