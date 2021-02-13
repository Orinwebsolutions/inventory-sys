import React from 'react';

const Productforms = (props) => {
    return ( 
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <h2>{props.formType} your products</h2>
                        <form name="formname">                        
                            {props.formType}
                            <div className="form-group">
                                <label for="item_type">Product type</label>
                                <select name="item_type">
                                    <option value="test01">Test01</option>
                                    <option value="test02">Test02</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="item_title">Product Title</label>
                                <input type="text" className="form-control" name="item_title" id="item_title" placeholder="Enter product name"/>
                            </div>
                            <div className="form-group">
                                <label for="item_barcode">Product barcode</label>
                                <input type="text" className="form-control" name="barcode" id="item_barcose" placeholder="Enter product barcode"/>
                            </div>
                            <div className="form-group">
                                <label for="item_sku">Product SKU</label>
                                <input type="text" className="form-control" name="SKU" id="item_sku" placeholder="Enter product SKU"/>
                            </div>
                            <div className="form-group">
                                <label for="item_description">Product description</label>
                                <input type="text" className="form-control" name="description" id="item_description" placeholder="Enter product name"/>
                            </div>
                            <div className="form-group">
                                <label for="item_price">Product price</label>
                                <input type="text" className="form-control" name="item_price" id="item_price" placeholder="Enter product name"/>
                            </div>
                            <div className="form-group">
                                <label for="item_quantity">Product quantity</label>
                                <input type="text" className="form-control" name="quantity" id="item_quantity" placeholder="Enter product name"/>
                            </div>
                            <div className="form-group">
                                <label for="item_supplier">Product supplier</label>
                                <input type="text" className="form-control" name="item_supplier" id="item_title" placeholder="Enter product name"/>
                            </div>
                            <div className="form-group">
                                <label for="item_note">Product note</label>
                                <input type="text" className="form-control" name="note" id="item_note" placeholder="Enter product name"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
     );
}
 
export default Productforms;