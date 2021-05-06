import React, { Component } from 'react'
import Tracks from './Tracks'
import Search from './search'
import axios from 'axios'

// const reducer=(action,state)=>{

//     if(action.notfind){

//         return {
//             ...state,
//             popup:true

//         }
//     }
//     else{

//         return{
            
//             ...state,
//             list:action.payload,
//             popup:false
//         }
//     }
// }

class GetData extends Component {
    state={
        list:[],
    
        apikey:'108c892a6c7c7a7aa576edf1ee2bd826',
        popup:false
    }

    componentDidMount() {
        axios.get(`chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${this.state.apikey}`)
        .then(res=>{
          
            this.setState({
                ...this.state,
                list:res.data.message.body.track_list,
                error:false
            })
            console.log(this.state.list)
        })
        .catch(err=>{
            this.setState({
                ...this.state,
                error:true
            })
        }
        )

        
    }

  

    render() {
        if (this.state.list.length===0) {
            return <h3 className="loader" >Loading... </h3>
        }
        else{
            return (
                <React.Fragment>
                    <Search data={this.state}/>
                    <Tracks data={this.state.list} data2={this.state.error}/>
                </React.Fragment>
            )
        }

    }
}

export default GetData
