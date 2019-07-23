<template>
  <router-link class="event-link" :to="{ name: 'event-show', params: { id: event.id } }">
    <div class="event-card -shadow">
      <h4 class="title">{{ event.title }}</h4>
      <!-- <BaseIcon name="users">{{ event.attendees.length }} attending</BaseIcon> -->
    </div>
  </router-link>
</template>

<script>
export default {
  props:{
    event:Object
  },
  created(){
      console.log(this.event);
  }
  
  
}
</script>

<style>
h4 {
  color: red;
}
</style>
