<template>
  <div ip="reviews">
    <FormReview
        @sendReview="toReview"
        :id="answer_id"
    />
    <div class="com" v-for="(item,index) in listReview" :key="item.id">
      <div v-if="checkParent(item)">
        <p class="fs-2">{{ item.name }}</p>
        <p class="fs-6">{{ item.text }}</p>
        <div class="p-3 d-grid gap-1 d-md-flex justify-content-md-end">
          <b-button block v-b-toggle="'com'+index" variant="outline-primary" @click="addParent(item.id)"
                    class="btn-outline-danger btn-sm">Ответить
          </b-button>
        </div>
        <b-collapse :id="'com'+index">
          <FormReview
              @sendReview="toReview"
              :id="answer_id"
          />
        </b-collapse>
        <hr class="featurette-divider">
        <div class="ans" v-for="child in item.children" :key="child">
          <p>{{ loadComment(child).name }}</p>
          <p>{{ loadComment(child).text }}</p>
          <hr class="featurette-divider">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormReview from "@/components/FormReview";
import {toRaw} from "vue";

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
    loadComment(id) {
      return this.listReview.find(obj => obj.id == id)
    },
    toReview(data) {
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
    },
    addChild(response) {
      let data = this.loadComment(response.parent)
      data.children.push(response.id)
      fetch(`${this.$store.getters.getServerUrl}/reviews/${response.parent}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(response => {
      })
    }
  }
}
</script>

<style scoped>
.com {
  background-color: rgba(255, 255, 255, 0.5);
  margin-top: 20px;
}

.ans {
  margin-left: 10%;
  background-color: rgba(231, 216, 216, 0.2);
}
</style>