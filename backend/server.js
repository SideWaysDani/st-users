const express = require('express');

// use process.env variables to keep private variables,
require('dotenv').config();

// Express Middleware
const bodyParser = require('body-parser'); // turns response into usable format
const cors = require('cors'); // allows/disallows cross-site communication
const morgan = require('morgan'); // logs requests

// db Connection w/ localhost
var db = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST || 'sthub.c3uguk04fjqb.ap-southeast-2.rds.amazonaws.com',
    user: process.env.DB_USER || 'stpostgres',
    password: process.env.DB_PASSWORD || 'stocktrader',
    database: process.env.DB_DATABASE || 'postgres'
  }
});

// Controllers - aka, the db queries
const main = require('../st-user/src/components/DataVisualization/Controllers/main2');
const main2 = require('../st-user/src/components/cplLineGraph/Controllers/main')
const main3 = require('../st-user/src/components/StrengthLineGraph/Controllers/main3')
const main4 = require('../st-user/src/components/SectorsGraph/Controllers/main4')
const main5 = require('../st-user/src/components/CommittedStrengthLineGraph/Controllers/main5')
// App
const app = express();

// CORS configuration
app.use(cors({
  credentials: true,
  origin: ["http://localhost:3000", "http://localhost:5001", "http://34.203.90.103:3000"] // Add your frontend's URL here
}));

app.use(bodyParser.json());
app.use(morgan('combined')); // use 'tiny' or 'combined'

// App Routes - Auth
app.get('/lineGraph1', (req, res) => main.getTableData(req, res, db));
app.get('/lineGraph2', (req, res) => main.getTableData2(req, res, db));
app.get('/strength1', (req, res) => main3.getTableData(req, res, db));
app.get('/strength2', (req, res) => main3.getTableData2(req, res, db));
app.get('/cstrength1', (req, res) => main5.getTableData(req, res, db));
app.get('/cstrength2', (req, res) => main5.getTableData2(req, res, db));
app.get('/sector1', (req, res) => main4.getTableData(req, res, db));
app.get('/sector2', (req, res) => main4.getTableData2(req, res, db));
app.get('/sector3', (req, res) => main4.getTableData3(req, res, db));
app.get('/sector4', (req, res) => main4.getTableData4(req, res, db));
app.get('/apnl1', (req, res) => main2.getTableData(req, res, db));
app.get('/apnl2', (req, res) => main2.getTableData2(req, res, db));

// iteration 3 - war_iter_3
app.get('/api/dataa', async (req, res) => {
  try {
      const query = `
          SELECT 
              p.performance_id,
              p.unit_assignment_id,
              p.profit_and_loss,
              p.battle_date,
              p.lead_id,
              p.percentageprofitandloss,
              d.start_date,
              d.end_date,
              d.status,
              l.stock_name,
              f.ticker,
              f.sector
          FROM 
              war_iter_3.performance p
          LEFT JOIN 
              war_iter_3.deployment d ON p.unit_assignment_id = d.unit_assignment_id
          LEFT JOIN 
              war_iter_3.allocation a ON d.deployment_id = a.deployment_id
          LEFT JOIN 
              war_iter_3.leads l ON p.lead_id = l.leads_id
          LEFT JOIN 
              stocktrader.fortune_1000 f ON l.stock_name = f.ticker
      `;

      const data = await db.raw(query);

      const formattedData = data.rows.map(row => ({
          performance_id: row.performance_id,
          unit_assignment_id: row.unit_assignment_id,
          profit_and_loss: row.profit_and_loss,
          battle_date: row.battle_date,
          lead_id: row.lead_id,
          percentageprofitandloss: row.percentageprofitandloss,
          start_date: row.start_date,
          end_date: row.end_date,
          status: row.status,
          quadrant: row.lead_id,
          stock_name: row.stock_name,
          ticker: row.ticker,
          sector: row.sector,
          color: row.profit_and_loss >= 0 ? 'green' : 'red'
      }));

      console.log('Formatted Data:', formattedData);

      res.json(formattedData);
  } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});


// iteration 4 - war_iter_4
app.get('/api/data', async (req, res) => {
  try {
      const query = `
          SELECT 
              p.performance_id,
              p.unit_assignment_id,
              p.profit_and_loss,
              p.battle_date,
              p.lead_id,
              p.percentageprofitandloss,
              d.start_date,
              d.end_date,
              d.status,
              l.stock_name,
              f.ticker,
              f.sector
          FROM 
              war_iter_4.performance p
          LEFT JOIN 
              war_iter_4.deployment d ON p.unit_assignment_id = d.unit_assignment_id
          LEFT JOIN 
              war_iter_4.allocation a ON d.deployment_id = a.deployment_id
          LEFT JOIN 
              war_iter_4.leads l ON p.lead_id = l.leads_id
          LEFT JOIN 
              stocktrader.fortune_1000 f ON l.stock_name = f.ticker
      `;

      const data = await db.raw(query);

      const formattedData = data.rows.map(row => ({
          performance_id: row.performance_id,
          unit_assignment_id: row.unit_assignment_id,
          profit_and_loss: row.profit_and_loss,
          battle_date: row.battle_date,
          lead_id: row.lead_id,
          percentageprofitandloss: row.percentageprofitandloss,
          start_date: row.start_date,
          end_date: row.end_date,
          status: row.status,
          quadrant: row.lead_id,
          stock_name: row.stock_name,
          ticker: row.ticker,
          sector: row.sector,
          color: row.profit_and_loss >= 0 ? 'green' : 'red'
      }));

      console.log('Formatted Data:', formattedData);

      res.json(formattedData);
  } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Define the port variable
const port = process.env.PORT || 5000;

// App server connection
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
