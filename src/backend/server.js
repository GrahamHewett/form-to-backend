const express = require('express')
const app = express()
const port = process.env.PORT || 3001;
const db = require('./db');

app.use(express.urlencoded())
app.use(express.json())

// HAVE A GO AT WRTIING A REQUEST TO RETRIEVE USER DATA THE SAME A S FOR KODFLIX
// app.get('/rest/retrieveUserData', async (req,res) => {
// 	await db.connect().then(async dbo => {
// 		const user = await dbo.collection('users').find({name: 'Viv'})
// 		res.send(user)
// 	})

app.post('/rest/storeUser', (req, res) => {
	console.log(req.body)
	db.connect().then(dbo => {
		dbo.collection('users').insertOne(req.body)
	})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.post('/rest/storeUser', (req, res) => {
	console.log('request body is ', req.body)
	res.send(req.body.user)
});

// db.connect().then(dbo => {
// 	dbo.collection('users').insertOne({user: 'hello'})
// })

// https://flaviocopes.com/node-request-data/
// https://stackoverflow.com/questions/4295782/how-to-process-post-data-in-node-js