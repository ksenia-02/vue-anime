<template>
  <div class="home">
    <Header/>
      <Catalog/>
  </div>
</template>

<script>

import Catalog from "@/components/Catalog";
import Header from "@/components/Header";

export default {
  name: 'HomeView',
  components: {
    Header,
    Catalog,
  }
}

</script>

