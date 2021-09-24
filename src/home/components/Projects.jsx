import React, {useState} from "react";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";

import axios from "axios";

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/latest-projects/" 
});

function Projects() {

    const [post, setPost] = React.useState([]);

    React.useEffect(() => {
      async function getPost() {
        const response = await client.get("");
        setPost(response.data);
      }
      getPost();
    }, []);

if(post){
    return (
        <div className="band">

          {post.map(card => <ProjectCard classname="card" image="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_3.png" user="llorcajor" name={card.name} description={card.description} experience="Alta" months="2" wanted="Ingenier@"/>)}

         </div>
         
    )
  }
}

export default Projects;