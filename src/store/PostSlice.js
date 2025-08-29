// import { createSlice, PostSlice } from "@reduxjs/toolkit";


//   const initialState = {
//         status : false,
//         userData : null
//     }

//      const PostSlice = createSlice({
//     name :"auth",
//     initialState,
//     reducers:{
//         post : (state ,allpost) => {
//       state.post = true;
//       state.allpost = allpost.payload.userData
//         },
//         allpost:(post)=>{
//       state.post = false;
//       state.allpost = null;
//         }
//     }
//   })
//   export const {post,allpost} = PostSlice.actions
//   export default PostSlice.reducer