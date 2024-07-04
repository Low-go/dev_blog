import React from 'react';
import Navbar from './components/Navbar';
import Filler from './components/Filler';
import PostComponent from './components/PostComponent';
import getMarkDownFiles from './utility/markdownParser';
import { useState, useEffect} from 'react';


function App() {


  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getMarkDownFiles();
      setPosts(postsData);
    };

    fetchPosts();
  }, []);


  return (

    <div>
       <Navbar/>
       <Filler/>
       {posts.map((post, index) => (
        <PostComponent key={index} {...post} />
      ))}
    </div>



  )
}

export default App
