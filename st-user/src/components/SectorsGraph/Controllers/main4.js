const getTableData = (req, res, db) => {
    db('stocktrader.sector_summary')
        .select('9days_avg_pnl_percentage as Profitandlosspercentage', '*') // Select "9days_avg_pnl_percentage" as "PnL_Percentage"
        .then(sectorSummaryItems => {
            if (sectorSummaryItems.length) {
                res.json(sectorSummaryItems);
            } else {
                res.json({ dataExists: 'false' });
            }
        })
        .catch(err => {
            console.error('Database query error:', err);
            res.status(500).json({ dbError: 'Internal Server Error' });
        });
};

const getTableData2 = (req, res, db) => {
    db('stocktrader.sector_summary')
        .select('30days_avg_pnl_percentage as Profitandlosspercentage', '*') // Select "30days_avg_pnl_percentage" as "PnL_Percentage"
        .then(sectorSummaryItems => {
            if (sectorSummaryItems.length) {
                res.json(sectorSummaryItems);
            } else {
                res.json({ dataExists: 'false' });
            }
        })
        .catch(err => {
            console.error('Database query error:', err);
            res.status(500).json({ dbError: 'Internal Server Error' });
        });
};

const getTableData3 = (req, res, db) => {
    db('stocktrader.sector_summary')
        .select('60days_avg_pnl_percentage as Profitandlosspercentage', '*') // Select "60days_avg_pnl_percentage" as "PnL_Percentage"
        .then(sectorSummaryItems => {
            if (sectorSummaryItems.length) {
                res.json(sectorSummaryItems);
            } else {
                res.json({ dataExists: 'false' });
            }
        })
        .catch(err => {
            console.error('Database query error:', err);
            res.status(500).json({ dbError: 'Internal Server Error' });
        });
};

const getTableData4 = (req, res, db) => {
    db('stocktrader.sector_summary')
        .select('90days_avg_pnl_percentage as Profitandlosspercentage', '*') // Select "90days_avg_pnl_percentage" as "PnL_Percentage"
        .then(sectorSummaryItems => {
            if (sectorSummaryItems.length) {
                res.json(sectorSummaryItems);
            } else {
                res.json({ dataExists: 'false' });
            }
        })
        .catch(err => {
            console.error('Database query error:', err);
            res.status(500).json({ dbError: 'Internal Server Error' });
        });
};


module.exports = {
    getTableData,
    getTableData2,
    getTableData3, 
    getTableData4
}