import axios from "axios";

export const state = () => ({
  posts: [],
  post: [],
});

export const getters = {
  allPosts: (state) => state.posts,
  post: (state) => state.post,
};

export const mutations = {
  Set_POSTS(state, payload) {
    state.posts = payload;
  },
  Set_POST_BY_ID(state, payload) {
    state.post = payload;
  },
};
export const actions = {
  async fetchAllPosts(context) {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);

    const resUsers = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = {};
    resUsers.data.forEach((element) => {
      users[element.id] = element;
    });

    let posts = [];
    for (const post of res.data) {
      const resComments = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
      );
      const resPost = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${post.id}`
      );
      posts.push({
        ...post,
        user: users[post.userId],
        comments: resComments.data,
      });
    }
    console.log(posts);
    context.commit("Set_POSTS", posts);
  },

  async fetchPostById({ commit }, { id }) {
    let post = [];
    const resPost = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const resComments = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    const resUser = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`
    );
    post.push({
      post: resPost.data,
      comments: resComments.data,
      user: resUser.data,
    });
    console.log(post);
    commit("Set_POST_BY_ID", { post: post });
  },
};
