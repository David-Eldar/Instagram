<template>
  <main class="main-layout-container"></main>
  <section>
    <!-- <post-filter /> -->
  </section>
  <post-list @removed="removePost" v-if="posts" :posts="posts" />
</template>

<script>
  import postList from '../cmps/post-list.cmp.vue'
  import postEdit from '../views/post-edit.vue'
  import postDetails from '../views/post-details.vue'
  

  export default {
    name: 'PostApp',
    components: {
      postList,
      postEdit,
      postDetails,
    },
    data() {
      return {}
    },
    methods: {
      removePost(postId) {
        this.$store.dispatch({type: 'removePost', id: postId})
      },
      setFilter(filterBy) {
        this.$store.dispatch({type: 'filter', filterBy})
      },
    },
    computed: {
      posts() {
        return this.$store.getters.posts
      },
    },
    unmounted() {},
  }
</script>
