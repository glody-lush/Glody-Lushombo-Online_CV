import React from "react";

function Footer(){
 return (<div>
     {/** The footer component of the page set with inline style css  */}
     <footer style={{backgroundColor:"rgb(0,0,0.4)", color:"white", textAlign:"center"}}>
      I built this site with React components. 
      The full source code can be found in my <a target="_blank" rel="noreferrer" href="https://github.com/glody-lush/Glody-Lushombo-Online_CV" >Github repo</a>.
      </footer>
 </div>)
}

export default Footer;