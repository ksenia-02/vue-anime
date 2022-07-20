<template>
  <Header/>
  <b-container>
    <div class="form_aut col-md-4">
      <div class="main">
        <label for="exampleFormControlInput1" class="form-label">Имя</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="имя"
               v-model="user">
        <label for="exampleFormControlInput1" class="form-label">Пароль</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="пароль"
               v-model="password">
        <div class="p-3 d-grid gap-1 d-md-flex justify-content-md-end">
          <button type="button" v-on:click="auth" class="btn-sm">Отправить</button>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>


import axios from "axios";
import Header from "@/components/Header";

export default {
  name: "AutView",
  components: {Header},
  methods: {
    goTo() {
      this.$router.push({name: 'home'})
    },
    auth() {
      fetch(`${this.$store.getters.getServerUrl}/auth/login/`, {
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
      }).then(response => console.log(response)).catch((error) => {
        console.error('Ошибка:', error);
      })
      this.goTo()
    }
  },
  data() {
    return {
      user: null,
      password: '',

    }
  }

}
</script>

<style scoped>
.form_aut {
  margin-top: 5%;
  margin-left: 5%;
}
</style>