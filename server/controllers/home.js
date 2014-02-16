/**
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
	if (req.user != undefined ){
		
	}
	res.render('home', {
		title: 'Home'
	});
};
