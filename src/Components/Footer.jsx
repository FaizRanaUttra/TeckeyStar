import React from "react";

import  '../Styles/Footer.scss'

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>TechyStar</h1>
        <p>@all right reserved</p>
      </div>

      <div>
        <h5>Follow Us</h5>
        <div>
          <a href="https://youtube.com" target={"blank"}>
            Youtube
          </a>
          <a href="https://instagram.com" target={"blank"}>
            Instagram
          </a>
          <a href="https://github.com/RanaFaiz786/This-is-MERN-stack-Ecommerce-Project-Made-me-" target={"blank"}>
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;