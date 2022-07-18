<template>
  <b-container fluid="sm">
    <div class="aut">
      <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Имя</label>
        <div class="col-sm-10">
          <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="имя"
                 v-model="user">
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Пароль</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword" v-model="password">
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-3" v-on:click="auth">Ввод</button>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>


import axios from "axios";

export default {
  name: "AutView",
  methods: {
    goTo() {
      this.$router.push({name: 'home'})
    },
    async auth() {
      fetch(`${this.$store.getters.getServerUrl}/aut/login/`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
              username: this.user,
              password: this.password
            }
        )
      }).then(response => {
        console.log(response.json())
      })
      this.goTo()
    }
  },
  data() {
    return {
      API_URL: `${this.$store.getters.getServerUrl}/api/aut/`,
      user: null,
      email: '',
      password: '',

    }
  }

}
</script>

<style scoped>

</style>