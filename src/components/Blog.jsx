import React,{useContext} from "react";
import {Link } from 'react-router-dom';
import posts from './../data/posts'

function Blog() {
  
  return (
    <div>
      <h2>BLog</h2>
      <ul>
          {posts.map((post)=>{
              return(<li key={post.id}><Link to={`post/${post.id}`}>{post.titulo}</Link></li>)
          })}
      
       
      </ul>
    </div>
  );
}

export default Blog;
