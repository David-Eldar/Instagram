import { createStore } from 'vuex';
import postStore from './modules/post-store.js';

const store = createStore({
  strict: true,
  modules: {
    postStore,
  },
});

export default store;
