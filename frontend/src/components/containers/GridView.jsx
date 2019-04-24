import React, { Component } from 'react';
import GridRow from './GridRow.jsx';
import * as consts from '../../Constants.js';
import '../../layouts/GridStyles.css';

export default class Grid extends Component {

    constructor(props){
        super(props);

        this.state = {
            filesJson: [],
            numCols: 4
        }

        this.getUrlRowSize = this.getUrlRowSize.bind(this);

        // get width of component for conditional column rendering in grid
        this.componentWidth = React.createRef();
    }

    componentDidMount() {
        // eventually user ID will be passed down, get all files for user
        let userId = this.props.userId;
        let allFilesUrl = consts.API_URL + '/users/'+userId+'/files';
        let that = this;

        fetch(allFilesUrl)
            .then( res => {
                if (res.status >= 400) { throw new Error("Bad response from server")}
                return res.json();
            })
            .then( data => {
                for (let i = 0; i < data.length; i++){
                    console.log(data[i]);
                }
                console.log('GridView.WillMount: '+data);
                that.setState( { filesJson: data})
            })

        console.log('[AccountHome.mounted] component width '+this.componentWidth.current.offsetWidth);
    }

    getUrlRowSize(i, len) {
        let cols = len - i;

        // we're on the last row
        if (i > len - 4) {
            return cols;
        } else {
            return 4;
        }
    }

    render() {
        let numCols = this.state.numCols;
        let numFiles = this.state.filesJson.length;
        let locJson = this.state.filesJson;
        let rowItems = [];

        // TODO: implement constructor so that this if is unnecessary
        if (locJson.length > 0) {
            for (let i = 0; i < numFiles; i += numCols){
                let imageUrlsRow = [];
                let resourceUrlsRow = [];
                let resourceSizesRow = [];
                let rowIndexMax = this.getUrlRowSize(i, numFiles)+i;
                for (let j = i; j < rowIndexMax; j++){
                    imageUrlsRow.push(locJson[j].ImageUrl);
                    resourceUrlsRow.push(locJson[j].ResourceUrl);
                    resourceSizesRow.push(locJson[j].Size);
                }

                let numCols = rowIndexMax-i;

                rowItems.push(
                    <GridRow
                        userId={this.props.userId}
                        imageUrlsRow={imageUrlsRow}
                        resourceUrlsRow={resourceUrlsRow}
                        resourceSizesRow={resourceSizesRow}
                        rowIndex={i}
                        numCols={numCols}
                        toggleMediaPlayerView={this.props.toggleMediaPlayerView}
                        setResourceViewedThumbnailImage={this.props.setResourceViewedThumbnailImage}
                        setResourceToViewUrl={this.props.setResourceToViewUrl}
                    />)
            }
        }

        return (
            <div ref={this.componentWidth}>
                {rowItems}
            </div>
        );
    }
}