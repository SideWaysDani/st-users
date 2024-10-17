import React from 'react';
//import './Popup';
import axios from 'axios';

const TablePopup = ({ data, onClose }) => {
  // Handle delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/leads_phases/${id}`);
      alert('Deleted successfully');
      window.location.reload();   // Reload to fetch updated data 
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };

  // Handle edit (add actual functionality as needed)
  const handleEdit = (id) => {
    // Logic for handling edit
    alert(`Edit function triggered for ID: ${id}`);
  };

  return (
    <div className="table-popup">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>X</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Stock Name</th>
              <th>Lead Date</th>
              <th>Buy PH</th>
              <th>Late Buy PH</th>
              <th>Sell Exception PH</th>
              <th>Sell Green PH</th>
              <th>Sell Yellow PH</th>
              <th>Sell Red PH</th>
              <th>Max Altitude</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.stock_name}</td>
                <td>{row.lead_date}</td>
                <td>{row.buy_ph}</td>
                <td>{row.late_buy_ph}</td>
                <td>{row.sell_exception_ph}</td>
                <td>{row.sell_green_ph}</td>
                <td>{row.sell_yellow_ph}</td>
                <td>{row.sell_red_ph}</td>
                <td>{row.max_altitude}</td>
                <td>
                  <button onClick={() => handleEdit(row.id)}>Edit</button>
                  <button onClick={() => handleDelete(row.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablePopup;
