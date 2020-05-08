export default (req, res) => {
	res.status(200).json(
			{
				name: "Mon portfolio",
				statut: "Terminé",
				classe: "is-green",
				img: "/img/projects/portfolio.png",
				link: "TODO",
				host: "/img/ovh.png",
				classeHost: "is-ovh",
				github : true,
				githubLink : 'https://github.com/Eik0w/My-portfolio',
				presentation: [
					"J'ai réalisé mon portfolio durant la période de confinement de 2020 suites à la pandémie du COVID-19. ",
					"Dans un premier temps, j'avais vraiment envie d'apprendre comment utiliser NextJs. Cela faisait un moment que j'entendais parler de la fameuse JAMSTACK, et c'était assez excitant de pouvoir apprendre sur un projet réel",
					"Le portfolio collait parfaitement à l'utilisation pour NextJS, cela m'a permis de travailler toutes les parties de Next. En plus de cela j'ai pu tester un design que j'avais en tête depuis longtemps, je trouve le résultat pas mal, un mélange de 4 couleurs complémentaires mélangé partout sur le site avec un effet block 'windows10', ça ne plairat pas forcément à tout le monde mais moi ça va :)." ,
					"Grâce à ce portfolio, je comprends désormais comment fonctionne NextJS, et j'adore ça :) !"
				],
				skills : [
					{
						type: "img",
						img: "/img/responsive.png",
						classe : "is-responsive",
						name: "Responsive Design"
					},
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
						type: "img",
						img: "/img/bem.png",
						classe : "is-bem",
						name: "Bem Css"
					},
					{
						type : "ico",
						name : "Design du site",
						classe : "is-design"
					},
					{
						type : "img",
						img : "/img/next.jpg",
						name : "NextJS",
						classe : "is-next"
					},
				]
			}
	)
}