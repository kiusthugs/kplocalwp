import React from 'react'
import { useParams, Link } from 'react-router-dom'

/**
 * This component displays a selected player biography from PlayerBioList
 */

/**
 * 
 * @param {Array} bios Array of biographies 
 * @param {Array} postsImg Array of images
 * @returns Takes in id from useParams hook and displays the selected players' biograhpy
 */

export default function PlayerBio({bios, postsImg}) {
    let { id } = useParams()

    //Find specific player within bios array
    const player = bios.find(bio => {
        return bio.id === Number(id)
    })

    //Find imgs from specific player
    const bioImg = postsImg.find((post) => {
        return post.id === player.acf.golfer_image
    })

  return (<>
  <Link to="/"><button id="home">Back to Home</button></Link>
  <div className="player-bio">
        <h1>{player.title.rendered}</h1>
        <img src={`${bioImg.guid.rendered}`} alt="golfer"></img>
        <table>
            <thead>
                <tr>
                <th>Age</th>
                <th>Average Driver Yardage</th>
                <th>Last Tournament Win</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{player.acf.age}</td>
                <td>{player.acf.average_drive}</td>
                <td>{`${player.acf.last_tournament_won.substr(0, 4)}/${player.acf.last_tournament_won.substr(4, 2)}/${player.acf.last_tournament_won.substr(6, 2)}`}</td>
                </tr>
            </tbody>
        </table>
        <p>{player.acf.golfer_biography}</p>
    </div>
  </>
  )

}
