const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    background: "#f1356d",
                    borderRadius: "0px",
                }}>New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;