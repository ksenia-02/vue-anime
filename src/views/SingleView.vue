<template>
  <div class="single">
    <Header/>
    <main class="d-flex flex-nowrap">
      <b-container class = "main_page" fluid="md">
        <InfoCard
            :anime_data="anime"/>
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

export default {
  name: "SingleView",
  components: {InfoCard, Reviews, Header},
  props: ['id'],
  data() {
    return {
      anime: {},
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
    },
  }
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