<template>
  <div v-for="(a,i) in 블로그글" :key="i">
    <h5 @click="$router.push('/detail/0')">{{ 블로그글[i].title }}</h5>
    <p>{{ 블로그글[i].date }}</p>
  </div>
  
</template>

<script>



export default {
  name : 'ListView',
  props : {
    블로그글 : Array,
  }
}
</script>

<style>

</style>