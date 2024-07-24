import React from 'react';
import './filter.css'

function Filter({ onCategoryChange, onPriceRangeChange, categories }) {
  const handleCategoryChange = (event) => {
    onCategoryChange(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    onPriceRangeChange(event.target.value);
  };

  return (
    <div className="filter-component">
      <div className="drop-down">
        <select className="dropbth" onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="drop-down">
        <select className="dropbth" onChange={handlePriceRangeChange}>
          <option value="">All Prices</option>
          <option value="0-10">0 - 10</option>
          <option value="10-20">10 - 20</option>
          <option value="20-50">20 - 50</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
