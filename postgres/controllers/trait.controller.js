const db = require('../db')
class TraitController
{
    async addTrait(req, res)// Добавление характеристики по названию из базы данных для пользователя 
    {
        const {trait, userid, setamount = 1} = req.body
        const traitid = (await db.query('SELECT * FROM traits WHERE name = $1', [trait])).rows[0].id
        if(!(await db.query('SELECT EXISTS( SELECT * FROM users_traits WHERE (users_id, traits_id) = ($1, $2))', [userid, traitid])).rows[0].exists)
        {
            const newtrait = await db.query('INSERT INTO users_traits(users_id, traits_id, amount) VALUES ($1, $2, $3) RETURNING *', [userid, traitid, setamount])
            res.json(newtrait.rows)
        }
        else
        {
            const newamount = ((await db.query('SELECT * FROM users_traits WHERE (users_id, traits_id) = ($1, $2)', [userid, traitid])).rows[0].amount)+setamount
            const uptrait = await db.query('UPDATE users_traits SET amount = $1 WHERE (users_id, traits_id) = ($2, $3) RETURNING *', [newamount, userid, traitid])
            res.json(uptrait.rows)
        }
    }

    async deleteTrait(req, res)// Удаление характеристики по названию из базы данных для пользователя 
    {
        const {trait, userid, setamount = 1} = req.body
        const traitid = (await db.query('SELECT * FROM traits WHERE name = $1', [trait])).rows[0].id
        if(!(await db.query('SELECT EXISTS( SELECT * FROM users_traits WHERE (users_id, traits_id) = ($1, $2))', [userid, traitid])).rows[0].exists)
        {
            res.json('Nothing to delete')
        }
        else
        if((await db.query('SELECT * FROM users_traits WHERE (users_id, traits_id) = ($1, $2)', [userid, traitid])).rows[0].amount > setamount)
        {
            const newamount = ((await db.query('SELECT * FROM users_traits WHERE (users_id, traits_id) = ($1, $2)', [userid, traitid])).rows[0].amount)-setamount
            const uptrait = await db.query('UPDATE users_traits SET amount = $1 WHERE (users_id, traits_id) = ($2, $3) RETURNING *', [newamount, userid, traitid])
            res.json(uptrait.rows)
        }
        else
        {
            const uptrait = await db.query('DELETE FROM users_traits WHERE (users_id, traits_id) = ($1, $2)', [userid, traitid])
            res.json(uptrait.rows)
        }
    }

    async addTeamTrait(req, res)// Добавление характеристики по названию из базы данных для команды и всех ее членов
    {
        const {trait, teamid, setamount = 1} = req.body
        const traitid = (await db.query('SELECT * FROM teamtraits WHERE name = $1', [trait])).rows[0].id
        if(!(await db.query('SELECT EXISTS( SELECT * FROM teams_teamtraits WHERE (teams_id, teamtraits_id) = ($1, $2))', [teamid, traitid])).rows[0].exists)
        {
            const newtrait = await db.query('INSERT INTO teams_teamtraits(teams_id, teamtraits_id, amount) VALUES ($1, $2, $3) RETURNING *', [teamid, traitid, setamount])
            const users = await db.query('SELECT * FROM users WHERE teams_id = $1', [teamid]);
            users.rows.forEach(user =>  db.query('INSERT INTO users_teamtraits VALUES ($1, $2, $3) ', [user.id, traitid, setamount]))
            res.json(newtrait.rows)
        }
        else
        {
            const newamount = ((await db.query('SELECT * FROM teams_teamtraits WHERE (teams_id, teamtraits_id) = ($1, $2)', [teamid, traitid])).rows[0].amount)+setamount
            const users = await db.query('SELECT * FROM users WHERE teams_id = $1', [teamid]);
            users.rows.forEach(user =>  db.query('UPDATE users_teamtraits SET amount = $1 WHERE (users_id, teamtraits_id) = ($2, $3)', [newamount, user.id, traitid]))
            const uptrait = await db.query('UPDATE teams_teamtraits SET amount = $1 WHERE (teams_id, teamtraits_id) = ($2, $3) RETURNING *', [newamount, teamid, traitid])
            res.json(uptrait.rows)
        }
    }

    async deleteTeamTrait(req, res)// Удаление характеристики по названию из базы данных для команды и всех ее членов
    {
        const {trait, teamid, setamount = 1} = req.body
        const traitid = (await db.query('SELECT * FROM teamtraits WHERE name = $1', [trait])).rows[0].id
        if(!(await db.query('SELECT EXISTS( SELECT * FROM teams_teamtraits WHERE (teams_id, teamtraits_id) = ($1, $2))', [teamid, traitid])).rows[0].exists)
        {
            res.json('Nothing to delete')
        }
        else
        if((await db.query('SELECT * FROM teams_teamtraits WHERE (teams_id, teamtraits_id) = ($1, $2)', [teamid, traitid])).rows[0].amount > setamount)
        {
            const newamount = ((await db.query('SELECT * FROM teams_teamtraits WHERE (teams_id, teamtraits_id) = ($1, $2)', [teamid, traitid])).rows[0].amount)-setamount
            const users = await db.query('SELECT * FROM users WHERE teams_id = $1', [teamid]);
            users.rows.forEach(user =>  db.query('UPDATE users_teamtraits SET amount = $1 WHERE (users_id, teamtraits_id) = ($2, $3)', [newamount, user.id, traitid]))
            const uptrait = await db.query('UPDATE teams_teamtraits SET amount = $1 WHERE (teams_id, teamtraits_id) = ($2, $3) RETURNING *', [newamount, teamid, traitid])
            res.json(uptrait.rows)
        }
        else
        {
            const users = await db.query('SELECT * FROM users WHERE teams_id = $1', [teamid]);
            users.rows.forEach(user =>  db.query('DELETE FROM users_teamtraits WHERE (users_id, teamtraits_id) = ($1, $2)', [user.id, traitid]))
            const uptrait = await db.query('DELETE FROM teams_teamtraits WHERE (teams_id, teamtraits_id) = ($1, $2)', [teamid, traitid])
            res.json(uptrait.rows)
        }
    }

    async getTrait(req, res)
    {
        const {id} = req.body
        const traits = (await db.query('SELECT traits_id FROM users_traits WHERE users_id = $1', [id])).rows
        console.log(traits)
        const teamtraits = (await db.query('SELECT * FROM users_teamtraits WHERE users_id = $1', [id])).rows
        console.log(teamtraits)
        res.json(traits + teamtraits)
    }
}

module.exports = new TraitController()
