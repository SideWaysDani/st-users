import React, { useEffect, useState } from 'react';

const DotIdle = ({ handleClosePopup }) => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        // Fetch data for the 'Idle' dot
        fetch(`${process.env.REACT_APP_API_URL}/leads_phases`)
            .then((response) => response.json())
            .then((data) => setTableData(data))
            .catch((error) => console.error('Error fetching Idle table data:', error));
    }, []);

    // Define handleEdit function
    const handleEdit = (id, updatedData) => {
        // Call your API to update the row by its ID
        fetch(`${process.env.REACT_APP_API_URL}/leads_phases/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData), // Send updated data in the request body
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Row updated:', data);
                // After the update, update the table data to reflect the changes
                setTableData((prevData) =>
                    prevData.map((row) => (row.id === id ? { ...row, ...updatedData } : row))
                );
            })
            .catch((error) => console.error('Error updating row:', error));
    };
    

    // Define handleDelete function
    const handleDelete = (id) => {
        // Call your API to delete the row by its ID
        fetch(`${process.env.REACT_APP_API_URL}/leads_phases/${id}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Row deleted:', data);
                // After deletion, update the table data to remove the deleted row
                setTableData(tableData.filter((row) => row.id !== id));
            })
            .catch((error) => console.error('Error deleting row:', error));
    };

    return (
        <div className="popup-box">
            <button className="close-button" onClick={handleClosePopup}>
                X
            </button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Idle Name</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row) => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.stock_name}</td>
                            <td>{new Date(row.lead_date).toLocaleDateString('en-GB')}</td>
                            <td>
                                <button onClick={() => handleEdit(row.id)}>Edit</button>
                                <button onClick={() => handleDelete(row.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DotIdle;
 