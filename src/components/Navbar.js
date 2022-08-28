import React from "react";


    export default class Navbar extends React.Component {
        render() {
            return (
        
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                        <a className="navbar-brand" href="#">
                            My Site
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">
                                        Home <span className="sr-only"></span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        More info
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Comments
                                    </a>
                                </li>

                            </ul>
                        </div>
               </nav>
    
                    );
    };
};
// export default Navbar;