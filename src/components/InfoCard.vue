<template>
  <b-container>
    <b-row align-h="center">
      <div class="col-md-4">
        <img class="poster" :src="`${$store.getters.getServerUrl}`+anime_data.poster" alt="poster">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ anime_data.title }}</h5>
          <p>{{ name }}</p>
          <hr class="featurette-divider">
          <p class="fw-bolder">Жанры</p>
          {{ list_genre }}
          <hr class="featurette-divider">
          <p class="fw-bolder">Описание</p>
          <p class="card-text">{{ anime_data.description }}</p>
          <hr class="featurette-divider">
          <p class="fw-bolder">Мнение автора</p>
          <p class="card-text">{{ anime_data.opinion }}</p>
          <hr class="featurette-divider">
          <p class="fw-bolder">Оценка</p>
          <p class="card-text">{{ getMarkStatus(anime_data.mark) }} -- {{ getMarkValue(anime_data.mark) }}</p>

        </div>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "InfoCard",
  props: ["anime_data", "name", "list_genre"],
  mounted() {
    this.loadListMarks()
  },
  methods: {
    ...mapActions([
      'loadListMarks',
    ]),
    getMarkStatus(id) {
      if (this.$store.state.marks.length != 0) {
        let obj_mark = this.$store.state.marks.find(mark => mark.id === id)
        if (obj_mark != undefined) {
          return obj_mark.status
        }
      }
    },
    getMarkValue(id) {
      if (this.$store.state.marks.length != 0) {
        let obj_mark = this.$store.state.marks.find(mark => mark.id === id)
        if (obj_mark != undefined) {
          return obj_mark.value
        }
      }
    }
  }
}
</script>

<style scoped>
.poster {
  max-height: 380px;
  display: block;
  margin-left: auto;
  margin-right: auto
}

.card-text {
  min-height: 100px
}
</style>