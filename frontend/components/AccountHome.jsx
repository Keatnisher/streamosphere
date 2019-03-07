import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import sig from '.././images/accImage.jpg';
import Modal from 'react-awesome-modal';
import { accHome } from '.././layouts/AccountHome.css';
import Edit from './EditDescription';
import Rename from './RenameFile';
import NavBar from './NavBar';
import ProgressBarExample from './ProgressBarTemp';
import SearchBarS from './SearchBar';

export class AccountHome extends Component {

    render() {
        const styles = {
            body: {
                backgroundColor: 'lightgreen',
            },
            contextMenuTrigger: {                
                backgroundColor: 'white',                
            },
            link: {
                float: 'right',
            },
            img: {
                marginLeft: 'auto',
                marginRight: 'auto'
            },
            nav: {
                float: 'left',
                width: '160px',
                padding: '20px',
                fontWeight: 'bold',
            },
            ul: {
                listStyleType: 'none',
                margin: '0px',
                paddingLeft: '0px',
                fontSize:' 1.2em',
            },

            a: {
                textDecoration: 'none',
            },
            Subscribe: {
                marginLeft: '45px'
            }

        };
        return (
            <body style={styles.body}>
                <Link to="/" style={styles.link}><button>Logout</button></Link> <br />
                <Subscribe style={styles.Subscribe} > </Subscribe>
                <div>
                    
                    <h1>Account Home Page</h1>
                    <img src={sig} alt="super smash bros character" width="300" height="300" style={styles.img} /> <br />
                    <NavBar style={styles.nav}> </NavBar> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                    <ProgressBarExample> </ProgressBarExample>
                    <ContextMenuTrigger id="2" style={styles.contextMenuTrigger}>
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
        const styles = {
            input: {
                float:'right'
            }
        }
        return (
            <div>
                <input type="button" value="Subscribe" onClick={() => this.openModal()} style={styles.input} />
                <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <h1>Confirm subscription</h1>
                        <p>Confirmation data</p>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Confirm</a>
                    </div>
                </Modal>
            </div>
        );
    }
}