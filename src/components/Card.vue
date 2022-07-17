<template>
  <div class="col-md-6">
    <div class="one row mb-2 g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div class="col p-4 d-flex flex-column position-static">
        <div class="blok_genres">
          <div v-for="genre in list_genre" :key="genre.id" class="blok_genre">
            {{ genre.name }}
          </div>
        </div>
        <h3 class="mb-0">{{ anime_data.title }}</h3>
        <div class="col-md-3 card">
          <b-img :src="`${$store.getters.getServerUrl}`+anime_data.poster"></b-img>
        </div>
        <div class="mb-1 text-muted">Nov 12</div>
        <p class="card-text mb-auto">{{ anime_data.description }}</p>
        <div class="d-grid gap-1 d-md-flex justify-content-md-end">
          <button type="button" v-on:click="goTo(anime_data.id)" class="btn btn-outline-danger btn-sm">Открыть</button>
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
    }
  },
  created() {
    this.loadListGenre()
  },
  methods: {
    goTo(id) {
      this.$router.push({name: 'SingleView', params: {id: id}})
    },
    async loadListGenre() {
      for (let genre_i of this.anime_data.genres) {
        let genre = await fetch(
            `${this.$store.getters.getServerUrl}/genre/${genre_i}`
        ).then(response => response.json())
        this.list_genre.push(genre)
      }
    }
  },
  data() {
    return {
      list_genre: []
    }
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
.one{
  background-color: rgba(225, 210, 210, 0.5);
}
.blok_genres{
  overflow:hidden;
  width:300px;
  height:60px;
  white-space:nowrap;
  border:1px solid black;
}
.blok_genre{
  width:100px;
  display:inline-block;
}
</style>