import React, { useEffect, useState } from 'react'
import DisplayPosts from './DisplayPosts';
import PlayerPost from './PlayerPost';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {

  const [posts, setPosts] = useState([])
  const [postsImg, setPostsImg] = useState([])
  // const [loading, setLoading] = useState(true)

  //Change order of posts with select control
  function handleOrder(e) {

    let copyPosts = [...posts]

    //Ascending, oldest to newest
    if (e.target.value === "ascending") {

      copyPosts.sort((a, b) => {
        return new Date(a.date) - new Date(b.date)
      })

      setPosts(copyPosts)
    //Descending, newest to oldest
    } else if ( e.target.value === "descending") {

      copyPosts.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      })

      setPosts(copyPosts)
    }
  }

  useEffect(() => {
    try {
      fetch("http://kplocalwp.local/wp-json/wp/v2/posts")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setPosts(data)

      fetch("http://kplocalwp.local/wp-json/wp/v2/media")
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setPostsImg(data)
        })
      })
    } catch (err) {
        console.log(err + " API not available")
      }
  }, [])

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={postsImg.length > 0 && <DisplayPosts posts={posts} postsImg={postsImg} handleOrder={handleOrder}/>}/>
          <Route path="/:id" element={<PlayerPost posts={posts}/>}/>
        </Routes>
      </BrowserRouter>
    );
  }

export default App;
