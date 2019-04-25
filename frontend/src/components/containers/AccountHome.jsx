// libraries
import React, { Component } from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import ReactPlayer from 'react-player';
import { Button, ButtonGroup } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// custom components
import Rename from './RenameFile.jsx';
import FileControlButtons from './FileControlButtons.jsx';
import GridView from './GridView.jsx';
import MediaPlayerView from './MediaPlayerView.jsx';
import File from './File.jsx';
import EditDescription from './EditDescription.jsx';

// styling
import '../../layouts/AccountHome.css';


export default class AccountHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isCustomMenuOpen: false,
            isModalOpen: false,
            handleShow: false,
            showMediaPlayer: false,
            resourceViewedThumbnailImage: '',
            resourceToViewUrl: '',
            stateRefreshAfterUpload: false,
            userId: localStorage.getItem('userid')
        };

        // toggle whether to display files or library view
        this.toggleMediaPlayerView = this.toggleMediaPlayerView.bind(this);
        this.setResourceViewedThumbnailImage = this.setResourceViewedThumbnailImage.bind(this);
        this.setResourceToViewUrl = this.setResourceToViewUrl.bind(this);

        // simply to refresh state
        this.refreshAfterUpload = this.refreshAfterUpload.bind(this);
    }

    toggleMediaPlayerView() {
        console.log('[AccountHome.toggleMediaPlayerView] callback bubbled all the way up!');
        let cur = this.state.showMediaPlayer;
        this.setState({ showMediaPlayer: !cur });
    }

    setResourceViewedThumbnailImage(url){
        console.log("[AccountHome.setResourceThumbnailImage] resource url: "+ url);
        this.setState({resourceViewedThumbnailImage: url});
    }

    setResourceToViewUrl(url) {
        console.log("[AccountHome.setResourceToView] resource url: "+ url);
        this.setState({ resourceToViewUrl: url })
    }

    // this is not working as expected. not refreshing
    refreshAfterUpload() {
        console.log("[AccountHome.refreshAfterUpload] called: ");
        let cur = this.state.stateRefreshAfterUpload;
        this.setState({stateRefreshAfterUpload: !cur});
    }

    render() {
        // let userId = '5c9acddba0f0b4e94109c632';
        // let userId = localStorage.getItem('userid');
        console.log('state user id logged in: '+this.state.userId);
        return (
            <div>
                <div id="streamosphere-banner">Streamosphere</div>
                <div id="page-container">
                    <div id="left-content">
                        <FileControlButtons
                            newFolder={this.addNewFolder}
                            refreshAfterUpload={this.refreshAfterUpload}
                        />
                    </div>
                    <div id="right-content">
                        {/*<Link to="/" style={styles.link}><Button>Logout</Button></Link> <br />*/}

                        {/* conditionally render account home or media viewer.*/}
                        {/* this callback is going to get passed waaayy down. */}
                        {!this.state.showMediaPlayer &&
                            <GridView
                                toggleMediaPlayerView={this.toggleMediaPlayerView}
                                setResourceViewedThumbnailImage={this.setResourceViewedThumbnailImage}
                                setResourceToViewUrl={this.setResourceToViewUrl}
                                refresh={this.state.stateRefreshAfterUpload}
                            />}
                        {this.state.showMediaPlayer &&
                            <MediaPlayerView
                                toggleMediaPlayerView={this.toggleMediaPlayerView}
                                resourceToViewUrl={this.state.resourceToViewUrl}
                            />}
                        {/* simply so the state will refresh after upload of files */}
                        <p className="hidden-refresh">{this.state.stateRefreshAfterUpload}</p>
                    </div>
                </div>
            </div>
        );
    }
    removeFile() {
        let curList = this.state.files;
        for (var i = 0; i < curList.length; i++) {
            if (this.state.clickedFile.fileName == curList[i].fileName) {
                curList.splice(i, 1);
            }
        }
        this.setState({
            files: curList
        });
    }
    handleClickIndex(index, event) {
        eval(this[event.target.name]).bind(this)(index, event)
    }
}