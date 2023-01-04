
import axios from 'axios'

export const state = () =>({
  users: [],
  posts:[],
  post:[],
  
})

export const getters ={
  allUsers : (state) =>  state.users,
  allPosts : (state)=> state.posts,
  post: (state)=>state.post,
}

export const mutations = {
    
    Set_User  (state, users) {
       return state.users = users;
      },
    Set_POST(state, payload) {
      state.posts = payload;
     },
     EACH_POST(state,payload){
      state.post =payload;
     }
};
export const actions = {

  async fetchPost(context) {
    
   const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
      
  const resUsers =await axios.get('https://jsonplaceholder.typicode.com/users')
        const users = {}
        resUsers.data.forEach(element => {
          users[element.id] = element
      });
       
      let posts = [];
        for(const post of res.data ){
          const resComments = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
          const resPost = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
          posts.push({...post, user:users[post.userId], comments:resComments.data })
         
        }
        console.log(posts);
        context.commit('Set_POST', posts);
  },


  async fetchEachPost({commit},{id}) {
    let post =[];
    const resPost = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const resComments = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    const resUser = await axios.get(`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`)
    post.push({post:resPost.data,comments:resComments.data,user:resUser.data })
    console.log(post);
    // const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    // console.log(res.data);
    
      // const resPost = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
      // const resComments = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
      // Eachpost.push({Eachpost:resPost.data, comments:resComments.data })
      // console.log(Eachpost);
    
   
       
  //  const resUsers =await axios.get('https://jsonplaceholder.typicode.com/users')
        
  //      let posts = [];
  //      let roaa=[]
  //        for(const post of res.data ){
  //          const resComments = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
  //          const resPost = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
  //          posts.push({...post, user:users[post.userId], comments:resComments.data })
  //          roaa.push({rr:resPost.data})
  //        }
  //        console.log(posts);
  //        console.log(roaa);
         commit('EACH_POST', {post:post} );
   },
 
  // async fetchComments(context, postId) {
  //   return await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  //   .then(res => {
  //       return res.data;
  //     })
  //     .catch(err => {
  //       return undefined
  //     })
  //   }
    //    async fetchUsers({commit}){
      
      // fetchPost(context) {
      //   axios.get(`https://jsonplaceholder.typicode.com/posts?userId=1`)
      //     .then(res => {
      //       context.commit('Set_POST', res.data);
      //     })
      //     .catch(err => {
            
      //     })
      // },
      //      const response1 = await axios.get('https://jsonplaceholder.typicode.com/users');
//      console.log(state.users);
//      let key ;
//      let respoense;
//      for(key in response1.data){
//        let num = +key +1
       
//        const respoense = await axios.get(`https://jsonplaceholder.typicode.com/posts/${num}`);
       
//        console.log(response1.json(),respoense,num);
//       }
      
//       commit('Set_User' , response1.data,respoense )  
       
//     },
    
//     async fetchPost({state ,commit} ){
//       console.log(id);
//       const respoense = await axios.get('https://jsonplaceholder.typicode.com/posts'); 
//       var id = respoense.data
      
//       console.log(respoense.data);
//       commit('Set_POST' ,respoense.data)
//    },

//    async fetchComments({commit}){
    
//     const respoense = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');  
//     commit('Set_COMMENT' ,respoense.data)
//  },
  
};

