import React from "react";
import '../css/main.css';
//import playIcon from '../images/play.svg'
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

const Main = (props) => {

    const { data } = props;
    return(
        <div className="main" ref={props.container} >
            <section>
                <div className="main--word">
                    {data && data.length > 0 && data[0].word && (
                        <h1>{data[0].word}</h1>
                    )}
                </div>
                <div>
                    {/* {data && data.length>0 && data[0].phonetic && (
                        <p>{data[0].phonetic}</p>
                    )} */}   
                </div>
            </section>

            <section className="main--phonetic">
                {data && data.length > 0 && data[0].phonetic && (<p>{data[0].phonetic}</p>)}
            </section>

            <section className="main--noun">
                {data && data.length>0 && data[0].meanings && (<div>
                    <p>{data[0].meanings[0].partOfSpeech}</p>
                </div>)}
            </section>

            <section className="main--meaning">   
                <div>
                    {data && data.length > 0 && data[0].meanings && data[0].meanings.length >0 && (
                        <div>
                            <h3>Meaning</h3>
                                <div >
                                    <p>
                                        {data[0].meanings[0].definitions?.map((definition,index) => (
                                            <div className="main--meaning__flex">
                                                <div className="main--meaning__left">
                                                    <span className="main--dot"></span>
                                                </div>
                                                <div key={index} className="main--meaning__right">
                                                    <p>{definition.definition}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </p>
                                </div>               
                        </div>
                    ) }
                </div>   
            </section>

            <section className="main--synonym">
               <div>
                {data && data.length>0 && data[0].meanings && (
                <div>
                    <div className="main--synonym__flex">
                        <div>
                            <h3>Synonyms</h3>
                        </div>
                        <div>
                            <p>
                                {data[0].meanings[0].synonyms.join('  ')}
                            </p>
                        </div>
                    </div>
                </div>
                )}
               </div> 
            </section>

            <section className="main--verb">
                {data && data.length>0 && data[0].meanings && data[0].meanings.length>1 && (
                    <div>
                        <div>
                            <h3>verb</h3>
                            <h5>Meanings</h5>
                        </div>
                        <div className="main--verb__flex">
                            <div >
                                <span className="main--dot"></span>
                            </div>
                            <div>
                                {data[0].meanings[1].definitions && data[0].meanings[1].definitions[0]?.definition}
                            </div>
                        </div>
                        <div className="main--verb__right">
                            {data[0].meanings[1].definitions && data[0].meanings[1].definitions[0]?.example}
                        </div>
                    </div>          
                )}
            </section>
        </div>
    )
}
export default Main;