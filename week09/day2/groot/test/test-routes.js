'use strict'

const test = require('tape')
const request = require('supertest')
const app = require('../routes')

test('groot endpoint', (t) => {
	request(app)
		.get('/groot')
		.expect(200)
		.expect('Content-Type', /json/)
		.expect({
			error: "I am Groot!"
		})
		.end((err, res) => {
			t.error(err);
			t.end()
		});
})

test('groot endpoint', (t) => {
	request(app)
		.get('/groot?message=kakafej')
		.expect(200)
		.expect('Content-Type', /json/)
		.expect({
			recieved: "kakafej",
			translated: "I am Groot"
		})
		.end((err, res) => {
			t.error(err);
			t.end()
		});
})

test('yondu endpoint', (t) => {
	request(app)
		.get('/yondu')
		.expect(200)
		.expect('Content-Type', /json/)
		.expect({
			error: "no agression son"
		})
		.end((err, res) => {
			t.error(err)
			t.end()
		})
})

test('yondu endpoint', (t) => {
	request(app)
		.get('/yondu?distance=100&time=10')
		.expect(200)
		.expect('Content-Type', /json/)
		.expect({
			distance: "100",
			speed: "10",
			time: "10"
		})
		.end((err, res) => {
			t.error(err);
			t.end()
		});
})

test('yondu endpoint', (t) => {
	request(app)
		.get('/yondu?distance=kakafej&time=10')
		.expect(200)
		.expect('Content-Type', /json/)
		.expect({
			error: "you can't do this son"
		})
		.end((err, res) => {
			t.error(err);
			t.end()
		});
})

test('rocket endpoint', (t) => {
	request(app)
		.get('/rocket')
		.expect(200)
		.expect('Content-Type', /json/)
		.expect({
			"caliber25": 0,
			"caliber30": 0,
			"caliber50": 0,
			"shipstatus": 0,
			"ready": false
		})
		.end((err, res) => {
			t.error(err)
			t.end()
		})
})

test('rocket fill endpoint', (t) => {
	request(app)
		.get('/rocket/fill?caliber=.50&amount=5000')
		.expect(200)
		.expect('Content-Type', /json/)
		.expect({
			"recieved": ".50",
			"amount": 5000,
			"shipstatus": "40%"
		})
		.end((err, res) => {
			t.error(err)
			t.end()
		})
})

test('rocket fill endpoint', (t) => {
	request(app)
		.get('/rocket/fill?caliber=fifty&amount=5000')
		.expect(200)
		.expect('Content-Type', /json/)
		.expect({
			"error": "y u cant write?"
		})
		.end((err, res) => {
			t.error(err)
			t.end();
		})
})

test('drax is here', (t) => {
	request(app)
		.get('/drax')
		.expect(200)
		.expect('Content-Type', /json/)
		.expect([{
				'name': 'lasagna',
				'amount': 1,
				'calorie': 40
			},
			{
				'name': 'panini',
				'amount': 6,
				'calorie': 68
			},
			{
				'name': 'babgulyas',
				'amount': 3,
				'calorie': 60
			},
			{
				'name': 'csirkemell',
				'amount': 4,
				'calorie': 8
			}
		])
		.end((err, res) => {
			t.error(err)
			t.end();
		})
})

test('drax got moreeeee', (t) => {
	request(app)
		.get('/drax/add?name=chocholate&amount=6&calorie=250')
		.expect(200)
		.expect('Content-Type', /json/)
		.expect([{
				'name': 'lasagna',
				'amount': 1,
				'calorie': 40
			},
			{
				'name': 'panini',
				'amount': 6,
				'calorie': 68
			},
			{
				'name': 'babgulyas',
				'amount': 3,
				'calorie': 60
			},
			{
				'name': 'csirkemell',
				'amount': 4,
				'calorie': 8
			},
			{
				'name': 'chocholate',
				'amount': 6,
				'calorie': 250
			}
		])
		.end((err, res) => {
			t.error(err)
			t.end();
		})
})

test('what happened to my foods?', (t) => {
	request(app)
		.get('/drax/change?name=lasagna&amount=11')
		.expect(200)
		.expect('Content-Type', /json/)
		.expect([{
				'name': 'lasagna',
				'amount': 12,
				'calorie': 40
			},
			{
				'name': 'panini',
				'amount': 6,
				'calorie': 68
			},
			{
				'name': 'babgulyas',
				'amount': 3,
				'calorie': 60
			},
			{
				'name': 'csirkemell',
				'amount': 4,
				'calorie': 8
			},
			{
				'name': 'chocholate',
				'amount': 6,
				'calorie': 250
			}
		])
		.end((err, res) => {
			t.error(err)
			t.end();
		})
})

test('drax ate something', (t) => {
	request(app)
		.get('/drax/remove?name=lasagna')
		.expect([{
				'name': 'panini',
				'amount': 6,
				'calorie': 68
			},
			{
				'name': 'babgulyas',
				'amount': 3,
				'calorie': 60
			},
			{
				'name': 'csirkemell',
				'amount': 4,
				'calorie': 8
			},
			{
				'name': 'chocholate',
				'amount': 6,
				'calorie': 250
			}
		])
		.end((err, res) => {
			t.error(err)
			t.end();
		})
})

test('awesome mix vol. 1', (t) => {
	request(app)
	.get('/awesome')
	.expect(200)
	.expect([
		{
			author: "Periphery",
			title: "Alpha",
			genre: "metal",
			year: 2015,
			rating: 10
		}
	])
	.end((err, res) => {
		t.error(err)
		t.end();
	})
})

test('awesome mix vol. 2', (t) => {
	request(app)
	.get('/awesome/add?author=Periphery&title=Omega&genre=metal&year=2015&rating=10')
	.expect(200)
	.expect([
		{
			author: "Periphery",
			title: "Alpha",
			genre: "metal",
			year: 2015,
			rating: 10
		},
		{
			author: "Periphery",
			title: "Omega",
			genre: "metal",
			year: 2015,
			rating: 10
		}
	])
	.end((err, res) => {
		t.error(err)
		t.end();
	})
})