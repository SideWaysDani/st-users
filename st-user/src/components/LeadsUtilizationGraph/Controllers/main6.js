const getTableData = (req, res, db) => {
    db.raw(`
        WITH allocs AS (
          SELECT 2020 AS year, lead_id FROM war_iter_5.allocation_history
          UNION ALL
          SELECT 2021, lead_id FROM war_iter_4_4.allocation_history
          UNION ALL
          SELECT 2022, lead_id FROM war_iter_4_3.allocation_history
          UNION ALL
          SELECT 2023, lead_id FROM war_iter_4_2.allocation_history
          UNION ALL
          SELECT 2024, lead_id FROM war_iter_4.allocation_history
          UNION ALL
          SELECT 2025, lead_id FROM war_iter_6.allocation_history
        ),
        leads AS (
          SELECT EXTRACT(YEAR FROM lead_date)::int AS year, id
          FROM stocktrader.leads_gold_ml
          WHERE lead_date >= '2020-01-01' AND lead_date < '2026-01-01'
        ),
        leads_per_year AS (
          SELECT year, COUNT(*)::int AS leads_generated
          FROM leads
          GROUP BY year
        ),
        allocs_per_year AS (
          SELECT year, COUNT(DISTINCT lead_id)::int AS leads_allocated
          FROM allocs
          GROUP BY year
        ),
        per_year AS (
        SELECT y.year,
                 COALESCE(l.leads_generated, 0) AS leads_generated,
                 COALESCE(a.leads_allocated, 0) AS leads_allocated
          FROM (SELECT DISTINCT year FROM leads
                UNION
                SELECT DISTINCT year FROM allocs) y
          LEFT JOIN leads_per_year  l ON l.year = y.year
          LEFT JOIN allocs_per_year a ON a.year = y.year
        )
        SELECT
          year,
          SUM(leads_generated) OVER (ORDER BY year)  AS cumulative_leads_generated,
          SUM(leads_allocated) OVER (ORDER BY year)  AS cumulative_leads_allocated
        FROM per_year
        ORDER BY year;
    `)
    .then(result => {
        const data = result.rows || result[0];
        if (data && data.length) {
            res.json(data);
        } else {
            res.json({ dataExists: 'false' });
        }
    })
    .catch(err => res.status(400).json({ dbError: 'db error', details: err }));
};

module.exports = {
    getTableData
}