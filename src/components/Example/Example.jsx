import { useState, useEffect } from 'react';
import axios from 'axios';

import './Example.css';

function PostList() {
  const [posts, setPosts] = useState([]);

  const loadPosts = async () => {
    const res = await axios.get('http://localhost:1337/posts');
    setPosts(res.data);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  console.log('bora', posts);

  return (
    <div className="post-list">
      {posts?.map(() => (
        <div key={posts[0].id} className="post-card">
          <img src={posts[0].images?.url} alt="Post de Exemplo"/>
          <p>{posts[0].text}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;