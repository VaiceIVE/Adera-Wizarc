const db = require('../db')

class TeamController
{
    async createTeam(req, res) // Создание команды
    {
        const {name} = req.body
        const team = await db.query('INSERT INTO teams(name) VALUES ($1)', [name])
        res.json(team.rows)
    }

    async deleteTeam(req, res) // Удаление команды
    {
        const id = req.params.id
        await db.query('UPDATE users SET teams_id = $1 WHERE teams_id = $2', [null, id])
        await db.query('DELETE FROM teams_teamtraits WHERE teams_id = $1', [id])
        const team = await db.query('DELETE FROM teams WHERE id = $1', [id])
        res.json(team.rows)
    }
}



module.exports = new TeamController()