const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/data.db');

// Get all price entries
router.get('/prices', (req, res) => {
    const sql = 'SELECT * FROM lu_rou_fan_prices';
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.send(rows);
    });
});

module.exports = router;