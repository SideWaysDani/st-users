const getTableData = (req, res, db) => {
    db('stocktrader.leads_phases')
        .select('*')
        .then(data => {
            if (data.length) {
                res.json(data);
            } else {
                res.json({ dataExists: 'false' });
            }
        })
        .catch(err => res.status(400).json({ dbError: 'db error' }));
};

// Fetch a specific record by ID
const getTableData2 = (req, res, db) => {
    const { id } = req.params;
    db('stocktrader.leads_phases')
        .where({ id })
        .then(data => {
            if (data.length) {
                res.json(data[0]);
            } else {
                res.json({ dataExists: 'false' });
            }
        })
        .catch(err => res.status(400).json({ dbError: 'db error' }));
};

// update a specific record
const getTableData3 = (req, res, db) => {
    const { id } = req.params;
    const updatedData = req.body;

    db('stocktrader.leads_phases')
        .where({ id })
        .update(updatedData)
        .then(response => {
            if (response) {
                res.json('Record updated successfully');
            } else {
                res.status(404).json({ message: 'Record not found' });
            }
        })
        .catch(err => res.status(400).json({ dbError: 'db error' }));
};

// delete a specific record
const getTableData4 = (req, res, db) => {
    const { id } = req.params;

    db('stocktrader.leads_phases')
        .where({ id })
        .del()
        .then(response => {
            if (response) {
                res.json('Record deleted successfully');
            } else {
                res.status(404).json({ message: 'Record not found' });
            }
        })
        .catch(err => res.status(400).json({ dbError: 'db error' }));
};

module.exports = {
    getTableData,
    getTableData2,
    getTableData3,
    getTableData4,
}

