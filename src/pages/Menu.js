import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Menu.css';

function Menu({ isAdmin }) {
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', description: '', price: '' });

  useEffect(() => {
    // Fetch menu items from the backend
    axios.get('https://restaurant-backend-lptv.onrender.com/api/menu')
      .then((response) => setMenuItems(response.data))
      .catch((error) => console.error('Error fetching menu:', error));
  }, []);

  const handleAddItem = () => {
    if (!newItem.name || !newItem.description || !newItem.price) {
      alert('Please fill all fields');
      return;
    }
    axios.post('https://restaurant-backend-lptv.onrender.com/api/menu/add', newItem)
      .then((response) => setMenuItems(response.data.menuItems))
      .catch((error) => console.error('Error adding item:', error));
    setNewItem({ name: '', description: '', price: '' });
  };

  const handleRemoveItem = (id) => {
    axios.post('https://restaurant-backend-lptv.onrender.com/api/menu/remove', { id })
      .then((response) => setMenuItems(response.data.menuItems))
      .catch((error) => console.error('Error removing item:', error));
  };

  return (
    <div className="menu-section">
      <h1 className="menu-title">Our Italian Menu</h1>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-card">
            <h2 className="menu-item-name">{item.name}</h2>
            <p className="menu-item-description">{item.description}</p>
            <p className="menu-item-price">{item.price}</p>
            {/* Show Remove Button only for Admins */}
            {isAdmin && (
              <button className="btn-remove" onClick={() => handleRemoveItem(item.id)}>
                Remove Item
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Show Add Item Form only for Admins */}
      {isAdmin && (
        <div className="add-item-form">
          <h2>Add New Item</h2>
          <input
            type="text"
            placeholder="Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            value={newItem.description}
            onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
          />
          <input
            type="text"
            placeholder="Price"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          />
          <button onClick={handleAddItem}>Add Item</button>
        </div>
      )}
    </div>
  );
}

export default Menu;
