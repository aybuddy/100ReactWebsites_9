import React, { useState } from 'react';
import './App.css';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([
    {
      username: 'Jane',
      caption: 'Great Picture!',
      imageUrl:
        'https://images.unsplash.com/photo-1614607660006-945b019c188a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
      username: 'John',
      caption: 'Love the car',
      imageUrl:
        'https://images.unsplash.com/photo-1614616999852-fd48881ff1b6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
  ]);
  return (
    <div className='app'>
      <div className='app__header'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
          alt=''
          className='app__headerImage'
        />
      </div>

      <h1>Hello World</h1>

      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
