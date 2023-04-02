import React from "react"
import { Link } from "react-router-dom"

const Navbar = ()=> {
    
        return(
     <>
        <div className=" navbar fixed-top navbar-expand-lg mt-0" style={{background:"#a915bd"}} >
            <Link className="navbar-brand "style={{color:'#dfaae6'}} to="/">NewsMonkey</Link> 
            
                <ul className="nav">
                    <li className="nav-item active"><Link to="/" className="nav-link text-light ">Home</Link></li>
                    <li className="nav-item "><Link to="Business" className="nav-link text-light">Business</Link></li>
                    <li className="nav-item  "><Link to="Entertainment" className="nav-link text-light">Entertainment</Link></li>
                    <li className="nav-item  "><Link to="General" className="nav-link text-light">General</Link></li>
                    <li className="nav-item "><Link to="Health" className="nav-link text-light">Health</Link></li>
                    <li className="nav-item "><Link to="Science" className="nav-link text-light">Science</Link></li>
                    <li className="nav-item "><Link to="sports" className="nav-link text-light">Sports</Link></li>
                    <li className="nav-item "><Link to="Technology" className="nav-link text-light">Technology</Link></li>
                </ul>
                </div>
                </>
                )
}
export default Navbar
