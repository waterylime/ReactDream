import React, {useState} from "react"
import { Link, useParams } from "react-router-dom";
import "./chapter.css";



const Chapter =()=> {

    
    let { id } = useParams();
    let {bookName} = useParams();
    
    const [chapter, setChapter] = useState({
        num:parseInt(id)
    })

    const setNext = () => {
         setChapter({num: parseInt(chapter.num+1)})
    }

    const setPrev = () => {
        setChapter({num: parseInt(chapter.num-1)})
   }



     

    return   (
        <>
            <div className="chapter">
            <h1>some text, chapter {id}</h1>
            <button onClick={()=>setNext()}>
            <Link to={`/${bookName}/${parseInt(chapter.num)+1}`}>Next Chapter</Link>
            </button>           
            <button onClick={()=>setPrev()}>
            <Link to={`/${bookName}/${parseInt(chapter.num)-1}`}>Previous Chapter</Link>
            </button>
            
            <Link to="/">← Back to Home</Link>
            </div>
        </>
    )
}

export default Chapter;