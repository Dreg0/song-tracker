<template>
  <div>
    <h1>Register</h1>
    <input 
    type="text"
    name="email"
    v-model="email"
    placeholder="email"/>
    <input 
    type="password"
    name="password"
    v-model="password"
    placeholder="password"/>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import authServ from '@/services/authServ'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await authServ.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
