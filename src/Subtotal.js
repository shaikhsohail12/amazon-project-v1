import React from 'react';
import './Subtotal.css';

function Subtotal() {
    return (
        <div className="subtotal">
            <p>SubTotal (0 item):<strong>0</strong></p>
            <small className="subtotal--gift">
               <input type="checkbox" /> This order contain a gift
            </small>
            <button>Proceed to Buy</button>
        </div>
    )
}

export default Subtotal
