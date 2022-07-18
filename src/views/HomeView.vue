<template>
  <div class="home">
    <Header/>
    <main class="main_page d-flex flex-nowrap">
      <Sidebar/>
      <Catalog/>
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
    }
  },
  created() {
  },
  methods: {
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

