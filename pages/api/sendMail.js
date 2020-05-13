const sgMail = require('@sendgrid/mail');
export default async function(req,res) {
	sgMail.setApiKey('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');
	console.log('iZOK ICI !!!',req.body.objMail)
	try{
		await sgMail.send(req.body.objMail);
		res.status(200).json({txt : 'Le message a été envoyé avec succès.'});
	} catch (e) {
		console.log('ERROR ', e);
		res.status(400).json({txt : 'Une erreur s\'est produite, veuillez reassayer ulterieurement', error : e})
	}
}