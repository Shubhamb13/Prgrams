
import img1 from './Images/img1.png'
import img2 from './Images/img2.png'
import img3 from './Images/img3.png'
import img5 from './Images/img5.png'

const Lighthome = () => {
  return (
    <div className='Lighthome'>
            
     <div className='bg-lightcolor text-black  p-8'>
        <span className=' ml-16 font-poppins text-2xl font-bold leading-9 text-left border-b-2 border-solid border-blue-500 mb-2 relative'>Sports</span><br /><br />
        <div className='flex flex-wrap justify-center'>

          <div className='max-w-xs mx-2 my-2   shadow-lg overflow-hidden bg-lightcolor2'>
            <div className=" p-1 pt-4 pl-4 pr-4">
              <img className='w-full h-96  aspect-w-1 aspect-h-1 object-cover' src={img1} alt='' />
            </div>
            <div className='p-3'>
              <p className='text-xl  font-inter text-base font-semibold leading-5 text-left'>Sacramento River Cats</p>
              <div className='bg-lightcolor p-1 m-1 mt-4'>
                <span className='text-sm'>Total Events </span> <span className='text-sm ml-9'>Sports</span><br />
                <span className='text-sm text-lg'>48 Events </span> <span className='text-sm ml-12 text-lg'>Baseball</span>
              </div>
            </div>
          </div>

          <div className='max-w-xs mx-2 my-2   shadow-lg overflow-hidden bg-lightcolor2'>
            <div className=" p-1 pt-4 pl-4 pr-4">
              <img className='w-full aspect-w-1 aspect-h-1 object-cover' src={img2} alt='' />
            </div>
            <div className='p-3'>
              <p className='text-xl font-inter text-base font-semibold leading-5 text-left'>Las Vegas Aviators</p>
              <div className='bg-lightcolor p-1 m-1 mt-4'>
                <span className='text-sm'>Total Events </span> <span className='text-sm ml-9'>Sports</span><br />
                <span className='text-sm text-lg'>28 Events </span> <span className='text-sm ml-12 text-lg'>Baseball</span>
              </div>
            </div>
          </div>

          <div className='max-w-xs mx-2 my-2  shadow-lg overflow-hidden bg-lightcolor2'>
            <div className="p-1 pt-4 pl-4 pr-4">
              <img className='w-full aspect-w-1 aspect-h-1 object-cover' src={img3} alt='' />
            </div>
            <div className='p-3'>
              <p className='text-xl font-inter text-base font-semibold leading-5 text-left '>New Jersey Devils</p>
              <div className='bg-lightcolor p-1 m-1 mt-4'>
                <span className='text-sm'>Total Events </span> <span className='text-sm ml-9'>Sports</span><br />
                <span className='text-sm text-lg'>15 Events </span> <span className='text-sm ml-12 text-lg'>Ice Hockey</span>
              </div>
            </div>
          </div>

          <div className='max-w-xs mx-2 my-2 shadow-lg overflow-hidden bg-lightcolor2'>
            <div className=" p-1 pt-4 pl-4 pr-4">
              <img className='w-full aspect-w-1 aspect-h-1 object-cover' src={img2} alt='' />
            </div>
            <div className='p-3'>
              <p className='text-xl font-inter text-base font-semibold leading-5 text-left'>Las Vegas Aviators</p>
              <div className='bg-lightcolor p-1 m-1 mt-4'>
                <span className='text-sm '>Total Events </span> <span className='text-sm ml-9'>Sports</span><br />
                <span className='text-sm text-lg'>28 Events </span> <span className='text-sm ml-12 text-lg'>Baseball</span>
              </div>
            </div>
          </div>

          <div className='max-w-xs mx-2 my-2 shadow-lg overflow-hidden bg-lightcolor2 relative'>
            <div className="p-1 pt-4 pl-4 pr-4">
             <img className='w-full aspect-w-1 aspect-h-1 object-cover' src={img5} alt='' />
            <div className="p-1  m-4 pt-1 pl-4 pr-4 absolute top-0 right-0 bg-black text-white px-2 py-1">Ad</div>
          </div>
         <div className='p-5 mt-2'>
           <p className='text-xl font-inter text-base font-semibold leading-5 '>Advertisement Title</p>
           <div className='  mt-3 mt-1 w-48 h-44 flex  '>
             <span className='font-inter text-xs font-normal leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
           </div>
         </div>
   </div>

        </div> <br/>
         <div className='flex items-center justify-center '>
         <button className=' bg-blue-500 text-slate-900 px-4 py-2 rounded mt-4'>See More</button>
         </div>
     </div>
    </div>
  )
}

export default Lighthome