const getTableData = (req, res, db) => {
    // Subquery for FilteredAllocationHistory
    const filteredAllocationHistory = db('war_clone_test.allocation_history')
        .select('battle_date')
        .sum('p_and_l as total_p_and_l')
        .whereIn('status', ['set_limit removing', 'stop_loss removing'])
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
    .join('war_clone_test.account_history as a', 'f.battle_date', 'a.battle_date')
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
    db.select(
        'battle_date',
        db.raw(`
            SUM(allocated_strength) AS total_allocated_strength
        `)
    )
    .from('war_clone.allocation_history')
    .groupBy('battle_date')
    .orderBy('battle_date')
    .then(allocatedStrengthItems => {
        if (allocatedStrengthItems.length) {
            res.json(allocatedStrengthItems);
        } else {
            res.json({ dataExists: 'false' });
        }
    })
      .catch(err => res.status(400).json({ dbError: 'db error' }));
  };
  
  const postTableData = (req, res, db) => {
    const { summary_id, battle_date, profit_and_loss } = req.body
    const added = new Date()
    db('war.summary').insert({ summary_id, battle_date, profit_and_loss, added })
      .returning('*')
      .then(item => {
        res.json(item)
      })
      .catch(err => res.status(400).json({ dbError: 'db error' }))
  }
  
  const putTableData = (req, res, db) => {
    const { summary_id, battle_date, profit_and_loss } = req.body
    db('war.summary').where({ summary_id }).update({ summary_id, battle_date, profit_and_loss })
      .returning('*')
      .then(item => {
        res.json(item)
      })
      .catch(err => res.status(400).json({ dbError: 'db error' }))
  }
  
  const deleteTableData = (req, res, db) => {
    const { summary_id } = req.body
    db('war.summary').where({ summary_id }).del()
      .then(() => {
        res.json({ delete: 'true' })
      })
      .catch(err => res.status(400).json({ dbError: 'db error' }))
  }
  
  module.exports = {
    getTableData,
    postTableData,
    putTableData,
    deleteTableData,
    getTableData2
  }