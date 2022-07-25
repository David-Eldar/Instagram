<template>
  <div v-if="isShow && post" @click="closeModal" class="modal">
    <form @submit.prevent class="form-details">
      <h1>{{ post?.label }} post details</h1>
      {{ post }}
      <div class="img-container">
        <img class="details-img" v-if="post" :src="showPost" alt="" />
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'PostDetails',
    components: {},
    data() {
      return {
        post: null,
        isShow: true,
      }
    },
    created() {},
    methods: {
      async loadPost() {
        if (!this.postId) return // prevent the run of the watcher when change route
        const post = await this.$store.dispatch({
          type: 'getPostById',
          postId: this.postId,
        })
        this.post = post
        this.isShow = true
      },
      closeModal() {
        this.$emit('closeDetails')
      },
    },
    computed: {
      //opt 2 use computed for the postId
      postId() {
        return this.$route.params.postId
      },
      showPost() {
        console.log(this.post)
        return this.post.imgUrl
      },
    },
    //opt1 use the param specf as the func
    //   watch: {
    //     '$route.params.postId'(id) {
    //       console.log('Changed to', id);
    //       this.loadPost();
    //     },
    //   },
    //opt 2
    watch: {
      // when the computed postId run the watch handler also run
      postId: {
        handler() {
          this.loadPost()
        },
        immediate: true, //to also run the watch on the start / run eagerly
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
    /* margin: 0 auto; */
  }
</style>
