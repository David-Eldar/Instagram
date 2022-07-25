<template>
  <section class="post-list container-layout column">
    <post-preview
      v-for="post in posts"
      :key="post._id"
      :post="post"
      @remove="removePost"
    />
  </section>
</template>
<script>
  import postPreview from './post-preview.cmp.vue'

  export default {
    name: 'postList',
    props: ['posts'],
    emits: ['removed', 'showDetails'],
    components: {
      postPreview,
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
