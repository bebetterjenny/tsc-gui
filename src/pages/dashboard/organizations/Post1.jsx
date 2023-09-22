import React from 'react';
import {
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
  Comment,
} from '@mui/icons-material';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Post1 = () => {
  return (
    <div>
      <Card sx={{ marginBottom: 5 }}>
        <CardHeader
          avatar={
            <Link to='/profilepage' style={{ textDecoration: 'none' }}>
              <Avatar sx={{ bgcolor: 'red' }} aria-label='recipe'>
                R
              </Avatar>
            </Link>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVert />
            </IconButton>
          }
          title='ABC'
          subheader='September 14, 2023'
        />
        <CardMedia
          component='img'
          height='194'
          image='https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=1024x1024&w=is&k=20&c=w15AGFL7iZtN6aXbIlrUWZbkft2HtZq9TnKrmp5Jr2g='
          alt='Paella dish'
        />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label='add to favorites'>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: 'red' }} />}
            />
          </IconButton>
          <IconButton aria-label='comment'>
            <Comment />
          </IconButton>
          <IconButton aria-label='share'>
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post1;
