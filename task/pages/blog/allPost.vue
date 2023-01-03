<template>
  <div>
    <ul>
      <!-- <li v-for="post in allPosts" :key="post.id">{{ post.body  }}</li> -->
     <!-- ---- <li v-for="user in allUsers" :key="user.id">user {{ user}}</li> -->
 
    </ul>

    
    <div v-for="(item,  index) in allPosts"  :key ="index">
      <h3>{{ item.user.name }}</h3> 
      <h2>{{ item.body }}</h2> 
      <h2 v-for="item in item.comments"  :key ="item.id">
        <h3> username  {{item.name}}</h3> 
        <h3>comments {{item.body}} </h3> 
      
         </h2>
    </div>
      
      <!-- <li v-for="post of allPosts.comments"  :key ="post.id" >post : {{post}}</li> -->
     
   
    <!-- <ul>
      <li v-for="comment of allComment"  :key ="comment.id">comment :{{comment.body}}</li>
    </ul> -->
  </div>
</template>

<script>
// import axois from "axios";

import {mapGetters,mapActions } from "vuex";
export default {
  name: "Todos",
  methods: mapActions(["fetchPost"]),
  computed: mapGetters(["allPosts"]),
  created(){
    this.fetchPost()
    
  }
};
</script>
