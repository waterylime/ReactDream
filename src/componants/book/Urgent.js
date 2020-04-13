import React from "react";
import { Link, useParams } from "react-router-dom";
import './book.css';

const Book =(props)=> {
    let {bookName} = useParams()

    return (
        <>
            <h2 className="bookHead">This is the section of the site dedicated to {props.name} written by {props.author}  </h2>      
            <p>
           Summary of Urgent Request: How to Raise an Abandomed Dragon
            
                A totally normal high schooler whose only good point is his toughness, Tetsu. The lizard he happened to pick up one day, turns out to be a super rare dragon!? Not knowing how to raise his dragon, he turns to the internet. However, his walk with his super rare dragon is a trending topic. What kind of insane turmoil will this bring into his life...?
                </p>
                <p> All pictures are taken form the manga. If you can please support the author there would be no story with out.</p>
               <p>Please click on the name of the chapter you would like to view</p>
               
               <Link to={`/${bookName}/0`}>Simple character introduction</Link>
            <br></br>
            <Link to={`/${bookName}/1`}>Chapter 1</Link>
            <br></br>
            <Link to={`/${bookName}/2`}>Chapter 2</Link>
            <br></br>
            <Link to={`/${bookName}/3`}>Chapter 3</Link>
            <br></br>
            <Link to={`/${bookName}/4`}>Chapter 4</Link>
            <br></br>
            <Link to={`/${bookName}/5`}>Chapter 5</Link>
            <br></br>

            <Link to="/">← Back to Home</Link>
        </>
    )
}

export default Book;