export default (req, res) => {
	res.status(200).json(
			{
				name: "Master Mind",
				statut: "En cours",
				classe: "is-mastermind",
				img: "/img/projects/master.png",
				link: "https://master-mind-react.firebaseapp.com/",
				host: "/img/firebase.png",
				classeHost: "is-firebase",
				github : true,
				githubLink : 'https://github.com/Eik0w/react-master-mind',
				presentation: [
					"Un peu avant le confinement de 2020, j'ai eu un peu de temps pour moi dans le cadre de veilles technologiques.",
						"Toujours dans l'optique de m'améliorer sur React, j'ai cherché une idée pour faire un projet à la fois plaisant & 'utile' (ok ce n'est pas super utile, mais c'est plaisant), étant passionnée de jeu en général, le master-mind était un projet où un peu tout se rassemble",
						"Actuellement, j'ai un peu moins de temps pour le finir, donc j'ai quand même hébergé mon travail jusqu'à maintenant. Le projet est designé par moi-même, c'est surement la partie la plus visible du projet en ce moment. J'ai essayé de créer plusieurs niveaux d'étoiles pour avoir un rendu assez réaliste qui sont tous animés en CSS.",
						"Au final je ne sais pas quand j'aurai le temps de finir le projet, mais il sera fini un jour, c'est sur :)"
				],
				skills : [
					{
						type: "img",
						img: "/img/css.png",
						classe : "is-css",
						name: "Css"
					},
					{
						type: "img",
						img: "/img/html.png",
						classe : "is-html",
						name: "Html"
					},
					{
						type: "img",
						img: "/img/react.png",
						classe : "is-react",
						name: "React"
					},
					{
						type : "ico",
						name : "Design du site",
						classe : "is-design"
					},
					{
						type : "img",
						img : "/img/redux.png",
						name : "Redux",
						classe : "is-redux"
					},
					{
						type : "img",
						img : "/img/material.png",
						name : "Material UI",
						classe : "is-material"
					}
				]
			}
	)
}
