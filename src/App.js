import React from 'react';
import Navbar from './components/Navbar';
import Filler from './components/Filler';
import PostComponent from './components/PostComponent';

function App() {

  const fileNumber = 3; // sucks I can't automate this. but incrementing the numnber should be enough
  const postPaths = Array.from({ length: fileNumber }, (_, index) => `/md_files/blogPost${index}.md`);

  return (

    <div>
       <Navbar/>
       <Filler/>
       {postPaths.map((path, index) => (
        <PostComponent key={index} path={path} />
      ))}
    </div>



  )
}

export default App
