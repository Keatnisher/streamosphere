import React, { Component } from 'react';
import '../../layouts/GridStyles.css';
import ContextMenuImpl from "./ContextMenuImpl.jsx";

export default class GridCol extends Component {
    render() {
        let contextIdLoc = 'row'+this.props.rowIndex+'col'+this.props.colIndex;
        return (
            <div className="grid-col">
                <ContextMenuImpl
                    userId={this.props.userId}
                    imageUrl={this.props.imageUrl}
                    resourceUrl={this.props.resourceUrl}
                    resourceSize={this.props.resourceSize}
                    contextId={contextIdLoc}
                    toggleMediaPlayerView={this.props.toggleMediaPlayerView}
                    setResourceViewedThumbnailImage={this.props.setResourceViewedThumbnailImage}
                    setResourceToViewUrl={this.props.setResourceToViewUrl}
                />
            </div>
        );
    }
}