<template>
  <b-container fluid="sm">
    <div class="row mb-2">
      <Card
          v-for="anime in listAnime"
          :key="anime.id"
          v-bind:anime_data="anime"
          v-bind:list_genre="listGenre"
      />
    </div>
  </b-container>
</template>

<script>

import Card from "@/components/Card";

export default {
  name: "Catalog",
  components: {
    Card
  },
  data() {
    return {
      listAnime: [],
      listGenre: []
    }
  },
  created() {
    this.loadListAnime(),
        this.loadListGenre()
  },
  methods: {
    async loadListAnime() {
      this.listAnime = await fetch(
          `${this.$store.getters.getServerUrl}/anime`
      ).then(response => response.json())
    },
    async loadListGenre() {
      this.listGenre = await fetch(
          `${this.$store.getters.getServerUrl}/genre`
      ).then(response => response.json())
    }
  }
}
</script>

<style scoped>

</style>