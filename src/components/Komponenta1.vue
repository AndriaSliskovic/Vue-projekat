<template>
  <div>
    <h4>Komponenta 1</h4>
    <Komponenta11 />
  </div>
</template>

<script>
import Komponenta11 from '../components/Komponenta11'
export default {
  components: {
    Komponenta11
  }
}
</script>

<style scoped>
h4 {
  color: red;
}
</style>
