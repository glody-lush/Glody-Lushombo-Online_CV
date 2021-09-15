import React from 'react';
import my_cv from './cv';
import Card from 'react-bootstrap/Card';
import {BsPerson,BsHouseDoor,BsPhone,BsEnvelope,BsCalendar,BsGeoAlt,BsPeople} from 'react-icons/bs';
import Avatar from './Avatar';

/*Avatar info put inside a Card Compoenent */

function AvatarInfo(){  
    const avatarInf= my_cv.map((info,index) =>  
     <div key={index}>
         <Card style={{ width: '25rem', color:"white",  backgroundColor:"green" }}>
   <Avatar /> {/* Make use of Avatar Component nthat returned a image inside our Card Component */}
  
  {/*******************CardBody that contain all the card information ***********************/}
  <Card.Body>
    <Card.Title>PERSONAL</Card.Title>
    <Card.Header> <span><BsPerson/></span> Name</Card.Header>
    <Card.Text>
    {info.myname}
    </Card.Text>

    <Card.Header> <span><BsHouseDoor/></span> ADDRESS</Card.Header>
    <Card.Text>
    {info.Address}
    </Card.Text>
    
    <Card.Header> <span><BsPhone/></span> Phone number</Card.Header>
    <Card.Text>
    {info.myNumber}
    </Card.Text>

    <Card.Header> <span><BsEnvelope/></span> Email</Card.Header>
    <Card.Text>
    {info.myMail}
    </Card.Text>

    <Card.Header> <span><BsCalendar/></span> Date of birth</Card.Header>
    <Card.Text>
    {info.birthdate}
    </Card.Text> 

    <Card.Header> <span><BsGeoAlt/></span> Place of birth</Card.Header>
    <Card.Text>
    {info.birthplace}
    </Card.Text>

    <Card.Header> <span><BsPeople/></span> Gender</Card.Header>
    <Card.Text>
    {info.gender}
    </Card.Text>  

    <Card.Header> <span><BsPerson/></span> Nationality</Card.Header>
    <Card.Text>
    {info.Nationality}
    </Card.Text>   

    <Card.Header> <span><BsPerson/></span> Languages</Card.Header>
    <Card.Text>
    {info.Languge}
    </Card.Text>   

    <Card.Header> <span><BsPerson/></span> Maritial Status</Card.Header>
    <Card.Text>
    {info.Status}
    </Card.Text>          
  </Card.Body>
 {/**************************END of Card Body****************************************** */} 
</Card>
</div> 
)
    
/* the return element of the entire Component*/
    return(
        <div className="h">
            {avatarInf}
            
        </div>
    )
}

export default AvatarInfo;