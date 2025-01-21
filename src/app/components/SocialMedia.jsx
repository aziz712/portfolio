import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";


const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/mohamed-aziz-slama-94b965200/" target='_blank' rel="noreferrer">
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/aziz712" target='_blank' rel="noreferrer">
        <FaGithub />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/mohamedazizslamaa/" target='_blank' rel="noreferrer">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
