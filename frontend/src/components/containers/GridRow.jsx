//external resources imported for usage
import React, { Component } from 'react';
import GridCol from './GridCol.jsx';
import '../../layouts/GridStyles.css';

export default class GridRow extends Component {
    
    //transform state of the array
    render() {
        let colItems = [];
        for (let i = 0; i < this.props.numCols; i++){
            //add file to aray colItems
            colItems.push(
                <GridCol
                    imageUrl={this.props.imageUrlsRow[i]}
                    resourceUrl={this.props.resourceUrlsRow[i]}
                    resourceSize={this.props.resourceSizesRow[i]}
                    rowIndex={this.props.rowIndex}
                    colIndex={i}
                    toggleMediaPlayerView={this.props.toggleMediaPlayerView}
                    setResourceViewedThumbnailImage={this.props.setResourceViewedThumbnailImage}
                    setResourceToViewUrl={this.props.setResourceToViewUrl}
                />
                );
        }
        
        //view compoment for GridRow
        return (
            <div className="grid-row">
                {colItems}
            </div>
        );
    }
}
