import React from 'react'
import { Link } from "react-router-dom";


/**
*
* This component takes in the Wordpress API posts, media, and a function that sorts posts.
* This component is the home page of the website that display initial posts and navigation links.
*/

/**
 *
 * @param {Array} posts Array of posts from default post type
 * @param {Array} postsImg Array of images from Wordpress API media
 * @param {Function} handleOrder Function that adds interactivity to the control form
 * @returns Displays home page
 */
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
        const grabImg = postsImg.find( img => img.id === post.featured_media )
          return (
          <div key={post.id} className="posts">
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
