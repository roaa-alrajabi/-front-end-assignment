<template>
  <!-- start page container -->
  <div class="page-container">
    <allpost />
  </div>
    <!-- end page container -->
</template>

<script>
import allpost from "../pages/blog/allPost.vue";

export default {
  components: {
    allpost,
  },
  name: "IndexPage",
  head() {
    return {
      title: "feed|linkedIn",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            " search for job, post, bilud community network and  bilud cv "
        }
      ]
    };
  }
};
</script>

