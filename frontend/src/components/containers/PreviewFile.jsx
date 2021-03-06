//external resources needed to use component
import {MDBBtn, MDBContainer, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader} from "mdbreact";
import React from "react";
import DefaultImage from "../../images/play-316.png";
import '../../layouts/ContextMenuImpl.css';

//this component verifies user's file selection to play/stream
export default class PreviewFile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false
        };
        
        //all functions needed in this component
        this.handleResourceView = this.handleResourceView.bind(this);
        this.getImageComponent = this.getImageComponent.bind(this);
        this.urlToFileName = this.urlToFileName.bind(this);
        this.bytesToMB = this.bytesToMB.bind(this);
    }
    
    //open/close the preview modal
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    
    //get all information relevant to the file selected
    handleResourceView() {
        this.props.setResourceToViewUrl(this.props.resourceUrl);
        this.props.setResourceViewedThumbnailImage(this.props.imageUrl);
        this.props.toggleMediaPlayerView();
    }
    
    //display image for the selected file
    getImageComponent(){
        let imgUrl = this.props.imageUrl;
        if (imgUrl != undefined) {
            if (imgUrl.length == 0) {
                return (<img src={DefaultImage} alt="not working" />);
            }
        }
        return (<img src={this.props.imageUrl} alt={this.props.resourceUrl} />);
    }
    
    //convert url to the filename
    urlToFileName(url){
        let _split = url.split('/');
        return _split[_split.length-1].split('+').join(' ');
    }
    
    //convert bytes to MB
    bytesToMB(byteSize){
        return Math.ceil(byteSize / 1000000);
    }
    
    //transform state in te view component
    render(){
        let fileName = this.urlToFileName(this.props.resourceUrl);
        return (
            <MDBContainer>
                <div onClick={this.toggle}>
                    {this.getImageComponent()}
                </div>

                <MDBModal isOpen={this.state.modal} toggle={this.toggle} backdrop={true}>
                    <MDBModalHeader toggle={this.toggle}>View Confirmation</MDBModalHeader>
                    <MDBModalBody>
                        <p>Are you sure you want to view <span className="bold">{fileName}</span>?</p>
                        <p>File size: about <span className="bold">{this.bytesToMB(this.props.resourceSize)} MB</span></p>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                        <MDBBtn color="primary" onClick={this.handleResourceView}>View File</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}
