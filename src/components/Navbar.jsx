import Link from "next/link"; 
import { motion } from "framer-motion";
export default function Navbar(){

    return(

        <div className = "flex flex-row px-20 py-5 justify-between items-center fixed w-full bg-black/20">
           <Link href="/"> <div id="logo" className="font-extrabold text-2xl"><h1>Detoye</h1></div></Link>
            <div id="links" className="flex col justify-between w-1/4">
                <Link className="focus:underline-offset-8 focus:decoration-white focus:descoration-5 underline decoration-black" href="/works">Works</Link>
                <Link className="focus:underline-offset-8 focus:decoration-white underline decoration-black" href="/services">Services</Link>
                <Link className="focus:underline-offset-8 focus:decoration-white underline decoration-black" href="/about">About</Link>
                <Link className="focus:underline-offset-8 focus:decoration-white underline decoration-black" href="/careers">Careers</Link>
            </div>
           <Link href="/start"> <div id="button" className="py-2 px-6 bg-white  outline rounded-sm outline-white text-black font-light" >Start a Project</div></Link>
        </div>
        )
}
