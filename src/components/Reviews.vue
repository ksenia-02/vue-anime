<template>
  <FormReview
      @sendReview="tosendReview"
      :id="answer_id"
  />
  <div v-for="review in listReview" :key="review.id">
    <div v-if="checkParent(review)">
      <p class="fs-2">{{ review.name }}</p>
      <p class="fs-6">{{ review.text }}</p>
      <div v-for="child in review.children" :key="child">
        <p>{{ this.loadReviews(child).name }}</p>
      </div>
    </div>
    <div class="collapse" id="answer">
      <div class="card card-body">
        <FormReview
            @sendReview="tosendReview"
            :id="answer_id"
        />
      </div>
    </div>
    <div class="d-grid gap-1 d-md-flex justify-content-md-end">
      <a class="btn btn-outline-danger btn-sm" @click="addParent(review.id)" data-bs-toggle="collapse" href="#answer"
         role="button"
         aria-expanded="false" aria-controls="collapseExample">Ответить</a>
    </div>
    <hr class="featurette-divider">
  </div>
</template>

<script>
import FormReview from "@/components/FormReview";

export default {
  name: "Reviews",
  components: {FormReview},
  data() {
    return {
      listReview: [],
      answer_id: null
    }
  },
  created() {
    this.loadReviews()
  },
  props: ["anime_data"],
  methods: {
    async loadReviews() {
      let all_reviews = await fetch(
          `${this.$store.getters.getServerUrl}/reviews/`
      ).then(response => response.json())
      this.listReview = all_reviews.filter(review => review.anime == this.anime_data.id)
    },
    tosendReview(data) {
      data["anime"] = this.anime_data.id
      fetch(`${this.$store.getters.getServerUrl}/reviews/`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(response => {
        (response.json().then(data => this.addChild(data)))
      })
    },
    checkParent(review) {
      return review.parent == null ? true : false
    },
    addParent(id) {
      if (this.answer_id == id) {
        this.answer_id = null
      } else {
        this.answer_id = id
      }
      //console.log(this.answer_id)
    },
    async loadComment(id) {
      let comment = await fetch(
          `${this.$store.getters.getServerUrl}/reviews/${id}`
      ).then(response => response.json())
      return comment
    },
    async addChild(response) {
      let data = await this.loadComment(response.parent)
      data.children.push(response.parent)
      fetch(`${this.$store.getters.getServerUrl}/reviews/${response.parent}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(response => {
        console.log(response)
      })
    }
  }
}
</script>

<style scoped>
</style>