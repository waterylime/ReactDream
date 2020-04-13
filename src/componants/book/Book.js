import React from "react";
import { Link, useParams } from "react-router-dom";


const Book =(props)=> {
    let {bookName} = useParams()

    return (
        <>
            <h2>This is the section of the site dedicated to {props.name} written by {props.author}</h2>
            <p>Please click on the name of the chapter you would like to view</p>

            <Link to={`/${bookName}/1`}>1</Link>
            <Link to={`/${bookName}/2`}>2</Link>
            <Link to={`/${bookName}/3`}>3</Link>
            <Link to={`/${bookName}/4`}>4</Link>
            <Link to={`/${bookName}/5`}>5</Link>

            <Link to="/">← Back to Home</Link>
        </>
    )
}

export default Book;