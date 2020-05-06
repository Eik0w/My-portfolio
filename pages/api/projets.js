export default (req, res) => {
	res.status(200).json(
			{
				projets: [
					{
						name: "Tarif Tabac",
						link: "/projet/tarif-tabac",
						classe : "is-tarif",
						img: "/img/projects/tabac.png"
					},
					{
						name: "React Movie Database",
						link: "/projet/react-movie-database",
						classe : "is-movie",
						img: "/img/projects/movie.png"
					},
					{
						name: "React Simple Roadmap",
						link: "/projet/react-simple-roadmap",
						classe : "is-roadmap",
						img: "/img/projects/roadmap.png"
					},
					{
						name: "Master Mind",
						link: "/projet/master-mind",
						classe : "is-mastermind",
						img: "/img/projects/master.png"
					},
					{
						name: "My portfolio",
						link: "/projet/my-portfolio",
						classe : "is-portfolio",
						img: "/img/projects/portfolio.png"
					}
				]
			}
	)
}