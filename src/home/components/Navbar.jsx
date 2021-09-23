import React, {useState} from "react";
import logo from '../../images/logo_star.png';
import SearchBar from "./SearchBar/SearchBar";

function Navbar() {

    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setnav(true);
        }
        else {
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <div>
            <SearchBar />
        </div>
    )
}

export default Navbar;