import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {

    render() {
        return (
            <div>
                <nav className="Navbar Navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="Navbar-brand" href="#">Navbar</a>
                        <button className="Navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#NavbarSupportedContent" aria-controls="NavbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="Navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse Navbar-collapse" id="NavbarSupportedContent">
                            <ul className="Navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled">Disabled</a>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
