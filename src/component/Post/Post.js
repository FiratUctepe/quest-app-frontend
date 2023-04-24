import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Post() {
    const [error,setError] = useState(null);
    const [isLoaded,setIsLoaded] = useState(false);
    const [postList,setPostList] = useState([]);

    
    useEffect(() => {
        axios.get("http://localhost:8080/posts")
          .then(response => {
            setPostList(response.data);
            setIsLoaded(true);
          })
          .catch(error => {
            console.log(error);
          });
    },[postList])


    if (error){
        return <div> Error !!!</div>
    }else if(!isLoaded){
        return <div> Loading...</div>
    }else{
        return (
            <ul>
                {postList.map(post => (
                    <li key={post.id}>
                        {post.title} {post.text}
                    </li>
                ))}
            </ul>
        )
    }
}