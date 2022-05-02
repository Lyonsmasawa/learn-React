import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link> 
                {/* "Links prevents request to server and injects the content we need" */}
                <Link to="/create" style={{
                    color: "white",
                    background: "#f1356d",
                    borderRadius: "0px",
                }}>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;