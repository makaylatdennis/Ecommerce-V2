import React from 'react';
import './home.css';
import Carousel from './carousel';


function Home(){
    return (
        <>
<div className="video-container">
<video autoPlay muted loop className="hero-video">
<source src='/curlsvideo.mp4' type="video/mp4" />
    </video>
    <div className="hero-text">
                    <h1>Curl Essentials Co.</h1>
                    <p>Products for every texture of Beautiful</p>
                </div>
</div>


 <div className="parent-about">
   <div className="child-about">
    <h2 className="about-paragraph"> Empower your beauty through Curl Essentials Co. A beauty supply with authentic products, for authentic you.</h2>
</div>
 </div>


<h2 id='explore'>Explore Our Categories</h2> 
 
 <div className="categories">

        <div id='category1'>
       <h2>Hair Care</h2>
        <img src="/public/prod.png" alt="Hair products" />
        </div>

        <div id='category2'>
            <h2>Styling Tools</h2>
        <img src="/public/products.png" alt="Hair Tools" />
        </div>

        <div id='category3'>
            <h2>Skin Care</h2>
        <img src="/public/bodycare.png" alt="SkinCare" />
        </div>


 </div>

 <div className="best-sellers">
  <h2 id="best-header">Best Sellers</h2>
  <Carousel/>
 </div>
</>
    )
}

export default Home