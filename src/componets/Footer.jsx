import React from 'react'

export default function Footer() {
  return (
    <div className='h-[264px] bg-neutral p-4 mt-5 mx-auto'>
      <footer className="footer bg-neutral text-neutral-content p-10 border-b-2 border-gray-300">
  <nav>
    <h6 className="footer-title">About Us</h6>
    <a className="link link-hover">We are a passionate team</a>
    <a className="link link-hover">dedicated to providing the best</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">services to our customers.</a>
  </nav>
  <nav>
    <h6 className="footer-title">Quick Links</h6>
    <a className="link link-hover">Home
    </a>
    <a className="link link-hover">Services
    </a>
    <a className="link link-hover">About
    </a>
    <a className="link link-hover">Contact</a>
  </nav>
  
  <form>
    <h6 className="footer-title">Subscribe</h6>
    <p>Subscribe to our newsletter for the latest updates.</p>
    <fieldset className="form-control w-80">
      
      <div className="join ">
        <input
          type="text"
          placeholder="Enter your email address"
          className="input input-bordered join-item" />
        <button className="btn bg-[#E09C83] join-item">Subscribe</button>
      </div>
      
    </fieldset>
  </form>
</footer>
<p className='text-neutral-content'>@2024 Your Company All Rights Reserved.</p>
    </div>
  )
}
