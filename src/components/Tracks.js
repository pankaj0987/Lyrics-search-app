import React, { Component } from 'react'
import Trackshtml from './Trackshtml'

class Tracks extends Component {

    render() {
        if(this.props.data2){
            return (
                <div className="error-container">
                    <h1 className="error">couldn,t find</h1>
                <section className='tracks-list'>
                     <h1>List of top 10 songs lyrics</h1>
                    <div className='track-section'>
                   
                   <Trackshtml data={this.props.data} data2={this.props.data2} />
                   </div>
                </section>
                </div>
            )
        }
        else{
            return (
                <section className='tracks-list'>
                     <h1>List of top 10 songs lyrics</h1>
                    <div className='track-section'>
                   
                   <Trackshtml data={this.props.data} data2={this.props.data2} />
                   </div>
                </section>
            )
        }

    }
}

export default Tracks
