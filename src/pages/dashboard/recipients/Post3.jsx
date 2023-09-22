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

const Post3 = () => {
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
          title='Aaron Barbie'
          subheader='June 11, 2023'
        />
        <CardMedia
          component='img'
          height='194'
          image='https://p7.itc.cn/images01/20220118/13ea0e30e54b4c5eb53b3cf7702f242d.jpeg'
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

export default Post3;
