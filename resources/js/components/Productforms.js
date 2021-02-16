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
            categories:[],
            category:'',
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleSelected = this.handleSelected.bind(this);
    }

    handleSelected(e){
        this.setState({
            category: e.target.value
        });
    }
    handleChangeValue(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    componentDidMount(){
        axios.get('http://localhost:8000/api/product/categories/')
        .then(res => 
            this.setState({
                categories: res.data.category
            })
        )
        .catch((error) => {
            console.log(error);
        });
    }

    onSubmit(e) {
        e.preventDefault()
         const products = {
             item_title: this.state.item_title,
             barcode: this.state.barcode,
             SKU: this.state.SKU,
             description: this.state.description,
             item_price: this.state.item_price,
             quantity: this.state.quantity,
             item_supplier: this.state.item_supplier,
             note: this.state.note,
             categories: this.state.category,
        };
        axios.post('http://localhost:8000/api/products/', products)
          .then(res => console.log(res.data));
        // console.log(`Expense successfully created!`);
        // console.log(`Name: ${this.state.name}`);
        // console.log(`Amount: ${this.state.amount}`);
        // console.log(`Description: ${this.state.description}`);
        // Swal.fire(
        //     'Good job!',
        //     'Expense Added Successfully',
        //     'success'
        // )
    }

    render() { 
        const {formType} = this.props;
        const {item_title, barcode,SKU,description,item_price,quantity,item_supplier,note,categories} = this.state;
        return ( 
            <div className="row justify-content-center something">
                <div className="col-md-8">
                    <div className="card">
                        <form name="formname"  onSubmit={this.onSubmit}>
                            {formType}                  
                            <div className="form-group">
                                <label>Product type</label>
                                <select name="item_type" className="custom-select" onChange={this.handleSelected} required>
                                    <option>Select</option>
                                {
                                    categories.map((cat)=>
                                        <option key={cat.id} value={cat.title}>{cat.title}</option>
                                    )
                                }
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Product Title</label>
                                <input type="text" 
                                className="form-control" 
                                value={item_title}
                                onChange={this.handleChangeValue} 
                                name="item_title" 
                                placeholder="Enter product name"/>
                            </div>
                            <div className="form-group">
                                <label>Product barcode</label>
                                <input type="text"
                                 className="form-control" 
                                 value={barcode} 
                                 name="barcode" 
                                 placeholder="Enter product barcode"
                                 onChange={this.handleChangeValue} />
                            </div>
                            <div className="form-group">
                                <label>Product SKU</label>
                                <input type="text" 
                                className="form-control" 
                                value={SKU} 
                                name="SKU" 
                                placeholder="Enter product SKU"
                                onChange={this.handleChangeValue} />
                            </div>
                            <div className="form-group">
                                <label>Product description</label>
                                <textarea  
                                className="form-control" 
                                name="description" 
                                value={description}
                                onChange={this.handleChangeValue} >                               
                                </textarea>
                            </div>
                            <div className="form-group">
                                <label>Product price</label>
                                <input type="text" 
                                className="form-control" 
                                value={item_price} 
                                name="item_price" 
                                placeholder="Enter product price"
                                onChange={this.handleChangeValue}
                                />
                            </div>
                            <div className="form-group">
                                <label>Product quantity</label>
                                <input type="text" 
                                className="form-control" 
                                value={quantity} 
                                name="quantity" 
                                placeholder="Enter product quantity"
                                onChange={this.handleChangeValue}
                                />
                            </div>
                            <div className="form-group">
                                <label>Product supplier</label>
                                <input type="text" 
                                className="form-control" 
                                value={item_supplier} 
                                name="item_supplier"  
                                placeholder="Enter product supplier"
                                onChange={this.handleChangeValue}
                                />
                            </div>
                            <div className="form-group">
                                <label>Product note</label>
                                <textarea  
                                className="form-control" 
                                name="note" value={note}
                                onChange={this.handleChangeValue} >
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