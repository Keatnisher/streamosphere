import React, { Component } from 'react';

export default class Upload extends Component {
    upload() {
        document.getElementById("newFile").click();
    }
    render() {
        return (
            <div>
                <button id="new" onClick={this.upload}>Upload</button>
                <input id="newFile" hidden type="file" />
            </div>
        );
    }

}