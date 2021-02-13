import React from 'react';

const Button = (props) => {
    const {parentAction, buttonAction} = props;
    return (
        <button className="btn btn-primary" onClick={()=>parentAction(buttonAction)}>{buttonAction} products</button>
    );
}
 
export default Button;