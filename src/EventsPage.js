import React from 'react'
import MeetupsPage from './MeetupsPage'
import TournamentsPage from './TournamentsPage'

export default function EventsPage({events, postsImg}) {

    console.log(events)
    return(<>
    <MeetupsPage meetups={events[0]} postsImg={postsImg}/>
    <TournamentsPage tournaments={events[1]} postsImg={postsImg}/>
    </>)
}
