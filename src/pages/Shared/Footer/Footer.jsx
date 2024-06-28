import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer p-10 bg-neutral text-neutral-content">
        <div className='mt-2'>
          <p className='text-xl font-bold'>Chines Food Restaurant</p>
          <p className=''>Providing reliable tech since 1992</p>
           <p>Address: Mirpur-2 Dhaka Bangladesh</p>
           <p>Contact : +880123555635</p>
        </div>
        <div>
        <span className="footer-title">Opening hours</span>
        <p>Tue ‒ Thu: 09am ‒ 07pm</p>
        <p>Fri ‒ Sat: 09am ‒ 05pm</p>
        <p>Sun: 08am ‒ 06pm</p>
        <p>Mon: closed</p>
        </div>
        <div>
          <span className="footer-title">Follow Us</span>
          <div className="grid grid-flow-col gap-4">
           <Link><BsFacebook></BsFacebook></Link>
           <Link><BsLinkedin></BsLinkedin></Link>
           <Link><BsInstagram></BsInstagram></Link>
          </div>
        </div>
      </div>
      <div className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved by Chines Food Restaurant</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;