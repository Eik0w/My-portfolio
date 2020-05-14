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
				poste: "Développeur Front-End",
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
					line5: "Jusqu'ici, tout était beau, mais vu qu'une de mes qualités principales est l'honnêteté, je vais aussi vous parler de mes défauts ! Donc je suis aussi râleur, grognon (le matin) et très mauvais perdant (mais je perds rarement)."
				},
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