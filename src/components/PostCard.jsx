// components/PostCard.jsx
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import service from '../services/config.js';
import bg_image from '../images/login_bg.png';

const PostCard = ({ post }) => {

    // below snippet will only work with paid plan of appwrite.
  let imageUrl = post.featuredImage
    ? service.getFilePreview(post.featuredImage).href
    : bg_image;

    imageUrl = bg_image

  

  return (
    <Card
      component={Link}
      to={`/post/${post.slug}`}
      sx={{
        textDecoration: 'none',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardMedia
  component="img"
  image={imageUrl}
  alt={post.title}
  sx={{
    height: 200,    // fixed height in px
    objectFit: 'cover', // crop/scale image to fill nicely
    width: '100%',  // full card width
  }}
/>
      <CardContent>
        <Typography variant="h6" color="text.primary">
          {post.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
