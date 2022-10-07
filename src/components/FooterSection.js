import React from 'react'
import '../Styling/FooterSection.css'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";

export default function FooterSection() {
    return (
        <div className=' footer_container'>
            <div className=''>
                <div className='footer_wrapper'>
                    <div className='social_media_wrapper'>
                        <div className='social_media'>
                            <span><FaInstagram /></span>
                            <span><FaFacebookSquare /></span>
                            <span><FaTwitter /></span>
                            <span><FaYoutube /></span>

                        </div>
                    </div>
                    <div className='terms_wrapper'>
                        <span><Link className='link_terms'>Condition of Use</Link></span>
                        <span><Link className='link_terms'>Privacy & Policy</Link></span>
                        <span><Link className='link_terms'>Press Room</Link></span>
                    </div>
                    <div><p>© 2022 Copyright Wiridho Partuaon Tambunan</p></div>
                </div>
            </div>
        </div >
    )
}
