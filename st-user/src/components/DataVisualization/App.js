// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col } from 'reactstrap'; // Assuming you're using Reactstrap
// import LineGraph from './Components/LineGraph';

// const App = () => {
//   // State variables for data and editing
//   const [items, setItems] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [editableId, setEditableId] = useState(null);

//   // Function to fetch items from the server
//   const getItems = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/crud');
//       const data = await response.json();
//       setItems(data);
//     } catch (error) {
//       console.error('Error fetching items:', error);
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const response = await fetch('http://localhost:5000/crud');
//         const data = await response.json();
//         setItems(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Function to handle edit click, setting the editable ID
//   const handleEditClick = (id) => {
//     setEditableId(id);
//   };

//   // Function to handle update click, sending the updated item to the server
//   const handleUpdateClick = async (id) => {
//     // Implement the update logic here
//   };

//   // Function to handle delete click, sending the delete request to the server
//   const handleDeleteClick = async (id) => {
//     // Implement the delete logic here
//   };

//   return (
//     <Container className="App">
//       <Row>
//         <Col>
//           <h1 style={{ margin: '20px 0' }}>Data Vizualization - Line Graph </h1>
//         </Col>
//       </Row>
//       {/* <Row>
//         <Col>
//           {isLoading && <p>Loading data...</p>}
//           {items.length > 0 && (
//             <table style={{ width: '100%', borderSpacing: '10px' }}>
//               <thead>
//                 <tr>
//                   <th>ID</th>
//                   <th>Stock Name</th>
//                   <th>Lead Date</th>
//                   <th>Sealing Flag</th>
//                   <th>Sealing Price</th>
//                   <th>Lead Price</th>
//                   <th>Active Flag</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {items.map((item) => (
//                   <tr key={item.id}>
//                     <td>{item.id}</td>
//                     <td>{item.stock_name || 'N/A'}</td>
//                     <td>{item.lead_date ? new Date(item.lead_date).toLocaleDateString() : 'N/A'}</td>
//                     <td>{item.sealing_flag || 'N/A'}</td>
//                     <td>{typeof item.sealing_price === 'number' ? item.sealing_price.toFixed(2) : 'N/A'}</td>
//                     <td>{typeof item.lead_price === 'number' ? item.lead_price.toFixed(2) : 'N/A'}</td>
//                     <td>{item.active_flag ? 'Yes' : 'No'}</td>
//                     <td>
//                       <button onClick={() => handleEditClick(item.id)}>Edit</button>
//                       <button onClick={() => handleDeleteClick(item.id)}>Delete</button>
//                     </td>
//                   </tr>
//                 ))}



//               </tbody>
//             </table>
//           )}
//         </Col>
//       </Row> */}
//       <Row>
//       <Col>
//         <LineGraph data={items} /> {/* Pass data as props to LineChart */}
//       </Col>
//     </Row>
//     </Container>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap'; // Assuming you're using Reactstrap
import LineGraph from './Components/LineGraph';

const App = () => {
  // State variables for data and editing
  const [items, setItems] = useState([]);
  const [items2, setItems2] = useState([]);
  const [items3, setItems3] = useState([]);
  const [items4, setItems4] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editableId, setEditableId] = useState(null);

  // Function to fetch items from the server
  const getItems = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/lineGraph1`);
      //const response = await fetch('http://localhost:5000/lineGraph1');
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/lineGraph1`);
        //const response = await fetch('http://localhost:5000/lineGraph1');
        const data = await response.json();

        
        // Format the dates
        // const formattedData = data.map(item => ({
          
        //   ...item,
        //   console.log("Item before formatting:", item); // Check the original item
        //   battle_date: new Date(item.battle_date).toLocaleDateString('en-GB') // format date as dd/mm/yyyy
        // }));
        // console.log("items: ", items);

        const formattedData = data.map(item => {
          console.log("Item before formatting:", item); // Check the original item
          const formattedDate = new Date(item.battle_date).toLocaleDateString('en-GB');
          console.log("Formatted Date:", formattedDate);
          return {
              ...item,
              battle_date: formattedDate
          };
      });
      

        setItems(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/lineGraph2`);
        //const response = await fetch('http://localhost:5000/lineGraph2');
        const data = await response.json();

        
        // Format the dates
        const formattedData = data.map(item2 => ({
          ...item2,
          
          battle_date: new Date(item2.battle_date).toLocaleDateString('en-GB') // format date as dd/mm/yyyy
        }));

        setItems2(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/lineGraph3`);
        //const response = await fetch('http://localhost:5000/lineGraph2');
        const data = await response.json();

        
        // Format the dates
        const formattedData = data.map(item3 => ({
          ...item3,
          
          battle_date: new Date(item3.battle_date).toLocaleDateString('en-GB') // format date as dd/mm/yyyy
        }));

        setItems3(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/lineGraph4`);
        //const response = await fetch('http://localhost:5000/lineGraph2');
        const data = await response.json();

        
        // Format the dates
        const formattedData = data.map(item4 => ({
          ...item4,
          
          battle_date: new Date(item4.battle_date).toLocaleDateString('en-GB') // format date as dd/mm/yyyy
        }));

        setItems4(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Container className="App">
      <Row>
        <Col>
          <h1 style={{ margin: '20px 0' }}>Actual Profit and Loss - Iteration 2 - war_clone_test</h1>
        </Col>
      </Row>
      {/* <Row>
        <Col>
          {isLoading && <p>Loading data...</p>}
          {items.length > 0 && (
            <table style={{ width: '100%', borderSpacing: '10px' }}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Stock Name</th>
                  <th>Lead Date</th>
                  <th>Sealing Flag</th>
                  <th>Sealing Price</th>
                  <th>Lead Price</th>
                  <th>Active Flag</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.stock_name || 'N/A'}</td>
                    <td>{item.lead_date ? new Date(item.lead_date).toLocaleDateString() : 'N/A'}</td>
                    <td>{item.sealing_flag || 'N/A'}</td>
                    <td>{typeof item.sealing_price === 'number' ? item.sealing_price.toFixed(2) : 'N/A'}</td>
                    <td>{typeof item.lead_price === 'number' ? item.lead_price.toFixed(2) : 'N/A'}</td>
                    <td>{item.active_flag ? 'Yes' : 'No'}</td>
                    <td>
                      <button onClick={() => handleEditClick(item.id)}>Edit</button>
                      <button onClick={() => handleDeleteClick(item.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Col>
      </Row> */}
      <Row>
        <Col>
        <h1 style={{ margin: '20px 0' }}>Actual Profit and Loss - Iteration 4 - war_iter_4</h1>
          <LineGraph data={items} /> {/* Pass data as props to LineChart */}
          <h1 style={{ margin: '20px 0' }}>Actual Profit and Loss - Iteration 4.2 - war_iter_4_2</h1>
          <LineGraph data={items3} /> {/* Pass data as props to LineChart */}
          <h1 style={{ margin: '20px 0' }}>Actual Profit and Loss - Iteration 4.3 - war_iter_4_3</h1>
          <LineGraph data={items4} /> {/* Pass data as props to LineChart */}
          <h1 style={{ margin: '20px 0' }}>Actual Profit and Loss - Iteration 3 - war_iter_3</h1>
          <LineGraph data={items2} /> {/* Pass data as props to LineChart */}
          
        </Col>
      </Row>
    </Container>
  );
};

export default App;

