import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  return (
    <div style={{display: "flex", width: "40px", justifyContent: "space-between", alignItems: "center"}}>
      <FontAwesomeIcon icon={faCartPlus} />
      <span>5</span>
    </div>
  );
};

export default CartWidget;