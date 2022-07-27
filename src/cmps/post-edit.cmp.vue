<template>
  
  <form class="post-content-container column relative">

    <div class="content-inbox column relative preview-layout">
        
      <h5 class="likers flex">likes</h5>
      <ul class="post flex clean-list">
        <li class="username">{{ post.by.fullname }}</li>
       <!-- <li class="username">username</li> -->
       <li class="post-content">{{post.txt}}</li>
      </ul>
       <router-link to="/post/:postId?" ><button class="view-cmts flex">view all comments</button></router-link>
       <!-- <ul class="comments flex clean-list">
        <li class="username">{{post.comments.}}</li>
        <li class="comment">{{post.comments}}</li>
       </ul> -->
       <h6 class="created-at flex">X HOURES AGO</h6>
    </div>

      <hr>

    <div class="comment-inputbox flex relative preview-layout">
       <button class="emoji-btn flex"><router-link to="post/"></router-link>
        <svg 
         aria-label="Emoji" 
         class="_ab6-" 
         color="#262626" 
         fill="#262626" 
         height="24" 
         role="img" 
         viewBox="0 0 24 24" 
         width="24">
         <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
         </svg></button> 
        <input type="text" placeholder="Add a comment..." />
        <button class="post-btn">Post</button>
    </div>
      
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
