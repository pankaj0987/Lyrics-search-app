import React from 'react'

function lyricshtml(props) {

    return (
        <div className="lyrics-section">
            <h1 className="lyric">Lyrics</h1>
            <div className="lyric-container">
                <div className="details">
                    <table >
                        <tr>
                            <th>Track</th>
                            <td>{props.track.track_name}</td>
                        </tr>
                        <tr>
                            <th>Album Name</th>
                            <td>{props.track.album_name}</td>
                        </tr>
                        <tr>
                            <th>Artist</th>
                            <td>{props.track.artist_name}</td>
                        </tr>
                        <tr>
                            <th>release</th>
                            <td>{props.track.updated_time}</td>
                        </tr>
                    </table>
                </div>
                <div className="lyrics">
                    {props.lyric.lyrics_body}
                </div>
            </div>
    <h3>@copyright : {props.lyric.lyrics_copyright}</h3>
        </div>
    )
}

export default lyricshtml
