// import { postService } from '../../services/post.service.js';
import { postService } from '../../services/post-service.js';

export default {
  state: {
    posts: null,
    filterBy: null,
    isLoading: false,
  },
  getters: {
    posts(state) {
      return state.posts 
    },
    isLoading(state) {
      return state.isLoading;
    },
  },
  mutations: {
    setPosts(state, { posts }) {
      state.posts = posts;
    },
    setIsLoading(state, { isLoading }) {
      state.isLoading = isLoading;
    },
    removePost(state, { id }) {
      const idx = state.posts.findIndex((post) => post._id === id);
      state.posts.splice(idx, 1);
    },
    savePost(state, { post }) {
      const idx = state.posts.findIndex(
        (currPost) => currPost._id === post._id
      );
      console.log('post:',post)
      if (idx !== -1) state.posts.splice(idx, 1, post);
      else state.posts.unshift(post);
    },
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy;
    },
  },
  actions: {
    async loadPosts({ commit, state }) {
      // commit({type: 'setIsLoading', isLoading: true});
      try {
        var posts = await postService.query(state.filterBy);
        commit({ type: 'setPosts', posts });
      } catch (err) {
        console.error('Cannot Load posts', err);
        throw err;
      }
      // finally {
      //   commit({type: 'setIsLoading', isLoading: false});
      // }
    },
    async savePost({ commit }, { post }) {
      try {
        const savedPost = await postService.save(post)
        commit({ type: 'savePost', post: savedPost })
      } catch (err) {
        console.error('Cannot save post', err);
        throw err;
      }
    },
    async removePost({ commit }, { id }) {
      try {
        await postService.remove(id);
        commit({ type: 'removePost', id });
      } catch (err) {
        console.error('Cannot remove post', err);
        throw err;
      }
    },
    async getPostById(context, { postId }) {
      try {
        return await postService.getById(postId);
      } catch (err) {
        console.log(err);
      }
    },
    filter({ commit, dispatch }, { filterBy }) {
      commit({ type: 'setFilter', filterBy });
      dispatch({ type: 'loadPosts' });
    },
  },
};
