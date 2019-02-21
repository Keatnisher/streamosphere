import React, { Component } from 'react';

/* Import Components */
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button'

import PropTypes from 'prop-types';

class editDescription extends Component {
    constructor(props) {
        super(props);

        this.state =
        {
            newFile:
            {
                name: ''
            }
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
    }


    handleFormSubmit(e) {
        e.preventDefault();
        let fileData = this.state.newFile;

        fetch('http://example.com',
            {
            method: "POST",
            body: JSON.stringify(fileData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(response => {
            response.json().then(data => {
                console.log("Successful" + data);
            })
        })
    }
    handleClearForm(e) {
        e.preventDefault();
        this.setState({
            newUser: {
                name: '',
                description: ''
            },
        })
    }
    render() {
        if (!this.props.show) {
            return null;
        }

        const backdropStyle = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 50
        };

        const modalStyle = {
            backgroundColor: '#fff',
            borderRadius: 5,
            maxWidth: 500,
            minHeight: 300,
            margin: '0 auto',
            padding: 30
        };

        return (
            <div className="backdrop" style={{ backdropStyle }}>
                <div className="modal" style={{ modalStyle }}>
                    {this.props.children}
                    <div className="footer">
                        <button onClick={this.props.onClose}>
                            Close
                        </button>
                        <form className="container" onSubmit={this.handleFormSubmit}>
                            <Input /> {/* Name of the file */}
                            <Button /> { /*Submit */}
                            <Button /> {/* Clear the form */}
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};

export default Modal;
export default FormContainer;
}