import React from 'react';
import CardComponent from "../component/Cards";
import CarouselComponent from "../component/Carousel";

const slides = [
  "https://hg1printing.com/wp-content/uploads/2018/09/blog-1080x400.jpg",
  "https://squareholes.com/wp-content/uploads/2021/04/AdobeStock_314829742-1.jpeg",
  "https://th.bing.com/th/id/OIP.Z2E8kvy-ilFQJfERsDpVEAHaDt?rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP.Dvjlv4vLQLxUJC82gE60TgHaDv?rs=1&pid=ImgDetMain"
]

const Home = () => {
  return(
    
    <div className='pb-5'>

      {/* Carousel */}
      <div className='max-w-[350rem] mx-20 my-10 rounded-xl overflow-hidden'>
        
        <CarouselComponent autoSlide={true}>
          {

            slides.map((s) => (
              <img src={s} />
            ))

          }
        </CarouselComponent>
      
      </div>

      {/* Top Reads */}   
      <div className='mx-20 my-10'> 
        
        <h3>Top Reads</h3>  
        
        <div className='grid grid-cols-4 gap-4 mt-7'>
          {
           
            Array(4).fill().map((_, i) => (
              <CardComponent key={i} />
            ))
            
          }
        </div>
 
      </div>

      {/* Top Categories */}      
      <div className='mx-20 my-10'> 
        
        <h3>Top Categories</h3>  
        
        <div className='grid grid-cols-4 gap-4 mt-7'>
          {
            
            Array(4).fill().map((_, i) => (
              <CardComponent key={i} />
            ))
            
          }
        </div>

        <div className='my-10 flex flex-col items-center '>
          <button type="button" className="px-8 py-3 rounded-xl bg-white hover:card-shadow duration-300">View More</button>
        </div>
      
      </div>

    </div>
  )}

export default Home;