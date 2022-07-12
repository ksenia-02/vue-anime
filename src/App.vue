<template>
  <div id= "app">
    <div>
      <b-nav tabs fill>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Link with a long name </b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  components: {}

}
</script>
<style>
</style>
