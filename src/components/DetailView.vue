<template>
    
    <div>
        
        <h4>{{ 블로그글[$route.params.id].title }}</h4>
        <p>{{ 블로그글[$route.params.id].content }}</p>
        <p>{{ 블로그글[$route.params.id].date }}</p>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'DetailView',
    props: {
        블로그글: Array,
    },
}
</script>

<style></style>