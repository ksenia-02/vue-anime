<template>
  <div class="sidebar d-flex flex-column flex-shrink-0 p-0 bg-light">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      <span class="fs-4">Жанры</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column">
      <div v-for="genre in list_genre" :key="genre.id">
      <li class="nav-item">
        <a href="#" class="genre nav-link" aria-current="page">
          {{genre.name}}
        </a>
      </li>
      </div>
    </ul>
    <hr>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props:["list_genre"]
}
</script>

<style scoped>
.sidebar{
  width: 240px;
}
.genre{
  color: #3940bd;
}
</style>