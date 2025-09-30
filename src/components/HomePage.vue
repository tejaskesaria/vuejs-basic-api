<template>
    <button @click="logout">Logout</button>
    <h1>Homepage</h1>
    <h2 v-if="this.username">Welcome back, {{ this.username }}!</h2>
</template>
<script>
export default {
    name: 'HomePage',
    data() {
        return {
            username: ''
        }
    },
    mounted() {
        let user = localStorage.getItem('user');

        if (user) {
            this.username = JSON.parse(user)
        } else {
            this.$router.push({ name: 'SignUp' });
        }
    },
    methods: {
        logout() {
            localStorage.removeItem('user');
            this.$router.push({ name: 'LoginUser' });
        }
    }
}
</script>