<template>
    <section>
      <div class="menu-modal-wraper column">
        <div class="menu-modal-container column">
       <button class="delete-btn" @click="removePost">Delete</button>
       <button>Edit</button>
       
      </div>
      </div>  
    </section>
</template>

<script>

  

  export default {
    name: 'menuModal',
    props:['post'],
    components: {
    },
    data() {
      return {}
    },
    methods: {
      removePost() {
        this.$store.dispatch({type: 'removePost', id: this.post._id})
      },

    },
    computed: {
    },
    unmounted() {},
  }
</script>

<style>


</style>