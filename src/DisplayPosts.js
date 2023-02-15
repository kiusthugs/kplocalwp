import React from 'react'
import { Link } from "react-router-dom";

export default function DisplayPosts({posts, postsImg, handleOrder}) {



  return (
  <div>
    <header>
      <h1>Masters</h1>
      <p>Learn the story of the greatest golfers on the biggest stage</p>
    </header>
    <div>
      <img src={"images/masters-banner.png"} alt="masters logo with golf course background"></img>
    </div>
    <div> 
    <h2>Posts</h2>   
      <select name="sort" id="sort" onChange={e => handleOrder(e)}>
        <option value="descending">Descending</option>
        <option value="ascending">Ascending</option>
      </select>
    </div>
      {posts.map((post) => {
        const grabImg = postsImg.find( img => img.id === post.featured_media )
          return (
          <div key={post.id}>
            {/* <img src={`${http://kplocalwp.local/wp-json/wp/v2/media/43}`} /> */}
            <Link to={`${post.id}`}>
            <img src={`${grabImg.guid.rendered}`} alt="temp" width="450px" height="250px"/>
            <p>{post.date}</p>
            {post.title.rendered}
            </Link>
          </div>)
      })}
  </div>
  )
}
