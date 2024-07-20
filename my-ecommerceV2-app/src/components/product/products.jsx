import './products.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filter from './filter';

function ProductManipulation({ product }) {
  return (
    
        <div className='data-item flip-card'> 
            <div className="product">

            <div className="flip-card-front">
                <img src={product.photo} alt="image" />
                <h2>{product.name}</h2>
                    <p>${product.price}</p>
                    </div>

                    <div className="flip-card-back">
                    <p>{product.description}</p>
                </div>
                    <button className='cart-bttn'>Add to Cart</button>
            </div>
        </div>
        
        
        
        
  );
}

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');

useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then(res => {
        setProducts(res.data);
        setFilteredProducts(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);


  useEffect(() => {
    let filtered = [...products]; 

    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }

    if (priceRange) {
      filtered = filtered.filter(product => {
        const [min, max] = priceRange.split('-').map(Number);
        return product.price >= min && product.price <= max;
      });
    }

    setFilteredProducts(filtered);
  }, [category, priceRange, products]);

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const handlePriceRangeChange = (selectedPriceRange) => {
    setPriceRange(selectedPriceRange);
  };

  const uniqueCategories = [...new Set(products.map(product => product.category))];



  return (
    <>

      <div className="hero-container">
        <h1 className="hero-heading">Our Products</h1>
      </div>

      <Filter 
        categories={uniqueCategories} 
        onCategoryChange={handleCategoryChange} 
        onPriceRangeChange={handlePriceRangeChange} 
      />

      <div className="main-content">
        <div id="productsContainer">
        {filteredProducts.map((product, index) => (
            <ProductManipulation key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;