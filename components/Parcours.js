import {
	Build,
	DevicesOther,
	DriveEta, EmojiEmotions,
	Flight, GitHub, Link,
	PeopleAlt, PictureAsPdf,
	SportsEsports,
	SportsSoccer,
	Theaters, ThumbUp
} from "@material-ui/icons";
import Formation from "./Formation";
import Experience from "./Experience";

export default function Parcours(props) {

	return (
			<>
				<article className={"c-grid"}>
					<section className={"c-grid__titlePart"}><h2 className={"c-grid__titlePart"}>Informations générales :</h2></section>
					<section className={"c-grid__block is-profil"}></section>
					<section className={"c-grid__block is-doubleW is-orange is-firstName"}>{props.info.firstName}</section>
					<section className={"c-grid__block is-doubleW is-blue is-name"}>{props.info.name}</section>
					<section className={"c-grid__block is-pink is-age"}>{new Date().getFullYear() - props.info.age}</section>
					<section className={"c-grid__block is-red is-doubleW is-mediumF is-location"}>{props.info.location}</section>
					<section className={"c-grid__block is-pink is-doubleW is-level"}>{props.info.level}</section>
					<section className={"c-grid__block is-green is-ico is-drive"}><DriveEta fontSize={"inherit"}/></section>
					<section className={"c-grid__block is-orange is-ico is-maried"}><PeopleAlt fontSize={"inherit"}/></section>
					<section className={"c-grid__block is-green is-xp is-mediumF"}>{new Date().getFullYear() - props.info.xp} ans</section>
					<section className={"c-grid__block is-blue is-motivated is-ico"}><EmojiEmotions color={"inherit"} fontSize={"inherit"}/></section>
					<section className={"c-grid__block is-orange is-serious is-ico"}><ThumbUp color={"inherit"} fontSize={"inherit"}/></section>
					<section className={"c-grid__block is-linkedIn"}><a className={"is-insideLink"} target={"_blank"} href={"https://www.linkedin.com/in/bryan-schmitt-28479385/"}></a></section>
					<section className={"c-grid__block is-ico is-pink is-github"}><a className={"is-insideLink"} target={"_blank"} href={"https://github.com/Eik0w"}><GitHub color={"inherit"} fontSize={"inherit"}/></a></section>
					<section className={"c-grid__block is-ico is-red is-cv"}><a className={"is-insideLink"} target={"_blank"} href={"/pdf/cv_bryan_schmitt.pdf"}><PictureAsPdf color={"inherit"} fontSize={"inherit"}/></a></section>
				</article>

				<article className={"c-grid"}>
					<section className={"c-grid__titlePart"}><h2 className={"c-grid__titlePart"}>Mes formations :</h2></section>
					{props.info.formation.map((elem,key) => {
						return <Formation info={elem} key={key}/>
					})}
				</article>

				<article className={"c-grid"}>
					<section className={"c-grid__titlePart"}><h2 className={"c-grid__titlePart"}>Mes experiences :</h2> </section>
					{props.info.experience.map((elem,key) => {
						return <Experience info={elem} key={key}/>
					})}
				</article>

				<article className={"c-grid"}>
					<section className={"c-grid__titlePart"}><h2 className={"c-grid__titlePart"}>Mes centres d'interêt :</h2> </section>
					<section className={"c-grid__block is-green is-ico is-game"}><SportsEsports color={"inherit"} fontSize={"inherit"}/></section>
					<section className={"c-grid__block is-red is-ico is-cinema"}><Theaters color={"inherit"} fontSize={"inherit"}/></section>
					<section className={"c-grid__block is-orange is-ico is-fly"}><Flight color={"inherit"} fontSize={"inherit"}/></section>
					<section className={"c-grid__block is-blue is-ico is-newTech"}><DevicesOther color={"inherit"} fontSize={"inherit"}/></section>
					<section className={"c-grid__block is-green is-ico is-foot"}><SportsSoccer color={"inherit"} fontSize={"inherit"}/></section>
					<section className={"c-grid__block is-red is-ico is-brico"}><Build color={"inherit"} fontSize={"inherit"}/></section>
				</article>
			</>
	)
}