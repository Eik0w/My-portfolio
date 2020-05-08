export default (req, res) => {
	res.status(200).json(
			{
				name: "React Movie Database",
				statut: "Terminé",
				classe: "is-movie",
				img: "/img/projects/movie.png",
				link: "https://perso-47ffa.firebaseapp.com/",
				host: "/img/firebase.png",
				classeHost: "is-firebase",
				github : true,
				githubLink : 'https://github.com/Eik0w/react-movie',
				presentation: [
					"J'ai réalisé ce projet pour m'améliorer en React, en effet j'ai participé à une formation afin d'apprendre les bases de react, et j'ai voulu essayer de me perfectionner avec cette librairie",
					"Etant un fan de cinéma & de série, et ayant accès gratuitement à une base de donnée via 'the movie database', j'ai décidé de faire une interface cool de recherche de film et de série, ce qui m'a permis de bien m'améliorer et de mieux comprendre.",
					"J'ai réaliser le design du projet, en m'appuyant beaucoup sur les composant de matérial, afin de comprendre comment les utiliser et aussi parce qu'ils sont assez userFriendly." ,
					"Au final, ce projet a été très cool à réaliser, il reste quelques petits bugs présent, car c'était mon premier 'gros' projet avec react, mais je suis quand même assez fier du résultat pour le mettre ici =) !"
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
					},
				]
			}
	)
}