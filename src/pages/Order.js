import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Order.css';

function Order() {
  const [menuItems, setMenuItems] = useState([]);
  const [orderItems, setOrderItems] = useState({}); // Keeps track of items added to the order
  const [comments, setComments] = useState(''); // Store optional comments

  useEffect(() => {
    // Fetch menu items from the backend
    axios.get('http://localhost:5006/api/menu')
      .then((response) => setMenuItems(response.data))
      .catch((error) => console.error('Error fetching menu:', error));
  }, []);

  const handleAddItem = (id) => {
    setOrderItems((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1, // Increment quantity
    }));
  };

  const handleRemoveItem = (id) => {
    setOrderItems((prev) => {
      if (!prev[id] || prev[id] <= 1) {
        const { [id]: _, ...rest } = prev; // Remove item if quantity is 0 or less
        return rest;
      }
      return {
        ...prev,
        [id]: prev[id] - 1, // Decrement quantity
      };
    });
  };

  const handlePlaceOrder = () => {
    if (Object.keys(orderItems).length === 0) {
      alert('No items in the order!');
      return;
    }

    const selectedItems = menuItems
      .filter((item) => orderItems[item.id])
      .map((item) => ({
        name: item.name,
        price: item.price,
        quantity: orderItems[item.id],
      }));

    const tableNumber = prompt('Enter your table number:');
    if (!tableNumber) {
      alert('Table number is required to place an order!');
      return;
    }

    axios.post('http://localhost:5006/api/orders/place', { tableNumber, items: selectedItems, comments })
      .then((response) => {
        alert('Order placed successfully!');
        console.log(response.data.order);
        setOrderItems({}); // Clear the order after placing
        setComments(''); // Clear the comments
      })
      .catch((error) => {
        console.error('Error placing order:', error);
      });
  };

  return (
    <div className="order-section">
      <h1>Place Your Order</h1>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-card">
            <h2 className="menu-item-name">{item.name}</h2>
            <p className="menu-item-description">{item.description}</p>
            <p className="menu-item-price">{item.price}</p>
            <div className="quantity-controls">
              <button onClick={() => handleRemoveItem(item.id)}>-</button>
              <span>{orderItems[item.id] || 0}</span>
              <button onClick={() => handleAddItem(item.id)}>+</button>
            </div>
          </div>
        ))}
      </div>
      <textarea
        className="comment-box"
        placeholder="Optional: Add cooking instructions or comments here..."
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      ></textarea>
      <button className="place-order-button" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Order;
