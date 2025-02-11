import { Link } from "react-router-dom"


export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">

            <Link className="navbar-brand" href="#">useContext</Link>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item">
                    <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
  )
}

