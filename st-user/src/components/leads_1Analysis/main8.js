const getTableData = (req, res, db) => {
  db.raw(`
SELECT *
FROM (
  SELECT DISTINCT ON (f.ticker)
    f.rank,
    f.company,
    f.ticker,
    f.sector,
    f.industry,
    l.lead_date,
    l.stock_name,
    l.valid,
    l.id,
    lm3.prediction AS prediction_iter_3,
    lm6.prediction AS prediction_iter_6,
    lm7.prediction AS prediction_iter_7
  FROM stocktrader.fortune_1000 f
  JOIN stocktrader.leads_1 l 
    ON f.ticker = l.stock_name
  LEFT JOIN public.leads_1_ml lm3
    ON lm3.lead_id = l.id
   AND lm3.model = 'StackedEnsemble'
   AND lm3.feature_selection_method = 'SHAP'
   AND lm3.iteration = 3
  LEFT JOIN public.leads_1_ml lm6
    ON lm6.lead_id = l.id
   AND lm6.model = 'StackedEnsemble'
   AND lm6.feature_selection_method = 'Boruta'
   AND lm6.iteration = 6
  LEFT JOIN public.leads_1_ml lm7
    ON lm7.lead_id = l.id
   AND lm7.model = 'StackedEnsemble'
   AND lm7.feature_selection_method = 'MutualInfo'
   AND lm7.iteration = 7
  ORDER BY f.ticker, l.lead_date DESC
) AS distinct_leads
ORDER BY lead_date DESC

  `)
    .then(items => {
      if (items.rows && items.rows.length) {
        res.json(items.rows);
        // console.log('Data fetched successfully:', items.rows);
      } else {
        res.json({ dataExists: false });
      }
    })
    .catch(err => {
      console.error('Database error:', err);
      res.status(400).json({ dbError: 'Database error occurred' });
    });
};

const deactivateLead = (req, res, db) => {
  const { id } = req.body;

  db.raw(
    `
    UPDATE stocktrader.leads_1
    SET valid = 'No'
    WHERE id = ?;
    `,
    [id]
  )
    .then(() => {
      res.json({ message: 'Valid status updated successfully' });
    })
    .catch(err => {
      console.error('Error updating status:', err);
      res.status(400).json({ dbError: 'Database update error' });
    });
};

const activateLead = (req, res, db) => {
  const { id } = req.body;

  db.raw(
    `
    UPDATE stocktrader.leads_1
    SET valid = 'Yes'
    WHERE id = ?;
    `,
    [id]
  )
    .then(() => {
      res.json({ message: 'Activation status updated successfully' });
    })
    .catch(err => {
      console.error('Error updating status:', err);
      res.status(400).json({ dbError: 'Database update error' });
    });
};
module.exports = {
  getTableData,
  deactivateLead,
  activateLead
};
