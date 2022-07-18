<template>
  <div class="home">
    <Header/>
    <main class="main_page d-flex flex-nowrap">
      <Sidebar
          :list_genre="this.genre"/>
      <Catalog
      :mark="marks"/>
    </main>
  </div>
</template>

<script>

import Catalog from "@/components/Catalog";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default {
  name: 'HomeView',
  components: {
    Sidebar,
    Header,
    Catalog,
  },
  data() {
    return {
      genre: [],
      marks: []
    }
  },
  created() {
    this.loadListGenre(),
        this.loadListMarks()
  },
  methods: {
    async loadListGenre() {
      this.genre = await fetch(
          `${this.$store.getters.getServerUrl}/genre/`
      ).then(response => response.json())
    },
    async loadListMarks() {
      this.marks = await fetch(
          `${this.$store.getters.getServerUrl}/star/`
      ).then(response => response.json())
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

