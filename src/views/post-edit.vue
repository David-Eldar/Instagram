<template>
  <section v-if="postToEdit" class="center form-center">
    <h1>{{ formTitle }}</h1>
    <form @submit.prevent="save">
      <div class="inputbox">
        <input type="text" v-model="postToEdit.name" placeholder="title" />
      </div>
      <div class="inputbox">
        <input
          class=""
          type="number"
          v-model="postToEdit.price"
          placeholder="price"
        />
      </div>
      <div class="inputbox">
        <button class="btn btn-black">Save</button>
      </div>
    </form>
  </section>
</template>

<script>
  import {postService} from '../services/post.service.js'

  export default {
    name: 'PostEdit',
    components: {},
    data() {
      return {
        postToEdit: null,
      }
    },
    async created() {
      const postId = this.postId
      if (postId) {
        const post = await this.$store.dispatch({
          type: 'getPostById',
          postId,
        })
        this.postToEdit = post
      } else {
        this.postToEdit = postService.getEmptyPost()
      }
    },
    methods: {
      async save() {
        await this.$store.dispatch({
          type: 'savePost',
          post: this.postToEdit,
        })
        this.$router.push('/')
      },
    },
    computed: {
      formTitle() {
        return this.postId ? 'Edit post' : 'Add post'
      },
      postId() {
        return this.$route.params.postId
      },
    },
    unmounted() {},
  }
</script>

<style>
  .main-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
</style>
