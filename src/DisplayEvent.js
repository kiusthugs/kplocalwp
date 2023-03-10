import React from 'react'
import {useLocation} from "react-router-dom";

/**
 * This component takes in a event post through react-router-dom useLcoation hook from either the TournamentsPage or MeetupPage component and displays the selected event
 */

/**
 *
 * @param {Array} postsImg Array of images from Wordpress API media
 * @returns Displays the selected event
 */

export default function DisplayEvent({postsImg}) {

    let { state } = useLocation()
    console.log(state)
    let img
    let tournamentDateTwo

    // If event is meetup or tournament, grab date and or images
    if (state.meetup_image) {
        img = postsImg.find(post => post.id === state.meetup_image)
    } else if (state.event_image) {
        var tournamentDate = [state.event_date.slice(0, 4), "/", state.event_date.slice(4)].join('');
        tournamentDateTwo = [tournamentDate.slice(0, 7), "/", tournamentDate.slice(7)].join('');
        img = postsImg.find(post => post.id === state.event_image)
    }

  return (
    <>
    {state.post === "meetup" && 
    <div>
        <h2>{state.meetup_title}</h2>
        <img src={img.guid.rendered} alt="meetup" width="300px" height="200px"/>
        <p>{state.meetup_date_and_time}</p>
        <p>{state.meetup_description}</p>
    </div>}

    {state.post === "tournament" && 
    <div>
        <h2>{state.event_title}</h2>
        <img src={img.guid.rendered} alt="meetup" width="300px" height="200px"/>
        <p>Date: {tournamentDateTwo}</p>
        <p>Start Time: {state.event_start_time}</p>
        <p>End Time: {state.event_end_time}</p>
        <p>Tee Times:</p>
        <ol>
        {state.player_tee_times.map((player) => {
            return <li key={player.player_name}>{player.player_name} {player.tee_time}</li>
        })}
        </ol>
        {state.event_rsvp_email === "" && <a href={`${state.event_rsvp_link}`}>RSVP: {state.event_rsvp_link}</a>}
        {state.event_rsvp_link === "" && <p>RSVP: <a href={`mailto:${state.event_rsvp_email}`}>{state.event_rsvp_email}</a></p>}
    </div>}
    </>
  )
}
