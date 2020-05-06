export default (req, res) => {
	res.status(200).json(
			{
				firstName: 'Bryan',
				poste: "Développeur Front-End",
				name: 'Schmitt',
				location: 'Aix En Provence',
				age: '29',
				technicalPresentation: {
					line1: "Il est toujours un peu fastidieux de se présenter sans être redondant, on va quand même essayer ici de le faire proprement ! ",
					line2: "Mon nom est Bryan, Je suis développeur Front-End depuis 2011.",
					line3: "J'ai toujours été attiré par le développement en général, mais je n'arrivais pas vraiment à trouver ma place dans le \"pure coding\". En effet écrire des lignes de codes invisibles qui donnent un rendu texte dans une console sur fond noir ne m'interessaient pas.",
					line4: "C'est pourquoi j'ai trouvé mon bonheur dans le métier de développeur Front-End, qui a, bien évolué depuis que je le pratique, ce qui n'est pas pour me déplaire :). L'alliance du rendu graphique ainsi que du développement optimisé me passionne. J'adore avoir un rendu physique de ce que je suis en train de faire, et c'est pour cela que c'est ce métier que j'ai choisi de pratiquer."
				},
				personalPresentation: {
					line1: "Dans la vie je suis quelqu'un de social, jovial et curieux. ",
					line2: "Je vis à Aix En Provence, et je suis papa depuis juillet 2020 et pacsé avec la maman de ma fille depuis 2017 !",
					line3: "Je suis un passionné de jeux en général et particulièrement des jeux vidéo, je passe pas mal de temps sur cette passion, et je possède même un niveau pas trop dégueux sur certains d'entre eux :) !",
					line4: "Je suis un fan de football, que je suis presque tous les week-ends, ainsi que de cinéma et de voyages.",
					line5: "Jusqu'ici, tout était beau, mais vu qu'une de mes qualités principales est l'honnêteté, je vais aussi vous parler de mes défauts ! Donc je suis aussi râleur, grognon (le matin) et très mauvais perdant (mais je perds rarement).`"
				}
			}



	)
}