export default function Home(props) {

	return (
			<article className={"c-grid"}>
				<section className={"c-grid__block is-profil"}></section>
				<section className={"c-grid__block is-doubleW is-orange is-firstName"}>{props.info.firstName}</section>
				<section className={"c-grid__block is-doubleW is-blue is-name"}>{props.info.name}</section>
				<section className={"c-grid__block is-pink is-age"}>{new Date().getFullYear() - props.info.age}</section>
				<article className={"c-grid__homeContainer"}>
					<section className={"c-grid__homeLeftPart"}>
						<article className={"c-grid__block is-green is-big is-tech"}>
							<p>{props.info.technicalPresentation.line1}</p>
							<p>{props.info.technicalPresentation.line2}</p>
							<p>{props.info.technicalPresentation.line3}</p>
							<p>{props.info.technicalPresentation.line4}</p>
						</article>
					</section>
					<section className={"c-grid__homeRightPart"}>
						<section
								className={"c-grid__block is-doubleW is-red is-mediumF is-location"}>{props.info.location}</section>
						<section className={"c-grid__block is-oxatis"}></section>
						<section className={"c-grid__block is-dve"}></section>
					</section>
				</article>
				<article className={"c-grid__homeContainer"}>
					<section className={"c-grid__homeRightPart"}>
						<section className={"c-grid__block is-mlp"}></section>
						<section className={"c-grid__block is-travaux"}></section>
						<section className={"c-grid__block is-doubleW is-pink is-mediumF is-poste"}>{props.info.poste}</section>
					</section>
					<section className={"c-grid__homeLeftPart"}>
						<article className={"c-grid__block is-blue is-big is-pres"}>
							<p>{props.info.personalPresentation.line1}</p>
							<p>{props.info.personalPresentation.line2}</p>
							<p>{props.info.personalPresentation.line3}</p>
							<p>{props.info.personalPresentation.line4}</p>
							<p>{props.info.personalPresentation.line5}</p>
						</article>
					</section>
				</article>
				{/* language=CSS */}
				<style jsx>{`

           

           
            
          

				`}</style>
			</article>
	)
}