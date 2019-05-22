const express = require('express')
const app = express()
const path = require('path');
const port = process.env.PORT || 3001;
const db = require('./db');

db.connect().then(dbo => {

	app.post('/rest/storeUser', (req, res) => {
		console.log(req, 'response is', res)
	});

    app.get('/rest/shows/:id', (req, res) => {
        dbo.collection('shows').findOne({id: req.params.id},(err, show) => {
            if (err) throw err;
            res.send(show || { error: 'not found!' });
        });
	});
	
	app.get('/rest/shows', (req, res) => {
        dbo.collection('shows').find({}).toArray((err, results) => {
            if (err) throw err;
            res.send(results);
        });
	});

    //Serve any static files from the build folder
    app.use(express.static(path.join(__dirname, '../../build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../../build', 'index.html'));
    });

    app.listen(port, () => console.log(`Example app listening on port ${port}!`))


    // Handle React routing, return all requests to React app
})