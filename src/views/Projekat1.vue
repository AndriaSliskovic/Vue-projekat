<template>
  <div>
    <router-view />
    <h3>Projekat 1 - page</h3>
    <div id="nav">
      <router-link :to="{ name: 'komponenta1' }">Link komponenta1</router-link>
    </div>

    <Komponenta1 />
    <Komponenta2 />
  </div>
</template>

<script>
import Komponenta1 from '../components/Komponenta1'
import Komponenta2 from '../components/Komponenta2'
export default {
  components: {
    Komponenta1,
    Komponenta2,
  }
}
</script>
<style scoped>
h3 {
  color: blue;
}
</style>
