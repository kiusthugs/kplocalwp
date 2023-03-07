import React from 'react'
import { Link } from "react-router-dom";

/**
 * This component displays the biography page where it lists all the posts within the Biographies type, users can select a player and learn more about them.
 */

/**
 * 
 * @param {Array} bios Array of biographies
 * @param {Array} postsImg Array of images
 *
 * @returns A list of players that holds their biography
 */

export default function PlayerBios({bios, postsImg}) {

  return (<>
  <Link to="/"><button id="home">Back to Home</button></Link>
            {bios.map((bio) => {
                //Find imgs from specific player
                const bioImg = postsImg.find((post) => {
                    return post.id === bio.acf.golfer_image
                })
                return (
                    <div key={bio.id} className="player-list-bio">
                        <div>
                        <Link to={`${bio.id}`}>
                        <img src={`${bioImg.guid.rendered}`} alt="golfer"></img>
                        </Link>
                        </div>
                        <div>
                        <div className="player-list-bio-header">
                        <Link to={`${bio.id}`}>
                        <h2>
                            {bio.title.rendered}
                        </h2>
                        <p>
                            Rank: {bio.acf.world_rank}
                        </p>
                        </Link>
                        </div>
                        <Link to={`${bio.id}`}>
                        <p>
                            {bio.acf.golfer_biography}
                        </p>
                        </Link>
                        </div>
                    </div>
                )
            })}  
  </>
  )
}
