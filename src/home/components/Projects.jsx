import React, {useState} from "react";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";

import axios from "axios";

function Projects() {

    const baseURL = "http://127.0.0.1:8000/api/v1/latest-projects/";
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data);
        });
      }, []);


    return (
        <div className="band">

        

         <ProjectCard  classname="card" image="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_3.png" user="llorcajor" name="MBIP" description="Plataforma web para la creación de proyectos" experience="Alta" months="2" wanted="Ingenier@"/>

         <ProjectCard classname="card" image="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_3.png" user="llorcajor" name="MBIP" description="Plataforma web para la creación de proyectos" experience="Alta" months="2" wanted="Ingenier@"/>

         <ProjectCard classname="card" image="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_3.png" user="llorcajor" name="MBIP" description="Plataforma web para la creación de proyectos" experience="Alta" months="2" wanted="Ingenier@"/>

         <ProjectCard classname="card" image="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_3.png" user="llorcajor" name="MBIP" description="Plataforma web para la creación de proyectos" experience="Alta" months="2" wanted="Ingenier@"/>

         

         </div>
         
    )
}

export default Projects;