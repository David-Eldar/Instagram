<template>
  <div class="post-preview flex space-between">
    <div class="info flex">
      <div class="img-placeholder"></div>
      <h5 class="item-name">{{ post.txt }}</h5>
    </div>
    <div class="btn-container">
      <button>
        <img src="../assets/list-img.png" alt="" />
      </button>
    </div>
  </div>
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
