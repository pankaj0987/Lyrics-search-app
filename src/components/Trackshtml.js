import React from 'react'
import {Link} from 'react-router-dom'

function Trackshtml(props) {
    console.log(props.data2)
    return (
      
        <React.Fragment>
            {
                props.data.map(list => {
                    return (
                        <div key={list.track.track_id} className="tracks">
                            <div className="section">
                                <div>
                               <span><i className="fas fa-music"></i></span> <h2> : {list.track.track_name}</h2>
                               </div>
                               <div>
                               <span><i className="fas fa-compact-disc"></i></span> <h3> : {list.track.album_name}</h3>
                               </div>
                            </div>
                            <Link to={`lyrics/tracks/${list.track.track_id}`}>
                            <button className="footer">view lyrics</button>
                            </Link>
                        </div>
                    )
                })
            }
        </React.Fragment>

    )
}

export default Trackshtml
