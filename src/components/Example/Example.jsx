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
      <p>eu to codando agora</p>
      <h1>sjkdhflkajhdflas</h1>
    </div>
  );
}

export default PostList;