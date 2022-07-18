<template>
  <div class="col-md-6">
    <div class="one row mb-2 g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div class="col p-4 d-flex flex-column position-static">
        <div class="blok_genres">
          <p class="card-text mb-auto">{{ list_genre }}</p>
        </div>
        <p class="card-text mb-auto">{{ getMarkName(anime_data.mark) }}</p>
        <h3 class="title mb-0">{{ anime_data.title }}</h3>
        <div class="col-md-3 card">
          <b-img :src="`${$store.getters.getServerUrl}`+anime_data.poster"></b-img>
        </div>
        <div class="wrapper">
          <div class="info">
            <div class="mb-1 text-muted">{{ author }}</div>
            <p class="card-text mb-auto">{{ anime_data.description }}</p>
          </div>
          <button type="button" v-on:click="goTo()" class="btn btn-outline-danger btn-sm">Открыть
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import {mapActions} from "vuex";

export default {
  name: "Card",
  props: {
    anime_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  created() {
    this.loadListGenre(),
        this.loadListAuthor()
  },
  mounted() {
    this.loadListMarks()
  },
  methods: {
    ...mapActions([
      'setGenresSingle',
      'loadListMarks'
    ]),
    goTo() {
      this.setGenresSingle(this.list_genre);
      this.$router.push({name: 'SingleView', params: {id: this.anime_data.id}})
    },
    loadListGenre() {
      for (let genre_i of this.anime_data.genres) {
        let genre = this.$store.state.genre.find(obj => obj.id == genre_i)
        this.list_genre = this.list_genre + String(genre.name) + ". "
      }
    },
    getMarkName(id) {
      let obj_mark = this.$store.getters.getMark(id);
      console.log(obj_mark)
      if (obj_mark != undefined) {
        return String(obj_mark.status)+"--"+String(obj_mark.value)+"баллов"
      }
    },
    async loadListAuthor() {
      this.author = await fetch(
          `${this.$store.getters.getServerUrl}/username/${this.anime_data.user}`
      ).then(response => response.json())
    },

  },
  data() {
    return {
      list_genre: '',
      author: ''
    }
  }
}
</script>

<style scoped>
.card {
  overflow: hidden;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
  width: 80%;
  height: 300px;
}

.one {
  background-color: rgba(225, 210, 210, 0.5);
}

.blok_genres {
  overflow: hidden;
  width: 300px;
  height: 80px;
  word-break: break-all;
}

.wrapper {
  height: 260px;
}

.info {
  overflow-x: hidden;
  height: 200px;
}

.title {
  height: 90px;
}
</style>