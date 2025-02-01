const getTableData = (req, res, db) => {
  db
    .select('battle_date')
    .sum('percentageprofitandloss as cumulative_percentageprofitandloss')
    .from('war_iter_4.performance')
    .groupBy('battle_date')
    .orderBy('battle_date', 'asc')
    .then(items => {
      if (items.length) {
        res.json(items);
      } else {
        res.json({ dataExists: 'false' });
      }
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }));
};

const getTableData3 = (req, res, db) => {
  db
    .select('battle_date')
    .sum('percentageprofitandloss as cumulative_percentageprofitandloss')
    .from('war_iter_4_2.performance')
    .groupBy('battle_date')
    .orderBy('battle_date', 'asc')
    .then(items => {
      if (items.length) {
        res.json(items);
      } else {
        res.json({ dataExists: 'false' });
      }
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }));
};

const getTableData4 = (req, res, db) => {
  db
    .select('battle_date')
    .sum('percentageprofitandloss as cumulative_percentageprofitandloss')
    .from('war_iter_4_3.performance')
    .groupBy('battle_date')
    .orderBy('battle_date', 'asc')
    .then(items => {
      if (items.length) {
        res.json(items);
      } else {
        res.json({ dataExists: 'false' });
      }
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }));
};

const getTableData5 = (req, res, db) => {
  db
    .select('battle_date')
    .sum('percentageprofitandloss as cumulative_percentageprofitandloss')
    .from('war_iter_4_4.performance')
    .groupBy('battle_date')
    .orderBy('battle_date', 'asc')
    .then(items => {
      if (items.length) {
        res.json(items);
      } else {
        res.json({ dataExists: 'false' });
      }
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }));
};

const getTableData6 = (req, res, db) => {
  db
    .select('battle_date')
    .sum('percentageprofitandloss as cumulative_percentageprofitandloss')
    .from('war_iter_5.performance')
    .groupBy('battle_date')
    .orderBy('battle_date', 'asc')
    .then(items => {
      if (items.length) {
        res.json(items);
      } else {
        res.json({ dataExists: 'false' });
      }
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }));
};


const getTableData2 = (req, res, db) => {
  db
    .select('battle_date')
    .sum('percentageprofitandloss as cumulative_percentageprofitandloss')
    .from('paper_trading_test.performance')
    .groupBy('battle_date')
    .orderBy('battle_date', 'asc')
    .then(items2 => {
      if (items2.length) {
        res.json(items2);
      } else {
        res.json({ dataExists: 'false' });
      }
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }));
};


  
  
  module.exports = {
    getTableData,
    getTableData2,
    getTableData3, 
    getTableData4, 
    getTableData5, 
    getTableData6
  }