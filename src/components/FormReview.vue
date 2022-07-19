<template>
  <b-container fluid="md">
    <div class="form_aut col-md-4">
      <div class="main">
        <label for="exampleFormControlInput1" class="form-label">Имя</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="имя"
               v-model="name">
        <label for="exampleFormControlTextarea1" class="form-label">Коммент</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3 " v-model="text"></textarea>
        <div class="p-3 d-grid gap-1 d-md-flex justify-content-md-end">
          <button type="button" @click="addReview" class="btn btn-outline-danger btn-sm">Отправить</button>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "FormReview",
  props:["id"],
  data() {
    return {
      name: '',
      text: '',
      children: []
    }
  },
  methods: {
    addReview() {
      let data = {
        name: this.name,
        text: this.text,
        parent: this.id,
        children: this.children
      }
      this.$emit('sendReview',data)
    }
  }
}
</script>

<style scoped>
.form_aut{
  background-color: rgba(255, 255, 255, 0.5);
}
.main{
  margin-left: 10px;
  margin-right: 10px;
}
</style>