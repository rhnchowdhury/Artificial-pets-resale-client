import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-base-content">
            <div>
                <p className='text-white'>Copyright © 2023 - All right reserved<br />Providing reliable service since 2000</p>
            </div>
            <div>
                <span className="footer-title text-white">Services</span>
                <Link className="link link-hover text-white">Branding</Link>
                <Link className="link link-hover text-white">Design</Link>
                <Link className="link link-hover text-white">Buying</Link>
                <Link className="link link-hover text-white">Selling</Link>
            </div>
            <div>
                <span className="footer-title text-white">Company</span>
                <Link className="link link-hover text-white">About us</Link>
                <Link className="link link-hover text-white">Contact</Link>
                <Link className="link link-hover text-white">More Info.</Link>
                <Link className="link link-hover text-white">Press Kit</Link>
            </div>
            <div>
                <span className="footer-title text-white">Legal</span>
                <Link className="link link-hover text-white">Terms of use</Link>
                <Link className="link link-hover text-white">Privacy Policy</Link>
                <Link className="link link-hover text-white">Cookie Policy</Link>
            </div>
        </footer>
    );
};

export default Footer;