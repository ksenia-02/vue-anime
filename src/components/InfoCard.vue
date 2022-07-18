<template>
  <div class="card mb-3 ">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="`${$store.getters.getServerUrl}`+anime_data.poster" class="img-fluid rounded-start" alt="жаль">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ anime_data.title }}</h5>
          <hr class="featurette-divider">
          <p class="fw-bolder">Жанры</p>
          {{ $store.getters.getGenresSingle }}
          <hr class="featurette-divider">
          <p class="fw-bolder">Описание</p>
          <p class="card-text" style="min-height:200px;">{{ anime_data.description }}</p>
          <hr class="featurette-divider">
          <p class="fw-bolder">Оценка</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoCard",
  props: {
    list_genre: {
      type: Array,
      default() {
        return []
      }
    },
    anime_data: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.card {
  background-color: rgba(225, 210, 210, 0.5);
  max-width: 640px;
}
</style>