const getTableData = (req, res, db) => {
  // Subquery for FilteredAllocationHistory
  const filteredAllocationHistory = db('war_iter_4.allocation_history')
    .select('battle_date')
    .sum('p_and_l as total_p_and_l')
    .whereIn('status', ['set_limit removing', 'stop_loss removing', 'api_signal sell'])
    .groupBy('battle_date')
    .as('f');

  db.select(
    'f.battle_date',
    db.raw(`
          CASE
              WHEN MAX(a.total_strength) = 0 THEN 0
              ELSE (f.total_p_and_l / MAX(a.total_strength)) * 100
          END AS percentage_profit_and_loss
      `)
  )
    .from(filteredAllocationHistory)
    .join('war_iter_4.account_history as a', 'f.battle_date', 'a.battle_date')
    .groupBy('f.battle_date', 'f.total_p_and_l')
    .orderBy('f.battle_date')
    .then(profitLossItems => {
      if (profitLossItems.length) {
        res.json(profitLossItems);
      } else {
        res.json({ dataExists: 'false' });
      }
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }));
};


const getTableData2 = (req, res, db) => {
  // Subquery for FilteredAllocationHistory
  const filteredAllocationHistory = db('paper_trading_test.allocation_history')
    .select('battle_date')
    .sum('p_and_l as total_p_and_l')
    .whereIn('status', ['set_limit removing', 'stop_loss removing', 'api_signal sell'])
    .groupBy('battle_date')
    .as('f');

  db.select(
    'f.battle_date',
    db.raw(`
          CASE
              WHEN MAX(a.total_strength) = 0 THEN 0
              ELSE (f.total_p_and_l / MAX(a.total_strength)) * 100
          END AS percentage_profit_and_loss
      `)
  )
    .from(filteredAllocationHistory)
    .join('paper_trading_test.account_history as a', 'f.battle_date', 'a.battle_date')
    .groupBy('f.battle_date', 'f.total_p_and_l')
    .orderBy('f.battle_date')
    .then(profitLossItems => {
      if (profitLossItems.length) {
        res.json(profitLossItems);
      } else {
        res.json({ dataExists: 'false' });
      }
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }));
};

const getTableData3 = (req, res, db) => {
  // Subquery for FilteredAllocationHistory
  const filteredAllocationHistory = db('war_iter_4_2.allocation_history')
    .select('battle_date')
    .sum('p_and_l as total_p_and_l')
    .whereIn('status', ['set_limit removing', 'stop_loss removing', 'api_signal sell'])
    .groupBy('battle_date')
    .as('f');

  db.select(
    'f.battle_date',
    db.raw(`
          CASE
              WHEN MAX(a.total_strength) = 0 THEN 0
              ELSE (f.total_p_and_l / MAX(a.total_strength)) * 100
          END AS percentage_profit_and_loss
      `)
  )
    .from(filteredAllocationHistory)
    .join('war_iter_4_2.account_history as a', 'f.battle_date', 'a.battle_date')
    .groupBy('f.battle_date', 'f.total_p_and_l')
    .orderBy('f.battle_date')
    .then(profitLossItems => {
      if (profitLossItems.length) {
        res.json(profitLossItems);
      } else {
        res.json({ dataExists: 'false' });
      }
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }));
};

const getTableData4 = (req, res, db) => {
  // Subquery for FilteredAllocationHistory
  const filteredAllocationHistory = db('war_iter_4_3.allocation_history')
    .select('battle_date')
    .sum('p_and_l as total_p_and_l')
    .whereIn('status', ['set_limit removing', 'stop_loss removing', 'api_signal sell'])
    .groupBy('battle_date')
    .as('f');

  db.select(
    'f.battle_date',
    db.raw(`
          CASE
              WHEN MAX(a.total_strength) = 0 THEN 0
              ELSE (f.total_p_and_l / MAX(a.total_strength)) * 100
          END AS percentage_profit_and_loss
      `)
  )
    .from(filteredAllocationHistory)
    .join('war_iter_4_3.account_history as a', 'f.battle_date', 'a.battle_date')
    .groupBy('f.battle_date', 'f.total_p_and_l')
    .orderBy('f.battle_date')
    .then(profitLossItems => {
      if (profitLossItems.length) {
        res.json(profitLossItems);
      } else {
        res.json({ dataExists: 'false' });
      }
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }));
};

const getTableData5 = (req, res, db) => {
  // Subquery for FilteredAllocationHistory
  const filteredAllocationHistory = db('war_iter_4_4.allocation_history')
    .select('battle_date')
    .sum('p_and_l as total_p_and_l')
    .whereIn('status', ['set_limit removing', 'stop_loss removing', 'api_signal sell'])
    .groupBy('battle_date')
    .as('f');

  db.select(
    'f.battle_date',
    db.raw(`
          CASE
              WHEN MAX(a.total_strength) = 0 THEN 0
              ELSE (f.total_p_and_l / MAX(a.total_strength)) * 100
          END AS percentage_profit_and_loss
      `)
  )
    .from(filteredAllocationHistory)
    .join('war_iter_4_4.account_history as a', 'f.battle_date', 'a.battle_date')
    .groupBy('f.battle_date', 'f.total_p_and_l')
    .orderBy('f.battle_date')
    .then(profitLossItems => {
      if (profitLossItems.length) {
        res.json(profitLossItems);
      } else {
        res.json({ dataExists: 'false' });
      }
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }));
};

const getTableData6 = (req, res, db) => {
  // Subquery for FilteredAllocationHistory
  const filteredAllocationHistory = db('war_iter_5.allocation_history')
    .select('battle_date')
    .sum('p_and_l as total_p_and_l')
    .whereIn('status', ['set_limit removing', 'stop_loss removing', 'api_signal sell'])
    .groupBy('battle_date')
    .as('f');

  db.select(
    'f.battle_date',
    db.raw(`
          CASE
              WHEN MAX(a.total_strength) = 0 THEN 0
              ELSE (f.total_p_and_l / MAX(a.total_strength)) * 100
          END AS percentage_profit_and_loss
      `)
  )
    .from(filteredAllocationHistory)
    .join('war_iter_5.account_history as a', 'f.battle_date', 'a.battle_date')
    .groupBy('f.battle_date', 'f.total_p_and_l')
    .orderBy('f.battle_date')
    .then(profitLossItems => {
      if (profitLossItems.length) {
        res.json(profitLossItems);
      } else {
        res.json({ dataExists: 'false' });
      }
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }));
};

const getTableData7 = (req, res, db) => {
  // Subquery for FilteredAllocationHistory
  const filteredAllocationHistory = db('war_iter_6.allocation_history')
    .select('battle_date')
    .sum('p_and_l as total_p_and_l')
    .whereIn('status', ['set_limit removing', 'stop_loss removing', 'api_signal sell'])
    .groupBy('battle_date')
    .as('f');

  db.select(
    'f.battle_date',
    db.raw(`
          CASE
              WHEN MAX(a.total_strength) = 0 THEN 0
              ELSE (f.total_p_and_l / MAX(a.total_strength)) * 100
          END AS percentage_profit_and_loss
      `)
  )
    .from(filteredAllocationHistory)
    .join('war_iter_6.account_history as a', 'f.battle_date', 'a.battle_date')
    .groupBy('f.battle_date', 'f.total_p_and_l')
    .orderBy('f.battle_date')
    .then(profitLossItems => {
      if (profitLossItems.length) {
        res.json(profitLossItems);
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
  getTableData6,
  getTableData7
}