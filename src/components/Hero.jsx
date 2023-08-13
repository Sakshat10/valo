import React from 'react'
import Hero1 from "../assets/Hero.jpg"
import img from "../assets/background.png";
import img2 from "../assets/Dominos.png";
import img3 from "../assets/thread.png";
import img4 from "../assets/time.png";

const Hero = () => {
  return (
    <div>
<div className='relative h-screen ' name='Home'>
  <img src={Hero1} alt="Hero-img" className='w-full object-cover h-screen' style={{ maxWidth: '100vw', maxHeight: '100vh' }} />
</div>

<div className='absolute bottom-16 z-20'>
  <div className='w-screen lg:h-24 md:h-24 sm:h-24 overflow-hidden custom-height'>
    <img src={img} alt="bg-img" className='custom-hidden' />
  </div>
  <div className='absolute  lg:bottom-5 lg:gap-40 lg:h-16 md:bottom-12 z-30 text-rose-50 flex lg:justify-center gap-40 sm:bottom-14 sm:h-8 md:justify-center md:gap-30 md:w-screen  sm:gap-14 w-full overflow-hidden'>
    <img src={img3} alt="logo" className='w-16 h-15 custom-logo'/>
    <img src={img2} alt="logo" className='w-16 h-15 lg:visible md:visible'/>
    <img src={img4} alt="logo" className='w-16 h-15'/>
    <img src={img3} alt="logo" className='w-16 h-15 md:visible lg:visible'/>
    <img src={img2} alt="logo" className='w-16 h-15'/>
    <img src={img4} alt="logo" className='w-16 h-15 lg:visible md:visible'/>
</div>
</div>


  </div> 

  )
}

export default Hero
