const db = require('../db')
const fetch = require('node-fetch')

class FinanceController
{
    async createWallet(req, res) // Создание кошелька для юзера с конкретным id, занесение платежной информации в соответствующие таблицы БД
    {
        const {id} = req.body
        const response = await fetch('https://hackathon.lsp.team/hk/v1/wallets/new', {"method": "POST"})
        const json = await response.json()
        const {publicKey, privateKey} = json
        await db.query('INSERT INTO publickeys VALUES ($1, $2)', [id, publicKey])
        await db.query('INSERT INTO privatekeys VALUES ($1, $2)', [id, privateKey])
        res.json(json)
    }

    async getMarket(req, res) // Получение всего списка лотов находящихся на данный момент на рынке
    {
        const lots = await db.query('SELECT * FROM market')
        res.json(lots)
    }

    async getTestMarket(req, res) // Получение тестового списка лотов магазина в том же формате, что возвращает база данных 
    {
        res.json([
            {"id": 1, "user_id": 1, "name": "Lot 1", "des": "Some lot", "picurl": "http://localhost:8000/tovar 01.png"},
            {"id": 2, "user_id": 2, "name": "Lot 2", "des": "Some lot", "picurl": "http://localhost:8000/tovar 02.png"},
            {"id": 3, "user_id": 3, "name": "Lot 3", "des": "Some lot", "picurl": "http://localhost:8000/tovar 03.png"},
            {"id": 4, "user_id": 4, "name": "Lot 4", "des": "Some lot", "picurl": "http://localhost:8000/tovar 04.png"},
            {"id": 5, "user_id": 5, "name": "Lot 5", "des": "Some lot", "picurl": "http://localhost:8000/tovar 05.png"},
            {"id": 6, "user_id": 6, "name": "Lot 6", "des": "Some lot", "picurl": "http://localhost:8000/tovar 06.png"}
        ])
    }

    async transactionMatic(req, res) // Проведение операции в валюте Matic
    {
        const{buyerid, sellerid, amount} = req.body
        const buyerPrivateKey = (await db.query('SELECT * from privatekeys WHERE id = $1', [buyerid])).rows[0].privkey
        const sellerPublicKey = (await db.query('SELECT * from publickeys WHERE id = $1', [sellerid])).rows[0].pubkey
        console.log(buyerPrivateKey, sellerPublicKey)
        const response = await fetch('https://hackathon.lsp.team/hk/v1/transfers/matic', 
        {method: "POST",
        headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        ,
        body: {"mode": "raw", "fromPrivateKey": buyerPrivateKey, "toPublicKey": sellerPublicKey, "amount": amount, "options": {
            "raw": {
                "language": "json"
            }
        }}})
        const json = await response.json()
        const hash = json
        console.log(response)
        const secondresponse = await fetch(`https://hackathon.lsp.team/hk/v1/transfers/status/${hash}`, {method: "GET"})
        const secondjson = await secondresponse.json()
        res.json(secondjson)
    }

    async transactionRuble(req, res) // Проведение операции в валюте Ruble
    {
        const{buyerid, sellerid, amount} = req.body
        const buyerPrivateKey = (await db.query('SELECT * from privatekeys WHERE id = $1', [buyerid])).rows[0].privkey
        const sellerPublicKey = (await db.query('SELECT * from publickeys WHERE id = $1', [sellerid])).rows[0].pubkey
        console.log(buyerPrivateKey, sellerPublicKey)
        const response = await fetch('https://hackathon.lsp.team/hk/v1/transfers/ruble', 
        {method: "POST",
        headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        ,
        body: {"mode": "raw", "fromPrivateKey": buyerPrivateKey, "toPublicKey": sellerPublicKey, "amount": amount, "options": {
            "raw": {
                "language": "json"
            }
        }}})
        const json = await response.json()
        const hash = json
        console.log(response)
        const secondresponse = await fetch(`https://hackathon.lsp.team/hk/v1/transfers/status/${hash}`, {method: "GET"})
        const secondjson = await secondresponse.json()
        res.json(secondjson)
    } 
    
    async walletStatus(req, res) // Получение статуса кошелька по айди пользователя
    {
        const id = req.params.id
        const publicKey = (await db.query('SELECT * FROM publickeys WHERE id = $1', [id])).rows[0].id
        const response = await fetch(`https://hackathon.lsp.team/hk/v1/wallets/${publicKey}/balance`, {"method": "GET"})
        const json = await response.json()
        res.json(json)
    }
}





module.exports = new FinanceController()