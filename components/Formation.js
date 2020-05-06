import {Link} from "@material-ui/icons";

export default function Formation({info}) {

	return (
			<article className={"c-grid__formation"}>
				<section className={"c-grid__formationLeft"}>
					<section className={"c-grid__block is-white is-formation"}>
						<img className={"c-grid__formationImg"} src={info.imgLink} title={'image de '+info.name}/>
					</section>
				</section>
					<section className={"c-grid__formationRight"}>
						<section className={"c-grid__block is-doubleW is-blue is-smallF is-etabName"}>{info.name}</section>
						<section className={"c-grid__block is-doubleW is-green is-smallF is-diplome"}>{info.diplome}</section>
						<section className={"c-grid__block is-red is-mediumF is-etabLink"}><a className={"is-insideLink"} target={"_blank"} href={info.link}><Link fontSize={"inherit"}/></a></section>
						<section className={"c-grid__block is-red is-begin"}>{info.begin}</section>
						<section className={"c-grid__block is-orange is-end"}>{info.end}</section>
						<section className={"c-grid__block is-pink is-dept"}>{info.departement}</section>
						<section className={"c-grid__block is-blue is-mediumF is-doubleW is-location"}>{info.location}</section>
					</section>
			</article>
	)
}