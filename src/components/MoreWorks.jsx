export default function MoreWorks(){

        const Portfolio = [
            {id: 1, image_url:'/works/1.png', title:'Web Design', tag:'LW Virtual Internships', sub:'Ed Tech'},
            {id: 2, image_url:'/works/2.png', title:'Dashboard', tag:'LW Virtual Internships', sub:'Ed Tech'},
            {id: 3, image_url:'/works/3.png', title:'Web Design', tag:'LW Virtual Internships', sub:'Ed Tech'},
            {id: 4, image_url:'/works/4.png', title:'Web Design', tag:'LW Virtual Internships', sub:'Ed Tech'},
            {id: 5, image_url:'/works/5.png', title:'Dashboard', tag:'LW Virtual Internships', sub:'Ed Tech'},
            {id: 6, image_url:'/works/6.png', title:'Web Design', tag:'LW Virtual Internships', sub:'Ed Tech'},
            {id: 7, image_url:'/works/7.png', title:'Web Design', tag:'LW Virtual Internships', sub:'Ed Tech'},
            {id: 8, image_url:'/works/8.png', title:'Dashboard', tag:'LW Virtual Internships', sub:'Ed Tech'},
            {id: 9, image_url:'/works/9.png', title:'Web Design', tag:'LW Virtual Internships', sub:'Ed Tech'},
            {id: 10, image_url:'/works/10.png', title:'Web Design', tag:'LW Virtual Internships', sub:'Ed Tech'},
            {id: 11, image_url:'/works/11.png', title:'Dashboard', tag:'LW Virtual Internships', sub:'Ed Tech'},
        ];
            
        return(
            <div className="pt-40 p-20 ">
                <h1 className="font-bold text-6xl">Works</h1>
                <div className="flex flex-row flex-wrap">
                { Portfolio.map(c=>{
                    return(
                        
                        <div key={c.id} className="flex flex-row mt-20 m-2">
                <div className="flex flex-col">
                <Image src={c.image_url} width={400} height={300}/>
                <div className="flex flex-col bg-portfolio_bg p-5">
                    <h3 className="text-gray-500">{c.title}</h3>
                   <div className="flex flex-row "> <span className="mr-5">{c.tag}</span> <span className="text-gray-500">{c.sub}</span></div>
                </div>
                </div>
            </div>
                        )
            })}
            </div>
    
          
    
            <Footer/>
            </div>
        );
        
    
}