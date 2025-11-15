import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  const getItems = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/fortune_1000`);
      const data = await response.json();
      if (data.length > 0) {
        setItems(data);
      } else {
        console.warn('No data received from server');
      }
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await getItems();
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleActionClick = (rank) => {
    const lead = items.find(item => item.rank === rank);
    if (!lead) return;

    const action = lead.activation_status === 'Active' ? 'deactivate' : 'activate';
    const url = `${process.env.REACT_APP_API_URL}/${action}_lead/${rank}`;

    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rank }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
        getItems();
      })
      .catch(error => {
        console.error(`Error during ${action} lead:`, error);
      });
  };

  // SEARCH FILTER
  const filteredItems = items.filter(item =>
    item.company?.toLowerCase().includes(search.toLowerCase()) ||
    item.ticker?.toLowerCase().includes(search.toLowerCase()) ||
    item.sector?.toLowerCase().includes(search.toLowerCase()) ||
    item.industry?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="App" style={{ marginTop: '100px', marginBottom: '80px' }}>
      <Row>
        <Col>
          <h2
            style={{
              textAlign: 'center',
              marginBottom: '25px',
              fontWeight: 'bold',
              color: '#333',
            }}
          >
            fortune_1000 Analysis
          </h2>
        </Col>
      </Row>

      {/* SEARCH BAR */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "20px",
        }}
      >
        <div style={{ position: "relative" }}>
          <i
            className="uil uil-search-alt"
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#777",
              fontSize: "18px",
            }}
          ></i>

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "8px 12px 8px 38px",
              width: "260px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              fontSize: "14px",
            }}
          />
        </div>
      </div>

      <Row>
        <Col>
          {isLoading && <p style={{ textAlign: 'center' }}>Loading data...</p>}

          {filteredItems.length > 0 ? (
            <div style={{ overflowX: 'auto' }}>
              <table style={styles.table}>
                <thead>
                  <tr style={styles.headerRow}>
                    <th style={styles.th}>Company</th>
                    <th style={styles.th}>Ticker</th>
                    <th style={styles.th}>Sector</th>
                    <th style={styles.th}>Industry</th>
                    <th style={styles.th}>Activation Status</th>
                    <th style={styles.th}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredItems.map((item, index) => (
                    <tr
                      key={index}
                      style={{
                        ...((index % 2 === 0) ? styles.evenRow : styles.oddRow),
                        opacity: item.activation_status === 'Inactive' ? 0.6 : 1,
                      }}
                    >
                      <td style={styles.td}>{item.company || 'N/A'}</td>
                      <td style={styles.td}>{item.ticker || 'N/A'}</td>
                      <td style={styles.td}>{item.sector || 'N/A'}</td>
                      <td style={styles.td}>{item.industry || 'N/A'}</td>

                      <td
                        style={{
                          ...styles.td,
                          color:
                            item.activation_status === 'Active'
                              ? '#2e7d32'
                              : '#c62828',
                          fontWeight: 500,
                        }}
                      >
                        {item.activation_status || 'N/A'}
                      </td>

                      <td style={styles.td}>
                        <button
                          style={{
                            padding: '6px 12px',
                            backgroundColor: item.activation_status === 'Active' ? '#d32f2f' : '#2e7d32',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                          }}
                          onClick={() => handleActionClick(item.rank)}
                        >
                          {item.activation_status === 'Active' ? 'Deactivate' : 'Activate'}
                        </button>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            !isLoading && (
              <p style={{ textAlign: 'center', marginTop: '20px' }}>No matching results.</p>
            )
          )}
        </Col>
      </Row>
    </Container>
  );
};

const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: '#fff',
  },
  headerRow: {
    backgroundColor: '#f2f2f2',
    textAlign: 'left',
  },
  th: {
    padding: '10px 14px',
    fontWeight: '600',
    fontSize: '15px',
    borderBottom: '1px solid #ccc',
  },
  td: {
    padding: '10px 14px',
    fontSize: '14px',
    borderBottom: '1px solid #e0e0e0',
  },
  evenRow: {
    backgroundColor: '#fafafa',
  },
  oddRow: {
    backgroundColor: '#fff',
  },
};

export default App;
