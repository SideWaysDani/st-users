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
    l.id
  FROM stocktrader.fortune_1000 f
  JOIN stocktrader.leads_1 l 
    ON f.ticker = l.stock_name
  ORDER BY f.ticker, l.lead_date DESC
) AS distinct_leads
ORDER BY lead_date DESC;

  `)
    .then(items => {
      if (items.rows && items.rows.length) {
        res.json(items.rows);
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
