import React, { useEffect, useState } from 'react';

const Modal = ({ id, onClose }) => {
  const [data, setData] = useState(null);
  const [editData, setEditData] = useState({}); // Track edited data

  // Fetch data from the API when the modal is opened
  useEffect(() => {
    fetch(`http://localhost:5000/leads_phases/${id}`)
      .then(response => response.json())
      .then(result => {
        setData(result);
        setEditData(result); // Set initial form data for editing
      })
      .catch(error => console.log('Error fetching data:', error));
  }, [id]);

  // Handle input change for editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  // Handle updating the record
  const handleUpdate = () => {
    fetch(`${process.env.REACT_APP_API_URL}/leads_phases/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editData),
    })
      .then(response => response.json())
      .then(() => {
        alert('Record updated successfully');
        onClose(); // Close the modal
      })
      .catch(error => console.log('Error updating record:', error));
  };

  // Handle deleting the record
  const handleDelete = () => {
    fetch(`${process.env.REACT_APP_API_URL}/leads_phases/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        alert('Record deleted successfully');
        onClose(); // Close the modal
      })
      .catch(error => console.log('Error deleting record:', error));
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Stock Name: {data.stock_name}</h2>
        <p>Lead Date: {new Date(data.lead_date).toLocaleDateString()}</p>
        <form>
          <label>Buy Phase</label>
          <input
            type="datetime-local"
            name="buy_ph"
            value={editData.buy_ph}
            onChange={handleInputChange}
          />
          <label>Late Buy Phase</label>
          <input
            type="datetime-local"
            name="late_buy_ph"
            value={editData.late_buy_ph}
            onChange={handleInputChange}
          />
          {/* Add more fields for other attributes */}
        </form>
        <div className="modal-actions">
          <button onClick={handleUpdate}>Save Changes</button>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
