import React, { Component } from 'react';
// import { Link } from 'react-router-dom';


export class Navbar extends Component {

    render() {
        return (

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid mx-5">
                    {/* <a className="navbar-brand" aria-current="page" onClick={() => this.props.changeCat("general")} to="/">AajTak</a> */}


                    <button className="navbar-brand nav-link active" aria-current="page" onClick={() => this.props.changeCat("home")} to="/">AajTak</button>


                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"    onClick={() => this.props.changeCat("general")} >
                        <span className="navbar-toggler-icon"></span>
                    </button> */}

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            {/* If below links, do not work or give error, try the following li item :- */}
                            {/* <li className="nav-item"><a className="nav-link active" aria-current="page"  onClick={() => this.props.changeCat("general")} to="/">General</a></li> */}

                            <li className="nav-item"><button className="nav-link active" aria-current="page" onClick={() => this.props.changeCat("general")} >         General</button></li>
                            <li className="nav-item"><button className="nav-link active" aria-current="page" onClick={() => this.props.changeCat("technology")} >      Technology</button></li>
                            <li className="nav-item"><button className="nav-link active" aria-current="page" onClick={() => this.props.changeCat("business")} >        Business</button></li>
                            <li className="nav-item"><button className="nav-link active" aria-current="page" onClick={() => this.props.changeCat("entertainment")} >   Entertainment</button></li>
                            <li className="nav-item"><button className="nav-link active" aria-current="page" onClick={() => this.props.changeCat("sports")} >          Sports</button></li>
                            <li className="nav-item"><button className="nav-link active" aria-current="page" onClick={() => this.props.changeCat("health")} >          Health</button></li>
                            <li className="nav-item"><button className="nav-link active" aria-current="page" onClick={() => this.props.changeCat("science")} >         Science</button></li>


                            <li className="nav-item dropdown mx-5">
                                <a className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Country
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">ae</a></li>
                                    <li><a className="dropdown-item" href="#">ar</a></li>
                                    <li><a className="dropdown-item" href="#">at</a></li>
                                    <li><a className="dropdown-item" href="#">au</a></li>
                                    <li><a className="dropdown-item" href="#">be</a></li>
                                    <li><a className="dropdown-item" href="#">bg</a></li>
                                    <li><a className="dropdown-item" href="#">br</a></li>
                                    <li><a className="dropdown-item" href="#">ca</a></li>
                                    <li><a className="dropdown-item" href="#">ch</a></li>
                                    <li><a className="dropdown-item" href="#">cn</a></li>
                                    <li><a className="dropdown-item" href="#">co</a></li>
                                    <li><a className="dropdown-item" href="#">cu</a></li>
                                    <li><a className="dropdown-item" href="#">cz</a></li>
                                    <li><a className="dropdown-item" href="#">de</a></li>
                                    <li><a className="dropdown-item" href="#">eg</a></li>
                                    <li><a className="dropdown-item" href="#">fr</a></li>
                                    <li><a className="dropdown-item" href="#">gb</a></li>
                                    <li><a className="dropdown-item" href="#">gr</a></li>
                                    <li><a className="dropdown-item" href="#">hk</a></li>
                                    <li><a className="dropdown-item" href="#">hu</a></li>
                                    <li><a className="dropdown-item" href="#">id</a></li>
                                    <li><a className="dropdown-item" href="#">ie</a></li>
                                    <li><a className="dropdown-item" href="#">il</a></li>
                                    <li><a className="dropdown-item" href="#">in</a></li>
                                    <li><a className="dropdown-item" href="#">it</a></li>
                                    <li><a className="dropdown-item" href="#">jp</a></li>
                                    <li><a className="dropdown-item" href="#">kr</a></li>
                                    <li><a className="dropdown-item" href="#">lt</a></li>
                                    <li><a className="dropdown-item" href="#">lv</a></li>
                                    <li><a className="dropdown-item" href="#">ma</a></li>
                                    <li><a className="dropdown-item" href="#">mx</a></li>
                                    <li><a className="dropdown-item" href="#">my</a></li>
                                    <li><a className="dropdown-item" href="#">ng</a></li>
                                    <li><a className="dropdown-item" href="#">nl</a></li>
                                    <li><a className="dropdown-item" href="#">no</a></li>
                                    <li><a className="dropdown-item" href="#">nz</a></li>
                                    <li><a className="dropdown-item" href="#">ph</a></li>
                                    <li><a className="dropdown-item" href="#">pl</a></li>
                                    <li><a className="dropdown-item" href="#">pt</a></li>
                                    <li><a className="dropdown-item" href="#">ro</a></li>
                                    <li><a className="dropdown-item" href="#">rs</a></li>
                                    <li><a className="dropdown-item" href="#">ru</a></li>
                                    <li><a className="dropdown-item" href="#">sa</a></li>
                                    <li><a className="dropdown-item" href="#">se</a></li>
                                    <li><a className="dropdown-item" href="#">sg</a></li>
                                    <li><a className="dropdown-item" href="#">si</a></li>
                                    <li><a className="dropdown-item" href="#">sk</a></li>
                                    <li><a className="dropdown-item" href="#">th</a></li>
                                    <li><a className="dropdown-item" href="#">tr</a></li>
                                    <li><a className="dropdown-item" href="#">tw</a></li>
                                    <li><a className="dropdown-item" href="#">ua</a></li>
                                    <li><a className="dropdown-item" href="#">us</a></li>
                                    <li><a className="dropdown-item" href="#">ve</a></li>
                                    <li><a className="dropdown-item" href="#">za</a></li>

                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

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

