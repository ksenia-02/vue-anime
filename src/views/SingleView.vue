<template>
  <Header/>
  <Reviews
  :anime="id"
  :listReview="reviews"
  />
</template>

<script>
import Header from "@/components/Header";
import Reviews from "@/components/Reviews";

export default {
  name: "SingleView",
  components: {Reviews, Header},
  props:['id'],
  data(){
    return {
      anime:{},
      reviews:[]
    }
  },
  created() {
    this.loadAnime(),
        this.loadReviews()
  },
  methods:{
    async loadAnime(){
      this.anime = await fetch(
          `${this.$store.getters.getServerUrl}/anime/${this.id}`
      ).then(response=>response.json())
    },
    async loadReviews(){
      let all_reviews= await fetch(
          `${this.$store.getters.getServerUrl}/reviews/`
      ).then(response=>response.json())
      this.reviews = all_reviews.filter(review=>review.anime == this.id)
      console.log(this.reviews)
    }
  }
}
</script>

<style scoped>

</style>