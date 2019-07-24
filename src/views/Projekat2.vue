<template>
  <div>
    <h3>Projekat 2 - page</h3>
        <!-- <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
    ></v-data-table> -->
  </div>
</template>

<script>
import ApiService from '../services/ApiServices'
export default {
  data(){
    return{
      items:[]
    }
  },
  created() {
    ApiService.getPlans()
    .then(response => {
      // this.items=response.data;
      console.log(response.data)
    })
    .catch(error=>{
      console.log('Greska pri prijemu podataka '+error.response)
    })
  }
}
</script>

<style scoped>
h3 {
  color: green;
}
</style>
