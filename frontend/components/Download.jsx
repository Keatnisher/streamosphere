import React, { Component } from 'react';


export default class Download extends Component {
    render() {
        return (
            <button type="submit" onClick="window.open('file.doc')">Download</button>
        );
    }
}