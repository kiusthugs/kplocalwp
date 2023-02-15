import React from 'react'
import { useParams } from 'react-router-dom'

export default function PlayerPost({posts}) {

    let { id } = useParams()

    const player = posts.find(post => {
        return post.id === Number(id)
    })

    console.log(player)

  return (
    <div>
        <h1>{player.title.rendered}</h1>
        {/* <img src={img} alt={player.title.rendered}/> */}
        <div dangerouslySetInnerHTML={{__html: player.content.rendered}} id="player-post"/>
    </div>
  )
}
