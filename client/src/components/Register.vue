<template>
  <div>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="secondary elevation-0" >
        <v-toolbar flat dense class="cyan"dark>
          <v-toolbar-title class="white--text">Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
           <v-text-field class="grey--text text--lighten-1"   
              name="input-1"
              label="Email"
              v-model="email"
              dark
            ></v-text-field>
             <v-text-field class="grey--text text--lighten-1"
              name="input-1"
              label="Password"
              v-model="password"
              dark
            ></v-text-field>
            <br>
            <div class="error" v-html="error"/>
            <br>
             <v-btn dark class="cyan" @click="register">Register</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
   
  </div>
</template>


<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color:white;
}
</style>
