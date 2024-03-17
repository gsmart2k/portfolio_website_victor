import Link from "next/link"; 
import { motion } from "framer-motion";
export default function Navbar(){

    return(

        <div className = "flex flex-row px-20 py-5 justify-between items-center fixed w-full bg-black">
           <Link href="/"> <div id="logo" className="font-extrabold text-2xl"><h1>Detoye</h1></div></Link>
            <div id="links" className="flex col justify-between w-1/4">
                <Link className="active:text-2xl" href="/works">Works</Link>
                <Link href="/services">Services</Link>
                <Link href="/about">About</Link>
                <Link href="/careers">Careers</Link>
            </div>
           <Link href="/start"> <div id="button" className="py-2 px-6 bg-btn_colors  outline rounded-sm outline-btn_colors font-light" >Start a Project</div></Link>
        </div>
        )
}
