import Link from "next/link";

export default function Projects({info}) {

	return (
			<article className={"c-grid"}>
				<section className={"c-grid__titlePart"}><h2 className={"c-grid__titlePart"}>Mes projets personnels</h2>
				</section>
				{info.map((elem, key) => {
					return (<section className={"c-grid__block is-doubleW " + elem.classe}>
						<Link href={"projet/[id]"} as={elem.link}>
							<a title={"Projet Frontend " + elem.name}>
								<img className={"c-grid__formationImg"} src={elem.img} title={elem.name}/>
							</a>
						</Link>
					</section>)
				})}
			</article>
	)
}