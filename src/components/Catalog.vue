<template>
  <b-container fluid="sm">
    <Info/>
    <div class="catalog row mb-3">
      <Card
          v-for="anime in listAnime"
          :key="anime.id"
          v-bind:anime_data="anime"
      />
    </div>
  </b-container>
</template>

<script>

import Card from "@/components/Card";
import Info from "@/components/Info";

export default {
  name: "Catalog",
  props: [],
  components: {
    Info,
    Card
  },
  data() {
    return {
      listAnime: []
    }
  },
  created() {
    this.loadListAnime()
  },
  methods: {
    async loadListAnime() {
      this.listAnime = await fetch(
          `${this.$store.getters.getServerUrl}/anime`
      ).then(response => response.json())
    }
  }
}
</script>

<style scoped>
.catalog {
  margin-top: 5%
}
</style>