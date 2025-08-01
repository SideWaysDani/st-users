const insertNewUser = (req, res, db) => {
    const {
        username,
        password,
        full_name,
        email,
        alpaca_api_key,
        alpaca_secret_key
    } = req.body;

    if (!username || !password || !full_name || !email || !alpaca_api_key || !alpaca_secret_key) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    db('master.user')
        .insert({
            username,
            password,
            full_name,
            email,
            alpaca_api_key,
            alpaca_secret_key
        })
        .returning(['id', 'username', 'email'])
        .then(insertedUser => {
            res.json({ success: true, user: insertedUser[0] });
        })
        .catch(err => {
            console.error(err);
            res.status(400).json({ dbError: 'Unable to insert user' });
        });
};

module.exports = { insertNewUser };
