export default (req, res) => {
	res.status(200).json(
			{
				name: "React Simple Roadmap",
				statut: "Terminé",
				classe: "is-roadmap",
				img: "/img/projects/roadmap.png",
				link: "https://ox-roadmap-front.firebaseapp.com/",
				host: "/img/firebase.png",
				classeHost: "is-firebase",
				github : true,
				githubLink : 'https://github.com/Eik0w/react-simple-roadmap',
				presentation: [
					"J'ai eu l'idée de faire ce projet quand je travaillais pour l'entreprise Oxatis. En effet nous devions à l'époque transmettre une roadmap sous forme de texte avec 7 parties différentes.",
					"A l'époque nous editions un fichier texte, dans le logiciel teams, et honnetement c'était une methode un peu éclaté qui nous enervais car la mise en page était tout le temps modifié ect ...",
					"J'ai donc décidé de mon propre chef de créer un petit outils de roadmap en react avec du drag and drop & un desing à la 'Trello' afin que ça soit beaucoup plus simple de mettre en place cette roadmap hebdomadaire" ,
					"Voici donc le fruit de mon travail, l'export ce fait en format texte avec la mise en forme voulu, et il est beaucoup plus simple maintenant de réaliser !"
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
					{
						type : "img",
						img : "/img/firebase-database.png",
						name : "Firebase real time database",
						classe : "is-firebaseDatabase"
					},
				]
			}
	)
}
