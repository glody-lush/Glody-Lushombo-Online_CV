import React from "react";
import {SiSkillshare} from 'react-icons/si';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";

/*Skills component */
function Skills(){
    return (<div>
        
                <h4><SiSkillshare /> SKILLS</h4>
                <Row>
                  {/**first colon */}
                  <Col>
                   <ul className="EraseBuletOfUl">
                     <li>Microsoft Office</li>
                     <li>Communication Skills</li>
                     <li>JAVA Language</li>
                     <li>HTML</li>
                     <li>CSS</li>
                     <li>JQUERY</li>
                   </ul>
                 </Col>
                  {/*End of first colon******************************************************/}
                  
                  {/**second colon */}
                  <Col>
                    <ul className="EraseBuletOfUl">  
                     <li>Bootstrap</li>
                     <li>JavaScript</li>
                     <li>Reactjs</li>
                     <li>C Language</li>
                     <li>Database SQL & MySQL</li>
                     <li>VLan and Wan setup</li>
                    </ul>
                 </Col>
                 {/**End of second colon*****************************************************/}
               </Row>
                               
    </div>)
}

export default Skills;