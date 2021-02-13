import React, { Component } from 'react';
import ReactDOM from "react-dom";

class Addproducts extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleClick(e) {
        console.log('click button');
    }
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-sm-4"><button className="btn btn-primary" onClick={this.handleClick}>Add Products</button></div>
                    <div className="col-sm-4"><button className="btn btn-primary">Update Products</button></div>
                    <div className="col-sm-4"><button className="btn btn-primary">Delete Products</button></div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <h2>Add your products</h2>
                            <form className="form-group">

                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Addproducts;

if (document.getElementById('addprods')) {
    ReactDOM.render(<Addproducts />, document.getElementById('addprods'));
}    

