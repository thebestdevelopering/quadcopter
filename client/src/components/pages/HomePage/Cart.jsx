import React from 'react';

function Cart() {
  const baskets = JSON.parse(localStorage.getItem('products'));
  console.log(baskets);

  return (
    <div>
      <div>
        {baskets.map((item) => {
          return (
            <div>
              <img src={item.pathImages} alt="" />
              <div>{item.name}</div>
              <div>{item.price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
