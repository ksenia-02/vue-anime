<template>
  <div class="single">
    <main class="d-flex flex-nowrap">
      <b-container class="main_page">
        <InfoCard
            :anime_data="anime"
            :name="author"
            :list_genre="genres"
        />
        <Reviews
            :anime_data="anime"
        />
      </b-container>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Reviews from "@/components/Reviews";
import InfoCard from "@/components/InfoCard";
import {toRaw} from "vue";
import {mapActions} from "vuex";

export default {
  name: "SingleView",
  components: {InfoCard, Reviews, Header},
  props: ['id'],
  data() {
    return {
      anime: {},
      author: '',
      genres: ''
    }
  },
  created() {
    this.loadAnime()
    this.getGenreFromAPI()
  },
  methods: {
    ...mapActions([
      'getGenreFromAPI'
    ]),
    async loadNameAuthor() {
      let id_author = toRaw(this.anime).user
      this.author = await fetch(
          `${this.$store.getters.getServerUrl}/username/${id_author}`
      ).then(response => response.json()).catch((error) => {
        console.error('Ошибка:', error);
      })
    },
    loadListGenre() {
      for (let genre_i of this.anime.genres) {
        let genre = this.$store.state.genre.find(obj => obj.id == genre_i)
        if (genre != undefined) {
          this.genres = this.genres + String(genre.name) + ". "
        }
      }
    },
    async loadAnime() {
      this.anime = await fetch(
          `${this.$store.getters.getServerUrl}/anime/${this.id}`
      ).then(response => response.json()).catch((error) => {
        console.error('Ошибка:', error);
      })
      this.loadNameAuthor()
      this.loadListGenre()
    }
  },
}
</script>

<style scoped>
.single {
  background-image: url(../assets/images/back.jpg);
}

.main_page {
  margin-top: 5%;
}
</style>