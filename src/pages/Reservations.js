import React, { useState } from 'react';
import './Reservations.css';
import axios from 'axios';

function Reservations() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);

  const handleReservation = async () => {
    if (!name || !phone || !location || !date || !time || !guests) {
      alert('Please fill in all fields!');
      return;
    }

    const reservationData = { name, phone, location, date, time, guests };

    try {
      const response = await axios.post(
        'https://restaurant-backend-lptv.onrender.com/api/reservations/reserve',
        reservationData
      );
      alert('Reservation successful!');
      console.log('Reservation response:', response.data);
      setName('');
      setPhone('');
      setLocation('');
      setDate('');
      setTime('');
      setGuests(1);
    } catch (error) {
      console.error('Error making reservation:', error);
      alert('Failed to reserve a table. Please try again.');
    }
  };

  return (
    <div className="reservations-container">
      <div className="reservations-form">
        <h1 className="reservations-title">Reserve a Table</h1>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">Choose Location</option>
          <option value="Indiranagar">Indiranagar</option>
          <option value="Koramangala">Koramangala</option>
        </select>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        >
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1} Guest{num > 0 ? 's' : ''}
            </option>
          ))}
        </select>
        <button onClick={handleReservation}>Reserve</button>
      </div>
      <div className="reservations-image">
        <img
          src="/images/reservation.jpg" // ADD IMAGE TO YOUR public/images FOLDER
          alt="Reservation"
        />
      </div>
    </div>
  );
}

export default Reservations;
