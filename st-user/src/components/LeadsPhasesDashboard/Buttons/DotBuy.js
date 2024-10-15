import React, { useEffect, useState } from 'react';

const DotBuy = ({ handleClosePopup }) => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        // Fetch data for the 'Idle' dot
        fetch(`${process.env.REACT_APP_API_URL}/leads_phases`)
            .then((response) => response.json())
            .then((data) => setTableData(data))
            .catch((error) => console.error('Error fetching Idle table data:', error));
    }, []);

    // Define handleEdit function
    const handleEdit = (id) => {
        // You can navigate to an edit form or display inline editing
        console.log('Editing row with ID:', id);
        // Implement your edit logic here, like sending the data to an edit endpoint
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
                        {/* <th>Date</th> */}
                        <th>Buy Phase</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row) => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.stock_name}</td>
                            <td>{new Date(row.buy_ph).toLocaleDateString('en-GB')}</td>
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

export default DotBuy;
 