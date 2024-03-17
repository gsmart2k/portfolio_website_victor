'use client'

import Footer from "@/components/Footer";
import Image from "next/image";
import { useRouter } from "next/router";


export default function EachWork ({params}){

    const Eachwork = [
       { id:1, color:'bg-brown-900', imageUrl:'/eachwork/kwakol2.png', title:'Kwakol Markets MT4 Page',cost:'$150', Time:'2 weeks', DesignTeam: 'Just Me', Deliverables: '41 Screens, 12 Modals'},
       { id:2,color:'bg-amber-800', imageUrl:'/eachwork/adsynthetica1.png', title:'Adsynthetica',cost:'$300', Time:'1 week', DesignTeam: 'Just Me', Deliverables: '2 Screens, 2 Modals'},
       { id:3,color:'bg-brown-900', imageUrl:'/eachwork/adsynthetica2.png', title:'Adsynthetica',cost:'$800', Time:'3 weeks', DesignTeam: 'Just Me', Deliverables: '26 Screens, 14 Modals'},
       { id:4,color:'bg-brown-900', imageUrl:'/eachwork/givaa.png', title:'GIVAA',cost:'$800', Time:'3 weeks', DesignTeam: 'Just Me', Deliverables: '26 Screens, 14 Modals'},
       { id:5,color:'bg-yellow-950', imageUrl:'/eachwork/5.png', title:'LW Virtual Internship',cost:'$800', Time:'3 weeks', DesignTeam: 'Just Me', Deliverables: '26 Screens, 14 Modals'},
       { id:6,color:'bg-green-950', imageUrl:'/eachwork/6.png', title:'Kwakol Bonus Page',cost:'$800', Time:'3 weeks', DesignTeam: 'Just Me', Deliverables: '26 Screens, 14 Modals'},
       { id:7,color:'bg-green-950', imageUrl:'/eachwork/7.png', title:'Kwakol Bonus Page',cost:'$150', Time:'2 weeks', DesignTeam: 'Just Me', Deliverables: '26 Screens, 14 Modals'},
       { id:8,color:'bg-amber-950', imageUrl:'/eachwork/8.png', title:'Kwakol Bonus Page',cost:'$150', Time:'2 weeks', DesignTeam: 'Just Me', Deliverables: '26 Screens, 14 Modals'},
       { id:9,color:'bg-green-900', imageUrl:'/eachwork/9.png', title:'Loveworld Virtual Internship',cost:'$800', Time:'2 weeks', DesignTeam: 'Just Me', Deliverables: '26 Screens, 14 Modals'},
       { id:10,color:'bg-green-900', imageUrl:'/eachwork/10.png', title:'Loveworld Virtual Internship',cost:'$800', Time:'3 weeks', DesignTeam: 'Just Me', Deliverables: '26 Screens, 14 Modals'},
       { id:11,color:'bg-green-900', imageUrl:'/eachwork/11.png', title:'Loveworld Virtual Internship',cost:'$800', Time:'3 weeks', DesignTeam: 'Just Me', Deliverables: '26 Screens, 14 Modals'},
    ]


      const  work = Eachwork.find(function(c){
      return  c.id == params.works
      });

   

 
    return(
        
        <div className={` flex flex-col place-items-start pt-40 p-20 ${work.color}`} >
        
        <h3 className="mb-3 font-bold text-gray-300 text-sm">Project</h3>
        <h1 className="text-6xl font-bold mb-5">{work.title}</h1>
        <div className="flex flex-row  text-sm mb-10">
        <div className=" flex flex-col mr-5"><span className="text-gray-400 mb-3">Cost</span> <span className="font-bold">{work.cost}</span></div>
        <div className=" flex flex-col mr-5"><span className="text-gray-400 mb-3">Time</span> <span className="font-bold">{work.Time}</span></div>
        <div className=" flex flex-col mr-5"><span className="text-gray-400 mb-3">Design Team</span> <span className="font-bold">{work.DesignTeam}</span></div>
        <div className=" flex flex-col mr-5"><span className="text-gray-400 mb-3">Deliverables</span> <span className="font-bold">{work.Deliverables}</span></div>
        </div>
        <Image  className="mt-10" src={work.imageUrl} width={2000} height={500}/>
        <Footer/>
        </div>
        
    );
}
