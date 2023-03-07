import React from 'react'
import { useParams } from 'react-router-dom'

/**
 * This component displays an article from a selected player from the home page/ DisplayPosts component
 */

/**
 * 
 * @param {Array} posts Array of posts from default post type 
 * @returns Displays a player related post
 */

export default function PlayerPost({posts}) {

    let { id } = useParams()

    const player = posts.find(post => {
        return post.id === Number(id)
    })

    console.log(player)

  return (
    <div id="player-page">
        <h1 id="player-title">{player.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{__html: player.content.rendered}} id="player-post"/>
    </div>
  )
}
