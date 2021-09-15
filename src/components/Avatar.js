import React from 'react';
import my_cv from './cv';

/*Avatar component that return an image */
function Avatar(){
   const avatarImage = my_cv.map((Image,index) =>
   <div key={index}>
     
      <img className="imageAvater" src={Image.imageAvatar} alt="" />
      </div>  
   ) 

   /* the return element of the entire Component*/
  return(<div> 
   { avatarImage}
  </div>)
}

export default Avatar;