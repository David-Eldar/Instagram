<template>
  
    <section class="content-inbox flex relative">
        
      
      <ul class="post flex clean-list" v-if="post">
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



