import React from 'react';
import './Post.css';

function Post() {
  return (
    <div className='post'>
      <h3>Username</h3>
      <img
        className='post__image'
        src='https://images.unsplash.com/photo-1614607660006-945b019c188a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        alt=''
      />
      <h4 className='post__text'>
        {' '}
        <strong>Username: </strong> caption
      </h4>
    </div>
  );
}

export default Post;
