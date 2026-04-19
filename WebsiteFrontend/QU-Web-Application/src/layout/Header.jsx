import { Link } from "react-router-dom";

function Header() {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">The Royal Palms</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav w-100 gap-2"> {/* Added w-100 to ensure the nav takes full width */}
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        <a className="nav-link" href="#">Menu</a>
                        <Link to="/rooms" className="nav-link">Rooms</Link>
                        <a className="nav-link">Contact</a>

                        {/* This button will now snap to the right */}
                        <Link type="button" className="btn btn-success ms-auto" to="/signin">Sign in</Link>
                        <Link type="button" className="btn btn-light" to="/signup">Sign Up</Link>


                    </div>
                </div>
            </div>
        </nav>


    );

}

export default Header