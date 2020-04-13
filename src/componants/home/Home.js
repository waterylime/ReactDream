import React from "react";
import { Link} from "react-router-dom";



const Home =() => {

    return (
        <>

        <div id="welcome" >
            <h1>Welcome to the page</h1>
        </div>
        <div id="content">
            <p>This is a placeholder text about this project</p>
            <p>This is a placeholder text about Shauna</p>
            <div id="projects">
                <h3>Here are the projects I am working on:</h3>
                <div id="images">
                    <img className="thumbnail" alt="book cover 1"></img>
                    <button><Link to="/book1name">book1name</Link></button> 
                    <img className="thumbnail" alt="book cover 2"></img>
                    <button><Link to="/book2name">book2name</Link></button> 
                </div>
            </div>
        </div>




        </>
    )
}

export default Home;