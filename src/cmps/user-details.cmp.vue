<template>

    <section class="user-info-box" v-if="post">
    <div class="user-img-ring flex">
     <div class="user-img-placeholder flex">
      <img src="../assets/imgs/User-test-img.jpeg" alt="">
     </div>
    </div>
    <div class="user-details column flex relative">
        <h5 class="username">{{ post.by.fullname }}</h5>
        <h6 class="posted-from">{{post.loc.name}}</h6>
      </div>
    </section>
</template>

<script>
export default {
  name:'userDetails',
  props:['post'],
data() {
return {};
},
created() {},
methods: {},
computed: {},
unmounted() {},
};
</script>