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

const getTableData3 = (req, res, db) => {
    db('war_iter_4_2.account_history')
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

const getTableData4 = (req, res, db) => {
    db('war_iter_4_3.account_history')
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

const getTableData5 = (req, res, db) => {
    db('war_iter_4_4.account_history')
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

const getTableData6 = (req, res, db) => {
    db('war_iter_5.account_history')
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

const getTableData7 = (req, res, db) => {
    db('war_iter_6.account_history')
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
    db('paper_trading_test.account_history')
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
    getTableData2, 
    getTableData3, 
    getTableData4, 
    getTableData5, 
    getTableData6,
    getTableData7
}

