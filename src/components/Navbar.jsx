import React from "react";
import "../css/navbar.css"
import book from "../images/book.svg"
import bookWhite from '../images/book-white.svg'
import moon from '../images/moon.svg'
import on from "../images/toggle-off.svg"
import off from '../images/toggle-on.svg'
import sun from '../images/sun.svg'

const Navbar = ({change, toggleMode}) => {
    return(
        <div className="navbar--container">
            <nav>
                <div className="navbar--book__container">
                    {change ? (<img src={bookWhite} alt="book" className="navbar--book"/> ): (<img src={book} alt="bookwhite" className="navbar--book"/> ) }
                </div>
                <div className="navbar--book__toggle" onClick={toggleMode}>
                    <div>
                        {change ? (<img src={off} alt="toggleOff" className="navbar--toggleOff" />) : (
                            <img src={on} alt="toggleOn" className="navbar--toggleOn" />
                        )}
                    </div>
                    <div>
                        {change ? (<img src={sun} alt="moon" className="navbar--moon"/>) : (
                            <img src={moon} alt="sun" className="navbar--sun"/>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;