//external resources that need to be imported
import React, { Component } from 'react';
import UploadFile from './UploadFile.jsx';
import { Link } from 'react-router-dom';
import Modal from 'react-awesome-modal';
import Button from 'react-bootstrap/Button';
import '../../layouts/ButtonStyles.css';

export default class UploadModalImpl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,

        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    //opens modal when button is selected
    openModal() {
        this.setState({
            visible: true
        });
    }
    
    //close modal after upload is complete and "clear" is selected
    closeModal() {
        this.props.refreshAfterUpload();
        console.log('[UploadModalImpl] closing modal');
        this.setState({
            visible: false
        });
    }
    //view for this component includes "UploadFile" component
    render() {
        return (
            <div>
                <Button className="file-button" onClick={() => this.openModal()}>Upload</Button>
                <Modal visible={this.state.visible} effect="fadeInUp" width="1000" height="300" onClickAway={() => this.closeModal()}>
                    <UploadFile/>
                </Modal>
            </div>
        );
    }
}
