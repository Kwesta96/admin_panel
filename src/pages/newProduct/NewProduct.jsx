import React from 'react';
import './newProduct.scss'

export default function NewProduct() {
    return (
        <div className='newProduct'>
            <h1 className="newProductTitle">New Product</h1>
            <form className="newProductForm">
                <div className="newProductItem">
                    <label>Image</label>
                    <input type="file" id='file' />
                </div>
                <div className="newProductItem">
                    <label>Name</label>
                    <input type="text" placeholder='Apple Airpods' />
                </div>
                <div className="newProductItem">
                    <label>Stock</label>
                    <input type="text" placeholder='123' />
                </div>
                <div className="newProductItem">
                    <label>Active</label>
                    <select name="active" id="active" className="newProductSelect">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>                
                <button className="newProductButton" disabled>Add Product</button>
            </form>
        </div>
    )
}
