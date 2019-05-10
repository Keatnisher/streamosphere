//external resources needed
import React from 'react';
import { Button } from 'react-bootstrap';
import VideoPlayer from './VideoPlayer.jsx';

export default class MediaPlayerView extends React.Component {

    //view component that shows the video file and a button to go back
    render() {
        return (
            <div>
                <Button onClick={this.props.toggleMediaPlayerView}>Take me back to the Library View!</Button>
                <VideoPlayer resourceToViewUrl={this.props.resourceToViewUrl} />
            </div>
        )
    }

}
