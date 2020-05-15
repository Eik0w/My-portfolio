const sgMail = require('@sendgrid/mail');
export default async function(req,res) {
	console.log('iZOK ICI !!!',req.body.objMail)
	try{
		await sgMail.send(req.body.objMail);
		res.status(200).send('Message envoyé');
	} catch (e) {
		console.log('ERROR ', e);
		res.status(400).json({txt : 'Message non envoyé', error : e})
	}
}