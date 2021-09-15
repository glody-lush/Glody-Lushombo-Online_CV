import React from "react";
import {AiFillGithub} from 'react-icons/ai';
import Col from 'react-bootstrap/Col';
/*Project component */
function ProjectLink(){
    return(<div>
        <Col>
            <h4><AiFillGithub />  GITHUB</h4>
            <h3><a target="_blank" rel="noreferrer" href="https://github.com/glody-lush">My projects</a> </h3>
        </Col> 
    </div>)
}
export default ProjectLink;
