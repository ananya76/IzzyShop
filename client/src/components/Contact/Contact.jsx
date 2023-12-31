import React from 'react'
import "./Contact.scss"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GoogleIcon from '@mui/icons-material/Google';

const Contact = () => {
  return (
    <div className="contact">
        <div className="wrapper">
            <span>BE IN TOUCH WITH US:</span>
            <div className='mail'>
                <input type='text' placeholder='Enter your email'></input>
                <button>JOIN US</button>
            </div>
            <div className="icons">
                <InstagramIcon></InstagramIcon>
                <FacebookIcon></FacebookIcon>
                <TwitterIcon></TwitterIcon>
                <PinterestIcon></PinterestIcon>
                <GoogleIcon></GoogleIcon>

            </div>
        </div>
    </div>
  )
}

export default Contact