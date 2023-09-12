import React from "react";
import facebook from './assets/facebook.svg'
import instagram from './assets/instagram.svg'
import twitter from './assets/twitter.svg'
import youtube from './assets/youtube.svg'

function Footer(){
return(
    <>
    <div className="footer pb-5 mt-10">
       <div className="socials flex items-center justify-center pb-5">
        <img src={facebook} alt="facebook" className="mr-10 cursor-pointer"></img>
        <img src={instagram} alt="instagram" className="mr-10 cursor-pointer"></img>
        <img src={twitter} alt="twitter" className="mr-10 cursor-pointer"></img>
        <img src={youtube} alt="youtube" className="mr-10 cursor-pointer"></img>
       </div>

       <div className="terms flex items-center justify-center pb-5">
        <h1 className="mr-10">Conditions of Use</h1>
        <h1 className="mr-10">Privacy & Policy</h1>
        <h1 className="mr-10">Press Room</h1>
       </div>
           <div className="terms flex items-center justify-center pb-5">
               <h1>&copy; 2023 MovieBox by Ifeoluwa Akinpelu</h1></div>

    </div>
    </>
)
}


export default Footer