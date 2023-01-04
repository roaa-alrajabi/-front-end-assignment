<template>
  <div class="postr-container bg-[#f3f2ef] flex">
    <div
      v-for="(item,  index) in getPost"
      :key="index"
      class="user-card-section bg-white border-zinc-300 rounded w-[14rem] h-[15rem] mt-4 ml-96"
    >
      <div class="shrink-0">
        <img
          class="h-16 w-16 mx-auto mt-2 mb-4 object-cover rounded-full"
          src="../../../assets/image/avatar.png"
          alt="Current profile photo"
        />
      </div>
      <div class="user-card-blk text-center ">
        <h3 class="user-name">{{ item[0].user.name }}</h3>
        <span class="company-name text-sm text-slate-400">{{item[0].user.company.name}}</span>
        <span class="company-name text-sm text-slate-400 mb-4">{{item[0].user.email}}</span>
      </div>
      <div class="connection-btn text-center">
        <button class="mt-4 py-1 px-16 bg-blue-600 text-white font-semibold rounded-full">connection </button>

      </div>
    </div>
    <div
      class="postr-section bg-white mx-5 px-2 mb-2 border border-zinc-300 rounded w-[40rem] mt-4"
    >
      <div class="flex">
        <div class="user-image-blk py-4 px-2">
          <img
            class="rounded-full w-[4rem]"
            src="../../../assets/image/avatar.png"
            alt="user image"
          />
        </div>
        <div v-for="(item,  index) in getPost" :key="index" class="user-info-blk py-4 px-2">
          <h3 class="user-name">{{ item[0].user.name }}</h3>
          <h3 class="company-name text-sm text-slate-400">{{item[0].user.company.name}}</h3>
        </div>
      </div>

      <div class="postr-blk px-4 pb-2 mb-4 border-b border-slate-200">
        <span
          v-for="(item,  index) in getPost.post"
          :key="index"
          class="font-sans text-base font-light mb-4"
        >{{ item.post.body }}</span>
      </div>

      <div class="user-interaction-section flex justify-around mb-4">
        <div class="text-slate-400">Like</div>
        <div class="text-slate-400">Comment</div>
        <div class="text-slate-400">Repost</div>
        <div class="text-slate-400">Send</div>
      </div>

      <div class="flex mb-3">
        <div class="shrink-0">
          <img
            class="h-10 w-10 mx-4 mt-2 mb-4 object-cover rounded-full"
            src="../../../assets/image/avatar.png"
            alt="Current profile photo"
          />
        </div>
        <div>
          <input
            class="placeholder-shown:border-gray-500 border my-3 pl-2 border-zinc-300 rounded-full h-10 w-[33rem]"
            placeholder="Add a Comment"
          />
        </div>
      </div>

      <div
        class="comments-section mx-auto mb-2 w-[37rem]"
        v-for="(item,index) in getPost"
        :key="index"
      >
        <div v-for="item in item[0].comments" :key="item.id">
          <div class="comments-blk flex">
            <div class="shrink-0">
              <img
                class="h-10 w-10 mr-4 object-cover rounded-full"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                alt="Current profile photo"
              />
            </div>

            <div class="user-info-blk mx-auto pl-2 mb-2 bg-slate-100 rounded-b-md rounded-tr-md">
              <h3 class="user-name">{{item.name}}</h3>
              <h3 class="company-name text-sm text-slate-400">Company Name</h3>
              <span class="font-sans text-base font-light">{{item.body}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
    <script>
export default {
  name: "index",
  computed: {
    getPost() {
      return this.$store.state.post;
    }
  },

  mounted() {
    this.$store.dispatch("fetchEachPost", { id: this.$route.params.id });
  }
};
</script>