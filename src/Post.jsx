import { Avatar, Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import './Post.css';
import firebase from 'firebase';

function Post({ user, postId, imageUrl, username, caption }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection('posts')
        .doc(postId)
        .collection('comments')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsubscribe();
    };
  }, [postId]);

  const postComment = (event) => {
    event.preventDefault();
    db.collection('posts').doc(postId).collection('comments').add({
      text: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment('');
  };

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

      <div className='post__comments'>
        {comments.map((comment) => (
          <p>
            <strong>{comment.username}</strong> {comment.text}
          </p>
        ))}
      </div>

      {user && (
        <form action='' className='post__commentBox'>
          <input
            type='text'
            className='post__input'
            placeholder='Add a comment...'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            className='post__button'
            disabled={!comment}
            type='submit'
            onClick={postComment}
          >
            Post
          </Button>
        </form>
      )}
    </div>
  );
}

export default Post;
