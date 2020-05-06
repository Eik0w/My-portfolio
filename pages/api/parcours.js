import {Brush, MenuBook, MonetizationOn} from "@material-ui/icons";

export default (req, res) => {


	res.status(200).json(
			{
				firstName: 'Bryan',
				name: 'Schmitt',
				location: 'Aix En Provence',
				age:  1991,
				married: "Pacs",
				level: "Bac + 3",
				drive: "Permis B",
				xp : 2012,
				formation: [
					{
						name: "Université de Provence (Provence II)",
						location: "Gap",
						departement: "05",
						begin: "2011",
						end: "2012",
						diplome: "Licence MIW (multimédia internet webmaster)",
						link: "http://www.gap.univ-mrs.fr/miw/",
						imgLink: "/img/miw.png"
					},
					{
						name: "Lycée technologique de Lorgues",
						location: "Lorgues",
						departement: "83",
						begin: "2009",
						end: "2011",
						diplome: "BTS Informatique et réseau pour l'industrie et les services",
						link: "http://www.lycee-lorgues.fr/index.php/enseignement-superieur/bts-systemes-numeriques",
						imgLink: "/img/lorgues.png"
					},
					{
						name: "Lycée Jules Ferry",
						location: "Cannes",
						departement: "06",
						begin: "2006",
						end: "2009",
						diplome: "Baccalauréat STI Génie Electronique",
						link: "http://eole.lycee-jules-ferry.ac-nice.fr/joomla/index.php/decouvrir-le-lycee/les-formations/bac-sti2d",
						imgLink: "/img/julesferry.png"
					}
				],
				experience: [
					{
						name: "Travaux.com",
						classe : "is-travaux",
						imgLink: "/img/travaux.jpg",
						location: "Aix En Provence",
						departement: "13",
						begin: "Juin 2020",
						end: "Aujourd'hui",
						link: "https://www.travaux.com",
						role: "Développeur Front-End",
						skills: [
							{
								type: "img",
								img: "/img/react.png",
								classe : "is-react",
								name: "ReactJS"
							},
							{
								type: "img",
								img: "/img/next.jpg",
								classe : "is-next",
								name: "NextJs"
							},
							{
								type: "img",
								img: "/img/graphQL.png",
								classe : "is-graphql",
								name: "GraphQL"
							},
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
							}
						],
					},
					{
						name: "Oxatis",
						classe : "is-oxatis",
						imgLink: "/img/oxatis.png",
						location: "Marseille",
						departement: "13",
						begin: "Janvier 2017",
						end: "Juin 2020",
						link: "https://www.oxatis.com",
						role: "Développeur Front-End / Consultant Avant-vente technique",
						skills: [
							{
								type: "img",
								img: "/img/angular.png",
								classe : "is-angular",
								name: "Angular JS"
							},
							{
								type: "img",
								img: "/img/react.png",
								classe : "is-react",
								name: "ReactJS"
							},
							{
								type : "ico",
								ico : <MenuBook/>,
								name : "Rédaction de cahier des charges",
								classe : "is-spec"
							},
							{
								type: "img",
								img: "/img/js.png",
								classe : "is-js",
								name: "Javascript Vanilla"
							},
							{
								type: "img",
								img: "/img/bem.png",
								classe : "is-bem",
								name: "Bem Css"
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
								img: "/img/scrum.png",
								classe : "is-scrum",
								name: "Methode Agile Scrum"
							},
							{
								type : "ico",
								ico : <MonetizationOn/>,
								name : "Réalisation des chiffrages de demandes client",
								classe : "is-av"
							},
							{
								type: "img",
								img: "/img/responsive.png",
								classe : "is-responsive",
								name: "Responsive Design"
							}
						],
					},
					{
						name: "Digital Virgo Entertainment",
						classe : "is-dve",
						imgLink: "/img/dve.jpg",
						location: "Aix En Provence",
						departement: "13",
						begin: "Novembre 2012",
						end: "Janvier 2017",
						link: "https://www.digitalvirgo.com/fr/",
						role: "Développeur Front-End",
						skills: [
							{
								type: "img",
								img: "/img/js.png",
								classe : "is-js",
								name: "Javascript Vanilla"
							},
							{
								type: "img",
								img: "/img/backbone.png",
								classe : "is-backbone",
								name: "BackboneJS"
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
								type : "ico",
								ico : <Brush/>,
								name : "Création design backoffice",
								classe : "is-design"
							},
							{
								type: "img",
								img: "/img/scrum.png",
								classe : "is-scrum",
								name: "Methode Agile Scrum"
							},
							{
								type: "img",
								img: "/img/photoshop.png",
								classe : "is-ps",
								name: "Création / Découpage Photoshop"
							},
							{
								type: "img",
								classe : "is-responsive",
								img: "/img/responsive.png",
								name: "Responsive Design"
							}
						],
					},
					{
						name: "My Little Paris",
						classe : "is-mlp",
						imgLink: "/img/mlp.png",
						location: "Paris",
						departement: "75",
						begin: "Avril 2012",
						end: "Juillet 2012",
						link: "https://www.mylittleparis.com/",
						role: "Développeur Front-End",
						skills: [
							{
								type: "img",
								img: "/img/jquery.png",
								classe : "is-jquery",
								name: "Jquery"
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
								img: "/img/photoshop.png",
								classe : "is-ps",
								name: "Création / Découpage Photoshop"
							},
							{
								type: "img",
								img: "/img/responsive.png",
								classe : "is-responsive",
								name: "Responsive Design"
							}
						],
					}
				]
			}
	)
}