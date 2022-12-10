import React from 'react';
import{FiFacebook} from 'react-icons/fi';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import './SocialMedia.scss';


export const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <FiFacebook/>
        </div>
        <div>
            <FaInstagram/>
        </div>

        <div>
            <FaTwitterSquare/>
        </div>

    </div>
  )
}
export default SocialMedia
