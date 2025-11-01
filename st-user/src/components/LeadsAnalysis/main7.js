const getTableData = (req, res, db) => {
  db.raw(`
    SELECT f.rank, f.company, f.ticker, f.sector, f.industry, f.activation_status
    FROM stocktrader.fortune_1000 f
    ORDER BY f.company ASC;
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
  const { rank } = req.body;

  db.raw(
    `
    UPDATE stocktrader.fortune_1000
    SET activation_status = 'Inactive'
    WHERE rank = ?;
    `,
    [rank]
  )
    .then(() => {
      res.json({ message: 'Activation status updated successfully' });
    })
    .catch(err => {
      console.error('Error updating status:', err);
      res.status(400).json({ dbError: 'Database update error' });
    });
};

const activateLead = (req, res, db) => {
  const { rank } = req.body;

  db.raw(
    `
    UPDATE stocktrader.fortune_1000
    SET activation_status = 'Active'
    WHERE rank = ?;
    `,
    [rank]
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
