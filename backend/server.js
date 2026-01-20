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
const main2 = require('../st-user/src/components/DataVisualization/Controllers/main2');
const main = require('../st-user/src/components/cplLineGraph/Controllers/main')
const main3 = require('../st-user/src/components/StrengthLineGraph/Controllers/main3')
const main4 = require('../st-user/src/components/SectorsGraph/Controllers/main4')
const main5 = require('../st-user/src/components/CommittedStrengthLineGraph/Controllers/main5')
const main6 = require('../st-user/src/components/LeadsUtilizationGraph/Controllers/main6')
const leadsmain = require('../st-user/src/components/LeadsPhasesDashboard/Controllers/leadsmain')
const addUser = require('../st-user/src/components/AddUser/Controllers/addUser');
const main7 = require('../st-user/src/components/LeadsAnalysis/main7');
const main8 = require('../st-user/src/components/leads_1Analysis/main8');
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
app.get('/lineGraph1', (req, res) => main2.getTableData(req, res, db));
app.get('/lineGraph2', (req, res) => main2.getTableData2(req, res, db));
app.get('/lineGraph3', (req, res) => main2.getTableData3(req, res, db));
app.get('/lineGraph4', (req, res) => main2.getTableData4(req, res, db));
app.get('/lineGraph5', (req, res) => main2.getTableData5(req, res, db));
app.get('/lineGraph6', (req, res) => main2.getTableData6(req, res, db));
app.get('/lineGraph7', (req, res) => main2.getTableData7(req, res, db));

app.get('/strength1', (req, res) => main3.getTableData(req, res, db));
app.get('/strength2', (req, res) => main3.getTableData2(req, res, db));
app.get('/strength3', (req, res) => main3.getTableData3(req, res, db));
app.get('/strength4', (req, res) => main3.getTableData4(req, res, db));
app.get('/strength5', (req, res) => main3.getTableData5(req, res, db));
app.get('/strength6', (req, res) => main3.getTableData6(req, res, db));
app.get('/strength7', (req, res) => main3.getTableData7(req, res, db));

app.get('/cstrength1', (req, res) => main5.getTableData(req, res, db));
app.get('/cstrength2', (req, res) => main5.getTableData2(req, res, db));
app.get('/cstrength3', (req, res) => main5.getTableData3(req, res, db));
app.get('/cstrength4', (req, res) => main5.getTableData4(req, res, db));
app.get('/cstrength5', (req, res) => main5.getTableData5(req, res, db));
app.get('/cstrength6', (req, res) => main5.getTableData6(req, res, db));
app.get('/cstrength7', (req, res) => main5.getTableData7(req, res, db));

app.get('/leadsutilization', (req, res) => main6.getTableData(req, res, db));

app.get('/sector1', (req, res) => main4.getTableData(req, res, db));
app.get('/sector2', (req, res) => main4.getTableData2(req, res, db));
app.get('/sector3', (req, res) => main4.getTableData3(req, res, db));
app.get('/sector4', (req, res) => main4.getTableData4(req, res, db));

app.get('/apnl1', (req, res) => main.getTableData(req, res, db));
app.get('/apnl2', (req, res) => main.getTableData2(req, res, db));
app.get('/apnl3', (req, res) => main.getTableData3(req, res, db));
app.get('/apnl4', (req, res) => main.getTableData4(req, res, db));
app.get('/apnl5', (req, res) => main.getTableData5(req, res, db));
app.get('/apnl6', (req, res) => main.getTableData6(req, res, db));
app.get('/apnl7', (req, res) => main.getTableData7(req, res, db));

app.get('/leads_phases', (req, res) => leadsmain.getTableData(req, res, db));
app.get('/leads_phases/:id', (req, res) => leadsmain.getTableData2(req, res, db));
app.put('/leads_phases/:id', (req, res) => leadsmain.getTableData3(req, res, db));
app.delete('/leads_phases/:id', (req, res) => leadsmain.getTableData4(req, res, db));

app.post('/addUser', (req, res) => addUser.insertNewUser(req, res, db));

app.get('/fortune_1000', (req, res) => main7.getTableData(req, res, db));
app.put('/deactivate_lead/:rank', (req, res) => main7.deactivateLead(req, res, db));
app.put('/activate_lead/:rank', (req, res) => main7.activateLead(req, res, db));

app.get('/leads_1', (req, res) => main8.getTableData(req, res, db));
app.put('/invalid_lead/:id', (req, res) => main8.deactivateLead(req, res, db));
app.put('/valid_lead/:id', (req, res) => main8.activateLead(req, res, db));

// Live Trading - live_trading_multi_8
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
              live_trading_multi_8.performance p
          LEFT JOIN
              live_trading_multi_8.deployment d ON p.unit_assignment_id = d.unit_assignment_id
          LEFT JOIN
              live_trading_multi_8.allocation a ON d.deployment_id = a.deployment_id
          LEFT JOIN
              stocktrader.leads_gold_ml_prod l on p.lead_id = l.id
          LEFT JOIN
              stocktrader.fortune_1000 f ON l.stock_name = f.ticker     
          order by
              p.battle_date asc
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

        // console.log('Formatted Data:', formattedData);

        res.json(formattedData);
    } catch (error) {
        console.error('Error fetching data from /api/dataa:', error.message, error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
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
              stocktrader.leads_gold_ml l on p.lead_id = l.id
          LEFT JOIN
              stocktrader.fortune_1000 f ON l.stock_name = f.ticker     
          order by
              p.battle_date asc

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

        // console.log('Formatted Data:', formattedData);

        res.json(formattedData);
    } catch (error) {
        console.error('Error fetching data from /api/data:', error.message, error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});

// iteration 4.2 - war_iter_4_2
app.get('/api/data4.2', async (req, res) => {
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
              war_iter_4_2.performance p
          LEFT JOIN
              war_iter_4_2.deployment d ON p.unit_assignment_id = d.unit_assignment_id
          LEFT JOIN
              war_iter_4_2.allocation a ON d.deployment_id = a.deployment_id
          LEFT JOIN
              stocktrader.leads_gold_ml l on p.lead_id = l.id
          LEFT JOIN
              stocktrader.fortune_1000 f ON l.stock_name = f.ticker     
          order by
              p.battle_date asc

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

        // console.log('Formatted Data:', formattedData);

        res.json(formattedData);
    } catch (error) {
        console.error('Error fetching data from /api/data4.2:', error.message, error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});


// iteration 4.3

app.get('/api/data4.3', async (req, res) => {
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
              war_iter_4_3.performance p
          LEFT JOIN
              war_iter_4_3.deployment d ON p.unit_assignment_id = d.unit_assignment_id
          LEFT JOIN
              war_iter_4_3.allocation a ON d.deployment_id = a.deployment_id
          LEFT JOIN
              stocktrader.leads_gold_ml l on p.lead_id = l.id
          LEFT JOIN
              stocktrader.fortune_1000 f ON l.stock_name = f.ticker     
          order by
              p.battle_date asc

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

        // console.log('Formatted Data:', formattedData);

        res.json(formattedData);
    } catch (error) {
        console.error('Error fetching data from /api/data4.3:', error.message, error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});


// iteration 4.4

app.get('/api/data4.4', async (req, res) => {
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
              war_iter_4_4.performance p
          LEFT JOIN
              war_iter_4_4.deployment d ON p.unit_assignment_id = d.unit_assignment_id
          LEFT JOIN
              war_iter_4_4.allocation a ON d.deployment_id = a.deployment_id
          LEFT JOIN
              stocktrader.leads_gold_ml l on p.lead_id = l.id
          LEFT JOIN
              stocktrader.fortune_1000 f ON l.stock_name = f.ticker     
          order by
              p.battle_date asc

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

        // console.log('Formatted Data:', formattedData);

        res.json(formattedData);
    } catch (error) {
        console.error('Error fetching data from /api/data4.4:', error.message, error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});


// iteration 5

app.get('/api/data5', async (req, res) => {
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
              war_iter_5.performance p
          LEFT JOIN
              war_iter_5.deployment d ON p.unit_assignment_id = d.unit_assignment_id
          LEFT JOIN
              war_iter_5.allocation a ON d.deployment_id = a.deployment_id
          LEFT JOIN
              stocktrader.leads_gold_ml l on p.lead_id = l.id
          LEFT JOIN
              stocktrader.fortune_1000 f ON l.stock_name = f.ticker       
          order by
              p.battle_date asc

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

        // console.log('Formatted Data:', formattedData);

        res.json(formattedData);
    } catch (error) {
        console.error('Error fetching data from /api/data5:', error.message, error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});


// iteration 6

app.get('/api/data6', async (req, res) => {
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
              war_iter_6.performance p
          LEFT JOIN
              war_iter_6.deployment d ON p.unit_assignment_id = d.unit_assignment_id
          LEFT JOIN
              war_iter_6.allocation a ON d.deployment_id = a.deployment_id
          LEFT JOIN
              stocktrader.leads_gold_ml l on p.lead_id = l.id
          LEFT JOIN
              stocktrader.fortune_1000 f ON l.stock_name = f.ticker     
          order by
              p.battle_date asc
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

        // console.log('Formatted Data:', formattedData);

        res.json(formattedData);
    } catch (error) {
        console.error('Error fetching data from /api/data6:', error.message, error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});

// Define the port variable
const port = process.env.PORT || 5000;

// App server connection
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
