import React, { useState, useEffect} from 'react';
import axios from "axios";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getProduts();
    },[]);

    const getProduts = async() => {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
    }


  return (
    <div className="container mt-5">
        <div className="columns is-multiline">
            {products.map((product)=>(
                <div className="column is-one-quarter">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">John Smith</p>
                        <p className="subtitle is-6">@johnsmith</p>
                      </div>
                    </div>
                  </div>
                  <footer className='card-footer'>
                    <a className='card-footer-item'>Edit</a>
                    <a className='card-footer-item'>Delete</a>
                  </footer>
                </div>
            </div>
            ))};
        </div>
    </div>
  )
}

export default ProductList;