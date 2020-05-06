import {Brush, MenuBook, MonetizationOn} from "@material-ui/icons";
import variables from "../theme/variables";

export default function Skills({info}) {
	return (
			<>
				{(info.type === "img") && (
						<section className={"c-grid__block is-white is-skill is-img "+info.classe}>
							<img className={"c-grid__formationImg"} src={info.img} title={info.name}/>
						</section>
				)}
				{(info.type === "ico" && info.classe === "is-av") && (

							<section className={"c-grid__block is-red is-ico is-av"}>
								<MonetizationOn fontSize={"inherit"} color={"inherit"}/>
								{/*language=css*/}
								<style jsx>{`
									.is-av:before{
										display: block;
										color : #ffffff;
										position: absolute;
										text-align: left;
										left : 5px;
										top : 5px;
										font-size: 12px;
										content : "${info.name} :";
									}
								`}</style>
							</section>
				)}
				{(info.type === "ico" && info.classe === "is-design") && (
						<section className={"c-grid__block is-red is-ico is-design"}>
							<Brush fontSize={"inherit"} color={"inherit"}/>
							{/*language=css*/}
							<style jsx>{`
									.is-design:before{
										display: block;
										color : #ffffff;
										position: absolute; 
										text-align: left;
										left : 5px;
										top : 5px;
										font-size: 12px;
										content : "${info.name} :";
									}
								`}</style>
						</section>
				)}
				{(info.type === "ico" && info.classe === "is-spec") && (
						<section className={"c-grid__block is-red is-ico is-spec"}>
							<MenuBook fontSize={"inherit"} color={"inherit"}/>
							{/*language=css*/}
							<style jsx>{`
									.is-spec:before{
										display: block;
										color : #ffffff;
										position: absolute; 
										text-align: left;
										left : 5px;
										top : 5px;
										font-size: 12px;
										content : "${info.name} :";
									}
								`}</style>
						</section>
				)}

			</>)
}