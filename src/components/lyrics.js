import React, { Component } from 'react'
import Lyricshtml from './lyricshtml'
import axios from 'axios'

class lyrics extends Component {
    state = {
        lyrics: [],
        track:[],
        apikey: '108c892a6c7c7a7aa576edf1ee2bd826'
    }


    componentDidMount() {
        axios.get(`/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${this.state.apikey}`)
            .then(lyric_res => {
                axios.get(`/track.get?track_id=${this.props.match.params.id}&apikey=${this.state.apikey}`)
                .then(track_res => {
                 
                    this.setState({
                        lyrics:lyric_res.data.message.body.lyrics,
                        track:track_res.data.message.body.track
                    })
                })



            })
            .catch(err => console.log(err))


    }


    render() {
        const {lyrics,track}=this.state;

        if (lyrics.length===0 && track.length===0) {
            return <h3 className="loader" >Loading... </h3>
        }
        else{
            
        return (
            <React.Fragment>

                    <Lyricshtml lyric={lyrics} track={track}/>
              
            </React.Fragment>
        )
        }
    }
}

export default lyrics

