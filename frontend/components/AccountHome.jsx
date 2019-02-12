import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class AccountHome extends Component {
    render() {
        const menu = document.querySelector(".menu");
        let menuVisible = false;

        const toggleMenu = command => {
            menu.style.display = command === "show" ? "block" : "none";
            menuVisible = !menuVisible;
        };

        const setPosition = ({ top, left }) => {
            menu.style.left = `${left}px`;
            menu.style.top = `${top}px`;
            toggleMenu("show");
        };

        window.addEventListener("click", e => {
            if (menuVisible) toggleMenu("hide");
        });

        window.addEventListener("contextmenu", e => {
            e.preventDefault();
            const origin = {
                left: e.pageX,
                top: e.pageY
            };
            setPosition(origin);
            return false;
        });
        return (
            <div>
                
                <h1>Account Home Page</h1>
                <p> Placeholder image </p>
                <button>New</button>
                <input type="file" name="" id="" onChange={this.handleselectedFile} />
                <button onClick={this.handleUpload}>Upload</button>
                <a href="signature1.png" download>
                    <img src="signature1.png" alt="One of my signatures" />
                </a> <br />
                <Link to="/">Logout</Link>
                <div class="menu">
                    <ul class="menu-options">
                        <li class="menu-option">Cut</li>
                        <li class="menu-option">Copy</li>
                        <li class="menu-option">Move</li>
                        <li class="menu-option">Edit</li>
                        <li class="menu-option">Rename</li>
                    </ul>
                </div>
            </div>
        );
    }
}
