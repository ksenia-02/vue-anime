<template>
  <b-container fluid="md">
    <div class="col-md-4">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Имя</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="имя"
               v-model="name">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Коммент</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="text"></textarea>
        <div class="d-grid gap-1 d-md-flex justify-content-md-end">
          <button type="button" @click="addReview" class="btn btn-outline-danger btn-sm">Отправить</button>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "FormReview",
  data() {
    return {
      name: '',
      text: '',
      parent: null,
      children: []
    }
  },
  methods: {
    addReview() {
      let data = {
        name: this.name,
        text: this.text,
        parent: this.parent,
        children: this.children
      }
      this.$emit('sendReview',data)
    }
  }
}
</script>

<style scoped>

</style>