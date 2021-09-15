import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AvatarInfo from "./AvatarInfo";
import Qualification from "./Qualification";
import Certificate from "./Certificate";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";

import References from "./References";
import ProjectLink from "./ProjectLink";

/*CompleteCv component That import all the others component */
function CompleteCv(){
  return(<div className="no-gutters">
  <Container fluid>
    {/*AvatarInfo component */}
    <Row>
      <Col>
          <AvatarInfo />
      </Col>
{/*End AvatarInfo component ****************************************************************/}

      {/*Enthusiastic Message about the person himself  */}
      <Col>
        <h1>GLODY LUSHOMBO</h1>
         <p>I am an Enthusiastic ,and positive guy
            who enjoys leading, as well as being part of a successful productive team.
            I am capable to provide new ideas, concepts to develop innovative 
            and creative solutions to problems, also able to work well on my own initiative.
            Can demonstrate high levels of motivation required to meet the highest demands.
            I have a strong ability to perform even under higher pressure.
            Being bilingual also give me the ability to multitask.</p>
            <hr/>
{/*End Enthusiastic Message about the person himself*****************************************/}

            {/*Qualification component*/} 
            <Qualification />
{/*End of Qualification component*************************************************************/}

            {/*Certificate component*/}
            <Row className="mt-5">
              <Col>
               <Certificate /> 
              </Col>
            </Row> 
            <hr />
{/* End of Certificate component***************************************************************/}

            {/*WorkExperience component*/}
            <Row>
              <Col>
               <WorkExperience />
              </Col>
            </Row>
{/*End of WorkExperience component************************************************************/}              
            
            {/*Reference component*/}
            <Row className="mt-5">
              <References />
            </Row><hr />
{/*End of Reference component*****************************************************************/}

            {/*Skills component*/} 
            <Row>
              <Skills />
            </Row><hr />
{/*End of Skills component********************************************************************/}

            {/*ProjectLink component*/}
            <Row>
              <ProjectLink />
            </Row>
{/*End of ProjectLink component****************************************************************/}            
      </Col>
    </Row>   
 </Container> 
</div>)

}

export default CompleteCv;