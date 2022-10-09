const db = require('../db')

class EventController
{
    async addEvent(req,res) // Добавление мероприятия в базу данных
    {
        const {date, name, desc = ""} = req.body
        const event = await db.query('INSERT INTO events(name, date, description) VALUES ($1, $2, $3)', [name, date, desc])
        res.json(event.rows)
    }

    async getOneEvent(req, res) // Выбор мероприятия по идентификатору
    {
        const id = req.params.id
        const event = await db.query('SELECT * FROM events WHERE id = $1', [id])
        res.json(event.rows)
    }

    async getEvents(req,res) // Выбор всех мероприятий в базе
    {
        const events = await db.query('SELECT * FROM events')
        res.json(events.rows)
    }

    async getPic(req, res) //Получение изображения для превью мероприятия
    {
        const id = req.params.id
        const epic = await db.query('SELECT * FROM eventpics WHERE id = $1', [id])
        res.json('http://localhost:8000/'+epic.rows[0].pic)
    }
    async signForEvent(req, res) //Записать пользователя на мероприятие
    {
        const {userid, eventid} = req.body
        const sign = await db.query('INSERT INTO users_events VALUES ($1, $2)', [userid, eventid])
        res.json(sign.rows)
    }
    async getTestEvent(req, res) //Получить тестовый набор данных в том же формате, что возвращает база данных
    {
        res.json(
            [
                {"id": 3, "name": "event 03", "date": "2222-01-01 22:22:00"},
                {"id": 4, "name": "event 04", "date": "2222-01-01 22:22:00"},
                {"id": 5, "name": "event 05", "date": "2222-01-01 22:22:00"}
            ]
        )
    }
}





module.exports = new EventController()