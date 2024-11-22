import React, { useState } from 'react';
import './Feedback.css';
import axios from 'axios';

function Feedback() {
  const [rating, setRating] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comments, setComments] = useState('');

  const handleFeedbackSubmit = async () => {
    if (!rating || !name || !phone || !comments) {
      alert('Please fill in all fields!');
      return;
    }

    const feedbackData = { rating, name, phone, comments };

    const backendUrl = process.env.https://restaurant-backend-lptv.onrender.com;
      alert('Feedback submitted successfully!');
      setRating('');
      setName('');
      setPhone('');
      setComments('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback. Please try again.');
    }
  };

  return (
    <div className="feedback-container">
      <div className="feedback-form">
        <h1 className="feedback-title">Leave Your Feedback</h1>
        <div className="rating-buttons">
          <button
            className={`rating-btn ${rating === 'Excellent' ? 'selected' : ''}`}
            onClick={() => setRating('Excellent')}
          >
            Excellent
          </button>
          <button
            className={`rating-btn ${rating === 'Good' ? 'selected' : ''}`}
            onClick={() => setRating('Good')}
          >
            Good
          </button>
          <button
            className={`rating-btn ${rating === 'Average' ? 'selected' : ''}`}
            onClick={() => setRating('Average')}
          >
            Average
          </button>
          <button
            className={`rating-btn ${rating === 'Poor' ? 'selected' : ''}`}
            onClick={() => setRating('Poor')}
          >
            Poor
          </button>
        </div>

        {/* Display Selected Rating Below */}
        {rating && (
          <div className="selected-rating">
            You selected: <strong>{rating}</strong>
          </div>
        )}

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
        <textarea
          placeholder="Your Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
        <button className="submit-btn" onClick={handleFeedbackSubmit}>
          Submit Feedback
        </button>
      </div>
    </div>
  );
}

export default Feedback;
