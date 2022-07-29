<template>
  <section class="post-preview column ">

    <div class="preview-header flex space-between preview-layout">
      <user-details :post="post"/>
    <div class="meatballs-menu-container flex relative">
       <button class="meatballs-menu-btn">
         <i><svg aria-label="More options" 
                 class="_ab6-" 
                 color="#262626" 
                 fill="#262626" 
                 height="24" 
                 role="img" 
                 viewBox="0 0 24 24" 
                 width="24">
                 <circle cx="12" cy="12" r="1.5"></circle>
                 <circle cx="6" cy="12" r="1.5"></circle>
                 <circle cx="18" cy="12" r="1.5"></circle>
         </svg></i>
       </button>
    </div>
     

    </div>

     <div class="post-img-placholder flex relative">
      <img src="../assets/imgs/post-test-img.jpeg" alt="">
    </div>

  <div class="content-wrapper box-padding preview-layout">      
    <nav class="preview-icons-nav-bar flex ">
      <ul class="clean-list flex">
        <li><button><svg 
        aria-label="Activity Feed" 
        class="_ab6-" 
        color="#262626" 
        fill="#262626" 
        height="24" 
        role="img" 
        viewBox="0 0 24 24"
         width="24">
         <path 
         d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z">
         </path>
        </svg></button></li>

        <li><button><svg 
          aria-label="Comment" 
          class="_ab6-" 
          color="#262626" 
          fill="#262626" 
          height="24" 
          role="img" 
          viewBox="0 0 24 24" width="24">
          <path 
          d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" 
          fill="none" 
          stroke="currentColor" 
          stroke-linejoin="round" 
          stroke-width="2">
          </path>
        </svg></button></li>

        <li><button><svg 
          aria-label="Share Post" 
          class="_ab6-" 
          color="#262626" 
          fill="#262626" 
          height="24" 
          role="img" 
          viewBox="0 0 24 24" 
          width="24">
          <line 
          fill="none" 
          stroke="currentColor"
          stroke-linejoin="round" 
          stroke-width="2" 
          x1="22" x2="9.218" y1="3" y2="10.083">
          </line>
          <polygon 
          fill="none" 
          points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" 
          stroke="currentColor" 
          stroke-linejoin="round" 
          stroke-width="2">
          </polygon>
        </svg></button></li>
        </ul>

      <button class="mark-post">
        <svg 
         aria-label="Save" 
         class="_ab6-" 
         color="#262626" 
         fill="#262626" 
         height="24" 
         role="img" 
         viewBox="0 0 24 24" 
         width="24">
         <polygon 
          fill="none" 
          points="20 21 12 13.44 4 21 4 3 20 3 20 21" 
          stroke="currentColor" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2">
         </polygon>
        </svg>
      </button>
    </nav>

        <div class="preview-content-container column relative box-padding">
         <h5 class="likers flex ">likes</h5>

    <ul class="post-content flex clean-list">
       <li class="username">{{ post.by.fullname }}</li>
       <li class="post-content">{{post.txt}}</li>
     </ul>

          <router-link :to="'/post/'+ post._id"  ><button class="view-cmts flex">view all comments</button></router-link>
      
         <!-- <post-comments :post="post"/> -->

         <h6 class="created-at flex">X HOURES AGO</h6>
        </div>

        </div>


        <div class="top-border box-padding full">
          <post-edit :post="post" class="preview-layout"/>
        </div>
    
    
  </section>
</template>
<script>
  

  import userDetails from './user-details.cmp.vue'
  import postEdit from './post-edit.cmp.vue'
  import postContent from './post-content.cmp.vue'
  import postComments from './post-comments.cmp.vue'

  export default {
    name: 'postPreview',
    props: ['post'],
    // emits: ['remove'],
    components: {
      userDetails,
      postEdit,
      postContent,
      postComments
      // testCmo
    },
    data() {
      return {}
    },
    created() {},
    methods: {
      // removePost() {
      //   this.$emit('remove', this.post._id)
      // },
    },
    computed: {
      // formatPrice() {
      //   return (this.post.price + '').slice(0, 1)
      // },
    },
    unmounted() {},
  }
</script>
