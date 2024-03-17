import Link from "next/link"; 
import { motion } from "framer-motion";
export default function Footer(){

    return(
        <div className = "flex flex-row justify-between items-center w-full mt-20">

           <div id="footer_child" className="font-extrabold text-sm"><div className="flex flex-col justify-start"><span>Thanks for looking around.</span><span>Stay in touch.</span></div></div>
            <div id="links" className="flex flex-row justify-between w-1/4">
               
                <div id="social" className="flex flex-col font-bold text-sm place-items-start">
            
                        <span className="text-gray-500 mb-3">Socials</span>
                       <div className="flex flex-row"> <span className="mr-5">LinkedIn</span> <span>Twitter (X)</span></div>
                       <div className="flex flex-row"> <span className="mr-5">Facebook</span> <span>Farcaster </span></div>
                        
              
                </div>
                <div id="design_shots" className="flex  flex-col font-bold text-sm place-items-start">
                        <span className="text-gray-500 mb-3">Design Shots</span>
                       <div className="flex flex-row"> <span className="mr-5">Behance</span> <span>Dribbble </span></div>
                       <div className="flex flex-row"> <span className="mr-5">Awwards</span> <span>Medium </span></div>
                        
                </div>

               
            </div>
        </div>
        )
}