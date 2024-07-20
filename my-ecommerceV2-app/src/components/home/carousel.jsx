import React, { useEffect, useState } from 'react';
import './carousel.css'


function Carousel() {
  const [products, setProducts] = useState([{name:"", photo:"",price:"",description:""}]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/products") 
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setProducts(data.slice(0, 12)); 
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [products]);

  function DisplayedProducts(){
    const displayCount = 6; 
    let slides = [];
    for (let i = 0; i < displayCount; i++) {
      slides.push(products[(currentSlide + i) % products.length]);
    }
    return slides;
  };

  return (
    <div className="carousel">
      {DisplayedProducts().map((product, index) => (
        <div className="product" key={index}>
           <img src={product.photo} alt={product.name} className="product-images" />
           <h3>${product.price}</h3>
          <h3 id="best-name">{product.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Carousel;
