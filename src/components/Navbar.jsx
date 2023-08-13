import valo from "../../public/images/valo.png";
import hacker from "../../public/images/hacker1.png";
import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {

  const links = [
    { id: 1, link: 'Home' },
    { id: 2, link: 'About' },
    { id: 3, link: 'Schedule' },
    { id: 4, link: 'Register' },
  ];

  return (
    <div className={`w-full backdrop-blur-sm  flex justify-between h-20 pr-16 items-center z-50 ml-6 overflow-y-hidden fixed`}>
      <div className='flex justify-between items-center custom-flex'>
        <div><img className='w-30 h-20' src={hacker} alt="hacker-logo" /></div>
        <div><img className='w-40 h-40' src={valo} alt="valo-logo" /></div>
      </div>
      <div>
        <ul className={`text-rose-300 sm:flex sm:gap-6 md:flex md:gap-10 lg:flex lg:gap-20 custom-hidden`}>
          {links.map(({ id, link }) => (
            <li key={id} className='hover:text-rose-700 hover:underline cursor-pointer'>
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
