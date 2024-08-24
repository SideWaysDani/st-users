const getTableData = (req, res, db) => {
    db('stocktrader.sector_summary')
        .select('*')
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
    db.select(
        'battle_date',
        'total_strength'
    )
        .from('war_iter_3.account_history as ah')
        .whereIn(
            'account_history_id',
            db('war_iter_3.account_history')
                .select(db.raw('MAX(account_history_id)'))
                .groupBy('battle_date')
        )
        .orderBy('battle_date')
        .then(accountHistoryItems => {
            if (accountHistoryItems.length) {
                res.json(accountHistoryItems);
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