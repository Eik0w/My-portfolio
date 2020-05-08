import {GitHub, Link} from "@material-ui/icons";
import Skills from "./Skills";

export default function Project({info}) {
	const tabS = ['','','',''];
	return (
			<article className={"c-grid"}>
				<section className={"c-grid__titlePart"}><h2 className={"c-grid__titlePart"}>{info.name}</h2></section>
				<section className={"c-grid__block is-doubleW " + info.classe}><img className={"c-grid__formationImg"}
				                                                                    src={info.img} title={info.name}/></section>
				<section className={"c-grid__block is-doubleW is-mediumF is-blue is-statut"}>{info.statut}</section>
				<section className={"c-grid__block is-host " + info.classeHost}></section>
				<section className={"c-grid__block is-red is-pLink"}><a className={"is-insideLink"} target={"_blank"}
				                                                        href={info.link}><Link fontSize={"inherit"}/></a>
				</section>
				<section className={"c-grid__homeLeftPart"}>
					<section className={"c-grid__block is-green is-big is-projectPres"}>
						{info.presentation.map((elem, key) => {
							return (<p key={key}>{elem}</p>);
						})}
					</section>
				</section>
				<section className={"c-grid__homeRightPart"}>
					{tabS.map((elem,key)=> {
						return <Skills info={info.skills[key]} />
					})}
				</section>
				{info.github &&
					<section className={"c-grid__block is-ico is-pink is-githubProject"}><a className={"is-insideLink"} target={"_blank"} href={info.githubLink}><GitHub color={"inherit"} fontSize={"inherit"}/></a></section>
				}
				{info.skills.map((elem,key)=> {
					return (key > 3 && <Skills info={elem} />)
				})}


			</article>
	)

}