import React from 'react';
import facebook from '../../../assets/images/social/fb.png'
import instagram from '../../../assets/images/social/In.png'
import twitter from '../../../assets/images/social/tw.png'
import youtube from '../../../assets/images/social/yt.png'
import mail from '../../../assets/images/icons/mail.png'
import mobile from '../../../assets/images/icons/mobile.png'
import hotline from '../../../assets/images/icons/hotline.png'
import paymentLogo1 from '../../../assets/images/payment logo/bkash.png'
import paymentLogo2 from '../../../assets/images/payment logo/master-card.png'
import paymentLogo3 from '../../../assets/images/payment logo/nagad.png'
import paymentLogo4 from '../../../assets/images/payment logo/paypal.png'
import paymentLogo5 from '../../../assets/images/payment logo/rocket.png'
import paymentLogo6 from '../../../assets/images/payment logo/visa.png'
const Footer = () => {
    return (
        <footer className="footer grid-rows-2 p-10 bg-neutral text-neutral-content">
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Payment</span>
                <div className='flex space-x-2'>
                    <img src={paymentLogo1} className="w-10 h-10 lg:w-16 lg:h-14 bg-white shadow-2xl rounded-md" alt="" srcset="" />
                    <img src={paymentLogo2} className="w-10 h-10 lg:w-16 lg:h-14 bg-white shadow-2xl rounded-md" alt="" srcset="" />
                    <img src={paymentLogo3} className="w-10 h-10 lg:w-16 lg:h-14 bg-white shadow-2xl rounded-md" alt="" srcset="" />
                    <img src={paymentLogo4} className="w-10 h-10 lg:w-16 lg:h-14 bg-white shadow-2xl rounded-md" alt="" srcset="" />
                    <img src={paymentLogo5} className="w-10 h-10 lg:w-16 lg:h-14 bg-white shadow-2xl rounded-md" alt="" srcset="" />
                    <img src={paymentLogo6} className="w-10 h-10 lg:w-16 lg:h-14 bg-white shadow-2xl rounded-md" alt="" srcset="" />
                </div>

            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            <div>
                <span className="footer-title">Social</span>
                <div className='flex'>
                    <a className="link link-hover" href='#' target="_blank"><img src={twitter} alt="" srcset="" /></a>
                    <a className="link link-hover" href='#' target="_blank"><img src={instagram} alt="" srcset="" /></a>
                    <a className="link link-hover" href='#' target="_blank"><img src={facebook} alt="" srcset="" /></a>
                    <a className="link link-hover" href='#' target="_blank"><img src={youtube} alt="" srcset="" /></a>
                </div>
            </div>
            <div>
                <span className="footer-title">Contact</span>
                <span className='flex items-center'><img className='w-8 h-8 mr-2' src={mobile} alt="" srcset="" />018239995</span>
                <span className='flex items-center'><img className='w-8 h-8 mr-2' src={hotline} alt="" srcset="" />777739995</span>
                <span className='flex items-center'><img className='w-8 h-8 mr-2' src={mail} alt="" srcset="" />bdtravale123@gmail.com</span>
            </div>
            <div>
                <span className="footer-title">Newsletter</span>
                <div className="form-control w-72 lg:w-80">
                    <label className="label">
                        <span className="label-text text-white">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="email" name='email' placeholder="username@site.com" className="input input-bordered w-full pr-16 text-black" />
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;