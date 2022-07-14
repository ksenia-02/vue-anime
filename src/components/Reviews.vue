<template>
  <FormReview
  @sendReview="tosendReview"/>
  <b-container fluid="md">
    <div v-for="review in listReview" :key="review.id">
      <div v-if="checkParent(review)">
      <p class="fs-3">{{ review.name }}</p>
      <p class="fs-6">{{ review.text }}</p>
        <div v-for="child in review.children" :key="child.id">
          <p class="fs-3">{{ child.name }}</p>
          <p class="fs-6">{{ child.text }}</p>
        </div>
      </div>


      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          <FormReview/>
        </div>
      </div>

      <div class="d-grid gap-1 d-md-flex justify-content-md-end">
        <a class="btn btn-outline-danger btn-sm" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Ответить</a>
      </div>
      <hr class="featurette-divider">
    </div>
  </b-container>
</template>

<script>
import FormReview from "@/components/FormReview";
export default {
  name: "Reviews",
  components: {FormReview},
  props: ["anime", "listReview"],
  data() {
  },
  methods: {
    async tosendReview(data) {
      data["anime"]=this.anime
      fetch(`${this.$store.getters.getServerUrl}/reviews/`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(response => {
        console.log(response.json())
      })
    },
    checkParent(review) {
      return review.parent == null ? true : false
    }
  }
}
</script>

<style scoped>
</style>