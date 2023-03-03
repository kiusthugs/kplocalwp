import React from 'react'
import {Link} from 'react-router-dom'

export default function MeetupsPage({meetups, postsImg}) {

    // const bioImg = postsImg.find((post) => {
    //     return post.id === meetups
    // })

    console.log(meetups)
  return (
    <>
    {/* <Link to="/"><button id="home">Back to Home</button></Link> */}
    <div>
        <h1 className="event-category">Meetups</h1>
        {meetups.acf.meetup.map((m) => {
            let img = postsImg.find(post => post.id === m.meetup_image)
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
        console.log(timeString);
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
