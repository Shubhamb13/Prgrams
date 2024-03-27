import React from 'react'
import Tic1 from './Images/cimg1.png'
import Tic2 from './Images/cimg2.png'
import Rec from './Images/Rectangle.png'
import Vec from './Images/Vector.png'
import Vec2 from './Images/Vector2.png'

const Lightcom = () => {
  return (
    <div className='Lightcom'>
          <div className='bg-lightcolor text-black custom:flex custom:justify-center flex-col'>
          <div className='bg-gradient-to-b from-gray-50 to-blue-50  flex flex-col  justify-center align-center ml-24 mr-24 '>
            
            <div className=''><br /><br />
                <div className=''>
                    <center className='font-poppins text-2xl md:text-5xl font-bold leading-9 md:leading-10 text-center '>Collection Spotlight</center><br />
                    <center className='font-inter text-base leading-6 text-center mx-8 custom:text-sm'>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable <br />experience. Grab yours today!</center>
                </div>
            </div>
            <button className='absolute ml-4  ms:absolute ms:flex  ms:justify-center'>
                <img src={Rec} alt="" />
                <img src={Vec} alt="" className='absolute mt-3  ml-3 inset-0 object-cover '/>
            </button>
            <button className='absolute right-24 mr-4 '>
                <img src={Rec} alt="" />
                <img src={Vec2} alt="" className='absolute mt-3 ml-3 inset-0 object-cover '/>
            </button>
            
            <div className='flex flex-wrap justify-center m-3 justify-around '> 
            <div className='max-w-xs mx-2 my-2   shadow-lg overflow-hidden bg-lightcolor2 relative'>
            <div className=" ">
              <img className='' src={Tic1} alt='' />
            </div>
             <hr className="border-t-2 border-gray-500 border-dashed opacity-50 mr-6 ml-6 relative"/>
             <div className="absolute top-30 bg-blue-100 opacity-60 left-0 w-6 h-6  rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute top-30 bg-blue-100 opacity-60 right-0 w-6 h-6  rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
             <div className=''>
                <center className=' text-xl font-poppins text-base font-medium leading-7 mt-5 '>Las Vegas Aviators</center>
                  <div className='mt-2 mb-3 '>
                    <center className='font-poppins text-base font-normal leading-6 text-center'>OCT 15 | SUN | 4:30 PM </center> 
                    <center className='font-inter text-sm font-normal  text-center mt-2'>Las Vegas Ballpark, Las Vegas,<br /> Nevada </center>
                  </div>
                  <center><button className='bg-black text-white px-4 py-2 mb-2 mt-2  '>Take Flight Collection</button></center>
             </div>
            </div>


          <div className='max-w-xs mx-2 my-2   shadow-lg overflow-hidden bg-lightcolor2 relative'>
            <div className=" ">
              <img className='' src={Tic2} alt='' />
            </div>
             <hr className="border-t-2 border-gray-500 border-dashed opacity-50 mr-6 ml-6 relative"/>
             <div className="absolute bg-blue-100 opacity-60 left-0 w-6 h-6 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute top-30 bg-blue-100 opacity-60 right-0 w-6 h-6 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
             <div className=''>
                <center className=' text-xl font-poppins text-base font-medium leading-7 mt-5 '>Sacramento River Cats</center>
                  <div className='mt-2 mb-3 '>
                    <center className='font-poppins text-base font-normal leading-6 text-center'>OCT 15 | SUN | 4:30 PM </center> 
                    <center className='font-inter  text-sm text-base font-normal text-center mt-2'>Sutter Health Park,Sacramento, <br /> California </center>
                  </div>
                  <center><button className='bg-black text-white px-4 py-2 mb-2 mt-2'>Take Flight Collection</button></center>
             </div>
          </div>


           <div className='max-w-xs mx-1 my-2 shadow-lg overflow-hidden bg-lightcolor2 relative md:my-2 md:mx-2'>
            <div className=" ">
              <img className='' src={Tic1} alt='' />
            </div>
             <hr className="border-t-2 border-gray-500 border-dashed opacity-50 mr-6 ml-6 relative"/>
             <div className="absolute top-30 bg-blue-100 opacity-60 left-0 w-6 h-6 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute top-30 bg-blue-100 opacity-60 right-0 w-6 h-6 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                <div className=''>
                   <center className=' text-xl font-poppins text-base font-medium leading-7 mt-5 '>Las Vegas Aviators</center>
                   <div className='mt-2 mb-3 '>
                    <center className='font-poppins text-base font-normal leading-6 text-center'>OCT 15 | SUN | 4:30 PM </center> 
                    <center className='font-inter text-sm font-normal text-center mt-2'>Las Vegas Ballpark, Las Vegas,<br /> Nevada </center>
                   </div>
                <center><button className='bg-black text-white px-4 py-2 mb-2 mt-2 md:px-4 md:py-2 mb-1'>Take Flight Collection</button></center>
                </div>
           </div>
           
            </div>  
            
           <br />
          </div> 
         <br /><br /><br />
      </div> 

    </div>
  )
}

export default Lightcom