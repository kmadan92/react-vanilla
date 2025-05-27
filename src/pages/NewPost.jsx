import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { TinyMCE, Input } from '../components/index.js';
import service from '../services/config.js';
import { useSelector } from 'react-redux';

export default function NewPost({post}) {

    const navigate = useNavigate();
    const userData = useSelector((state)=>(state.auth.userData))

    const {control ,watch, register, handleSubmit, formState:{errors}} = useForm({
        defaultValues:{
            title:post?.post.title || "",
            slug: post?.post.slug || "",
            content: post?.post.content || "", 
            featuredImage: post?.post.featuredImage || "", 
            status: post?.post.status || "active", 
            userId: post?.post.userId || ""
        }
    });
    
    const newPost = async(data) => {
        if(post){
            const file = data.image[0] ? await service.uploadFile(data.image[0]) : null

            if(file){
                const del_file = await service.deleteFile(post.featuredImage)

                if(del_file){

                    const updatedPost = await service.updatePost(post.$id,{...data,featuredImage:file.$id})
                    if(updatedPost){
                        navigate(`/post/${updatedPost.$id}`)
                    }
                }
            }
        }
        else{
            const file = await service.uploadFile(data.image[0])
            if(file){
            const createdPost = await service.createPost({...data, featuredImage:file.$id,userId:userData.$id})
            if(createdPost){
                navigate(`/post/${createdPost.$id}`)
            }
            }

        }
    }

  return (
    <>

   <form 
   className='m-5 '
   onSubmit={handleSubmit(newPost)}
   >
<div className='m-4 flex gap-4'>
    <div className='w-2/3 flex flex-col gap-4 justify-start'>
    <Input
            type="text"
            labelChildren="TITLE"
            labelClassname = "text-gray-600 font-bold"
            inputClassname="w-full p-4 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter a Title..."
            htmlFor="title"
            {...register('title', { required: 'Password is required' })}
          />

<TinyMCE
name="content"
control={control}
label="CONTENT"
/>


    </div>


    <div className='w-1/3 flex gap-4 justify-center'>
    
    <Input
            type="file"
            inputClassname="w-full p-4 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter a Title..."
            htmlFor="title"
            {...register('title', { required: 'Password is required' })}
          />

    </div>
    </div>
    <Controller
name="new-content-submit"
control={control}
render={({field:{onSubmit}})=> 
<Button variant="contained" size='large'
sx={{
   
}}
>
    Submit Content
    </Button>
}
/>
   </form>
    </>
  );
}