import { useState } from "react";


export const Navbar = () => {
    const [useIn, setUseIn] = useState(false);

    const Toggle = () =>{
        setUseIn(!useIn);
    }

  return (
    <nav className="navigation">
        <a href="#" className="logo">MUGESH</a>
        <button className="menu-box" onClick={Toggle}>
            <span className="menu"><i class='bx bx-menu'></i></span>
        </button>
        <div className={`nav_item ${useIn? 'active' :''}`} >
            <ul>
                <span className="x-icon" onClick={Toggle}><i class='bx bx-x'></i></span>
                <li className="nav_link"><a href="#home">Home</a></li>
                <li className="nav_link"><a href="#about">About</a></li>
                <li className="nav_link"><a href="#project">Project</a></li>
                <li className="nav_link"><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}
