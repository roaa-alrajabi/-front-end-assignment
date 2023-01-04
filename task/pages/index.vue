<template>
  <div class="page-container">
    <allpost />
  </div>
</template>

<script>
// import AllPosts  from "../components/AllPosts.vue"
import allpost from "../pages/blog/allPost.vue";
import about from "../pages/about.vue";
import {mapGetters,mapActions } from "vuex";
export default {
  components: {
    allpost,
    // AllPosts,
    about
  },
  name: "IndexPage",
  // methods: mapActions(["fetchPost"]),
  // computed: mapGetters(["allPosts"]),
  // created(){
  //   this.fetchPost()

  // },
  head() {
    return {
      title: "feed|linkedIn",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            " the best website to seek job read articel bilud cv make social network  read postr and comment on it "
        }
      ]
    };
  }
};
</script>
</script>
