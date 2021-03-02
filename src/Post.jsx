import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';

function Post({ imageUrl, username, caption }) {
  return (
    <div className='post'>
      <div className='post__header'>
        <Avatar
          className='post__avatar'
          alt=''
          src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
        />
        <h3>{username}</h3>
      </div>
      <img className='post__image' src={imageUrl} alt='' />
      <h4 className='post__text'>
        <strong>{username}: </strong> {caption}
      </h4>
    </div>
  );
}

export default Post;
