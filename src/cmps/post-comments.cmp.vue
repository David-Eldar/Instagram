<template>
  
  <form class="post-comments-cmp-container column relative" v-if="post">

    <router-link :to="'/post/'+ post._id"  ><button class="view-cmts flex">view all comments</button></router-link>
    
    <ul class="comments flex clean-list">
      <li class="username" v-for="comment in post.comments" :key="comment">
          {{comment.by.fullname}}
      <p class="commet">{{comment.txt}}</p>
    </li>
       </ul>

      
  </form>
  
</template>

<script>
// import {postService} from '../services/post.service.js'
export default {
  name:'postEdit',
  props: ['post'],
  data() {
return {};
},
created() {},
methods: {},
computed: {},
unmounted() {},
};
</script>


<!-- <template>
  <section v-if="postToEdit" class="center form-center">
    <h1>test</h1>
    <form @submit.prevent="save">

    </form>
  </section>
</template>

<script>
  import {postService} from '../services/post.service.js'

  export default {
    name: 'postEdit',
    components: {
      
    },
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
</style> -->
