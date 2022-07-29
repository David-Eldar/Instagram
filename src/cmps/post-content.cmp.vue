<template>
  
  <section class="content-inbox flex relative" v-if="post">
        
      
     <div class="user-img-ring flex">
      <div class="user-img-placeholder flex">
       <img src="../assets/imgs/User-test-img.jpeg" alt="">
      </div>
     </div>
     
     <ul class="post-content flex clean-list">
       <li class="username">{{ post.by.fullname }}</li>
       <li class="post-content">{{post.txt}}</li>
     </ul>

  </section>
</template>

<script>

export default {
  name:'postContent',
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



