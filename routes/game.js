var express = require('express');
var router = express.Router();
// var config = require('../config');

/* GET home page. */
router.get('/', (req, res, next) => {

	let displayName = 'anonymous';
	let thumbUrl = 'anonymous';

	if (req.user) {

		displayName = req.user.displayName;
		thumbUrl = req.user.thumbUrl;
	}

	res.render('game',
		{
			title: '潜水艦ゲーム',
			displayName: displayName,
			thumbUrl: thumbUrl,
			ipAddress: process.env.ipAddress
		}
	);
});

module.exports = router;
