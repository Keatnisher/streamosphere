import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import sig from '.././images/signature1.png';
import Modal from 'react-awesome-modal';
import { accHome } from '.././layouts/AccountHome.css';
import Edit from './EditDescription';
import Rename from './RenameFile';
import File from './File';

export class AccountHome extends Component {

    render() {
        const styles = {
            body: {
                backgroundColor: 'lightgreen',
            },
            contextMenuTrigger: {                
                backgroundColor: 'white',                
            },
        };
        return (
            <body style={styles.body}>
                <div>                  
                    <h1>Account Home Page</h1>
                    <p> Placeholder image </p>
                    <File> </File>
                    <input type="file" name="" id="" onChange={this.handleselectedFile} />
                    <button onClick={this.handleUpload}>Upload</button> <br />
                    <a href={sig} download>
                       Download
                    </a> <br />

                    <Link to="/">Logout</Link> <br />

                    <Subscribe> </Subscribe>
                    <ContextMenuTrigger id="2" style={styles.contextMenuTrigger} >
                        <div className="well">File 1</div>
                        <div className="well">File 2</div>
                        <div className="well">File 3</div>
                        <div className="well">File 4</div>
                        <div className="well">File 5</div>
                    </ContextMenuTrigger>
                    <ContextMenu id="2">
                        <a> <MenuItem data={{ foo: 'bar' }} onClick={this.handleClick} >
                            Cut
                            </MenuItem>
                        </a>
                        <a> <MenuItem data={{ foo: 'bar' }} onClick={this.handleClick} >
                            Copy
                            </MenuItem>
                        </a>
                        <MenuItem divider />
                        <a> <MenuItem data={{ foo: 'bar' }} onClick={this.handleClick}>
                            Move
                            </MenuItem>
                        </a>
                        <Edit> </Edit>
                        <Rename> </Rename>
                    </ContextMenu>
                </div>
            </body>          
        );
    }
}



export default class Subscribe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        alert("Your subscription is now confirmed.")
        this.setState({
            visible: false
        });
    }

    render() {
        return (
            <section>
                
                <input type="button" value="Subscribe" onClick={() => this.openModal()} />
                <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <h1>Confirm subscription</h1>
                        <p>Confirmation data</p>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Confirm</a>
                    </div>
                </Modal>
            </section>
        );
    }
}