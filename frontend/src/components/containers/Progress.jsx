//external resources
import React, { Component } from "react";
import "../../layouts/Progress.css";

class Progress extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    //progress bar to show user when upload is complete
    render() {
        return (
            <div className="ProgressBar">
                <div
                    className="Progress"
                    style={{ width: this.props.progress + "%" }}
                />
            </div>
        );
    }
}

export default Progress;
