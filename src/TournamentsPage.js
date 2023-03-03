import React from 'react'
import {Link} from 'react-router-dom'

export default function TournamentsPage({tournaments, postsImg}) {
  console.log(tournaments)
  return (<>
  {/* <Link to="/"><button id="home">Back to Home</button></Link> */}
  <div>
        <h1 className="event-category">Tournaments</h1>
        {tournaments.acf.event.map((eve) => {
            let img = postsImg.find(post => post.id === eve.event_image)
            // var date = new Date(eve.event_start_time);
            
            // var options = {
            //     hour: 'numeric',
            //     minute: 'numeric',
            //     hour12: true,
            // };

            // var timeString = date.toLocaleString('en-US', options);

            var tournamentDate = [eve.event_date.slice(0, 4), "/", eve.event_date.slice(4)].join('');
            var tournamentDateTwo = [tournamentDate.slice(0, 7), "/", tournamentDate.slice(7)].join('');
            return(
                <div key={eve.event_title} className="event-posts">
                  <Link to={`${eve.event_title}`} state={{...eve, post: "tournament"}}>
                    <div>
                    <h2>{eve.event_title}</h2>
                    <img src={img.guid.rendered} alt="meetup" width="270px" height="200px"/>
                    <div className="event-content">
                    <p>Date: {tournamentDateTwo}</p>
                    <p>Start Time: {eve.event_start_time}</p>
                    <p>End Time: {eve.event_end_time}</p>
                    {/* <p>Tee Times:</p>
                    <ol>
                    {eve.player_tee_times.map((player) => {
                      return <li key={player.player_name}>{player.player_name} {player.tee_time}</li>
                    })}
                    </ol> */}
                    </div>
                    </div>
                    </Link>
                    <div  className="event-rsvp">
                    {eve.event_rsvp_email === "" && <a href={`${eve.event_rsvp_link}`}>RSVP: {eve.event_rsvp_link}</a>}
                    {eve.event_rsvp_link === "" &&  <a href={`mailto:${eve.event_rsvp_email}`}>RSVP:{eve.event_rsvp_email}</a>}
                    </div>
                </div>
            )
        })}
    </div>
  </>
  )
}
