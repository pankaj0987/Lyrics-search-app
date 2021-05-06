import React, { Component } from 'react'
import axios from "axios"
import Button from '@material-ui/core/Button';

class search extends Component {
    state = {
        track_name: ""
    }

    handler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    searchresult = (dispatch, e) => {
        e.preventDefault();

        axios.get(`/track.search?q_track=${this.state.track_name}&page_size=20&page=1&s_track_rating=desc&f_has_lyrics=1&apikey=${this.props.data.apikey}`)
            .then(res => {
                if((res.data.message.body.track_list.length)!== 0) {
                    dispatch({
                        type: "SEARCH",
                        payload: res.data.message.body.track_list,
                        notfind: false
                    })
                }
                else {
                    dispatch({
                        type: "SEARCH",
                        payload: [],
                        notfind: true
                    })
                }
                this.setState({ track_name: "" })
            })
            .catch(err => console.log(err))


    }


    render() {
    
        const { dispatch } = this.props.data
        return (
            <div className="form-handler">
                <form onSubmit={this.searchresult.bind(this, dispatch)}>
                    <input
                        className="input-box"
                        type="search"
                        name="track_name"
                        value={this.state.track_name}
                        onChange={this.handler}
                    ></input>
                    <Button type="submit" className="search-button" variant="contained" color="primary">Search</Button>
                </form>
            </div >
        )
    }
}

export default search
