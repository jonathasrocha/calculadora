const express = require('express');
const mongoose = require('mongoose');
const calculadora = require("../calculadora");

const router = express.Router();
const Ad = mongoose.model('Ad');
const { check, validationResult } = require('express-validator');

router.get('/', (req, res) => {
	console.log(req.body);
	res.render('form', {title: 'Registration form'});
});

router.post('/',[
    	check('name')
      		.isLength({ min: 1 })
      		.withMessage('Please enter a announcement name'),
    	check('client')
      		.isLength({ min: 1 })
      		.withMessage('Please enter an Client name'),
	check('start')
		.isDate()
		.withMessage('Please enter a start date with format YYYY-mm-dd'),
	check('end')
		.isDate()
		.withMessage('Please enter a end date with format YYYY-mm-dd'),
	check('investment')
		.isDecimal({decimal_digits: '2', locale: 'pt-BR'})
		.withMessage('Please enter the investment per day with decimal format')
  ], (req, res) => {
	const errors = validationResult(req);

    	if (errors.isEmpty()) {
		const ad = new Ad(req.body);
  		ad.save()
    		.then(() => { res.rend('form', {title: 'Ad Register'}); })
    		.catch((err) => {
      		console.log(err);
      		res.send('Sorry! Something went wrong.');
    		}); 
    	} else {
      		res.render('form', {
        	title: 'Registration form',
        	errors: errors.array(),
        	data: req.body,
      });
    }
});

router.get('/ads', (req, res) => {
  Ad.find()
    .then((ads) => {
      res.render('index', { title: 'Listing Ads', ads, calculadora});
    })
    .catch((e) => { res.send('Sorry! Something went wrong.'+e); });
});

router.post('/ads',[
	check('client')
                .isLength({ min: 1 })
		.optional({nullable: true})
                .withMessage('Please enter a start date with format YYYY-mm-dd'),
	check('start_date')
                .isDate()
		.optional({nullable: true})
                .withMessage('Please enter a start date with format YYYY-mm-dd'),
	check('end_date')
                .isDate()
		.optional({nullable: true})
                .withMessage('Please enter a start date with format YYYY-mm-dd')
], (req, res) => {
	const errors = validationResult(req);

        if (errors.isEmpty()) {
	console.error(req.body)	
	Ad.find({client : req.body.Client})
    		.then((ads) => {
      		res.render('index', { title: 'Listing Ads', ads, calculadora});
    	})
    	.catch((e) => { res.send('Sorry! Something went wrong.'+e); });

	}
	else{
		res.render('index', {
                title: 'calculadora',
                errors: errors.array(),
                data: req.body
	});
	}
});

module.exports = router;
