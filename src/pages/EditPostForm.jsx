import React, { useEffect, useState } from 'react';
import { PostForm } from '../components/index.js';
import { useParams } from 'react-router-dom';
import service from '../services/config.js';

export default function EditPostForm() {

const {postid} = useParams()
const [post, setPost] = useState({});

useEffect(()=>{

    const loadPost = async() =>{
            try{
        const get_post = await service.getPost(postid)

        if(!get_post){
            alert("Post does not exist")
            navigate("/dashboard")
        }

         setPost(get_post)
    }catch(error){
        alert("inside catch. Failed to load post");
    }

        } 
        loadPost()
    
},[postid])

  return (
    <>
      <PostForm post={post}/>
    </>
  );
}
