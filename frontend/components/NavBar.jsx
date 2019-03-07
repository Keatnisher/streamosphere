import React, { Component } from 'react';
import File from './File';
import Upload from './Upload';
import Download from './Download';
import '../layouts/NavBar.css';
export default class NavBar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li> <File> </File> </li>
                    <li> <Upload> </Upload> </li>
                    <li> <Download> </Download></li>
                </ul>
            </nav>
        );
    }

}