import React from 'react'
import { Link } from "react-router-dom";

export default function DisplayPosts({posts, postsImg, handleOrder}) {



  return (
  <div>
    <header>
      <div id="header-border">
      <h1>Masters</h1>
      <Link to="/bio">Player Info</Link>
      <Link to="/events">Events</Link>
      </div>
    </header>
    <main>
    <div id="banner-div">
      <img src={"images/masters-banner.png"} alt="masters logo with golf course background" id="banner"></img>
    </div>
    <div id="post-heading"> 
    <h2>Posts</h2> 
    <div id="sort">
    <p>Sort By:</p>
    <select name="sort" id="sort" onChange={e => handleOrder(e)}>
        <option value="descending">Descending</option>
        <option value="ascending">Ascending</option>
    </select>  
    </div> 
    </div>
    <div id="posts-underline"></div> 
    <div id="content">
      {posts.map((post) => {
        // console.log(post)
        const grabImg = postsImg.find( img => img.id === post.featured_media )
          return (
          <div key={post.id} className="posts">
            {/* <img src={`${http://kplocalwp.local/wp-json/wp/v2/media/43}`} /> */}
            <Link to={`${post.id}`}>
            <img src={`${grabImg.guid.rendered}`} alt="pro golfer" className="golfer-thumbnail"/>
            <div className="post-caption">
            <p>Published {post.date.slice(0, 10)}</p>
            <h3>{post.title.rendered}</h3>
            </div>
            </Link>
          </div>)
      })}
    </div>
    </main>
  </div>
  )
}
