//external resources
import ReactPlayer from 'react-player'
import React, {Component}from "react";

import '../../layouts/VideoPlayer.css'


class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'React',
            data: []
        };

    }
    
    //view for video file
    render() {
        console.log('[VideoPlayer.render] resource url: '+this.props.resourceToViewUrl);
        return (
            <div className="playerContainer">
                <ReactPlayer url={this.props.resourceToViewUrl}
                             playing={true}
                             controls={true}
                             width='100%'
                             height='100%'/>
            </div>
        );
    }
}

export default VideoPlayer;
