<template>
    <section class="popup">
      <div class="add-modal">
      
      <button @click="save">Add Post</button>

      </div>
    
        
    </section>
</template>

<script>
import { postService } from '../services/post.service';

export default {
 template: `
`, 
data() {
return {
 postToEdit: postService.getNewEmptyPost()
};
},
created() {},
methods: {
 async save() {
        await this.$store.dispatch({
          type: 'savePost',
          post: this.postToEdit,
        })
        this.$router.push('/')
      },
},
computed: {},
unmounted() {},
};
</script>

<style>
.add-modal{
  background-color: #fff;
  height: 400px;
  width: 400px;

}
</style>