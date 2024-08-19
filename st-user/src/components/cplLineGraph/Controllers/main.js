const getTableData = (req, res, db) => {
  db
    .select('battle_date')
    .sum('percentageprofitandloss as cumulative_percentageprofitandloss')
    .from('war_clone_test.performance')
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
    .from('war_iter_3.performance')
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


  const postTableData = (req, res, db) => {
    const { summary_id, battle_date, profit_and_loss} = req.body
    const added = new Date()
    db('war.summary').insert({summary_id, battle_date, profit_and_loss, added})
      .returning('*')
      .then(item => {
        res.json(item)
      })
      .catch(err => res.status(400).json({dbError: 'db error'}))
  }
  
  const putTableData = (req, res, db) => {
    const { summary_id, battle_date, profit_and_loss} = req.body
    db('war.summary').where({summary_id}).update({summary_id, battle_date, profit_and_loss})
      .returning('*')
      .then(item => {
        res.json(item)
      })
      .catch(err => res.status(400).json({dbError: 'db error'}))
  }
  
  const deleteTableData = (req, res, db) => {
    const { summary_id } = req.body
    db('war.summary').where({summary_id}).del()
      .then(() => {
        res.json({delete: 'true'})
      })
      .catch(err => res.status(400).json({dbError: 'db error'}))
  }
  
  module.exports = {
    getTableData,
    postTableData,
    putTableData,
    deleteTableData,
    getTableData2
  }