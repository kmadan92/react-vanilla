import React, { useEffect, useState } from "react";
import { Container, Typography, IconButton, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import service from "../services/config";
import { useParams, useNavigate } from "react-router-dom";

export default function BlogPostFullPage()
 {

    const {postid} = useParams();
    const navigate = useNavigate();
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
        alert("Failed to load post");
    }

        } 
        loadPost()

    },[postid, navigate])

    const onEdit = () =>{

        navigate(`/edit/${postid}`)

    }


  return (

    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h3" component="h1">
          {post?.title || "Random Title"}
        </Typography>
        <IconButton onClick={onEdit} aria-label="edit">
          <EditIcon />
        </IconButton>
      </Box>
      <Typography variant="body1" sx={{ whiteSpace: "pre-wrap", fontSize: "1.1rem" }}>
        {post?.content || "Random Content"}
      </Typography>
    </Container>

  );
}

