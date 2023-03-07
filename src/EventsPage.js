import React from 'react'
import MeetupsPage from './MeetupsPage'
import TournamentsPage from './TournamentsPage'

/**
 * This component displays two components in a list fashion for events created in the Wordpress API
 */

/**
 * 
 * @param {Array} events Array of posts from the Events post type
 * @param {Array} postsImg Array of images
 * @returns Components based off type of event
 */

export default function EventsPage({events, postsImg}) {
    return(<>
    <MeetupsPage meetups={events[0]} postsImg={postsImg}/>
    <TournamentsPage tournaments={events[1]} postsImg={postsImg}/>
    </>)
}
