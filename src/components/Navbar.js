import React, { Component } from 'react';
// import { Link } from 'react-router-dom';


export class Navbar extends Component {

    render() {
        return (

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid mx-5">
                    {/* <Link className="navbar-brand" aria-current="page" onClick={() => this.props.changeCat("general")} to="/">AajTak</Link> */}


                    <button className="navbar-brand nav-link active" aria-current="page" onClick={() => this.props.changeCat("home")} to="/">AajTak</button>


                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"    onClick={() => this.props.changeCat("general")} >
                        <span className="navbar-toggler-icon"></span>
                    </button> */}

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            {/* If below links, do not work or give error, try the following li item :- */}
                            {/* <li className="nav-item"><Link className="nav-link active" aria-current="page"  onClick={() => this.props.changeCat("general")} to="/">General</Link></li> */}

                            <li className="nav-item"><button className="nav-link active" aria-current="page" onClick={() => this.props.changeCat("general")} >         General</button></li>
                            <li className="nav-item"><button className="nav-link active" aria-current="page" onClick={() => this.props.changeCat("technology")} >      Technology</button></li>
                            <li className="nav-item"><button className="nav-link active" aria-current="page" onClick={() => this.props.changeCat("business")} >        Business</button></li>
                            <li className="nav-item"><button className="nav-link active" aria-current="page" onClick={() => this.props.changeCat("entertainment")} >   Entertainment</button></li>
                            <li className="nav-item"><button className="nav-link active" aria-current="page" onClick={() => this.props.changeCat("sports")} >          Sports</button></li>
                            <li className="nav-item"><button className="nav-link active" aria-current="page" onClick={() => this.props.changeCat("health")} >          Health</button></li>
                            <li className="nav-item"><button className="nav-link active" aria-current="page" onClick={() => this.props.changeCat("science")} >         Science</button></li>


                            {/* <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Country
                                </Link>
                                <ul className="dropdown-menu">  
                                    <li><Link className="dropdown-item" to="">Action</Link></li>
                                    <li><Link className="dropdown-item" to="/">Another action</Link></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                                </ul>
                            </li> */}

                        </ul>

                        <li className="nav-item mx-5" style={{ width: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img src={require("./images/dark-mode.png")} alt="" style={{ maxWidth: "60%" }} />
                        </li>

                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
