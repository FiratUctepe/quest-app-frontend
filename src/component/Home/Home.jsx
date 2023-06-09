import React, { useEffect, useState } from 'react'
import Post from '../Post/Post'
import axios from 'axios';
import './Home.css';
import { Container } from '@mui/material';

export default function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios.get("/posts")
      .then(response => {
        setPostList(response.data);
        setIsLoaded(true);
      })
      .catch(error => {
        console.log(error);
      });
  }, [postList])


  if (error) {
    return <div> Error !!!</div>
  } else if (!isLoaded) {
    return <div> Loading...</div>
  } else {
    return (
      <Container className="container">
        {postList.map(post => (
          <Post title={post.title} text={post.text}></Post>
        ))}
      </Container>
    )
  }
}
