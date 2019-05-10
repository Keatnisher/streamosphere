//external resources to be imported
import React, { Component } from "react";
import "../../layouts/Dropzone.css";
import UploadIcon from '../../images/upload-to-cloud-26px.png';

//this component is where the user will upload a file from their client
class DropZone extends Component {
    constructor(props) {
        super(props);
        this.state = { hightlight: false };
        this.fileInputRef = React.createRef(); //reference object

        //functions needed for DropZone component
        this.openFileDialog = this.openFileDialog.bind(this);
        this.onFilesAdded = this.onFilesAdded.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    //get file selected from the client
    openFileDialog() {
        if (this.props.disabled) return;
        this.fileInputRef.current.click();
    }
    
    //add uploaded file to array
    onFilesAdded(evt) {
        if (this.props.disabled) return;
        const files = evt.target.files;
        if (this.props.onFilesAdded) {
            const array = this.fileListToArray(files);
            this.props.onFilesAdded(array);
        }
    }
    
    //user drags a file to the component
    onDragOver(event) {
        event.preventDefault();
        if (this.props.disabed) return;
        this.setState({ hightlight: true });
    }
    
    //mouse is out of component
    onDragLeave(event) {
        this.setState({ hightlight: false });
    }

    //mouse is on component
    onDrop(event) {
        event.preventDefault();
        if (this.props.disabed) return;
        const files = event.dataTransfer.files;
        if (this.props.onFilesAdded) {
            const array = this.fileListToArray(files);
            this.props.onFilesAdded(array);
        }
        this.setState({ hightlight: false });
    }
    
    //convert list to array
    fileListToArray(list) {
        const array = [];
        for (var i = 0; i < list.length; i++) {
            array.push(list.item(i));
        }
        return array;
    }
    
    //DropZone view component
    render() {
        return (
            <div
                className={`DropZone ${this.state.hightlight ? "Highlight" : ""}`}
                onDragOver={this.onDragOver}
                onDragLeave={this.onDragLeave}
                onDrop={this.onDrop}
                onClick={this.openFileDialog}
                style={{ cursor: this.props.disabled ? "default" : "pointer" }}
            >
                <input
                    ref={this.fileInputRef}
                    className="FileInput"
                    type="file"
                    multiple
                    onChange={this.onFilesAdded}
                />
                <img
                    alt="upload"
                    className="Icon"
                    src={UploadIcon}
                />
                <span>Select Files to Upload</span>
            </div>
        );
    }
}

export default DropZone;
