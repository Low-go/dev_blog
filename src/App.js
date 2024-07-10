import React from 'react';
import Navbar from './components/Navbar';
import Filler from './components/Filler';
import PostComponent from './components/PostComponent';
import './App.css'

function App() {

  const fileNumber = 1; // sucks I can't automate this. but incrementing the numnber should be enough
  const postPaths = Array.from({ length: fileNumber }, (_, index) => `${process.env.PUBLIC_URL}/md_files/blogPost${index}.md`).reverse();

  return (

    <div>
       <Navbar/>
       <Filler/>
       <div className='post-container'>
        {postPaths.map((path, index) => (
          <PostComponent key={index} path={path} />
        ))}
      </div>
    </div>



  )
}

export default App
