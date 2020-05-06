import {Link} from "@material-ui/icons";
import Skills from "./Skills";

export default function Experience ({info}) {
	return(
			<article className={"c-grid__formation"}>
				<section className={"c-grid__formationLeft"}>
					<section className={"c-grid__block is-formation "+info.classe}>
						<img src={info.imgLink} className={"c-grid__formationImg"} title={"Société "+info.name}/>
					</section>
				</section>
				<section className={"c-grid__formationRight"}>
					<section className={"c-grid__block is-doubleW is-green is-mediumF is-entrName"}>{info.name}</section>
					<section className={"c-grid__block is-red is-begin is-smallF"}>{info.begin}</section>
					<section className={"c-grid__block is-orange is-end is-smallF"}>{info.end}</section>
					<section className={"c-grid__block is-blue is-entrLink"}><a className={"is-insideLink"} target={"_blank"} href={info.link}><Link fontSize={"inherit"}/></a></section>
					<section className={"c-grid__block is-doubleW is-poste is-smallF is-orange"}>{info.role}</section>
					<section className={"c-grid__block is-doubleW is-location is-blue is-mediumF"}>{info.location}</section>
					<section className={"c-grid__block is-green is-dept"}>{info.departement}</section>
					{info.skills.map((elem,key) => {
						return <Skills info={elem} key={key}/>
					})}
				</section>
			</article>
	)
}