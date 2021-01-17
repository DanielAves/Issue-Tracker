import React from 'react'
import { FaProjectDiagram } from 'react-icons/fa'
import { useParams } from 'react-router-dom'


const Project = () =>{ 
    const { id } = useParams(); 

    return(
        <div className="project"> 
            <h1>Project {id}</h1>
        </div> 
    )
}


export default Project; 