import {MDBBtn, MDBContainer, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader} from "mdbreact";
import React from "react";
import DefaultImage from "../../images/play-316.png";

export default class PreviewFile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false
        }

        this.handleResourceView = this.handleResourceView.bind(this);
        this.getImageComponent = this.getImageComponent.bind(this);
    }


    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleResourceView() {
        this.props.toggleMediaPlayerView();
        this.props.setResourceToViewUrl(this.props.resourceUrl);
    }

    getImageComponent(){
        let imgUrl = this.props.imageUrl;
        if (imgUrl != undefined) {
            if (imgUrl.length == 0) {
                return (<img src={DefaultImage} alt="we royally fucked up" />);
            }
        }
        return (<img src={this.props.imageUrl} alt={this.props.resourceUrl} />);
    }

    render(){
        return (
            <MDBContainer>
                <div onClick={this.toggle}>
                    {this.getImageComponent()}
                </div>

                <MDBModal isOpen={this.state.modal} toggle={this.toggle} backdrop={true}>
                    <MDBModalHeader toggle={this.toggle}>Title</MDBModalHeader>
                    <MDBModalBody>
                        <p>Do you want to view this file?</p>
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