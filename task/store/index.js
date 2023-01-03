
import axios from 'axios'

export const state = () =>({
  users: [],
  post:[],
  comment:[],
  
})

export const getters ={
  allUsers : (state) =>  state.users,
  allPosts : (state)=> state.post,
  allComment: (state)=>state.comment,
}

export const mutations = {
    
    Set_User  (state, users) {
       return state.users = users;
      },
    Set_POST(state, payload) {
      state.post = payload;
     },
     Set_COMMENT(state,payload){
      state.comment =payload;
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
          posts.push({...post, user:users[post.userId], comments:resComments.data})
        }
        console.log(posts);
        context.commit('Set_POST', posts);
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

