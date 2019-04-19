import React from 'react';
import { Button } from 'react-bootstrap';

export default class MediaPlayerView extends React.Component {

    render() {
        return (
            <div>
                <p>Here's the Media player view</p>
                <Button onClick={this.props.toggleMediaPlayerView}>Take me back to the Library View!</Button>
            </div>
        )
    }

}