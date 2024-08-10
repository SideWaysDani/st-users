const getTableData = (req, res, db) => {
  db.select(
    'valid_to_end_date',
    db.raw(`
          CASE
              WHEN SUM(allocated_strength) = 0 THEN 0
              ELSE (SUM(CASE WHEN status = 'removing' THEN p_and_l ELSE 0 END) / SUM(allocated_strength)) * 100
          END AS percentage_profit_and_loss
      `)
  )
    .from('war_clone_test.allocation_history')
    .groupBy('valid_to_end_date')
    .orderBy('valid_to_end_date')
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
    'valid_to_end_date',
    db.raw(`
          CASE
              WHEN SUM(allocated_strength) = 0 THEN 0
              ELSE (SUM(CASE WHEN status = 'removing' THEN p_and_l ELSE 0 END) / SUM(allocated_strength)) * 100
          END AS percentage_profit_and_loss
      `)
  )
    .from('war_clone.allocation_history')
    .groupBy('valid_to_end_date')
    .orderBy('valid_to_end_date')
    .then(profitLossItems => {
      if (profitLossItems.length) {
        res.json(profitLossItems);
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