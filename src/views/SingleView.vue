<template>

  <Header/>
  <b-container fluid="md">
    <InfoCard
        :anime_data="anime"
        :list_genre="genres"/>
    <Reviews
        :anime_data="anime"
    />
  </b-container>
</template>

<script>
import Header from "@/components/Header";
import Reviews from "@/components/Reviews";
import InfoCard from "@/components/InfoCard";

export default {
  name: "SingleView",
  components: {InfoCard, Reviews, Header},
  props: ['id'],
  data() {
    return {
      anime: {},
      genres: []
    }
  },
  created() {
    this.loadAnime()
  },
  methods: {
    async loadAnime() {
      this.anime = await fetch(
          `${this.$store.getters.getServerUrl}/anime/${this.id}`
      ).then(response => response.json())
      this.loadListGenre()
    },
    async loadListGenre() {
      for(let genre_i of this.anime.genres) {
        let genre = await fetch(
            `${this.$store.getters.getServerUrl}/genre/${genre_i}`
        ).then(response => response.json())
        this.genres.push(genre)
      }
    }
  }
}
</script>

<style scoped>

</style>