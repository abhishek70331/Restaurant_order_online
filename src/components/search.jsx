import React from 'react';

const SearchBar = () => {
  return (
    <div className="container mt-5 text-center">
      <div className="input-group mb-3">
        <input type="text" className="form-control rounded me-2" placeholder="What are you craving for..." aria-label="Search" aria-describedby="basic-addon2" />
        <div className="input-group-append me-2">
          <button className="btn btn-success" type="button">Search</button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;