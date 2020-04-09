import React from "react";



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
                    <img className="thumbnail" alt="book cover 2"></img>
                </div>
            </div>
        </div>




        </>
    )
}

export default Home;