'use strict';

const Bank = require('../models/bank.model');
exports.findAll = function (req, res) {
	Bank.findAll(function (err, bank) {
		console.log('controller');
		if (err) res.send(err);
		console.log('res', bank);
		res.send(bank);
	});
};

exports.create = function (req, res) {
	const new_bank = new Bank(req.body);
	//handles null error
	if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
		res
			.status(400)
			.send({ error: true, message: 'Please provide all required field' });
	} else {
		Bank.create(new_bank, function (err, bank) {
			if (err) res.send(err);
			res.json({
				error: false,
				message: 'Bank added successfully!',
				data: bank,
			});
		});
	}
};

exports.update = function (req, res) {
	if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
		res
			.status(400)
			.send({ error: true, message: 'Please provide all required field' });
	} else {
		Bank.update(req.params.id, new Bank(req.body), function (err, bank) {
			if (err) res.send(err);
			res.json({ error: false, message: 'Bank successfully updated' });
		});
	}
};

exports.delete = function (req, res) {
	Bank.delete(req.params.id, function (err, bank) {
		if (err) res.send(err);
		res.json({ error: false, message: 'Bank successfully deleted' });
	});
};
