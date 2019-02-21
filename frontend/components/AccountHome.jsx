import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import sig from '.././images/signature1.png';
import Modal from 'react-awesome-modal';
import accHome from '.././layouts/AccountHome.css';
import Edit from './EditDescription';

export class AccountHome extends Component {

    openEdit() {
        return <Edit> </Edit>
    }
    render() {
        return (
            <body>
                <div>
                    
                    <h1>Account Home Page</h1>
                    <p> Placeholder image </p>
                    <button>New</button>
                    <input type="file" name="" id="" onChange={this.handleselectedFile} />
                    <button onClick={this.handleUpload}>Upload</button>
                    <a href={sig} download>
                        <img src={sig} alt="One of my signatures" />
                    </a> <br />

                    <Link to="/">Logout</Link> <br />

                    <Subscribe> </Subscribe>
                    <ContextMenuTrigger id="2" style={accHome.ContextMenu} >
                        <div className="well">File 1</div>
                        <div className="well">File 2</div>
                        <div className="well">File 3</div>
                        <div className="well">File 4</div>
                        <div className="well">File 5</div>
                    </ContextMenuTrigger>
                    <ContextMenu id="2">
                        <button> <MenuItem data={{ foo: 'bar' }} onClick={this.handleClick} style={accHome.MenuItem}>
                            Cut
                            </MenuItem>
                        </button>
                        <button> <MenuItem data={{ foo: 'bar' }} onClick={this.handleClick} style={accHome.MenuItem}>
                            Copy
                            </MenuItem>
                        </button>
                        <MenuItem divider />
                        <button> <MenuItem data={{ foo: 'bar' }} onClick={this.handleClick} style={accHome.MenuItem}>
                            Move
                            </MenuItem>
                        </button>
                        <Edit> </Edit>
                        <button> <MenuItem data={{ foo: 'bar' }} onClick={this.handleClick} style={accHome.MenuItem}>
                            Rename
                                </MenuItem>
                        </button>
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