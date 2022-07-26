<template>
  <section class="post-preview column">

    <div class="user-info flex">
      <div class="user-img-container flex">
      <div class="user-img-ring flex">
        <div class="user-img-placeholder flex">
        <img src="../assets/imgs/User-test-img.jpeg" alt="">
        </div>
        </div>
      <div class="user-details column flex relative">
        <h5 class="user-name">{{ post.by.fullname }}</h5>
        <h6 class="posted-from">{{post.loc.name}}</h6>
      </div>
    </div>
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

     <div class="post-img-placholder">
      <img src="../assets/imgs/post-test-img.jpeg" alt="">
    </div>
    
    
  </section>
</template>
<script>
  export default {
    name: 'postPreview',
    props: ['post'],
    emits: ['remove'],
    components: {},
    data() {
      return {}
    },
    created() {},
    methods: {
      removePost() {
        this.$emit('remove', this.post._id)
      },
    },
    computed: {
      formatPrice() {
        return (this.post.price + '').slice(0, 1)
      },
    },
    unmounted() {},
  }
</script>
