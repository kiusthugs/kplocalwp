import React from 'react'
import {Link} from 'react-router-dom'

/**
 * This component displays two components in a lists meetups within the EventsPage component
 */

/**
 * 
 * @param {Array} meetups Array of posts within the Events/ Meetups post type
 * @param {Array} postsImg Array of images
 * @returns Lists of meetups
 */

export default function MeetupsPage({meetups, postsImg}) {
  return (
    <>
    <div>
        <h1 className="event-category">Meetups</h1>
        {meetups.acf.meetup.map((m) => {
            //Find imgs from specific player
            let img = postsImg.find(post => post.id === m.meetup_image)

            //Format date
            var date = new Date(m.meetup_date_and_time);
            var options = {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
                year: "numeric",
                month: "long",
                day: "numeric",
            };
            var timeString = date.toLocaleString('en-US', options);
            console.log(m)
            return(
                <div key={m.meetup_title} className="event-posts">
                    <Link to={`${m.meetup_title}`} state={{...m, post: "meetup"}}>
                    <div>
                    <h2>{m.meetup_title}</h2>
                    <img src={img.guid.rendered} alt="meetup" width="300px" height="200px"/>
                    <div className="event-content">
                    <p>{timeString}</p>
                    <p>{m.meetup_description}</p>
                    </div>
                    </div>
                    </Link>
                </div>
            )
        })}
    </div>
    </>
  )
}
