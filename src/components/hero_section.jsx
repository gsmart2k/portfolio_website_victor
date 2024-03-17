'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero (){

    const [offset, setOffset] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOffset((prevOffset) => prevOffset - 100); // Adjust the value as needed
    }, 5);

    return () => clearInterval(intervalId);
  }, []);
    return(
        <div>

        <div className="flex flex-col row px-20 pt-60">
      <h3 className="text-7xl mb-10 leading-normal font-bold">Hello there. I'm glad to have you here. I'm Victor, a Product Designer. </h3>
      <p className="mb-10 text-xl ">I'm a product designer with years of expertise providing end-to-end designs for digital products, currently based in Akure, Nigeria. With UI design, I create exceptional user experiences from concept to completion. I am obsessed with creating excellent products that make people's lives easier. I design unique user interfaces for small businesses, corporations, and startups</p>
      <Link className="w-fit" href="/start"> <div id="button" className="py-4 px-12 bg-btn_colors  outline rounded-sm w-fit outline-btn_colors text-xl font-light" >Start a Project</div></Link>

</div>


{/* THE PORTFOLIO DISPLAY */}
{/* <motion.div
 style={{overflowX:'hidden'}}
 animate={{ x:['-100%', '0%'] }}
 transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }}
> */}
        <div className="flex flex-row px-20 pt-20 overflow-hidden">
 <motion.div
        style={{ display: 'flex', x: offset }}
        animate={{ x: -100 * (20 - 1) }} // Adjust the value based on the number of children
        transition={{ duration: 10, ease: 'linear', repeat:'infinity'  }}
        
        >

<Image className="ml-0 m-4" src="/1.png"  width={400} height={400}/>
    <Image className="m-4"  src="/2.png"  width={400} height={400}/>
    <Image className="m-4" src="/3.png"  width={400} height={400}/>
    <Image className="m-4" src="/4.png"  width={400} height={400}/>
    <Image className="m-4 mr-0" src="/5.png"  width={400} height={400}/>
    </motion.div>
          </div>
</div>
    )
}