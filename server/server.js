const express = require("express");
const cors = require("cors");
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
// Initialize mongodb 
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const uri = "mongodb+srv://<your-mongodb-URL-here>";
var db = null;
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology:true }, (err, client) => {
	if (err) throw err;
	db = client;
	app.listen(PORT);
});

app.use(cors());	//avoid CORS policy
app.use(bodyParser.json());	// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));	// parse application/x-www-form-urlencoded

router.get('/',(req,res) => {
    res.send("Nothing to see here, shh shh!");
});

router.post('/makeReservation', (req, res) => {
	let data = {name: req.body.name, phone: req.body.phone, date: req.body.date, time: req.body.time};
	db.db("labonnenuit").collection("reservations_list").insertOne(data, (err, result) => {
		if (err) throw err;
		if (result){
			let response = {};
			response.status = "ok";
			response.message = "Saved!";
			res.send(response);
		}
	});
});

function compare( a, b ) {
  if ( a.date.std+a.date.month+a.date.date < b.date.std+b.date.month+b.date.date ){
    return -1;
  }
  if ( a.date.std+a.date.month+a.date.date > b.date.std+b.date.month+b.date.date ){
    return 1;
  }
  return 0;
}

router.post('/getReservationList', (req, res) => {
	db.db("labonnenuit").collection("reservations_list").find({}, {projection: {_id:0}}).toArray((err, result) => {
		if (err) throw err;
		if (result){
			let response = {};
			response.status = "ok";
			response.data = result.sort(compare);
			res.send(response);
		}
	});
});

router.post('/addMenu', (req, res) => {
	let data = {name: req.body.name, description: req.body.description, type: req.body.type, price:req.body.price};
	db.db("labonnenuit").collection("menu").insertOne(data, (err, result) => {
		if (err) throw err;
		if (result){
			let response = {};
			response.status = "ok";
			response.message = "Menu saved!";
			res.send(response);
		}
	});
});

router.get('/getMenu', (req, res) => {
	db.db("labonnenuit").collection("menu").find({}, {projection: {_id:0}}).toArray((err, result) => {
		if (err) throw err;
		if (result){
			let response = {};
			response.status = "ok";
			response.data = result;
			res.send(response);
		}
	})
});

router.get('/wake', (req,res)=>{
	let response = {status: "ok"};
	res.send(response);
});


app.use(router);
