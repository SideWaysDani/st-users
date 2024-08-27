const getTableData = (req, res, db) => {
    db('war_iter_4.account_history')
        .select(
            'battle_date',
            db.raw('(MAX(active_strength) / AVG(total_strength)) * 100 AS total_strength')
        )
        .groupBy('battle_date')
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

const getTableData2 = (req, res, db) => {
    db('war_iter_3.account_history')
        .select(
            'battle_date',
            db.raw('(MAX(active_strength) / AVG(total_strength)) * 100 AS total_strength')
        )
        .groupBy('battle_date')
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

module.exports = {
    getTableData,
    getTableData2
}