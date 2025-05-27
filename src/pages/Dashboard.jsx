import React from 'react';
import { Button } from '@mui/material';
import LibraryAddSharpIcon from '@mui/icons-material/LibraryAddSharp';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

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

  return (
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
  );
}
