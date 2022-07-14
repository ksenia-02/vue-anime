<template>
  <div class="col-md-6">
    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div class="col p-4 d-flex flex-column position-static">
        <div v-for="genre in list_genre" :key="genre.id" class="col-md-4 product-men">
          <strong class="d-inline-block mb-2 text-primary">{{ genre.name }}</strong>
        </div>
        <h3 class="mb-0">{{ anime_data.title }}</h3>
        <div class="col-md-3 card">
          <b-img :src="`${$store.getters.getServerUrl}`+anime_data.poster"></b-img>
        </div>
        <div class="mb-1 text-muted">Nov 12</div>
        <p class="card-text mb-auto">{{ anime_data.description }}</p>
        <div class="d-grid gap-1 d-md-flex justify-content-md-end">
          <button type="button" class="btn btn-outline-danger btn-sm">Открыть</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Card",
  props: {
    anime_data: {
      type: Object,
      default() {
        return {}
      }
    },
    list_genre: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {},
  data() {
    return {}
  },
}
</script>

<style scoped>
.card {
  overflow: hidden;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
  width: 300px;
  height: 300px;
}
</style>