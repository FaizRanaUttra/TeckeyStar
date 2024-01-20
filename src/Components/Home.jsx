import React, { Fragment } from "react";
import "../Styles/home.scss";
import vg from "../assets/2.webp";
import {AiFillGooglePlusCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'

const Home = () => {
  return (
    <Fragment>
      <div className="home" id="home">
        <main>
          <h1>TeckyStar</h1>
          <p>Lorem ipsum dolor sit amet consectetur .</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphic" />
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam,
            amet id, esse itaque explicabo hic architecto ipsum facilis numquam
            officia, vitae officiis quia beatae? Eum praesentium ipsa odit
            commodi labore!
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who are you ?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            fugiat minus a tempora at, officiis nulla modi totam dolore incidunt
            quod veritatis esse eligendi mollitia vero nisi excepturi quaerat
            placeat ad voluptatum neque harum odio eveniet explicabo? A saepe
            officiis optio quod sit itaque dolore minus quam, expedita velit
            beatae perferendis consequuntur reprehenderit? Quo laboriosam
            laudantium excepturi reprehenderit veritatis alias ad nulla enim
            atque cupiditate dicta magni, deserunt magnam at officia dolorum
            impedit tenetur incidunt harum cum voluptas perferendis? Dolorum,
            alias tempora. Voluptatum, ab, suscipit accusamus excepturi
    
          </p>
        </div>
      </div>
<div className="home4" id="brands">
  <div>
    <h1>Brands</h1>

    <article>
      <div style={{
        animationDelay:"0.3s"
      }}>
<AiFillGooglePlusCircle />
<p>Google</p>
      </div>
      <div style={{
        animationDelay:"0.5s"
      }}>
<AiFillAmazonCircle/>
<p>Amazon</p>
      </div>
      <div style={{
        animationDelay:"0.7s"
      }}>
<AiFillInstagram/>
<p>Instagram</p>
      </div>
      <div style={{
        animationDelay:"1s"
      }}>
<AiFillYoutube/>
<p>Youtube</p>
      </div>
    </article>
  </div>
</div>

    </Fragment>
  );
};

export default Home;
