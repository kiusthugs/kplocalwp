import React, { useEffect, useState } from 'react'
import DisplayPosts from './DisplayPosts';
import PlayerPost from './PlayerPost';
import PlayerBioList from './PlayerBioList';
import PlayerBio from './PlayerBio';
import EventsPage from './EventsPage';
import DisplayEvent from './DisplayEvent'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {

  const [posts, setPosts] = useState([])
  const [postsImg, setPostsImg] = useState([])
  const [bio, setBio] = useState([])
  const [events, setEvents] = useState([])

/**
 * This function handles the sorting control field on the home page and determines the order of posts by date.
 * 
 * @param {Object} e The event object of the control field
 * @returns {*} SetPosts state changed based off control field text
 */

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
      fetch("http://kplocalwptwo.local/wp-json/wp/v2/posts")
      .then(res => res.json())
      .then(data => {
        setPosts(data)

      fetch("http://kplocalwptwo.local/wp-json/wp/v2/media")
        .then(res => res.json())
        .then(data => {
          setPostsImg(data)
        })

        fetch("http://kplocalwptwo.local/wp-json/wp/v2/bio")
        .then(res => res.json())
        .then(data => {
          setBio(data)
        })

        fetch("http://kplocalwptwo.local/wp-json/wp/v2/events")
        .then(res => res.json())
        .then(data => {
          setEvents(data)
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
          <Route path="/bio" element={postsImg.length > 0 && <PlayerBioList bios={bio} postsImg={postsImg} posts={posts}/>} />
          <Route path="/bio/:id" element={postsImg.length > 0 && <PlayerBio bios={bio} postsImg={postsImg} posts={posts}/>} />
          <Route path="/events" element={postsImg.length > 0 && <EventsPage events={events} postsImg={postsImg}/>} />
          <Route path="/events/:id" element={postsImg.length > 0 && <DisplayEvent events={events} postsImg={postsImg}/>} />
        </Routes>
      </BrowserRouter>
    );
  }

export default App;
