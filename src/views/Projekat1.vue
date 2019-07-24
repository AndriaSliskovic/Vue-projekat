<template>
  <div>
    <router-view />
    <h3>Projekat 1 - page</h3>
    <div id="nav">
      <router-link :to="{ name: 'komponenta1' }">Link komponenta1</router-link>
    </div>
    <div>
      <v-app>
        <v-btn color="success">Projekat 1 dugme</v-btn>
        <Projekat2 />
        <Komponenta2 />
      </v-app>
    </div>
  </div>
</template>

<script>
import Komponenta1 from '../components/Komponenta1'
import Komponenta2 from '../components/Komponenta2'
import Projekat2 from '../views/Projekat2'
export default {
  components: {
    Komponenta1,
    Komponenta2,
    Projekat2
  }
}
</script>
<style scoped>
h3 {
  color: blue;
}
</style>
