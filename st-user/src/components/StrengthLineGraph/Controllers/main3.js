const getTableData = (req, res, db) => {
    db.select(
        'battle_date',
        'total_strength'
    )
        .from('war_iter_4.account_history as ah')
        .whereIn(
            'account_history_id',
            db('war_iter_4.account_history')
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

const getTableData3 = (req, res, db) => {
    db.select(
        'battle_date',
        'total_strength'
    )
        .from('war_iter_4_2.account_history as ah')
        .whereIn(
            'account_history_id',
            db('war_iter_4_2.account_history')
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

const getTableData4 = (req, res, db) => {
    db.select(
        'battle_date',
        'total_strength'
    )
        .from('war_iter_4_3.account_history as ah')
        .whereIn(
            'account_history_id',
            db('war_iter_4_3.account_history')
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

const getTableData5 = (req, res, db) => {
    db.select(
        'battle_date',
        'total_strength'
    )
        .from('war_iter_4_4.account_history as ah')
        .whereIn(
            'account_history_id',
            db('war_iter_4_4.account_history')
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

const getTableData6 = (req, res, db) => {
    db.select(
        'battle_date',
        'total_strength'
    )
        .from('war_iter_5.account_history as ah')
        .whereIn(
            'account_history_id',
            db('war_iter_5.account_history')
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

const getTableData2 = (req, res, db) => {
    db.select(
        'battle_date',
        'total_strength'
    )
        .from('paper_trading_test.account_history as ah')
        .whereIn(
            'account_history_id',
            db('paper_trading_test.account_history')
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



module.exports = {
    getTableData,
    getTableData2, 
    getTableData3, 
    getTableData4, 
    getTableData5, 
    getTableData6,
}