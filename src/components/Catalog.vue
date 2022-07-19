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
import {toRaw} from "vue";

export default {
  name: "Catalog",
  props: ["listAnime"],
  components: {
    Info,
    Card
  }
}
</script>

<style scoped>
.catalog {
  margin-top: 5%
}
</style>