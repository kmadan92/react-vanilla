import React, { useEffect } from "react";
import { Container, Typography, IconButton, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import service from "../services/config";
import { useParams, useNavigate } from "react-router-dom";

export default function BlogPostFullPage({ title, content, onEdit })
 {

    const postid = useParams();
    const navigate = useNavigate();

    useEffect(()=>{

        const loadPost = async() =>{
        const post = await service.getPost(postid)

        if(!post){
            alert("Post does not exist")
            navigate("/new-post")
        }
        
        }

        loadPost()

    },[])
  return (

    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h3" component="h1">
          {title}
        </Typography>
        <IconButton onClick={onEdit} aria-label="edit">
          <EditIcon />
        </IconButton>
      </Box>
      <Typography variant="body1" sx={{ whiteSpace: "pre-wrap", fontSize: "1.1rem" }}>
        {content}
      </Typography>
    </Container>

  );
}

