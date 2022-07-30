<template>
  <section class="comments-list column">
    <post-content v-if="post"/>
    <post-comments
      v-for="post in posts"
      :key="post._id"
      :post="post"
      @remove="removePost"
    />
  </section>
</template>
<script>
  import postComments from './post-comments.cmp.vue'
  import postContent from './post-content.cmp.vue'

  export default {
    name: 'postList',
    props: ['posts'],
    emits: ['removed', 'showDetails'],
    components: {
      postComments,
      postContent,
    },
    data() {
      return {}
    },
    created() {},
    methods: {
      removePost(projId) {
        this.$emit('removed', projId)
      },
    },
    computed: {},
    unmounted() {},
  }
</script>
<style></style>
