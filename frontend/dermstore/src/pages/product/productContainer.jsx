import React from 'react'
import "../../css/products.css";

export default function productContainer({ product }) {
    return (
        <div className='productContainer'>
            <img src={product.image} alt="" />
            <div>
                <p className='product'>{product.name && product.name.substr(0, 30)}</p>
                <p>Additional 10% off sale products with code EXTRA10</p>
                <p className='mrp'>MRP:{(product.price * (1 + Math.random())).toFixed(2)}</p>
                <div>
                    <p className='productPrice'>${product.price}</p>
                    <p>rating {product.rating}</p>
                </div>
                <button>QUICK BUY</button>
            </div>
        </div>
    )
}
