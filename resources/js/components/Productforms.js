import React, { Component } from 'react';
import ReactDOM from "react-dom";
import axios from 'axios'

class Productforms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item_title:'',
            barcode:'',
            SKU:'',
            description:'',
            item_price:'',
            quantity:'',
            item_supplier:'',
            note:'',

        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        // e.preventDefault()
        //  const products = {
        //      item_title: this.state.item_title,
        //      barcode: this.state.barcode,
        //      SKU: this.state.SKU
        // };
        // axios.post('http://localhost:8000/api/products/', products)
        //   .then(res => console.log(res.data));
        // // console.log(`Expense successfully created!`);
        // // console.log(`Name: ${this.state.name}`);
        // // console.log(`Amount: ${this.state.amount}`);
        // // console.log(`Description: ${this.state.description}`);
        // Swal.fire(
        //     'Good job!',
        //     'Expense Added Successfully',
        //     'success'
        // )
    }

    render() { 
        const {formType} = this.props;
        return ( 
            <div className="row justify-content-center something">
                <div className="col-md-8">
                    <div className="card">
                        <form name="formname"  onSubmit={this.onSubmit}>
                            {formType}                  
                            <div className="form-group">
                                <label>Product type</label>
                                <select name="item_type">
                                    <option value="test01">Test01</option>
                                    <option value="test02">Test02</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Product Title</label>
                                <input type="text" 
                                className="form-control" 
                                value={this.state.item_title}
                                onChange={this.titleChange} 
                                name="item_title" 
                                placeholder="Enter product name"/>
                            </div>
                            <div className="form-group">
                                <label>Product barcode</label>
                                <input type="text"
                                 className="form-control" 
                                 value={this.state.barcode} 
                                 name="barcode" 
                                 placeholder="Enter product barcode"
                                 onChange={this.titleChange} />
                            </div>
                            <div className="form-group">
                                <label>Product SKU</label>
                                <input type="text" 
                                className="form-control" 
                                value={this.state.SKU} 
                                name="SKU" 
                                placeholder="Enter product SKU"
                                onChange={this.titleChange} />
                            </div>
                            <div className="form-group">
                                <label>Product description</label>
                                <textarea  
                                className="form-control" 
                                name="description" 
                                value={this.state.description} >                               
                                </textarea>
                            </div>
                            <div className="form-group">
                                <label>Product price</label>
                                <input type="text" 
                                className="form-control" 
                                value={this.state.item_price} 
                                name="item_price" 
                                placeholder="Enter product price"/>
                            </div>
                            <div className="form-group">
                                <label>Product quantity</label>
                                <input type="text" 
                                className="form-control" 
                                value={this.state.quantity} 
                                name="quantity" 
                                placeholder="Enter product quantity"/>
                            </div>
                            <div className="form-group">
                                <label>Product supplier</label>
                                <input type="text" 
                                className="form-control" 
                                value={this.state.item_supplier} 
                                name="item_supplier"  
                                placeholder="Enter product supplier"/>
                            </div>
                            <div className="form-group">
                                <label>Product note</label>
                                <textarea  
                                className="form-control" 
                                name="note" value={this.state.note} >
                                </textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Productforms;