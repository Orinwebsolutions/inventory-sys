import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Button from './Button';
import Productforms from './Productforms';

class Addproducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonactivate : ''
        };

        this.toggleHandleClick = this.toggleHandleClick.bind(this);
    }
    toggleHandleClick(evt) {
        console.log(evt);
        console.log('click button');
        this.setState({
            buttonactivate:evt
        },()=>{

            console.log(this.state.buttonactivate);
        })
    }

    // toggleHandleClick = (evt) => {
    //     console.log(evt);
    //     console.log('click button');
    //     this.setState({
    //         buttonactivate:evt
    //     })
    // }
    render() {
        let form
        if(this.state.buttonactivate){
            form = <Productforms formType={this.state.buttonactivate}/>
        }
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-sm-4">
                        <Button parentAction={this.toggleHandleClick} buttonAction={'Add'}/>
                        </div>
                    <div className="col-sm-4">
                        <Button parentAction={this.toggleHandleClick} buttonAction={'Update'}/>
                        </div>
                    <div className="col-sm-4">
                        <Button parentAction={this.toggleHandleClick} buttonAction={'Delete'}/>
                        </div>
                </div>
                {/* <Productforms/> */}
                {form}
            </React.Fragment>
        );
    }
}

export default Addproducts;

if (document.getElementById('addprods')) {
    ReactDOM.render(<Addproducts />, document.getElementById('addprods'));
}    

