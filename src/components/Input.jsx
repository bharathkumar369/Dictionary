import { useEffect, useState } from "react";
import '../css/input.css'
import search from '../images/search.svg'

const Input = (props) => {

    const[searchInput,setSearchInput] = useState('piano');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSearch(searchInput)
    }

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }

    useEffect(()=>{
        handleSubmit({preventDefault:()=>{}});
    },[])
    return(
        <div className="input">
            <form className="input--form" onSubmit={handleSubmit}>
                <div className="input--container">
                    <input
                        placeholder="search"
                        type="text"
                        className="input--search"
                        value={searchInput}
                        onChange={handleChange}
                    />
                    <div className="input--search__button">
                        <button >
                            <img src={search} alt="search" className="input--search__image"/>
                        </button>
                    </div> 
                </div>             
            </form>
        </div>
    )
}
export default Input;
