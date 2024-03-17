import Link from "next/link"; 
import { motion } from "framer-motion";
export default function Footer(){

    return(
        <div className = "flex flex-row justify-between items-center w-full mt-20">

        <div className="flex flex-col w-1/3 items-center mx-auto my-10 text-center"><h3 className="mb-10 text-lg">Together, we'll transform your business and pave the way for success! Let's make it happen. Get ready to be captivated by the seamless integration of aesthetics and functionality.</h3>
        <Link className="w-fit" href="/start"> <div id="button" className="py-4 px-12 bg-btn_colors  outline rounded-sm w-fit outline-btn_colors text-sm font-light" >Start a Project</div></Link>

        </div>

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