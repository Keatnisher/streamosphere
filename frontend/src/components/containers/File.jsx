//components imported from other files and libraries
import React, { Component } from 'react';
import PreviewFile from './PreviewFile.jsx';

export default class File extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: '',
            filename: this.props.filename,
            description: this.props.description,
            modal: false
        };

        this.onContextMenuClick = this.onContextMenuClick.bind(this);
    }

    //handle right click
    onContextMenuClick(e) {
        this.props.onContextMenuClick(e)
    }

    //view for File component
    render() {
        return (
            <div>
                {/* a wrapper for the modal handler */}
                <PreviewFile
                    imageUrl={this.props.imageUrl}
                    resourceUrl={this.props.resourceUrl}
                    resourceSize={this.props.resourceSize}
                    toggleMediaPlayerView={this.props.toggleMediaPlayerView}
                    setResourceViewedThumbnailImage={this.props.setResourceViewedThumbnailImage}
                    setResourceToViewUrl={this.props.setResourceToViewUrl}
                />
            </div>
        );
    }
}
