import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import Main from "./components/Main";
import './App.css'
//import gsap from "gsap";
import axios from "axios";
//import { useGSAP } from "@gsap/react";

const Dictionary = () => {

    const [data,setData] = useState('')

    const [change,setChange] = useState (false)
    
    // const fetchData = (word) => {
    //     fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    //         .then((res)=> res.json())
    //         .then((data) => setData(data))
    //         .catch((err)=>console.error(err))
    // }

    const fetchData = async(word) => {
        try{
            const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            setData(response.data)
        } catch(err){
            console.error(err)
        }
    }

    const handleSearch = (word) => {
        fetchData(word)
        
    }   

    // const container = useRef(null)

    // useGSAP(()=>{
    //     const tl = gsap.timeline()

    //     tl.from('.main--word',{
    //         y:200,
    //         opacity:0,
    //         duration:1,
    //         stagger:0.5
    //     })
    //     tl.from('.main--phonetic',{
    //         y:200,
    //         opacity:0,
    //         duration:1,
    //         stagger:0.5
    //     })
    //     tl.from('.main--noun',{
    //         y:200,
    //         opacity:0,
    //         duration:1,
    //         stagger:0.5
    //     })
    //     tl.from('.main--meaning',{
    //         y:200,
    //         opacity:0,
    //         duration:1,
    //         stagger:0.5
    //     })
    //     tl.from('.main--synonym',{
    //         y:200,
    //         opacity:0,
    //         duration:1,
    //         stagger:0.5
    //     })
    //     tl.from('.main--verb',{
    //         y:200,
    //         opacity:0,
    //         duration:1,
    //         stagger:0.5
    //     })
    // },{scope:container})

    const toggleMode = () => {
        setChange((prev)=>!prev)
    }

    useEffect(() => {
        document.body.className = change ? 'darkmode' : 'lightmode';
    })
    return(
        <section>
            <Navbar toggleMode={toggleMode} change={change}/>
            <Input handleSearch={handleSearch} change={change}/>
            <Main data={data} />
        </section>
    )
}
export default Dictionary;