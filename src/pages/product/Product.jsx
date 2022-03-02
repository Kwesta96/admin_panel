import React from 'react';
import { Link } from 'react-router-dom';
import './product.scss';
import Chart from '../../components/chart/Chart';
import { productData } from '../../dummyData';
import { Publish } from '@mui/icons-material';

export default function Product() {
    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newProduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey='Sales' title='Sales Performance' />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://images.unsplash.com/photo-1600375104627-c94c416deefa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="productInfoImg" />
                        <span className="productInfoName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">3123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productform">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder='Apple Airpod' />
                        <label>In stock</label>
                        <select name="inStock" id="stock">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://images.unsplash.com/photo-1600375104627-c94c416deefa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish className='productUploadIcon' />
                                <input type="file" id='file' style={{ display: 'none' }} />
                            </label>
                        </div>
                        <button className='productUpdateButton' disabled>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
