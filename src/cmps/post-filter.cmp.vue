<template>
  <section
    class="filter-container flex">
    <form class="search flex">
      <input
        type="search"
        class="input-search"
        v-model="filterBy.txt"
        placeholder="Search "
        @input="setFilter"
      />
    </form>
    <!-- <form>
  <input type="search" placeholder="Search...">
</form> -->
  </section>
</template>

<script>
  import {utilService} from '../services/util.service.js'
  export default {
    name: 'post-filter',
    data() {
      return {
        filterBy: {
          txt: '',
        },
      }
    },
    created() {
      this.setFilter = utilService.debounce(this.setFilter, 400)
    },
    methods: {
      setFilter() {
        this.$emit('setFilter', JSON.parse(JSON.stringify(this.filterBy)))
      },
    },
  }
</script>

<style></style>
