import React from "react";
import {FaSuitcase} from 'react-icons/fa';

/*WorkExperience component */
function WorkExperience(){
      return (<div>

              <h4><FaSuitcase /> WORK EXPERIENCE</h4>
              <span style={{fontWeight:"bolder"}} >Feb 2019 - Feb 2021</span> 
              <span className="QualifiactionSpaceName">IT Desktop Support</span> 
              <p  className="KeepNeatLine">CPUT (Cape Peninsula University Of Technology), Cape Town</p>
              <p  className="KeepNeatLine">I have been working as a desktop support and I have been doing different task as:</p>           
              
               <ul>
                 <li>Image a computer through a network or flash drive;</li>
                 <li>Add staff on the network so that their credential can be recognize on
                     CPUT network;
                  </li>
                 <li>Making Ethernet cable;</li>
                 <li>Installing different needed software in staff computer or pc;</li>
                 <li>
                 troubleshooting software problems and fix if possible or wait to be
                 directed by the manager in case of additional knowledge.
                 </li>
               </ul>
              
               </div>)      

}

export default WorkExperience;