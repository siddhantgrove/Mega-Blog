// import React,{useCallback} from 'react'
// import { useForm } from 'react-hook-form'
// import {Button , Input , Select , RTE} from "../index"
// import appwriteService from "../../appwrite/conifg"
// import { useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'

// export default function PostForm({post}) {
//     const {register , handleSubmit , watch , setValue,control,getValues} = useForm({
//         defaultValues : {
//             title : post ?.title || "",
//              content : post ?.content|| "",
//               status : post ?.status || "active",
//                slug : post ?.slug || "",

//         },

//     });
    
    
//     const navigate =  useNavigate ()
//     const userData = useSelector ((state) => state.auth.userData)
    

//     const submit = async (data)=>{
//     if (post) {
//         const file = data.image[0] ? await appwriteService.uplodeFile(data.image[0]):null
    
//     if (file) {
//         appwriteService.deleteFile(post.featuredImage)
        
//     }

//     const dbPost = await appwriteService.updatePost(post.$id,{
//         ...data,
//         featuredImage : file ? file.$id : undefined,
       
//     })

//      if (dbPost) {
//             navigate(`/posts/${dbPost.$id}`)
//         }
    

//     }else{
//             //TODO: IMPROve more functionality 
//             const file  =  await appwriteService.uplodeFile(data.image[0])

//             if (file) {
//                 const fileId = file.$id
//                 data.featuredImage = fileId
//                const dbPost = await appwriteService.createPost({
//                     ...data,
//                     userId : userData.$id
//                 })
//                      if (dbPost) {
//             navigate(`/posts/${dbPost.$id}`)
//         }
//     }
//         }


    

// }


// const slugTransform = useCallback((value)=>{

//     if (value && typeof value === 'string')
        
//         return value
//         .trim()
//         .toLowerCase()
//         .replace(/^[a-zA-Z\d\s]+/g, "-")
//         .replace(/\s/g,"-")

//         return ""

//     },[])

//     React.useEffect(()=>{
//         const subscription = watch((value , {name})=>{
//             if (name === 'title') {
//                 setValue('slug',slugTransform(value.title),{shouldValidate : true

//                 })
//             };
//             })
            
//             return () => subscription.unsubscribe()
// } ,[watch,slugTransform,setValue])



//   return (
    
// <form onSubmit = {handleSubmit(submit)} className='flex flex-wrap'>
  
//   <div className='w-2/3 px-2' >
  
//   <Input
//   label = 'Title :'
//   placeholder = "Title"
//   className = "mb-4"
//   {...register("title",{required:true})}
  
//   />
//   <Input  // hamna React.useeffect ma kam kia ha to value automatic value full hoti jayegi 
//   label = 'Slug :'
//   placeholder = "Slug"
//   className = "mb-4"
//   {...register("Slug",{required:true})}
//   onInput = {(e)=>{
//     setValue("slug",slugTransform(e.currentTarget.value),{
//         shouldValidate : true
//     })
//   }}
//  />

//  <RTE
//  label="Content:"
//  name="content"
//  control={control}
//  defaultValue={getValues ("content")}
//  />
//    </div>

//    <div className='w-1/3 px-2'>
//   <Input
//   label = 'Featured Image :'
//   type = "file"
//   className = "mb-4"
//  accept = "image/png , image/jpg , image/ jpeg , image/gif"
//   {...register("image",{required:!post})}

//   />

//   {post && (
//     <div className='w-full mb-4'>
//         <img src={appwriteService.getFilePreview(post.featuredImage)} alt={post.title} className='rounded-lg' />
//     </div>
//   )}

//   <Select

//   options = {["active","inactive"]}
//   label = "Status"
//   className = "mb-4"
//   {...register("Status",{required:true})}
  
//   />
//   <Button
//   type='submit'
//   bgColor = {post ? "bg-green-500" : undefined}
//   className='w-full'  >
//   {post?"Update":"Submit"}
  
// </Button>

// </div>

// </form>
//   );
// }



import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, Select, RTE } from "../index";
import appwriteService from "../../appwrite/conifg";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
    defaultValues: {
      title: post?.title || "",
      content: post?.content || "",
      status: post?.status || "active",
      slug: post?.slug || "",
    },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    try {
      let file = null;
      if (data.image && data.image[0]) file = await appwriteService.uplodeFile(data.image[0]);

      if (post) {
        if (file) appwriteService.deleteFile(post.featuredImage);
        const dbPost = await appwriteService.updatePost(post.$id, {
          ...data,
          featuredImage: file ? file.$id : post.featuredImage,
        });
        if (dbPost) navigate(`/posts/${dbPost.$id}`);
      } else {
        if (file) data.featuredImage = file.$id;
        const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });
        if (dbPost) navigate(`/posts/${dbPost.$id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value.trim().toLowerCase().replace(/[^a-zA-Z\d\s]+/g, "").replace(/\s/g, "-");
    }
    return "";
  }, []);

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <div className="p-6">
      <form
        onSubmit={handleSubmit(submit)}
        className="flex flex-wrap gap-6 bg-white/40 backdrop-blur-lg rounded-3xl shadow-2xl p-8"
      >
        {/* Left Column */}
        <div className="w-full lg:w-2/3 flex flex-col gap-4">
          <Input
            label="Title"
            placeholder="Enter post title"
            className="rounded-lg bg-white/70 shadow-inner border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            {...register("title", { required: true })}
          />

          <Input
            label="Slug"
            placeholder="Auto-generated slug"
            className="rounded-lg bg-white/70 shadow-inner border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            {...register("slug", { required: true })}
            onInput={(e) =>
              setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true })
            }
          />

          <RTE
            label="Content"
            name="content"
            control={control}
            defaultValue={getValues("content")}
          />
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <Input
            label="Featured Image"
            type="file"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
            className="rounded-lg border border-gray-300 p-2"
          />

          {post && (
            <div className="w-full mb-4">
              <img
                src={appwriteService.getFilePreview(post.featuredImage)}
                alt={post.title}
                className="rounded-xl shadow-md"
              />
            </div>
          )}

          <Select
            options={["active", "inactive"]}
            label="Status"
            className="rounded-lg border border-gray-300"
            {...register("status", { required: true })}
          />

          <Button
            type="submit"
            className={`w-full py-3 px-4 rounded-xl font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105 ${
              post ? "bg-green-500 hover:bg-green-600" : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {post ? "Update Post" : "Create Post"}
          </Button>
        </div>
      </form>
    </div>
  );
}


