<template>
  <div class="home">
    <main class="main_page d-flex flex-nowrap">
      <Sidebar
          @filter="filterByGenre"/>
      <Catalog
          :listAnime="anime"/>
    </main>
  </div>
</template>

<script>

import Catalog from "@/components/Catalog";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import {toRaw} from "vue";

export default {
  name: 'HomeView',
  components: {
    Sidebar,
    Header,
    Catalog,
  },
  data() {
    return {
      allAnime: [],
      anime: [],
    }
  },
  created() {
    this.loadListAnime()
  },
  methods: {
    async loadListAnime() {
      this.anime = await fetch(
          `${this.$store.getters.getServerUrl}/anime`
      ).then(response => response.json()).catch((error) => {
        console.error('Ошибка:', error);
      })
      this.allAnime = this.anime
    },
    filterByGenre(genre) {
      this.anime = toRaw(this.anime)
      this.anime = this.allAnime.filter(function (item) {
        return item.genres.includes(genre)
      })
    }
  }
}

</script>

<style>
.home {
  background-image: url(../assets/images/back.jpg);
}

.main_page {
  margin-right: 15%;
}
</style>

