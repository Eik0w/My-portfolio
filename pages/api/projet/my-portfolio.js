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
				github : false,
				githubLink : '',
				presentation: [
					"Le projet tarif-tabac est née à la base d'un projet SEO que je devais réaliser dans le cadre d'un examen lors de ma licence professionnelle.",
					"Il m'a tout d'abord été difficile de trouver un sujet à la fois intéressant pour moi, et qui mérite que le site soit visité, mais suite à une longue discussion avec mon colocataire de l'époque ( Bebert <3 ), l'idée à éclos ! Donner les informations sur le prix des cigarettes dans les différends pays d'Europe ! ",
					"À la base, le site était fait en full static, un site de 6 pages HTML en dur qui se suivait. Mais suite au succès assez inattendu du site, j'ai décidé d'en faire un site dynamique avec des pages généré en php. N'ayant pas l'envie de faire la partie PHP, j'ai décidé de collaborer avec un ami à moi pour qu'il puisse faire la partie PHP du site",
					"Aujourd'hui, le site n'est plus à jour par manque de temps, mais il continue de faire 2000 visites uniques par jour."
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
						img: "/img/js.png",
						classe : "is-js",
						name: "Javascript Vanilla"
					},
					{
						type: "img",
						img: "/img/html.png",
						classe : "is-html",
						name: "Html"
					},
					{
						type : "ico",
						name : "Design du site",
						classe : "is-design"
					},
					{
						type : "img",
						img : "/img/php.png",
						name : "Développement Php",
						classe : "is-php"
					},
				]
			}
	)
}