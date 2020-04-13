import React from "react";
import { Link} from "react-router-dom";
import './home.css'
// import urgentCover from "../src/Assets/image/Urgent/cover.PNG"


const Home =() => {

    return (
        <>

        <div id="welcome" >
            <h1>Welcome to the page</h1>
        </div>
        <div id="content">
            <p>Thanks for visitng my website. Just a bit of info; I am a navtive English speaker and my Japanese is still at beginer lever so I am translating useing Goolge. I will do my best to make each chaper readable for English readers after google translates. My goal is to have one chapter translated a month. I am only currently working on "Urgent Request: How to Raise an Abandomed Dragon." If there are other stories you would like me to translate please let me know throught the contact page. If the story is even liscensed and published in English I will stop translating so that you can purchase the book, thus supporting the author.</p>
            <p> This site is very much a work in progress I am just starting out as a web desiner. Thanks to my friend tzvik15 for doing all the back end work I am able to focuse on the front end design and translation, which is the part I love doing.  
 </p>
            <div id="projects">
                <h3>Here are the projects I am working on:</h3>
                <div id="images">
                    <img className="thumbnail" alt="bookCover1" ></img> 
                    <br></br>
                    <button><Link to="/book1name">Urgent Request: How to Raise an Abandomed Dragon</Link></button> 
                    <br></br>
                    <img className="thumbnail" alt="book cover 2"></img>
                    <button><Link to="/book2name">book2name</Link></button> 
                </div>
            </div>
        </div>




        </>
    )
}

export default Home;