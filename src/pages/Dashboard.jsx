import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import LibraryAddSharpIcon from '@mui/icons-material/LibraryAddSharp';
import { useNavigate } from 'react-router-dom';
import service from '../services/config';
import { Grid, Box, Pagination } from '@mui/material';
import { PostCard, Image } from '../components/index.js';
import { Query } from 'appwrite';

export default function Dashboard() {
  const navigate = useNavigate();
  const [isPost, setIsPost] = useState(false)
  const [allPosts ,setAllPosts] = useState([{}])
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;
  const [totalPosts, setTotalPosts] = useState(0);

  function getGreeting() {
    const hour = new Date().getHours();

    if (hour < 12) {
      return 'Good Morning';
    } else if (hour < 17) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  }

  const handlePageChange = (_, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(()=>{

    const all_posts = async(page=1) =>{
    const offset = (page - 1) * postsPerPage;
    const posts = await service.getPosts([Query.equal('status', 'active')],postsPerPage, offset)
    console.log(posts)
    if(posts){
      setIsPost(true)
      setAllPosts(posts.documents)
      setTotalPosts(posts.total)
      setLoading(false)
      return
    }
    setLoading(false)
    console.log(posts)
    }

    all_posts(currentPage)

  },[currentPage])

  if (loading) {
      return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
          <Image src="https://i.gifer.com/8CLc.gif" className="h-25" />
        </div>
      );
    }

  return (
    
    !isPost ?
      <>
    <div className="w-full h-screen mt-10">
        <label className=" m-4 font-mono text-4xl block text-blue-950">
          {getGreeting()},
        </label>
        <label className="ml-4 font-mono text-xl text-blue-950">
          {' '}
          Its lonely here, why not start with a{' '}
        </label>
        <Button
          variant="contained"
          size="large"
          endIcon={<LibraryAddSharpIcon />}
          onClick={() => {
            navigate('/new-post');
          }}
          sx={{
            padding: 2,
            margin: 2,
          }}
        >
          New Post
        </Button>
      </div>
</>
    :
    <>
    <Button
          variant="contained"
          size="large"
          endIcon={<LibraryAddSharpIcon />}
          onClick={() => {
            navigate('/new-post');
          }}
          sx={{
            padding: 2,
            margin: 2,
          }}
        >
          New Post
        </Button>
    <div className="w-full h-screen mt-10 ml-20 flex flex-col justify-between">
  <Grid container spacing={3}>
    {allPosts.map((post) => (
      <Grid item xs={12} sm={6} md={4} key={post.$id}>
        <PostCard post={post} />
      </Grid>
    ))}
  </Grid>
 
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'flex-start',
      mt: 4,
      mb: 2,
      pr: 3, // padding right to give some space from edge
    }}
  >
   
    <Pagination
      count={Math.ceil(totalPosts / postsPerPage)}
      page={currentPage}
      onChange={handlePageChange}
      color="primary"
      shape="rounded"
    />
  </Box>
</div>
      
    </>
  );
}
