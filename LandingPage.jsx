import React from 'react'
import {  Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
function LandingPage() {
  return (
    <div>
      <div className='relative'>
        <img className='opacity-30 w-full h-screen bg-cover' src="https://images.pexels.com/photos/1400375/pexels-photo-1400375.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="..." />
        
      

      <div className='absolute top-18 flex flex-col gap-8 '>
        <div className='text-green-500 flex gap-2 justify-center text-6xl'><Leaf className='h-12 w-12 mt-3'/><span className='text-green-900 font-bold font-xl'>GreenThumb</span></div>
        <div className='flex justify-center  mx-10 md:mx-22 lg:mx-102'>
          <p className='leading-relaxed text-gray-700 text-xl'>
            Welcome to GreenThumb, your premier destination for beautiful houseplants! 
              We specialize in bringing nature indoors with our carefully curated collection 
              of healthy, vibrant plants. Whether you're a seasoned plant parent or just 
              starting your green journey, we have the perfect plants to transform your 
              living space into a lush, natural sanctuary.
          </p>
        </div >

        
           <div className="h-13 mx-auto  transition-all duration-300   bg-green-400 hover:bg-green-900 hover:scale-105 shadow-lg rounded-full w-48 text-center font-bold text-white mt-4 flex justify-center items-center"  >
          <Link to={"/ProductListing"}>
           Get Started
          </Link>
          <ArrowRight className='inline-block ml-2'/>
           </div> 

      </div>

</div>





    </div>
  )
}

export default LandingPage
