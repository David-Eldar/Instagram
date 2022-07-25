<template>
  <main class="main-layout-container"></main>
  <section>
    <market-filter />
  </section>
  <market-list @removed="removeMarket" v-if="markets" :markets="markets" />
</template>

<script>
  import marketList from '../cmps/market-list.cmp.vue'
  import marketEdit from '../views/market-edit.vue'
  import marketDetails from '../views/market-details.vue'
  import marketFilter from '../cmps/market-filter.vue'

  export default {
    name: 'MarketApp',
    components: {
      marketList,
      marketEdit,
      marketFilter,
      marketDetails,
    },
    data() {
      return {}
    },
    methods: {
      removeMarket(marketId) {
        this.$store.dispatch({type: 'removeMarket', id: marketId})
      },
      setFilter(filterBy) {
        this.$store.dispatch({type: 'filter', filterBy})
      },
    },
    computed: {
      markets() {
        return this.$store.getters.markets
      },
    },
    unmounted() {},
  }
</script>
